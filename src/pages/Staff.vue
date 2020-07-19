<template>
  <Layout>
    <h1>Staff</h1>
    <StaffCard
      img="/staff/sakura.png"
      name="Sakura Minamoto"
      title="1号"
      blurb="Although she was the first to awaken, she can't remember anything from when she was alive."
    />
    <StaffCard
      img="/staff/saki.png"
      name="Saki Nikaido"
      title="伝説の特攻隊長"
      blurb="She befriends anyone who has the guts to risk their life for glory."
    />
    <StaffCard
      img="/staff/ai.png"
      name="Ai Mizuno"
      title="伝説の平成アイドル"
      blurb="Determined and down-to-earth, she plays the straight man whenever Kotaro goes off the deep end."
    />
    <StaffCard
      img="/staff/junko.png"
      name="Junko Konno"
      title="伝説の昭和アイドル"
      blurb="She holds a strong, yet conservative conviction in what it means to be an idol."
    />
    <StaffCard
      img="/staff/yuugiri.png"
      name="Yuugiri"
      title="伝説の花魁"
      blurb="Although resurrected 150 years after her death, she accepts the changes of the world like a fish swims along the river's currents."
    />
    <StaffCard
      img="/staff/lily.png"
      name="Lily Hoshikawa"
      title="伝説の天才子役"
      blurb="Despite, or perhaps because she died to a cardiac arrest, she possesses the biggest heart out of all Franchouchou members."
    />
    <StaffCard
      img="/staff/yamada_tae.png"
      name="Tae Yamada"
      title="伝説の山田たえ"
      blurb="私たち、生きたい。"
    />
  </Layout>
</template>

<script>
import StaffCard from '~/components/StaffCard.vue'

export default {
  metaInfo: {
    title: 'Staff'
  },
  components: {
    StaffCard
  }
}
</script>

<style>

</style>
