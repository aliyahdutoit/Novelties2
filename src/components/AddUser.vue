<template>
    <div>
        <button
    type="button"
    class="btn"
    id="addproductmodal"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Add Item
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Novelties Admin</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="number"
                    id="form6Example1"
                    class="form-control"
                  />
                  <label class="form-label" for="form6Example1">ID #</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="number"
                    id="form6Example2"
                    class="form-control"
                  />
                  <label class="form-label" for="form6Example2">Price</label>
                </div>
              </div>
            </div>

            <!-- Text input -->
            <div class="form-outline mb-4">
              <input type="text" id="form6Example3" class="form-control" />
              <label class="form-label" for="form6Example3">Title</label>
            </div>

            <!-- Text input -->
            <div class="form-outline mb-4">
              <input type="text" id="form6Example4" class="form-control" />
              <label class="form-label" for="form6Example4">Author</label>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="text" id="form6Example5" class="form-control" />
              <label class="form-label" for="form6Example5">Genre</label>
            </div>

            <!-- Number input -->
            <div class="form-outline mb-4">
              <input type="url" id="form6Example6" class="form-control" />
              <label class="form-label" for="form6Example6">Image Link</label>
            </div>

            <!-- Message input -->
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="form6Example7"
                rows="4"
              ></textarea>
              <label class="form-label" for="form6Example7"></label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn">Save</button>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>