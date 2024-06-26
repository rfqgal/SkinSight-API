const tf = require('@tensorflow/tfjs-node');

const loadModel = async () => tf.loadLayersModel(process.env.MODEL_URL);

module.exports = loadModel;
