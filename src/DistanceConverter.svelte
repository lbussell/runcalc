<script lang="ts">
    const kmToMi = (km: number) => km * 0.6213712;
    const miToKm = (mi: number) => mi * 1.609344;

    let km: number = 5;
    let mi: number = +kmToMi(km).toFixed(2);

    const setBothFromKm = (n: number) => {
        km = +n;
        mi = +kmToMi(+n).toFixed(2);
    };

    const setBothFromMi = (n: number) => {
        km = +miToKm(+n).toFixed(2);
        mi = +n;
    };
</script>

<div class="container">
    <div class="columns">
        <div class="column">
            <div class="field has-addons">
                <span class="control">
                    <input
                        class="input is-large"
                        bind:value={km}
                        on:input={(e) => setBothFromKm(e.target.value)}
                        placeholder="km"
                    />
                </span>
                <span class="control">
                    <a class="button is-static is-large">
                        km
                    </a>
                </span>
            </div>
        </div>
        <div class="column">
            <div class="field has-addons">
                <span class="control">
                    <input
                        class="input is-large"
                        bind:value={mi}
                        on:input={(e) => setBothFromMi(e.target.value)}
                        placeholder="mi"
                    />
                </span>
                <span class="control">
                    <a class="button is-static is-large">
                        mi
                    </a>
                </span>
            </div>
        </div>
    </div>
</div>
