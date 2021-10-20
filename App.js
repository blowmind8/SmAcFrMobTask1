/* eslint-disable no-unused-vars */

import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#2B2146',
        paddingTop: '10%',
        flex: 1,
      }}>
      <View style={{flexDirection: 'row', flex: 3, marginBottom: 10}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: undefined,
              width: '40%',
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
            source={require('./img/Vector2.png')}
          />
        </View>
        <View
          style={{
            paddingTop: 15,
            flexDirection: 'column',
            flex: 5,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={require('./img/Ellipse7.png')}
            style={{
              height: undefined,
              width: '50%',
              aspectRatio: 1,
              resizeMode: 'contain',
              marginBottom: 15,
            }}
          />
          <Text style={{color: 'white', fontSize: 20, marginBottom: 5}}>
            Kat Williams
          </Text>
          <Text style={{color: '#8672BB', fontSize: 15, marginBottom: 25}}>
            @Williams
          </Text>
          <Text style={{color: '#8672BB', fontSize: 15, marginBottom: 10}}>
            Россия, Санкт-Петербург
          </Text>
          <Text style={{color: 'white', fontSize: 15, paddingBottom: 20}}>
            Место работы: Artist by Passion!
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: undefined,
              width: '40%',
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
            source={require('./img/Vector.png')}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 20,
          paddingHorizontal: 10,
          paddingBottom: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#3B2D5F',
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: 'white', fontSize: 15, marginBottom: 5}}>
            2,647
          </Text>
          <Text style={{color: '#8672BB', fontSize: 15}}>Followers</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: 'white', fontSize: 15, marginBottom: 5}}>
            1,589
          </Text>
          <Text style={{color: '#8672BB', fontSize: 15}}>Followers</Text>
        </View>
        <View style={{flex: 2}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              borderWidth: 1,
              padding: 12,
              borderColor: '#3B2D5F',
              borderRadius: 30,
            }}>
            <Text style={{color: 'white', paddingHorizontal: 20}}>
              Подробнее
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingTop: 30,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
          <Text style={{color: 'white', fontSize: 15}}>Фотографии </Text>
          <Text style={{color: '#8672BB', fontSize: 15}}> 245</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginBottom: 100,
        }}>
        <GalleryImage path={require('./img/Rectangle321.png')} />
        <GalleryImage path={require('./img/Rectangle322.png')} />
        <GalleryImage path={require('./img/Rectangle323.png')} />
        <GalleryImage path={require('./img/Rectangle324.png')} />
        <GalleryImage path={require('./img/Rectangle325.png')} />
        <GalleryImage path={require('./img/Rectangle326.png')} />
        <GalleryImage path={require('./img/Rectangle327.png')} />
        <GalleryImage path={require('./img/Rectangle328.png')} />
        <GalleryImage path={require('./img/Rectangle329.png')} />
        <GalleryImage path={require('./img/Rectangle321.png')} />
        <GalleryImage path={require('./img/Rectangle322.png')} />
        <GalleryImage path={require('./img/Rectangle323.png')} />
      </View>
    </ScrollView>
  );
};

export default App;
const GalleryImage = props => {
  return (
    <Image
      source={props.path}
      style={{
        width: '33%',
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom: 3,
      }}
    />
  );
};
/*<GalleryImage path={require('./img/Rectangle323.png')}/>
        <GalleryImage path={`require('./img/Rectangle324.png')`} />*/
