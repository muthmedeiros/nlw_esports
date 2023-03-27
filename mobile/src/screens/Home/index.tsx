import { Image, View, FlatList, ScrollView } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GAMES } from "../../utils/games";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

export function Home() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Econtre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </ScrollView>
  );
}
