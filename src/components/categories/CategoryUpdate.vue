<template>
  <div class="col s12 m6">
    <div>

      <form>
        <div class="input-field">
          <select>
            <option value="" disabled selected>Category</option>
            <option value="1">Category 2</option>
          </select>
          <label>Select a category</label>
        </div>

        <div class="input-field">
          <input type="text" id="name" />
          <label for="name">Name</label>
          <span class="helper-text invalid">Enter name</span>
        </div>

        <div class="input-field">
          <input id="limit" type="number" />
          <label for="limit">Limit</label>
          <span class="helper-text invalid">Max limit</span>
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
export default {
  name: "CategoryUpdate",
  data() {
    return {

    };
  }
};
</script>
