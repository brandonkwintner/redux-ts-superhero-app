import { useSelector } from "react-redux";
import Superhero from "./components/Superhero";
import { RootStore } from "./reducers";
import './App.css';
import { 
	Grid,
	Typography,
	useMediaQuery 
} from '@material-ui/core';
import { 
	makeStyles,
	useTheme
} from "@material-ui/core/styles";
import PageWrapper from "./components/PageWrapper";
import TitleText from "./components/TitleText";
import Break from './components/Break';
import LargeButton from "./components/LargeButton";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'

// import Swiper core and required modules
import SwiperCore, {
	Autoplay,Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);



const App = () => {

	const classes = useStyles();
	const theme = useTheme();
	const small = useMediaQuery(theme.breakpoints.down('xs'));
	const superheroes = useSelector((state: RootStore) => state.superhero);

	return (
		<PageWrapper>
			<Grid
				item
				xs={12}
			>
				<TitleText />
				<Break />
				
				<br/>

				<LargeButton />		

				<br/>

				<Swiper
					spaceBetween={30}
					slidesPerView={small ? 1 : 3}
					loop={true}
					autoplay={{
						"delay": 5000,
						"disableOnInteraction": false
					}} 
				>
					{superheroes.superhero.map((curr) => (
						<SwiperSlide>
							<Superhero
								id={curr.id}
								name={curr.name}
								biography={curr.biography}
								image={curr.image}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</Grid>
			<Grid
				item
				xs={12}
			>
				Source: 
				<a 
					href="https://www.superheroapi.com/" 
					target="_blank"
					rel="noreferrer"
				>
					https://www.superheroapi.com/
				</a>
			</Grid>
		</PageWrapper>
	);
}

const useStyles = makeStyles(theme => ({
	
}))

export default App;
