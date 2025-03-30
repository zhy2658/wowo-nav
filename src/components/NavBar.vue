<template>
  <div class="navbar">
    <div class="navbar-content">
      <h1 class="logo">Logo</h1>
      <input type="checkbox" name="check" id="check" />
      <nav class="menu">
        <h1 class="menu-logo">Logo</h1>
        <div class="divider"></div>
        <a v-for="item in menu">
          <router-link :to="item.path">{{ item.label }}</router-link>
        </a>
      </nav>
      <div class="user-form-group">
        <a class="login">
          <el-button @click="() => toggleDark()" class="shift-btn" circle>
            <el-icon>
              <i v-if="isDark" class="sunny">
                <svg t="1743344829487" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2794" width="200" height="200">
                  <path
                    d="M512.000213 733.353497c-122.06857 0-221.353283-99.284713-221.353283-221.353284S389.931643 290.64693 512.000213 290.64693 733.353497 389.931643 733.353497 512.000213 634.026117 733.353497 512.000213 733.353497z m0-357.373767A136.148482 136.148482 0 0 0 375.97973 512.000213 136.148482 136.148482 0 0 0 512.000213 648.020697 136.148482 136.148482 0 0 0 648.020697 512.000213 136.148482 136.148482 0 0 0 512.000213 375.97973zM554.666613 171.735673A42.154403 42.154403 0 0 1 512.000213 213.335413c-23.551853 0-42.6664-18.645217-42.6664-41.59974V41.603153A42.154403 42.154403 0 0 1 512.000213 0.003413c23.551853 0 42.6664 18.645217 42.6664 41.59974v130.13252zM554.666613 982.397273A42.154403 42.154403 0 0 1 512.000213 1023.997013c-23.594519 0-42.6664-18.687883-42.6664-41.59974v-130.175186A42.111737 42.111737 0 0 1 512.000213 810.665013c23.551853 0 42.6664 18.60255 42.6664 41.59974v130.13252zM171.735673 469.333813c22.954523 0 41.59974 19.114547 41.59974 42.6664 0 23.594519-18.645217 42.6664-41.59974 42.6664H41.603153A42.154403 42.154403 0 0 1 0.003413 512.000213c0-23.551853 18.645217-42.6664 41.59974-42.6664h130.13252zM982.397273 469.333813c22.954523 0 41.59974 19.114547 41.59974 42.6664 0 23.594519-18.687883 42.6664-41.59974 42.6664h-130.175186A42.111737 42.111737 0 0 1 810.665013 512.000213c0-23.551853 18.60255-42.6664 41.59974-42.6664h130.13252zM241.239239 722.430898a42.06907 42.06907 0 0 1 59.562294 0.767995 42.111737 42.111737 0 0 1 0.767996 59.562295l-92.031425 92.074091a42.154403 42.154403 0 0 1-59.562295-0.853328 42.154403 42.154403 0 0 1-0.767995-59.562294l92.031425-91.988759zM814.462323 149.207814a42.154403 42.154403 0 0 1 59.562294 0.767995 42.154403 42.154403 0 0 1 0.767996 59.562295l-92.031425 92.031425a42.06907 42.06907 0 0 1-59.562295-0.767996 42.111737 42.111737 0 0 1-0.810661-59.562294l92.074091-92.031425zM241.239239 301.526862a42.19707 42.19707 0 0 0 59.604961-0.725329 42.111737 42.111737 0 0 0 0.767995-59.562294L209.538104 149.122481a42.154403 42.154403 0 0 0-59.562295 0.853328 42.111737 42.111737 0 0 0-0.767995 59.562295l92.031425 91.988758zM814.462323 874.792613a42.111737 42.111737 0 0 0 59.562294-0.810662 42.154403 42.154403 0 0 0 0.767996-59.562294l-92.031425-92.031425a42.06907 42.06907 0 0 0-59.562295 0.767995 42.111737 42.111737 0 0 0-0.810661 59.562294l92.074091 92.074092z"
                    fill="#5B5B5B"
                    p-id="2795"></path>
                </svg>
              </i>
              <i v-else class="moon"
                ><svg t="1743344963554" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5738" width="200" height="200">
                  <path
                    d="M1006.515504 663.197643a29.523314 29.523314 0 0 0-21.284249-13.388479 31.926374 31.926374 0 0 0-10.642125 0 453.49183 453.49183 0 0 1-167.870935 14.075068 455.89489 455.89489 0 0 1-231.723683-93.032767l-34.329434 36.732494A506.015865 506.015865 0 0 0 803.285252 715.035089a518.374461 518.374461 0 0 0 141.43727-5.149415 464.133955 464.133955 0 0 1-463.104072 259.530525 471.343136 471.343136 0 0 1-123.585964-903.550716 541.375182 541.375182 0 0 0-14.761657 77.927816 523.180582 523.180582 0 0 0 122.212787 393.41532l38.792261-34.329435a465.850426 465.850426 0 0 1-110.540779-354.279764 480.612083 480.612083 0 0 1 24.717193-108.137719v-1.716471a28.836725 28.836725 0 0 0-2.746355-25.060488 27.463548 27.463548 0 0 0-20.254366-13.045185 25.403782 25.403782 0 0 0-11.328714 0h-5.149415a522.837288 522.837288 0 0 0 95.779123 1017.524439 514.941518 514.941518 0 0 0 531.419646-327.502805v-4.462827a27.806842 27.806842 0 0 0 0.343294-23.000721z"
                    p-id="5739"></path>
                </svg>
              </i>
            </el-icon>
          </el-button>
        </a>
        <a class="signup">登录</a>
        <label for="check" class="btn-group">
          <i class="show-btn">
            <i>
              <svg t="1743345112078" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8469" width="200" height="200">
                <path d="M992 160H32a32 32 0 0 1 0-64h960a32 32 0 0 1 0 64zM992 544H32a32 32 0 0 1 0-64h960a32 32 0 0 1 0 64zM992 928H32a32 32 0 0 1 0-64h960a32 32 0 0 1 0 64z" p-id="8470"></path>
              </svg>
            </i>
          </i>
          <i class="close-btn">
            <i>
              <svg t="1743345128858" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9437" width="200" height="200">
                <path
                  d="M587.19 506.246l397.116-397.263a52.029 52.029 0 0 0 0-73.143l-2.194-2.194a51.98 51.98 0 0 0-73.143 0l-397.068 397.8-397.068-397.8a51.98 51.98 0 0 0-73.143 0l-2.146 2.194a51.054 51.054 0 0 0 0 73.143l397.069 397.263L39.544 903.461a52.029 52.029 0 0 0 0 73.142l2.146 2.195a51.98 51.98 0 0 0 73.143 0L511.9 581.583l397.068 397.215a51.98 51.98 0 0 0 73.143 0l2.194-2.146a52.029 52.029 0 0 0 0-73.143L587.19 506.246z"
                  p-id="9438"></path>
              </svg>
            </i>
          </i>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle, useColorMode } from '@vueuse/core'
import { ref, toRefs } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

interface MenuItem {
  path: string
  label: string
}
const props = defineProps({
  menu: Array<MenuItem>
})
const { menu } = toRefs(props)
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 60px;
  position: relative;
}
.navbar-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  height: 60px;
  position: fixed;
  z-index: 10;
  box-sizing: border-box;
}
svg.icon {
  display: inline-block;
  width: 30px !important;
  height: 30px !important;
}
.menu a {
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  padding: 8px 16px;
  transition: 300ms;
  border-radius: 99px;
}
.menu > a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.user-form-group a {
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
}
.signup {
  border: rgba(255, 255, 255, 0.5) 2px solid;
  padding: 8px 16px;
  padding-left: 16px;
  border-radius: 99px;
  transition: 300ms;
  margin: 0 10px;
}
.signup:hover {
  background-color: white;
  color: black;
}
.menu .menu-logo {
  display: none;
}
#check {
  display: none;
}
.user-form-group .btn-group {
  display: none;
}

@media (max-width: 768px) {
  .menu {
    position: absolute;
    left: -100%;
    top: 0;
    display: flex;
    flex-direction: column;
    background-color: #0f172a;
    height: 100vh;
    width: 50%;
    padding: 0 20px;
    gap: 16px;
    color: #fff;
    transition: 300ms;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  .menu .menu-logo {
    margin-left: 16px;
    margin-top: 20px;
    display: block;
  }
  .divider {
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    height: 2px;
    margin: 10px 0;
  }
  .user-form-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .user-form-group .btn-group {
    display: block;
  }
  .show-btn,
  .close-btn {
    font-size: 30px;
    cursor: pointer;
    display: none;
    max-width: 10px;
    margin-top: 6px;
  }
  .show-btn {
    display: inline-block;
  }
  #check:checked ~ .user-form-group .show-btn {
    display: none;
  }
  .close-btn {
    display: none;
  }
  #check:checked ~ .user-form-group .close-btn {
    display: inline-block;
  }
  #check:checked ~ .menu {
    left: 0;
  }
}
</style>
