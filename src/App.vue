<template>
    <div>
        <a class="a" href="">sss</a>
        <a href="https://example.com">External link</a><br>
        <a href="#">Internal target link</a><br>
        <a>Placeholder link (won't get styled)</a>
        <input name="age">
        <em>sss</em>
        <article>
            <h1>sss</h1>
            <h2>h2h2</h2>
        </article>
        <article dir="ltl">
            <p>التدليك واحد من أقدم العلوم الصحية التي عرفها الانسان والذي يتم استخدامه لأغراض الشفاء منذ ولاده الطفل.</p>
        </article>
        <router-view/>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        name:"vues + s"
      }
    }
  }
</script>

<style lang="scss">
    article :dir(rtl) { color: red; }
    article :-moz-dir(rtl) { color: red; }
    @custom-selector :--heading h1, h2, h3, h4, h5, h6;
    article :--heading {
        color:  hsl(0 100% 90%);
    }


    em {
        background-color: hsl(0 100% 25%);
        box-shadow: 0 0 0 10px hwb(120deg 100% 25% / 80%);
        color: rgb(0 255 0);
    }
    [name=age i] {
        border: 1px solid #f00;
    }
    a:any-link {
        border: 1px solid blue;
        color: orange;
    }

    /* WebKit browsers */
    a:-webkit-any-link {
        border: 1px solid blue;
        color: orange;
    }
    a {
        break-inside: avoid;
        break-before: avoid-column;
        break-after: always;
    }
</style>