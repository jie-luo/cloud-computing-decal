<template>
  <Layout>
    <h1>Staff</h1>
    <StaffCard
      v-for="person in staff"
      :key="person.id"
      :img="person.img"
      :name="person.name"
      :title="person.title"
      :blurb="person.blurb"
    />
  </Layout>
</template>

<script>
import StaffCard from '~/components/StaffCard.vue'

export default {
  metaInfo: {
    title: 'Staff Page'
  },
  components: {
    StaffCard
  },
  data: function () {
    return {
      staff: [
        { 
          id: 0,
          img: "sakura.png",
          name: "Sakura Minamoto",
          title: "1号",
          blurb: "Although she was the first to awaken, she can't remember anything from when she was alive."
        },
        {
          id: 1,
          img: "saki.png",
          name: "Saki Nikaido",
          title: "伝説の特攻隊長",
          blurb: "She befriends anyone who has the guts to risk their life for glory.",
        },
        {
          id: 2,
          img: "ai.png",
          name: "Ai Mizuno",
          title: "伝説の平成アイドル",
          blurb: "Determined and down-to-earth, she plays the straight man whenever Kotaro goes off the deep end.",
        },
        {
          id: 3,
          img: "junko.png",
          name: "Junko Konno",
          title: "伝説の昭和アイドル",
          blurb: "She holds a strong, yet conservative conviction in what it means to be an idol.",
        },
        {
          id: 4,
          img: "yuugiri.png",
          name: "Yuugiri",
          title: "伝説の花魁",
          blurb: "Although resurrected 150 years after her death, she accepts the changes of the world like a fish swims along the river's currents.",
        },
        {
          id: 5,
          img: "lily.png",
          name: "Lily Hoshikawa",
          title: "伝説の天才子役",
          blurb: "Despite, or perhaps because she died to a cardiac arrest, she possesses the biggest heart out of all Franchouchou members.",
        },
        {
          id: 6,
          img: "yamada_tae.png",
          name: "Tae Yamada",
          title: "伝説の山田たえ",
          blurb: "私たち、生きたい。",
        },
      ],
    }
  },
}
</script>

<style>

</style>
