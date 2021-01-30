import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Bg1 from './assets/bg2.jpg';
import Bg3 from './assets/bg3.jpg';

const App = () => {
	return (
		<>
			<Header title="This is title" descr="This is Description!"/>
			<Layout id="First layout" title="This is First Title" descr="First description" urlBg={Bg1} />
			<Layout id="Second layout" title="This is Second Title" descr="Second description" colorBg='green' />
			<Layout id="Third layout" title="This is Third Title" descr="Third description" urlBg={Bg3} />
			<Footer />
		</>
	);
}

export default App;
