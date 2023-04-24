export const Home = () => {
  return (
    <>

      <a href="/" class="flex flex-row mx-auto my-[150px] items-center justify-around bg-white w-[75%] border h-[450px] border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello, I'm Wesley Hughes.</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Embracing challenges and finding new solutions.</p>
    </div>
    <img class="object-cover w-full rounded-t-lg md:h-auto md:w-[300px] md:rounded-none md:rounded-l-lg" src="https://i.imgur.com/QVfBWRA.jpg" alt="" />
</a>
    </>
  );
};
