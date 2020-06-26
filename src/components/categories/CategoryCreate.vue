<template>
  <div class="col s12 m6">
    <div>

      <form @submit.prevent="createCategory()">
        <div class="input-field">
          <input id="name" type="text" v-model="name" />
          <label for="name">Category name</label>
          <span
            v-if="$v.name.$dirty && !$v.name.required"
            class="helper-text invalid"
          >
            Enter category name
          </span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            :value="limit"
            @input="limit = $event.target.value"
          />
          <label for="limit">Limit</label>
          <span
            v-if="$v.limit.$dirty && !$v.limit.minValue"
            class="helper-text invalid"
          >
            Min limit {{ $v.limit.$params.minValue.min }}
          </span>
          <span
            v-if="$v.limit.$dirty && !$v.limit.required"
            class="helper-text invalid"
          >
            Limit is required
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Create
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minValue } from "vuelidate/lib/validators";

export default {
  name: "CategoryCreate",
  data() {
    return {
      name: "",
      limit: ""
    };
  },
  methods: {
    async createCategory() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        const category = await this.$store.dispatch("createCategory", {
          name: this.name,
          limit: this.limit
        });

        this.$store.commit('pushCategories', category)

        this.limit = "";
        this.name = "";

        this.$notify("Category was created");
      } catch (e) {
        /* */
      }
    }
  },
  validations: {
    name: {
      required
    },
    limit: {
      required,
      minValue: minValue(100)
    }
  }
};
</script>
