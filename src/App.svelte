<script>
    import Navbar from "./components/Navbar.svelte";
    import Tabs from "./components/Tabs.svelte";
    import DistanceCalculator from "./components/DistanceCalculator.svelte";
    import PaceCalculator from "./components/PaceCalculator.svelte";

    let tabItems = [
        {
            label: "Pace",
            value: 0,
            component: PaceCalculator
        },
        {
            label: "Distance",
            value: 1,
            component: DistanceCalculator
        }
    ]
</script>

<Navbar />

<Tabs {tabItems} />
