import React from 'react';
import './App.css';
import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';
import Greet2 from './components/Greet2';
import ParentComponent from './components/ParentComponent';
import Usergeeting from './components/Usergeeting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import PureComp from './components/PureComp';
import ParntComp from './components/ParntComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userCon';

function App() {
  return (
    <div className="App">
      <UserProvider value="Rope">
        <ComponentC />
      </UserProvider>

      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParntComp />
      <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <StyleSheet primary={true} />
      <NameList/> */}
      {/* <Usergeeting />
       <br/>
      <ParentComponent />
      <br/>
      <Greet />
      <Greet2 />
      <FunctionClick /> */}
    </div>
  );
}

export default App;
