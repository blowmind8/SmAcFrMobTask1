/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

//importing custom font from IcoMoon
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import icoMoonConfig from './selection.json';
const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

const App = () => {
  const [modalDetailsVisible, setmodalDetailsVisible] = useState(false);

  const [modalShareVisible, setmodalShareVisible] = useState(false);

  return (
    <ScrollView
      style={{
        backgroundColor: '#2B2146',
        paddingTop: '10%',
        flex: 1,
      }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDetailsVisible}
        onRequestClose={() => {
          setmodalDetailsVisible(!modalDetailsVisible);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column-reverse',
            }}>
            <View
              style={{
                backgroundColor: '#2B2146',
                paddingTop: 20,
                paddingHorizontal: 20,
                flexDirection: 'column',
                borderBottomWidth: 1,
                borderColor: '#3B2D5F',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 20,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'HKGrotesk-Bold',
                  }}>
                  Контакты
                </Text>
              </View>
              <ProfileMoreDetailsItem
                iconName="Arrow"
                text={'http://t.me/durov'}
              />
              <ProfileMoreDetailsItem iconName="twitter-1" text={'Durov'} />
              <ProfileMoreDetailsItem
                iconName="instagram-1"
                text={'Pavel Durov'}
              />
              <ProfileMoreDetailsItem iconName="facebook-1" text={'durov'} />
              <ProfileMoreDetailsItem iconName="telegram-1" text={'durov'} />
            </View>
            <View
              style={{
                backgroundColor: '#2B2146',
                paddingTop: 20,
                paddingHorizontal: 20,
                flexDirection: 'column',
                borderBottomWidth: 1,
                borderColor: '#3B2D5F',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 20,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'HKGrotesk-Bold',
                  }}>
                  Подробнее
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => setmodalDetailsVisible(!modalDetailsVisible)}
                  style={{padding: 40}}>
                  <CustomIcon
                    size={25}
                    color="white"
                    style={{color: '#8672BB'}}
                    name={'backspace'}
                  />
                </TouchableWithoutFeedback>
              </View>
              <ProfileMoreDetailsItem
                iconName="chat"
                text={
                  'They never ask people to do things they wouldn’t do themselves.'
                }
              />
              <ProfileMoreDetailsItem
                iconName="cake"
                text={'День рождения: 08 октября 1992'}
              />
              <ProfileMoreDetailsItem
                iconName="location-marker"
                text={'Город: Санкт-Петербург'}
              />
              <ProfileMoreDetailsItem
                iconName="briefcase"
                text={'ВГУЮ в г. Санкт-Петербург'}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalShareVisible}
        onRequestClose={() => {
          setmodalShareVisible(!modalShareVisible);
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column-reverse',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              padding: 20,
              backgroundColor: '#2B2146',
              marginTop: 10,
              justifyContent: 'center',
              flexDirection: 'row',
              borderRadius: 20,
            }}>
            <TouchableWithoutFeedback
              onPress={() => setmodalShareVisible(!modalShareVisible)}
              style={{padding: 40}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  width: '100%',
                  height: '100%',
                  textAlign: 'center',
                  fontFamily: 'HKGrotesk-Bold',
                }}>
                Отмена
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              backgroundColor: '#2B2146',
              paddingTop: 20,
              paddingHorizontal: 20,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#3B2D5F',
            }}>
            <View style={{flexDirection: 'row'}}>
              <BiggerIcon name="document-duplicate" />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'HKGrotesk-Bold',
                  width: '80%',
                }}>
                Скопировать ссылку
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 20,
              }}></View>
          </View>
          <View
            style={{
              backgroundColor: '#2B2146',
              paddingTop: 20,
              paddingHorizontal: 20,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#3B2D5F',
            }}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <BiggerIcon name="share" />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'HKGrotesk-Bold',
                  width: '80%',
                }}>
                Поделиться
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          marginBottom: 10,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <CustomIcon size={30} color="white" style={{}} name={'Arrow-Left'} />
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
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginBottom: 5,
              fontFamily: 'HKGrotesk',
              fontStyle: 'normal',
              fontWeight: '700',
            }}>
            Kat Williams
          </Text>
          <Text style={{color: '#8672BB', fontSize: 15, marginBottom: 25}}>
            @Williams
          </Text>
          <Text style={{color: '#8672BB', fontSize: 15, marginBottom: 10}}>
            Россия, Санкт-Петербург
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              paddingBottom: 20,
            }}>
            Место работы: Artist by Passion!
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback
            style={{padding: 80}}
            onPress={() => setmodalShareVisible(true)}>
            <Image
              style={{
                height: undefined,
                width: '40%',
                aspectRatio: 1,
                resizeMode: 'contain',
              }}
              source={require('./img/ShareIcon.png')}
            />
          </TouchableWithoutFeedback>
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
            onPress={() => setmodalDetailsVisible(true)}
            style={{
              alignItems: 'center',
              borderWidth: 1,
              padding: 12,
              borderColor: '#3B2D5F',
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 20,
                fontFamily: 'HKGrotesk-Bold',
              }}>
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

const Icon = props => {
  return (
    <CustomIcon
      size={25}
      color="white"
      style={{
        marginRight: 15,
      }}
      name={props.name}
    />
  );
};

const BiggerIcon = props => {
  return (
    <CustomIcon
      size={30}
      color="white"
      style={{
        marginRight: 15,
      }}
      name={props.name}
    />
  );
};

const ProfileMoreDetailsItem = props => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 15}}>
      <Icon name={props.iconName} />
      <Text
        style={{
          color: '#C3B8E0',
          fontSize: 15,
          width: '80%',
        }}>
        {props.text}
      </Text>
    </View>
  );
};
