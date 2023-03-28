<template>
    <div>
        <h2>Users Admin</h2>
<AddUser/>
  <div class="main">
    <table class="table table-hover">
      <tr>
        <th scope="col" class="text-light">ID</th>
        <th scope="col" class="text-light">Firstname</th>
        <th scope="col" class="text-light">Lastname</th>
        <th scope="col" class="text-light">Gender</th>
        <th scope="col" class="text-light">Cell Number</th>
        <th scope="col" class="text-light">Email Address</th>
        <th scope="col" class="text-light">User role</th>
        <th scope="col" class="text-light">Join Date</th>
    </tr>

       <tbody>

                <tr v-for="userID in users" :key="userID">
                    <td data-title="userID" class="text-light">{{ userID.userID }}</td>
                    <td data-title="firstName" class="text-light">{{ userID.firstName }}</td>
                    <td data-title="Lastname" class="text-light">{{ userID.lastName }}</td>
                    <td data-title="Gender" class="text-light">{{ userID.gender }}</td>
                    <td data-title="Cellphone Number" class="text-light">{{ userID.cellphoneNumber }}</td>
                    <td data-title="Email" class="text-light">{{ userID.emailAdd }}</td>
                    <td data-title="User Role" class="text-light">{{ userID.userRole }}</td>
                    <td data-title="Join-Date" class="text-light">{{ userID.joinDate }}</td>
                    
                    <td data-label="Edit">

  </td>
  <td data-label="Delete"><button @click="deleteUser(userID.userID)" type="submit"
      class="btn"><i class="fa-solid fa-trash fa-lg"></i></button></td>
                </tr>
            </tbody>
    </table>
  </div>

        <h2>Products Admin</h2>

            
    
        <div class="main">
          <table class="table table-hover">
            <thead class="bg-gradient">
                <tr>
                    <th scope="col" class="text-light">ID</th>
                    <th scope="col" class="text-light">Name</th>
                    <th scope="col" class="text-light">Image</th>
                    <th scope="col" class="text-light">Quantity</th>
                    <th scope="col" class="text-light">Price</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="item in items" :key="item.id">
                    <td data-title="id" class="text-light">{{ item.prodID }}</td>
                    <td data-title="Name" class="text-light">{{ item.prodName }}</td>
                    <td data-title="Image" class="text-light">
                        <img class="" :src="item.imgURL" id="adminitemimg" />
                    </td>
                    <td data-title="Quantity" class="text-light">{{ item.prodQuantity }}</td>
                    <td data-title="Price" class="text-light">R {{ item.price }}</td>
                     <td data-label="Edit">

  </td>
  <td data-label="Delete"><button @click="deleteProduct(id.id)" type="submit"
      class="btn"><i class="fa-solid fa-trash fa-lg"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
   
    <FooterBar/>
</template>

<script>
    import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import FooterBar from '@/components/FooterBar.vue';

    export default {
      components: {
        FooterBar
      },
        setup(){
    const store = useStore();
      store.dispatch("fetchUsers");
      store.dispatch("fetchItems");
      const users =
      computed( () => store.state.users);
      const items = 
      computed( () => store.state.items)
      
      return{
        users,
        items
      }
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id)
    },
    deleteProduct(id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
    }
</script>

<style scoped>
/* Admin Page */

#delete, #edit {
    background-color: rgb(122, 72, 72);
    color: white;
    padding: 10px 18px 10px 18px;
    border-radius: 20px;
    border: none;
  }
  
  #delete:hover, #edit:hover {
    background-color: white;
    color: black;
  }
  
  
  #addproductmodal {
    color: rgb(19, 20, 20);
    float: right;
    margin-right: 115px;
  }

  #adminitemimg {
    width: 40px;
    height: 40px;
  }
</style>