exports.config = {
    //framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['spec.js','spec2.js'],
    specs: ['spec3.js'],
    multiCapabilities:[{
      browserName:'firefox'
    },
  {
    browserName:'chrome'
  }]
  };