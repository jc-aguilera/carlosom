<template>
  <div class="container">
    <div>
      <div class="profile-flex-container">
        <div class="profile-pic">
          <div class="justify-center">
            <div>
              <img :src="$frontmatter.characterProfilePic" style="object-fit: contain;" />
              <div class="quote">
                <q>{{ $frontmatter.characterQuote }}</q>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-data">
          <ul>
            <li>
              <span>Name</span>: {{ $frontmatter.characterFullName }}
            </li>
            <li>
              <span>Age</span>: {{ $frontmatter.characterAge }}
            </li>
            <li>
              <span>Occupation</span>: {{ $frontmatter.characterOccupation }}
            </li>
            <li class="bio">
            <p>{{ $frontmatter.characterBio }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterProfileCard"
};
</script>

<style lang="stylus">

.profile-flex-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  space-around, div {
    margin: 6px;
  }
}

.profile-pic {
  max-width: 14em;
}

.profile-data {
  width: 100%;
  max-width: 20em;
}

.justify-center {
  display: flex;
  width: 100%;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
}

div.quote {
  text-align: center;
  font-size: 0.85em;
}

ul li span {
  font-weight: bold;
}

.bio
    list-style-type none
</style>
