<script>
  export let hotelName = "test";
  export let hotelDescription = "Place holder text, place holder text.";
  export let hotelScore = 4.5;
  export let hotelReviews = 3020;
  export let hotelPrice = "100";
  export let hotelImg = "./image-placeholder.jpg";
</script>

<div class="flex flex-col">
  <div
    class="offerbox-pictures lg:h-96 sm:h-[250px]"
    style="background-image: url('{hotelImg}'); background-repeat: no-repeat; background-position: center center;"
  ></div>
  <div class="offerbox-details lg:w-4/5 lg:m-auto lg:-mt-32 lg:p-5">
    <div class="subtitle-text lg:text-[16px]/[20px] lg:pl-2 text-[#FF9A00]">
      AMSTERDAM
    </div>
    <h3 class="lg:text-[30px]/[36px]">{hotelName}</h3>
    <div class="body-text-normal">{hotelDescription}</div>
    <span>{hotelScore} &#9733; ({hotelReviews})</span>
    <span class="lg:font-[700]">{hotelPrice}</span>
  </div>
</div>

<style>
  .offerbox-details {
    text-align: center;
    background-color: white;
    height: 215px;
    box-shadow: 0 1px grey;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>
