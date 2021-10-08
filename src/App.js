//npm install react-router-dom
//npm install react-redux
//npm install redux
//npm install redux-devtools-extension
//chrome eklenti olarak 'redux devtools' kurulmalı
//npm install react-toastify
//npm install formik
//npm install yup
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css';


function App() {
    return (
        <div className="App">
            <Navi/>
            <Container className="main">
                <Dashboard />
            </Container>



        </div>
    )
}