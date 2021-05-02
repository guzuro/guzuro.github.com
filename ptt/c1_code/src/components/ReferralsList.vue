<template>
  <tree-table class="table" :columns="columns" :table-data="USERS">
  </tree-table>
</template>

<script>
import TreeTable from "vue-tree-table-component";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DefaultTableTree",
  components: { TreeTable },
  data: function () {
    return {
      columns: [
        // { label: "user_id", id: "user_id" },
        { label: "user_name", id: "user_name" },
        { label: "referrals_count", id: "referrals" },
      ],
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_JSON"]),
  },
  mounted() {
    this.GET_USERS_FROM_JSON().then((response) => {
      if (response) {
        console.log("data arrived");
      }
    });
  },
};
</script>

<style>
.table {
  width: 60%;
  margin: auto;
}

.open-button:hover {
  cursor: pointer;
}
.row {
  border: none;
}
.row:hover {
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 5px rgba(0,0,0,0.2); 
  top: 2px;
}
</style>
