<template>
  <section class="users-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Carts in Database</span>
          <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" to="/cart/all_items">Carts with all items</nuxt-link>
        </div>
        <table >
          <tr>
            <th>Cart ID</th>
            <th>Customer ID</th>
            <th>Item ID</th>
            <th>Quantity</th>
          </tr>
          <tr v-for="c in cart">
            <td>{{ c.cart_id }}</td>
            <td>{{ c.customer_id }}</td>
            <td>{{ c.item_id }}</td>
            <td>{{ c.cart_quantity }}</td>
          </tr>
        </table>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/cart')
    return { cart: data }
  },

  head () {
    return {
      title: 'Cart'
    }
  }
}
</script>

<style lang="stylus" scoped>
.users-view
  padding-top 0

.content
  position absolute
  width 100%

.subsection
  background-color #fff
  border-radius 2px
  margin 25px 0
  transition all .5s cubic-bezier(.55,0,.1,1)
  padding 10px 30px 10px 30px
  position relative
  line-height 20px
  .subsection-title
    font-size 26px
    font-weight 500
  .title
    font-size 18px
    font-weight 500
  a
    text-decoration underline
    &:hover
      color #515ec4

</style>
