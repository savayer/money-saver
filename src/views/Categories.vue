<template>
  <div class="content">
    <div class="page-title">
      <h3>Categories</h3>
    </div>
    <section>
      <div class="row">
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Create</h4>
            </div>

            <form>
              <div class="input-field">
                <input id="name" type="text" />
                <label for="name">Name</label>
                <span class="helper-text invalid">Enter name</span>
              </div>

              <div class="input-field">
                <input id="limit" type="number" />
                <label for="limit">Limit</label>
                <span class="helper-text invalid">Max limit</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Create
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Edit</h4>
            </div>

            <form>
              <div class="input-field">
                <select>
                  <option>Category</option>
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
      </div>
    </section>
  </div>
</template>
