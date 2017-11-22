<template>
  <!-- Content Wrapper. Contains page content -->
  <div >
    <!---->

    <table>
      <thead>
      <tr>
        <th>Id User</th>
        <th>Fecha de creacion</th>
        <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in usersList">

        <td>
          {{user._id}}
        </td>
        <td>
          {{user.created | moment("MM-DD-YY [at] hh:mm a")}}
        </td>
        <td>
          {{user.username}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <!-- /.content-wrapper -->
</template>

<script src="./users.js"></script>
<style lang="scss" src="./users.scss"></style>
