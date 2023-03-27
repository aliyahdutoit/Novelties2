<template>
    <div>
        <h2>Users</h2>

  <div class="main">
    <table class="table table-hover">
      <tr>
        <th>ID</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Gender</th>
        <th>CellphoneNumber</th>
        <th>Email Address</th>
        <th>Password</th>
        <th>Role</th>
        <th>JoinDate</th>
      </tr>
    </table>
  </div>

        <h2>Products</h2>

             <AddUser/>
    
        <div class="main">
            <table class="table table-hover">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image URL</th>
                <th></th>
                <th></th>                
              </tr>

              <tbody>

                <tr v-for="userID in Users" :key="userID">
                    <td data-title="ID" class="text-light">{{ userID.userID }}</td>
                    <td data-title="Firstname" class="text-dark">{{ userID.firstName }}</td>
                    <td data-title="Lastname" class="text-dark">{{ userID.lastName }}</td>
                    <td data-title="Gender" class="text-dark">{{ userID.gender }}</td>
                    <td data-title="Join-Date" class="text-dark">{{ userID.joinDate }}</td>
                    <td data-title="CellPhone Number" class="text-dark">{{ userID.cellPhoneNumber }}</td>
                    <td data-title="User Role" class="text-dark">{{ userID.userRole }}</td>
                    <td data-title="Email" class="text-dark">{{ userID.emailAdd }}</td>
                    <td data-label="Edit">
    <UpdateUser />
  </td>
  <td data-label="Delete"><button @click="deleteUser(userID.userID)" type="submit"
      class="btn btn-danger"><i class="fa-regular fa-trash-can"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    <FooterBar/>
    
</template>

<script>
    export default {
        
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
</style>