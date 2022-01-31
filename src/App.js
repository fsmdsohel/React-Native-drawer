import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const handleMenuBtn = () => {
    // Do Actions Here....
    // Scaling the view...
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      // YOur Random Value...
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      // YOur Random Value...
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.profileImage}
          source={require('../assets/profile.png')}
        />
        <Text style={styles.profileTitle}>Jenna Ezarik</Text>
        <TouchableOpacity>
          <Text style={styles.viewProfile}>View Profile</Text>
        </TouchableOpacity>
        <View style={{flexGrow: 1, marginTop: 50}}>
          {
            // Tab Bar Buttons.....
          }
          {TabButton(
            currentTab,
            setCurrentTab,
            'Home',
            require('../assets/home.png'),
            handleMenuBtn,
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            'Search',
            require('../assets/search.png'),
            handleMenuBtn,
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            'Notifications',
            require('../assets/bell.png'),
            handleMenuBtn,
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            'Setting',
            require('../assets/settings.png'),
            handleMenuBtn,
          )}
        </View>
        <View>
          {TabButton(
            currentTab,
            setCurrentTab,
            'LogOut',
            require('../assets/logout.png'),
          )}
        </View>
      </View>
      {
        // Overlay View...
      }
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <TouchableOpacity
            onPress={() => {
              handleMenuBtn();
            }}>
            <Image
              style={styles.menuIcon}
              source={
                showMenu
                  ? require('../assets/close.png')
                  : require('../assets/menu.png')
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20,
            }}>
            {currentTab}
          </Text>
          <Image
            style={{
              width: '100%',
              height: 300,
              borderRadius: 15,
              marginTop: 20,
            }}
            source={require('../assets/photo.jpg')}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 15,
              paddingBottom: 8,
            }}>
            Jenna Ezarik
          </Text>
          <Text>Techie, YouTuber, PS Lover, Apple Sheep's Sister</Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// for multipale buttons....

const TabButton = (currentTab, setCurrentTab, title, image, handleMenuBtn) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        if (title == 'LogOut') {
          // do you stuff
        } else {
          setCurrentTab(title);
          handleMenuBtn();
        }
      }}>
      <View
        style={[
          {backgroundColor: currentTab == title ? 'white' : 'transparent'},
          styles.tabBar,
        ]}>
        <Image
          style={[
            {
              tintColor: currentTab == title ? '#5359D1' : 'white',
            },
            styles.tabBarImage,
          ]}
          source={image}
        />
        <Text
          style={[
            {color: currentTab == title ? '#5359D1' : 'white'},
            styles.tabBarText,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  wrapper: {
    justifyContent: 'flex-start',
    padding: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  viewProfile: {
    marginTop: 6,
    color: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 14,
    paddingRight: 35,
    borderRadius: 8,
    marginTop: 15,
  },
  tabBarImage: {
    width: 25,
    height: 25,
  },
  tabBarText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  overlayContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: 'black',
    marginTop: 20,
  },
});
