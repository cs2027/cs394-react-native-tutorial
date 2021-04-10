// Refactored from other components (Course & CourseList)
const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);

const getCourseNumber = course => (
  course.id.slice(1)
)

// Determine if 'course' has any conflicts with the 'selected' list
const hasConflict = (course, selected) => {
    let term = getCourseTerm(course);
    let selectedParsed = selected.filter(course => getCourseTerm(course) === term);

    for (let i = 0; i < selectedParsed.length; i++) {
        if (courseOverlap(course, selectedParsed[i])) {
            return true;
        }
    };

    return false;
};

// Determine if two courses have a conflict / overlap
const courseOverlap = (course1, course2) => {
    let meetingInfo1 = course1.meets.split(' ');
    let meetingInfo2 = course2.meets.split(' ');

    let [dowInfo1, dowInfo2] = [dowArr(meetingInfo1[0]), dowArr(meetingInfo2[0])];
    let [timeRange1, timeRange2] = [meetingInfo1[1], meetingInfo2[1]];

    for (let i = 0; i < 5; i++) {
        if (dowInfo1[i] === 1 && dowInfo2[i] === 1) {
            if (timeOverlap(timeRange1, timeRange2)) {
                return true;
            }
        }
    };

    return false;
};

// Map a string of days to an array 
// ex. [1, 0, 1, 0, 0] = a class that meets M & W
const dowIndexMap = { 'M': 0, 'Tu': 1, 'W': 2, 'Th': 3, 'F': 4 };

const dowArr = (dowString) => {
    let result = new Array(5).fill(0);
    let dowParsed = dowString.split(/(?=[A-Z])/);

    for (let i = 0; i < dowParsed.length; i++) {
        result[dowIndexMap[dowParsed[i]]] = 1;
    };

    return result;
};

// Determine if two times overlap
const timeOverlap = (timeRange1, timeRange2) => {
    let timeRangeArr1 = timeRange1.split('-');
    let timeRangeArr2 = timeRange2.split('-');

    let [start1, end1] = [timeToNum(timeRangeArr1[0]), timeToNum(timeRangeArr1[1])];
    let [start2, end2] = [timeToNum(timeRangeArr2[0]), timeToNum(timeRangeArr2[1])];

    return (start2 >= start1 && start2 <= end1) || (start1 >= start2 && start1 <= end2);
};

// Convert times to numbers for easier comparison
const timeToNum = (time) => {
    let timeArr = time.split(':');
    return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]);
};

export { getCourseNumber, getCourseTerm, hasConflict, terms }