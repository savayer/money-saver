<template>
  <div class="col s12 m6">
    <div>
      <form @submit.prevent="updateCategory()">
        <div class="input-field">
          <select ref="select" v-model="category" @change="selectCategory()">
            <option value="" disabled selected>Select a category</option>
            <option
              v-for="category in categories"
              :value="category"
              :key="category.id"
              >{{ category.name }}</option
            >
          </select>
          <label>Category</label>
          <span
            v-if="$v.category.$dirty && !$v.category.required"
            class="helper-text invalid"
            >Select a category</span
          >
        </div>
        <div class="input-field">
          <input type="text" id="name" v-model="name" />
          <label for="name">Name</label>
          <span
            v-if="$v.name.$dirty && !$v.name.required"
            class="helper-text invalid"
            >Enter name</span
          >
        </div>

        <div class="input-field">
          <input id="limit" type="number" v-model="limit" />
          <label for="limit">Limit</label>
          <span
            v-if="$v.limit.$dirty && !$v.limit.required"
            class="helper-text invalid"
            >Limit is required</span
          >
          <span
            v-if="$v.limit.$dirty && !$v.limit.minValue"
            class="helper-text invalid"
            >Min limit {{ $v.limit.$params.minValue.min }}
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Update
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import { required, minValue } from "vuelidate/lib/validators";

export default {
  name: "CategoryUpdate",
  data() {
    return {
      name: "",
      limit: "",
      category: null,
      catId: null,
      selectInstance: null
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  watch: {
    categories() {
      // add new category to the select after creating
      this.$nextTick(() => {
        this.destroySelect();
        this.initSelect();
      });
    }
  },
  methods: {
    selectCategory() {
      this.catId = this.category.id;
      this.name = this.category.name;
      this.limit = this.category.limit;
      setTimeout(() => {
        M.updateTextFields();
      }, 0);
    },

    async updateCategory() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        await this.$store.dispatch("setCategory", {
          id: this.catId,
          name: this.name,
          limit: this.limit
        });

        this.category.name = this.name;
        this.category.limit = this.limit;

        this.$notify("The category was updated");
        this.$nextTick(() => {
          this.destroySelect();
          this.initSelect();
        });
      } catch (e) {
        /**/
      }
    },

    destroySelect() {
      if (this.selectInstance && this.selectInstance.destroy) {
        this.selectInstance.destroy();
      }
    },
    initSelect() {
      this.selectInstance = M.FormSelect.init(this.$refs.select);
    }
  },
  validations: {
    name: { required },
    limit: {
      required,
      minValue: minValue(100)
    },
    category: { required }
  },
  async mounted() {
    await this.$store.dispatch("getCategories");
    this.initSelect();
  },
  destroyed() {
    this.destroySelect();
  }
};
</script>
