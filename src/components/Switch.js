import React from 'react'
import { StyleSheet } from 'react-native'
import { Switch } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
    
const [isSwitchOn, setIsSwitchOn] = React.useState(false);
const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#E46472"/>;
};


const styles = StyleSheet.create({
  
})