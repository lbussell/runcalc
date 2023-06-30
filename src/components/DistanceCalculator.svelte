<script>
    const kmToMi = km => km * 0.6213712;
    const miToKm = mi => mi * 1.609344;

    const columnSizing = "column is-one-quarter-desktop is-one-third-tablet is-full-mobile"

    let km = 5;
    let mi = 3.1;

    const setBothFromKm = n => {
        km = +n;
        mi = +kmToMi(+n).toFixed(2);
    };

    const setBothFromMi = n => {
        km = +miToKm(+n).toFixed(2);
        mi = +n;
    };

    let selectedRace;

    const setDistance = () => {
        if (selectedRace.distance) {
            setBothFromKm(selectedRace.distance)
        } else if (selectedRace.distanceInMi) {
            setBothFromMi(selectedRace.distanceInMi)
        }
    }

    const popularRaces = [
        {
            distance: 5,
            name: "5K"
        },
        {
            distance: 10,
            name: "10K"
        },
        {
            distanceInMi: 13.1,
            name: "Half Marathon"
        },
        {
            distance: 25,
            name: "25K"
        },
        {
            distance: 30,
            name: "30K"
        },
        {
            distanceInMi: 26.2,
            name: "Marathon"
        },
        {
            distance: 100,
            name: "100K"
        }
    ]

</script>

<div class="columns is-mobile is-multiline is-centered is-vcentered">
    <div class={columnSizing}>
        <div class="field has-addons">
            <span class="control is-expanded">
                <input
                    type="number"
                    class="input is-medium"
                    bind:value={km}
                    on:input={(e) => setBothFromKm(e.target.valueAsNumber)}
                    placeholder="km"
                />
            </span>
            <span class="control">
                <a class="button is-static is-medium">
                    km
                </a>
            </span>
        </div>
    </div>
    <div class="is-hidden-mobile">
        <span class="tag is-large"><strong>=</strong></span>
    </div>
    <div class={columnSizing}>
        <div class="field has-addons">
            <span class="control is-expanded">
                <input
                    class="input is-medium"
                    type="number"
                    bind:value={mi}
                    on:input={(e) => setBothFromMi(e.target.valueAsNumber)}
                    placeholder="mi"
                />
            </span>
            <span class="control">
                <a class="button is-static is-medium">
                    mi
                </a>
            </span>
        </div>
    </div>
</div>

<div class="columns is-centered">
    <div class="column is-narrow">
        <div class="select is-fullwidth">
            <select bind:value={selectedRace} on:change={setDistance}>
                <option value="">Popular distances</option>
                {#each popularRaces as race}
                    <option value={race}>
                        {race.name}
                    </option>
                {/each}
            </select>
        </div>
    </div>
</div>
