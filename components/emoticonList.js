import { FontAwesome } from '@expo/vector-icons';
import {Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EmoticonList(){

    const [selectedEmoticon, setSelectedEmoticon] = useState(null);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginRight: 10 }}>How are you feeling today?</Text>
      <TouchableOpacity onPress={() => setSelectedEmoticon('sad2')}>
        <MaterialCommunityIcons
          name="emoticon-frown-outline"
          size={30}
          color={selectedEmoticon === 'sad2' ? 'lightgreen' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedEmoticon('sad1')}>
        <MaterialCommunityIcons
          name="emoticon-sad-outline"
          size={30}
          color={selectedEmoticon === 'sad1' ? 'lightgreen' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedEmoticon('neutral')}>
      <MaterialCommunityIcons
          name="emoticon-neutral-outline"
          size={30}
          color={selectedEmoticon === 'neutral' ? 'lightgreen' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedEmoticon('hap1')}>
      <MaterialCommunityIcons
          name="emoticon-happy-outline"
          size={30}
          color={selectedEmoticon === 'hap1' ? 'lightgreen' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedEmoticon('hap2')}>
        <MaterialCommunityIcons
          name="emoticon-excited-outline"
          size={30}
          color={selectedEmoticon === 'hap2' ? 'lightgreen' : 'gray'}
        />
      </TouchableOpacity>
    </View>
        
    );
}