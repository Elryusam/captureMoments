

// Configura la configuración de tu proyecto de Firebase
var firebaseConfig = {
  apiKey: "TkdJ3IMCfK2QeRK4shPWhkqqzgBBpMqcXERBXhhG16SIXDp4tmvWMgjCxAEMIAhVadl5HHoy9JB825irzfE",
  authDomain: "project-737095540264.firebaseapp.com",
  projectId: "capturemoments-997b0",
  storageBucket: "project-737095540264.appspot.com",
  appId: "737095540264"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Accede a la instancia de Cloud Firestore
var db = firebase.firestore();