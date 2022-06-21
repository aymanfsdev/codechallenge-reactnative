const Configuration = {
  defaultPlatform: 'Production',
  servers: {production: {serverIP: 'http://localhost:8888'}},

  cancerInfoEndPoints: {
    cancerTypes: '/cancer_types',
    copingCancer: '/coping_with_cancer',
  },
  apikey: '112233',
  versionString: 'Version 0.0.1',
};

export default Configuration;
