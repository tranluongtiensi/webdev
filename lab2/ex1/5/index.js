var proj = {
    Name : "tiensi",
};
const fs = require('fs');
fs.writeFile(`file.json`, JSON.stringify(proj), (error) => {
    if (error) throw error;
});
