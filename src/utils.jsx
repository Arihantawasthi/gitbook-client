const MAX_COMMIT_CARD_BOXES = 6;


const calculatedDeletionBoxes = (insertions, deletions) => {
    const iInsertions = parseInt(insertions);
    const iDeletions = parseInt(deletions);

    const deletionPercentage = iDeletions / (iInsertions + iDeletions);

    return Math.round(deletionPercentage * MAX_COMMIT_CARD_BOXES);
}


export { calculatedDeletionBoxes }
