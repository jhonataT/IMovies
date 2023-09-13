import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import axios from "axios";
import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { styles } from "./styles";
import { CustomModal } from "../../components/Modal";

const apiUrl = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON";

const loadDataMovies = async (setMovieList) => {
  const response = await axios.get(apiUrl);

  if(response && response.data) {
    let responseGenres = [];

    response.data.map(movie => {
      const genres = movie['Genre'] ? movie['Genre'].split(', ') : [];
      responseGenres = [...new Set([...responseGenres, ...genres])];
    });

    setMovieList(responseGenres.map(genre => {
      const moviesByGenres = response.data.filter(movie => 
        movie['Genre'].includes(genre)
      );

      return { genre, movies: moviesByGenres };
    }));
  }
}

export const HomeScreen = () => {
  const [movieList, setMovieList] = useState([]);
  const [showMovieResume, setShowMovieResume] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    loadDataMovies(setMovieList);
  }, []);

  const getRandomMovieImage = (images = []) => {
    const imageIndex = Math.floor(Math.random() * ((images.length-1) - 0 + 1) + 0); 
    
    return images[imageIndex];
  }

  const handleClickBanner = (movieTitle) => {
    const newSelectedMovie = movieList.map(item => {
      return item.movies.find(item => item.Title === movieTitle);
    }).filter(row => row)[0];

    setSelectedMovie(newSelectedMovie);
    setShowMovieResume(movieTitle);
  }

  const handleCloseModal = () => setShowMovieResume(false);

  return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    {movieList && movieList.map(item => (
        <View style={styles.content}>
          <Header title={item.genre}/>
          <FlatList
            style={styles.list}
            data={item.movies}
            keyExtractor={row => `${item} - ${row?.Title}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
              <MovieCard 
                title={item.Title}
                img={getRandomMovieImage(item.Images)}
                score={parseInt(item.Metascore)}
                handleClick={() => handleClickBanner(item.Title)}
              />
            }
          />
        </View>
      ))
    }
    <CustomModal
      handleCloseModal={handleCloseModal}
      isModalOpen={showMovieResume !== false}
    >
      <View style={styles.movieDetails}>
        <Text style={styles.movieTitle}>{selectedMovie.Title}</Text>
        <Text style={{...styles.movieRuntime, marginTop: 16}}>Runtime: {selectedMovie.Runtime}</Text>
        <Text style={styles.movieRuntime}>Released: {selectedMovie.Released}</Text>
        <Text style={styles.movieRuntime}>Awards: {selectedMovie.Awards}</Text>
        <Text style={styles.moviePlot}>{selectedMovie.Plot}</Text>
      </View>
    </CustomModal>
  </ScrollView>
}