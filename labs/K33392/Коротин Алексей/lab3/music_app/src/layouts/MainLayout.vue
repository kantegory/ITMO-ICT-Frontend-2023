<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar class="row justify-between">
                <div class="row flex-center">
                    <q-toolbar-title shrink>
                        Music App
                    </q-toolbar-title>
                    <q-tabs class="row justfiy-between" indicator-color="secondary">
                        <q-route-tab class="q-px-xs-xs q-px-sm-md" to="/collection" label="Collection" />
                        <q-route-tab class="q-px-xs-xs q-px-sm-md" to="/search"
                            label="Search" />
                    </q-tabs>
                </div>
                <div class="row no-wrap">
                    <q-input dark dense standout v-model="searchText" label="Search" input-class="text-left"
                        class="q-mr-md">
                        <template v-slot:append>
                            <q-icon name="search" class="cursor-pointer" @click="search" />
                        </template>
                    </q-input>
                    <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer overlay v-model="rightDrawerOpen" side="right" bordered>
            <DrawerPlaylist></DrawerPlaylist>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer elevated class="text-white">
            <FooterPlayer></FooterPlayer>
        </q-footer>

    </q-layout>
</template>
  
<script>
import { ref } from 'vue'
import FooterPlayer from '@/components/main/FooterPlayer.vue'
import DrawerPlaylist from '@/components/main/DrawerPlaylist.vue'

export default {
    data() {
        return {
            searchText: ''
        }
    },

    methods: {
        search() {
            this.$router.push({ path: '/search', query: { q: this.searchText } })
        }
    },

    setup() {
        const rightDrawerOpen = ref(false);
        return {
            rightDrawerOpen,
            toggleRightDrawer() {
                rightDrawerOpen.value = !rightDrawerOpen.value;
            }
        };
    },

    components: { FooterPlayer, DrawerPlaylist }
}
</script>