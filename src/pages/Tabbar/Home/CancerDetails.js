import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {useSelector} from 'react-redux';

import CollapseHeader from '../../../components/CollapseHeader';
import CollapseDetails from '../../../components/CollapseDetails';
import Colors from '../../../Colors';

function upperCaseEachWord(str) {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

/**
 * @author Stanley George
 * @function CancerDetails
 **/
const CancerDetails = props => {
  const appState = useSelector(state => state.appStateSlice);
  console.log(appState);
  const [details, setDetails] = useState({name: 'Test detail'});
  const [treatments, setTreatments] = useState([]);
  const [treatmentCollapsed, setTreatmentCollapsed] = useState(false);
  const [causesPreventions, setCausesPreventions] = useState([]);
  const [causesPreventionsCollapsed, setCausesPreventionsCollapsed] =
    useState(false);
  const [screenings, setScreenings] = useState([]);
  const [screeningsCollapsed, setScreeningsCollapsed] = useState(false);

  const {container} = styles;

  useEffect(() => {
    setDetails(appState.cancerDetails);

    const treatmentsFromDetails = appState.cancerDetails?.treatments;
    const causesPreventionsFromDetails =
      appState.cancerDetails?.['causes & preventions'];
    const screeningsFromDetails = appState.cancerDetails?.screening;
    const treatmentList = [];
    if (treatmentsFromDetails) {
      treatmentsFromDetails.map((treatmentItem, _) => {
        let title = treatmentItem?.title ?? 'No Title';
        let url = treatmentItem?.url ?? '';
        if (title.length !== 0 && url.length !== 0) {
          treatmentList.push({
            title: upperCaseEachWord(title.trim()),
            url: url,
          });
        }
      });
    }
    setTreatments(treatmentList);

    const causesPreventionsList = [];
    if (causesPreventionsFromDetails) {
      causesPreventionsFromDetails.map((causesPreventionItem, _) => {
        let title = causesPreventionItem?.title ?? 'No Title';
        let url = causesPreventionItem?.url ?? '';
        if (title.length !== 0 && url.length !== 0) {
          causesPreventionsList.push({
            title: upperCaseEachWord(title.trim()),
            url: url,
          });
        }
      });
    }
    setCausesPreventions(causesPreventionsList);

    const screeningsList = [];
    if (screeningsFromDetails) {
      screeningsFromDetails.map((screeningItem, _) => {
        let title = screeningItem?.title ?? 'No Title';
        let url = screeningItem?.url ?? '';

        if (title.length !== 0 && url.length !== 0) {
          screeningsList.push({
            title: upperCaseEachWord(title.trim()),
            url: url,
          });
        }
      });
    }
    setScreenings(screeningsList);
  }, [appState.cancerDetails]);

  if (appState.isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="gray" />
        <Text>Loading Data...</Text>
      </View>
    );
  }

  const Treatments = () => {
    return (
      <>
        {treatments.map(treatment => {
          return (
            <View>
              <Text>a treatment</Text>
            </View>
          );
        })}
      </>
    );
  };

  const webOnPress = item => {
    const path = item.url.split('//')[1];
    const title = path.split('/')[0];
    props.navigation.navigate('WebDetails', {
      title: title.toUpperCase(),
      url: item.url,
    });
  };

  return (
    <ScrollView style={container}>
      {details && (
        <>
          <View style={styles.detailsContainer}>
            <Text style={styles.headerContainer}>Overview</Text>
          </View>
          <View style={styles.overViewContainer}>
            <Text style={styles.text}>{details.overview}</Text>
            <TouchableOpacity
              style={styles.webLinkContainer}
              onPress={() => {
                const path = details.source.split('//')[1];
                const title = path.split('/')[0];
                props.navigation.navigate('WebDetails', {
                  title: title.toUpperCase(),
                  url: details.source,
                });
              }}>
              <Text style={styles.webLinkText}>Learn More...</Text>
            </TouchableOpacity>
          </View>

          <CollapseHeader
            title="Treatments"
            collapsed={treatmentCollapsed}
            onPress={() => {
              setTreatmentCollapsed(!treatmentCollapsed);
            }}
          />

          <CollapseDetails
            items={treatments}
            collapsed={treatmentCollapsed}
            onPress={webOnPress}
          />

          <CollapseHeader
            title="Causes & Preventions"
            collapsed={causesPreventionsCollapsed}
            onPress={() => {
              setCausesPreventionsCollapsed(!causesPreventionsCollapsed);
            }}
          />

          <CollapseDetails
            items={causesPreventions}
            collapsed={causesPreventionsCollapsed}
            onPress={webOnPress}
          />

          <CollapseHeader
            title="Screenings"
            collapsed={screeningsCollapsed}
            onPress={() => {
              setScreeningsCollapsed(!screeningsCollapsed);
            }}
          />

          <CollapseDetails
            items={screenings}
            collapsed={screeningsCollapsed}
            onPress={webOnPress}
          />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  webLinkContainer: {marginTop: 10},
  webLinkText: {color: 'blue'},
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: 20,
    marginLeft: 20,
    width: 335,
    backgroundColor: Colors.ltBlue,
  },
  headerContainer: {
    marginLeft: 5,
    width: 300,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  overViewContainer: {
    marginLeft: 20,
    marginTop: 5,
    width: 330,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  text: {
    color: Colors.black,
  },
});

export default CancerDetails;
