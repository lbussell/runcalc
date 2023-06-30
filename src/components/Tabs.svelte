<script>
    import { fly } from 'svelte/transition'

    export let tabItems = [];
    export let activeTab = 0;

    let animationDirection = 1;

    const handleClick = (tabValue) => {
        animationDirection = tabValue > activeTab ? 1 : -1;
        activeTab = tabValue
    };
</script>

<div class="tabs is-centered is-large">
    <ul>
        {#each tabItems as tabItem}
            <li class={ activeTab === tabItem.value ? "is-active" : "" }>
                <a on:click={() => handleClick(tabItem.value)}>
                    {#if tabItem.icon}
                        <span class="icon is-small"><i class={tabItem.icon} aria-hidden="true"></i></span>
                    {/if}
                    {tabItem.label}
                </a>
            </li>
        {/each}
    </ul>
</div>

<section class="section">
    {#each tabItems as tabItem}
        {#if activeTab === tabItem.value}
            <div class="container" in:fly={{ x: animationDirection * 50, duration: 200 }}>
                <svelte:component this={tabItem.component} />
            </div>
        {/if}
    {/each}
</section>
