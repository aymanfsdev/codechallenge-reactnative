import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';

import {
  getCancerTypes,
  getCancerDetails,
} from '../../../store/actions/appState';

import Card from '../../../components/Card';
import Colors from '../../../Colors';

/**
 * @author Stanley George
 * @function Home
 **/

const Home = props => {
  const dispatch = useDispatch();
  const appState = useSelector(state => state.appStateSlice);
  // console.log(appState);
  const {container} = styles;

  useEffect(() => {
    // const loadData = async () => {
    //   try {
    //     await dispatch(getCancerTypes());
    //   } catch {}
    // };
    // loadData();
    dispatch(getCancerTypes());
  }, [dispatch]);

  if (appState.isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="gray" />
        <Text>Loading Data...</Text>
      </View>
    );
  }

  if (!appState.isLoading && appState.cancerTypes.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text>Sorry, No Data Found...</Text>
      </View>
    );
  }

  return (
    <View style={container}>
      <Text style={styles.headerContainer}>Cancer Types</Text>
      <FlatList
        data={appState.cancerTypes}
        renderItem={({item}) => (
          <LineItem
            item={item}
            navigation={props.navigation}
            dispatch={dispatch}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const LineItem = ({item, navigation, dispatch}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          // Get Cancer Details
          dispatch(getCancerDetails(item.link));
          navigation.navigate('CancerDetails', {
            title: item.name,
          });
        }}>
        <Card style={styles.card}>
          <View style={styles.cardView}>
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>{item.name}</Text>
            </View>
            <View style={styles.center}>
              <Ionicons name="chevron-forward-outline" size={25} color="gray" />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: Colors.black,
  },
  card: {
    margin: 15,
    padding: 2,
    width: 250,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  center: {justifyContent: 'center'},
  cardTitle: {width: 200, padding: 10},
  cardTitleText: {fontSize: 18, fontWeight: 'bold', color: Colors.black},
});

export default Home;
