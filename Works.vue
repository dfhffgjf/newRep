<template>
  <div class="bg"></div>
  <div class="block">
    <div class="block-content">
      <div class="content-menu">
        <div class="menu-choise">
          <ul class="menu-list">
            <li @click="choiseWork(1)" class="menu-item" :class="{active: webCarpenter}">Плотник</li>
            <li @click="choiseWork(2)" class="menu-item" :class="{active: webWelder}">Сварщик</li>
            <li @click="choiseWork(3)" class="menu-item" :class="{active: webHammer}">Молотобойщик</li>
          </ul>
        </div>
        <div class="menu-points">
          <p>Очки: {{userPoints}} / {{allPoints}}</p>
        </div>
      </div>
      <div class="content-info">
        <div class="info-work сarpenter" v-if="webCarpenter">
            <div class="work-discr">
              <div class="discr-title">
                <h1>Плотник</h1>
              </div>
              <div class="discr-text">
                <p>
                  На данной работе вам предстоит
                  молотком забивать гвозди
                  в ламинированные фанеры.
                </p>
              </div>
              <div class="discr-lvl">
                <p>Доступно с 1 уровня</p>
              </div>
              <div class="discr-btn">
                <button>Начать работу</button>
              </div>
            </div>
            <div class="window-exit">
              <button @click="webClose">Закончить</button>
            </div>
        </div>
        <div class="info-work welder" v-if="webWelder">
          <div class="work-discr">
            <div class="discr-title">
              <h1>Сварщик</h1>
            </div>
            <div class="discr-text">
              <p>
                На данной работе вам предстоит
                сварочным аппаратом варить
                металлоконструкции.
              </p>
            </div>
            <div class="discr-lvl">
              <p>Доступно по достижению 100 очков.</p>
            </div>
            <div class="discr-btn">
              <button>Начать работу</button>
            </div>
          </div>
          <div class="window-exit">
            <button @click="webClose">Закончить</button>
          </div>
        </div>
        <div class="info-work hammer" v-if="webHammer">
          <div class="work-discr">
            <div class="discr-title">
              <h1>Молотобойщик</h1>
            </div>
            <div class="discr-text">
              <p>
                На данной работе вам предстоит работа с
                отбойным молотком.
              </p>
            </div>
            <div class="discr-lvl">
              <p>Доступно по достижению 200 очков</p>
            </div>
            <div class="discr-btn">
              <button>Начать работу</button>
            </div>
          </div>
          <div class="window-exit">
            <button @click="webClose">Закончить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Works",
  data() {
    return {
      webCarpenter: true,
      webWelder: false,
      webHammer: false,
      userPoints: 150,
      allPoints: 300
    }
  },
  methods: {
    choiseWork(numWork) {
      if(numWork == 1) {
        this.webCarpenter = true
        this.webWelder = false
        this.webHammer = false
      } else if(numWork == 2) {
        this.webCarpenter = false
        this.webWelder = true
        this.webHammer = false
      } else {
        this.webCarpenter = false
        this.webWelder = false
        this.webHammer = true
      }
    },
    startWork(userPoints) {
      this.userPoints = userPoints
    },
    webClose() {
      window.mp.trigger('webClose')
    }
  }
}
</script>

<style src="./assets/css/workStyle.css" scoped>



</style>