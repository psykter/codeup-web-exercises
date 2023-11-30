"use strict";

(() => {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
    // 2.  Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    const usersWithAtLeastThreeLanguages = users.filter(user => user.languages.length >= 3);

    console.log(usersWithAtLeastThreeLanguages);

    // 3.  Use .map to create an array of strings where each element is a user's email address
    const userEmails = users.map(user => user.email);

    console.log(userEmails);

    // 4.  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
    const averageYearsOfExperience = totalYearsOfExperience / users.length;

    console.log("Total Years of Experience:", totalYearsOfExperience);
    console.log("Average Years of Experience:", averageYearsOfExperience);

    // 5.  Use .reduce to get the longest email from the list of users.
    const longestEmail = users.reduce((longest, user) => (
        user.email.length > longest.length ? user.email : longest
    ), '');

    console.log("Longest Email:", longestEmail);

    // 6.  Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    const instructorsString = users.reduce((instructors, user, index) => {
        if (index === users.length - 1) {
            // If it's the last user, don't add a comma and space
            return `${instructors}${user.name}`;
        } else {
            return `${instructors}${user.name}, `;
        }
    }, 'Your instructors are: ');

    console.log(instructorsString);

    // Bonus
    // 1.  Use .reduce to get the unique list of languages from the list of users.
    const uniqueLanguages = users.reduce((languages, user) => {
        user.languages.forEach(language => {
            if (!languages.includes(language)) {
                languages.push(language);
            }
        });
        return languages;
    }, []);

    console.log("Unique Languages:", uniqueLanguages);
})();