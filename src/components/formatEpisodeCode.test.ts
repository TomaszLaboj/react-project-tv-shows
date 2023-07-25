import formatEpisodeCode from "./formatEpisodeCode"

test("episode and season numbers are zero padded to 2 digits", ()=> {
    expect(formatEpisodeCode(10,15)).toBe("S10E15");
});

test("episode and season numbers are zero padded to 2 digits", ()=> {
    expect(formatEpisodeCode(2,5)).toBe("S02E05");
});

test("episode and season numbers are zero padded to 2 digits", ()=> {
    expect(formatEpisodeCode(13,8)).toBe("S13E08");
});
