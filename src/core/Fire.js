import { FIREBASE_CONFIG } from '../core/config'
import firebase from "firebase";
import 'firebase/firestore';

class Fire {
    constructor() {
        firebase.initializeApp(FIREBASE_CONFIG);
    }


    addMotCarnet = async ({ content }) => {

        return new Promise((res, rej) => {
            this.firestore
                .collection("carnet")
                .add({
                    uid:this.uid,
                    content,
                    timestamp: this.timestamp,
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    
    addPost =async({text,localUri})=>{
        const remoteUri=await this.uploadPhotoAsync(localUri,`photos/${this.uid}/${Date.now()}`)
        return new Promise((res,rej)=>{
            this.firestore.collection('posts').add({
                text,
                uid:this.uid,
                timestamp:this.timestamp,
                image:remoteUri
            })
            .then(ref=>{
                res(ref)
            })
            .catch(error=>{
                rej(error)
            })
            
        })
    }

    uploadPhotoAsync = async uri => {
        const path = `photos/${this.uid}/${Date.now()}.jpg`;

        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(path)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };

    createUser = async user => {
        let remoteUri = null;

        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

            let db = this.firestore.collection("users").doc(this.uid);

            db.set({
                name: user.name,
                email: user.email,
                avatar: null,
                role: user.role
            });

            if (user.avatar) {
                remoteUri = await this.uploadPhotoAsync(user.avatar, `avatars/${this.uid}`);

                db.set({ avatar: remoteUri }, { merge: true });
            }
        } catch (error) {
            alert("Error: ", error);
        }
    };

    signOut = () => {
        firebase.auth().signOut();
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }


    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;
export const db = firebase.firestore();
