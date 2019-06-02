let array = [1, 2, 3];

// IE11 doesn't support Array.from
Array.from(array).forEach(($item => {
    console.log($item);
}));