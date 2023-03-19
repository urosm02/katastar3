import { FontAwesome } from '@expo/vector-icons';
import {Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';


export default function EmoticonList(){

    const [selectedEmoticon, setSelectedEmoticon] = useState(null);

    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom:60 }}>
      <Text style={globalStyles.bigText}>How are you feeling today?</Text>
      <View style={{ flexDirection: 'row', marginTop:10}}>
      <TouchableOpacity onPress={() => setSelectedEmoticon('sad2')}>
        <MaterialCommunityIcons
          name="emoticon-frown-outline"
          size={30}
          color={selectedEmoticon === 'sad2' ? '#336633' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedEmoticon('sad1')}>
        <MaterialCommunityIcons
          name="emoticon-sad-outline"
          size={30}
          color={selectedEmoticon === 'sad1' ? '#336633' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedEmoticon('neutral')}>
      <MaterialCommunityIcons
          name="emoticon-neutral-outline"
          size={30}
          color={selectedEmoticon === 'neutral' ? '#336633' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedEmoticon('hap1')}>
      <MaterialCommunityIcons
          name="emoticon-happy-outline"
          size={30}
          color={selectedEmoticon === 'hap1' ? '#336633' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedEmoticon('hap2')}>
        <MaterialCommunityIcons
          name="emoticon-excited-outline"
          size={30}
          color={selectedEmoticon === 'hap2' ? '#336633' : 'gray'}
        />
      </TouchableOpacity>

      </View>
    </View>
        
    );
}