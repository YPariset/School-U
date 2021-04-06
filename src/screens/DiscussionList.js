import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
// npm install --save react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

<ListItem
  Component={TouchableScale}
  friction={90} //
  tension={100} // These props are passed to the parent component (here TouchableScale)
  activeScale={0.95} //
  linearGradientProps={{
    colors: ['#FF9800', '#F44336'],
    start: [1, 0],
    end: [0.2, 0],
  }}
  ViewComponent={LinearGradient} // Only if no expo
  leftAvatar={{ rounded: true, source: { uri: avatar_url } }}
  title="Chris Jackson"
  titleStyle={{ color: 'white', fontWeight: 'bold' }}
  subtitleStyle={{ color: 'white' }}
  subtitle="Vice Chairman"
  chevron={{ color: 'white' }}
/>;