var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: 'sgas.particles-managed-os.442294194136.us-east-1'
      },
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'us-east-2',
        bucket: 'sgas.particles-managed-os.442294194136.us-east-2'
      },
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'us-west-1',
        bucket: 'sgas.particles-managed-os.442294194136.us-west-1'
      },
      clean: true,
      validate: true,
      create: true
    },
    {
      aws: {
        region: 'us-west-2',
        bucket: 'sgas.particles-managed-os.442294194136.us-west-2'
      },
      clean: true,
      validate: true,
      create: true
    }
  ],
  dist: 'dist'
};

module.exports = config;
