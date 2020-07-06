<template>
  <header class="header">
    <nav class="navbar">
      <router-link class="view" to="/">
        <company-logo class="icon" />
      </router-link>
      <div class="views">
        <router-link class="view" to="/new">New</router-link>
        <router-link class="view" to="/sale">Sale</router-link>
        <router-link class="view" to="/men">Men</router-link>
        <router-link class="view" to="/women">Women</router-link>
        <router-link class="view" to="/apparel">Apparel</router-link>
      </div>

      <ul class="app-control">
        <li class="app-control-icon icon">
          <search-icon />
        </li>
        <li class="app-control-icon icon">
          <shopping-cart-icon />
        </li>
        <li class="app-control-icon icon">
          <user-icon />
        </li>
      </ul>

      <label class="language-control" for="language-select">
        <language-select-icon class="language-icon icon" />
        <select name="language" class="language-select" id="language-select">
          <option value="NL">NL</option>
          <option value="EN">EN</option>
          <option value="ES">ES</option>
          <option value="PT">PT</option>
          <option value="FR">FR</option>
          <option value="CH">CH</option>
        </select>
      </label>
    </nav>
  </header>
</template>

<script>
  import CompanyLogo from '@/assets/company-logo.svg';
  import LanguageSelectIcon from '@/assets/language-select-icon.svg';
  import { ShoppingCartIcon, SearchIcon, UserIcon } from 'vue-feather-icons';

  export default {
    name: 'main-navbar',
    components: { CompanyLogo, SearchIcon, ShoppingCartIcon, UserIcon, LanguageSelectIcon },
  };
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .icon,
  .view {
    cursor: pointer;
    transition: filter 250ms cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
      filter: drop-shadow(3px 3px 4px $black) drop-shadow(-2px -2px 4px lighten($grey, 20%));
    }
  }

  .navbar {
    height: 83px;
    padding: 0 48px;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    box-shadow: 0 2px 10px rgba($black, 0.1);
    background: $grey;
    color: $white;
  }

  .view {
    margin-left: 32px;
    color: $white;
    text-decoration: none;
    width: max-content;
  }

  .pages,
  .app-control {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .app-control {
    justify-self: flex-end;

    &-icon {
      margin-left: 32px;
    }
  }

  .language {
    &-control {
      display: flex;
      align-items: center;
      justify-self: flex-end;
    }

    &-select {
      color: $white;
      cursor: pointer;
    }

    &-icon {
      margin-right: 8px;
    }
  }
</style>
