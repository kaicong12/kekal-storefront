<template>
  <Menu>
    <MenuButton>Options</MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
    <MenuItems>
      <!-- Use the `active` state to conditionally style the active item. -->
      <MenuItem
        v-for="link in links"
        :key="link.href"
        as="template"
        v-slot="{ active }"
      >
        <a
          :href="link.href"
          :class="{ 'bg-blue-500 text-white': active, 'bg-white text-black': !active }"
        >
          {{ link.label }}
        </a>
      </MenuItem>
    </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

  const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ]
</script>