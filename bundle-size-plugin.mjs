class BundleSizePlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'BundleSizePlugin',
      (compilation, callback) => {
        let assetSizeLimit = 400 * 1024;
        let assetsOverLimit = [];

        for (let assetName in compilation.assets) {
          let assetSize = compilation.assets[assetName].size();
          if (assetSize > assetSizeLimit) {
            assetsOverLimit.push({
              name: assetName,
              size: assetSize,
            });
          }
        }

        if (assetsOverLimit.length > 0) {
          console.error('Bundle size limit exceeded:');
          assetsOverLimit.forEach((asset) => {
            console.error(
              `- ${asset.name}: ${(asset.size / 1024).toFixed(2)} KB`,
            );
          });
          throw new Error('Build failed due to bundle size limit.');
        }

        callback();
      },
    );
  }
}

export default BundleSizePlugin;
