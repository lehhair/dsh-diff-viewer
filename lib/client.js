window.__ModuleLoader__.load({
	id: "@dsh-external/dsh-diff-viewer",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0rolldown/runtime.js
		var __defProp = Object.defineProperty;
		var __exportAll = (all, no_symbols) => {
			let target = {};
			for (var name in all) __defProp(target, name, {
				get: all[name],
				enumerable: true
			});
			if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
			return target;
		};
		//#endregion
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
		function r$3(e) {
			var t, f, n = "";
			if ("string" == typeof e || "number" == typeof e) n += e;
			else if ("object" == typeof e) if (Array.isArray(e)) {
				var o = e.length;
				for (t = 0; t < o; t++) e[t] && (f = r$3(e[t])) && (n && (n += " "), n += f);
			} else for (f in e) e[f] && (n && (n += " "), n += f);
			return n;
		}
		function clsx() {
			for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r$3(e)) && (n && (n += " "), n += t);
			return n;
		}
		//#endregion
		//#region \0dsh-css:@deepseek-ai/dsh-client-ui-tool/src/client/tool/components/ToolRow.module.css.mjs
		const css$1 = ".ToolRow-module_root{flex-direction:column;display:flex}.ToolRow-module_row{position:relative;overflow:hidden}.ToolRow-module_root[data-state=running] .ToolRow-module_row:after{content:\"\";background:linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--dsw-alias-bg-base) 60%, transparent) 55%, transparent 100%);pointer-events:none;width:300px;animation:2.6s ease-out infinite ToolRow-module_dsh-tool-row-sweep;position:absolute;top:0;bottom:0;left:0}@keyframes ToolRow-module_dsh-tool-row-sweep{0%{left:-300px}90%,to{left:100%}}.ToolRow-module_leading{flex-shrink:0}.ToolRow-module_root[data-tool^=cordis_] .ToolRow-module_leading,.ToolRow-module_root[data-tool^=cordis_] .ToolRow-module_title{color:var(--dsw-alias-state-business-primary)}.ToolRow-module_root[data-tool^=cordis_] .ToolRow-module_title{font-weight:500}.ToolRow-module_root[data-tool^=cordis_] .ToolRow-module_sep{background:var(--dsw-alias-state-business-primary)}.ToolRow-module_chevron{color:var(--dsw-alias-label-secondary)}.ToolRow-module_title{font-weight:400}.ToolRow-module_sep{background:var(--dsw-alias-label-caption);border-radius:1px;flex:none;width:2px;height:2px;margin:0 8px}.ToolRow-module_summary{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--dsw-alias-label-tertiary);flex:auto;font-size:14px;line-height:24px;overflow:hidden}.ToolRow-module_summarySuffix{white-space:nowrap;color:var(--dsw-alias-label-tertiary);flex:none;margin-left:4px;font-size:14px;line-height:24px}.ToolRow-module_fileLink{text-overflow:ellipsis;white-space:nowrap;min-width:0;font:inherit;text-align:left;color:var(--dsw-alias-label-secondary);text-decoration:underline;text-decoration-color:var(--dsw-alias-label-quaternary);text-underline-offset:3px;cursor:pointer;background:0 0;border:none;flex:auto;margin:0;padding:0;font-size:14px;line-height:24px;overflow:hidden}.ToolRow-module_fileLink:hover{color:var(--dsw-alias-label-primary);text-decoration-color:currentColor}.ToolRow-module_errorSummary{color:var(--dsw-alias-state-error-primary)}.ToolRow-module_bodyWrap{flex-direction:column;display:flex}.ToolRow-module_inspectButton{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);cursor:pointer;opacity:0;border-radius:999px;align-self:flex-start;align-items:center;gap:4px;margin:4px 0 2px 4px;padding:2px 8px;font-size:11px;line-height:16px;transition:opacity .1s;display:inline-flex}.ToolRow-module_root:hover .ToolRow-module_inspectButton,.ToolRow-module_inspectButton:focus-visible{opacity:1}.ToolRow-module_inspectButton:hover{background:var(--dsw-alias-interactive-bg-hover-solid);color:var(--dsw-alias-label-primary)}.ToolRow-module_bodyScroll{max-height:260px;overflow-y:auto}.ToolRow-module_ioCard{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-markdown-code-block);font:var(--dsw-font-markdown-code-block-small);border-radius:12px;flex-direction:column;margin:4px 0 4px 4px;display:flex}.ToolRow-module_ioSection{grid-template-columns:max-content 1fr;align-items:baseline;column-gap:14px;max-height:150px;padding:12px 16px;display:grid;overflow-y:auto}.ToolRow-module_ioSection::-webkit-scrollbar-thumb{background-clip:padding-box;border:2px solid #0000;border-radius:6px}.ToolRow-module_ioSection::-webkit-scrollbar-track{margin:6px 0}.ToolRow-module_ioLabel{color:var(--dsw-alias-label-caption);align-self:start;position:sticky;top:0}.ToolRow-module_ioDivider{background:var(--dsw-alias-border-l2);flex:none;height:1px}.ToolRow-module_ioText{white-space:pre-wrap;word-break:break-word;min-width:0;color:var(--dsw-alias-label-secondary)}.ToolRow-module_ioText[data-error]{color:var(--dsw-alias-state-error-primary)}.ToolRow-module_codeBody,.ToolRow-module_terminalBody,.ToolRow-module_diffBody,.ToolRow-module_readBody,.ToolRow-module_searchBody,.ToolRow-module_webBody{margin:4px 0 4px 4px}.ToolRow-module_searchRecovery{white-space:pre-wrap;overflow-wrap:anywhere;font:var(--dsw-font-xs-13);color:var(--dsw-alias-label-tertiary);margin:4px 0 4px 4px}.ToolRow-module_codeBody{--dsl-code-block-content-font:var(--dsw-font-markdown-code-block-small)}.ToolRow-module_terminalBody{--dsl-terminal-font:var(--dsw-font-markdown-code-block-small);--dsl-terminal-line-height:18px;--dsl-terminal-output-max-height:224px;border:1px solid var(--dsw-alias-border-l1)}.ToolRow-module_visuallyHidden{clip:rect(0 0 0 0);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}";
		const tagId$1 = "@dsh-external/dsh-diff-viewer/ToolRow.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@dsh-external/dsh-diff-viewer";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var ToolRow_module_css_default = {
			"bodyScroll": "ToolRow-module_bodyScroll",
			"bodyWrap": "ToolRow-module_bodyWrap",
			"chevron": "ToolRow-module_chevron",
			"codeBody": "ToolRow-module_codeBody",
			"diffBody": "ToolRow-module_diffBody",
			"dsh-tool-row-sweep": "ToolRow-module_dsh-tool-row-sweep",
			"errorSummary": "ToolRow-module_errorSummary",
			"fileLink": "ToolRow-module_fileLink",
			"inspectButton": "ToolRow-module_inspectButton",
			"ioCard": "ToolRow-module_ioCard",
			"ioDivider": "ToolRow-module_ioDivider",
			"ioLabel": "ToolRow-module_ioLabel",
			"ioSection": "ToolRow-module_ioSection",
			"ioText": "ToolRow-module_ioText",
			"leading": "ToolRow-module_leading",
			"readBody": "ToolRow-module_readBody",
			"root": "ToolRow-module_root",
			"row": "ToolRow-module_row",
			"searchBody": "ToolRow-module_searchBody",
			"searchRecovery": "ToolRow-module_searchRecovery",
			"sep": "ToolRow-module_sep",
			"summary": "ToolRow-module_summary",
			"summarySuffix": "ToolRow-module_summarySuffix",
			"terminalBody": "ToolRow-module_terminalBody",
			"title": "ToolRow-module_title",
			"visuallyHidden": "ToolRow-module_visuallyHidden",
			"webBody": "ToolRow-module_webBody"
		};
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/diff/base.js
		var Diff = class {
			diff(oldStr, newStr, options = {}) {
				let callback;
				if (typeof options === "function") {
					callback = options;
					options = {};
				} else if ("callback" in options) callback = options.callback;
				const oldString = this.castInput(oldStr, options);
				const newString = this.castInput(newStr, options);
				const oldTokens = this.removeEmpty(this.tokenize(oldString, options));
				const newTokens = this.removeEmpty(this.tokenize(newString, options));
				return this.diffWithOptionsObj(oldTokens, newTokens, options, callback);
			}
			diffWithOptionsObj(oldTokens, newTokens, options, callback) {
				var _a;
				const done = (value) => {
					value = this.postProcess(value, options);
					if (callback) {
						setTimeout(function() {
							callback(value);
						}, 0);
						return;
					} else return value;
				};
				const newLen = newTokens.length, oldLen = oldTokens.length;
				let editLength = 1;
				let maxEditLength = newLen + oldLen;
				if (options.maxEditLength != null) maxEditLength = Math.min(maxEditLength, options.maxEditLength);
				const maxExecutionTime = (_a = options.timeout) !== null && _a !== void 0 ? _a : Infinity;
				const abortAfterTimestamp = Date.now() + maxExecutionTime;
				const bestPath = [{
					oldPos: -1,
					lastComponent: void 0
				}];
				let newPos = this.extractCommon(bestPath[0], newTokens, oldTokens, 0, options);
				if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) return done(this.buildValues(bestPath[0].lastComponent, newTokens, oldTokens));
				let minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
				const execEditLength = () => {
					for (let diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
						let basePath;
						const removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
						if (removePath) bestPath[diagonalPath - 1] = void 0;
						let canAdd = false;
						if (addPath) {
							const addPathNewPos = addPath.oldPos - diagonalPath;
							canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
						}
						const canRemove = removePath && removePath.oldPos + 1 < oldLen;
						if (!canAdd && !canRemove) {
							bestPath[diagonalPath] = void 0;
							continue;
						}
						if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) basePath = this.addToPath(addPath, true, false, 0, options);
						else basePath = this.addToPath(removePath, false, true, 1, options);
						newPos = this.extractCommon(basePath, newTokens, oldTokens, diagonalPath, options);
						if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) return done(this.buildValues(basePath.lastComponent, newTokens, oldTokens)) || true;
						else {
							bestPath[diagonalPath] = basePath;
							if (basePath.oldPos + 1 >= oldLen) maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
							if (newPos + 1 >= newLen) minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
						}
					}
					editLength++;
				};
				if (callback) (function exec() {
					setTimeout(function() {
						if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) return callback(void 0);
						if (!execEditLength()) exec();
					}, 0);
				})();
				else while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
					const ret = execEditLength();
					if (ret) return ret;
				}
			}
			addToPath(path, added, removed, oldPosInc, options) {
				const last = path.lastComponent;
				if (last && !options.oneChangePerToken && last.added === added && last.removed === removed) return {
					oldPos: path.oldPos + oldPosInc,
					lastComponent: {
						count: last.count + 1,
						added,
						removed,
						previousComponent: last.previousComponent
					}
				};
				else return {
					oldPos: path.oldPos + oldPosInc,
					lastComponent: {
						count: 1,
						added,
						removed,
						previousComponent: last
					}
				};
			}
			extractCommon(basePath, newTokens, oldTokens, diagonalPath, options) {
				const newLen = newTokens.length, oldLen = oldTokens.length;
				let oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
				while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldTokens[oldPos + 1], newTokens[newPos + 1], options)) {
					newPos++;
					oldPos++;
					commonCount++;
					if (options.oneChangePerToken) basePath.lastComponent = {
						count: 1,
						previousComponent: basePath.lastComponent,
						added: false,
						removed: false
					};
				}
				if (commonCount && !options.oneChangePerToken) basePath.lastComponent = {
					count: commonCount,
					previousComponent: basePath.lastComponent,
					added: false,
					removed: false
				};
				basePath.oldPos = oldPos;
				return newPos;
			}
			equals(left, right, options) {
				if (options.comparator) return options.comparator(left, right);
				else return left === right || !!options.ignoreCase && left.toLowerCase() === right.toLowerCase();
			}
			removeEmpty(array) {
				const ret = [];
				for (let i = 0; i < array.length; i++) if (array[i]) ret.push(array[i]);
				return ret;
			}
			castInput(value, options) {
				return value;
			}
			tokenize(value, options) {
				return Array.from(value);
			}
			join(chars) {
				return chars.join("");
			}
			postProcess(changeObjects, options) {
				return changeObjects;
			}
			get useLongestToken() {
				return false;
			}
			buildValues(lastComponent, newTokens, oldTokens) {
				const components = [];
				let nextComponent;
				while (lastComponent) {
					components.push(lastComponent);
					nextComponent = lastComponent.previousComponent;
					delete lastComponent.previousComponent;
					lastComponent = nextComponent;
				}
				components.reverse();
				const componentLen = components.length;
				let componentPos = 0, newPos = 0, oldPos = 0;
				for (; componentPos < componentLen; componentPos++) {
					const component = components[componentPos];
					if (!component.removed) {
						if (!component.added && this.useLongestToken) {
							let value = newTokens.slice(newPos, newPos + component.count);
							value = value.map(function(value, i) {
								const oldValue = oldTokens[oldPos + i];
								return oldValue.length > value.length ? oldValue : value;
							});
							component.value = this.join(value);
						} else component.value = this.join(newTokens.slice(newPos, newPos + component.count));
						newPos += component.count;
						if (!component.added) oldPos += component.count;
					} else {
						component.value = this.join(oldTokens.slice(oldPos, oldPos + component.count));
						oldPos += component.count;
					}
				}
				return components;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/diff/character.js
		var CharacterDiff = class extends Diff {};
		new CharacterDiff();
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/util/string.js
		function longestCommonPrefix(str1, str2) {
			let i;
			for (i = 0; i < str1.length && i < str2.length; i++) if (str1[i] != str2[i]) return str1.slice(0, i);
			return str1.slice(0, i);
		}
		function longestCommonSuffix(str1, str2) {
			let i;
			if (!str1 || !str2 || str1[str1.length - 1] != str2[str2.length - 1]) return "";
			for (i = 0; i < str1.length && i < str2.length; i++) if (str1[str1.length - (i + 1)] != str2[str2.length - (i + 1)]) return str1.slice(-i);
			return str1.slice(-i);
		}
		function replacePrefix(string, oldPrefix, newPrefix) {
			if (string.slice(0, oldPrefix.length) != oldPrefix) throw Error(`string ${JSON.stringify(string)} doesn't start with prefix ${JSON.stringify(oldPrefix)}; this is a bug`);
			return newPrefix + string.slice(oldPrefix.length);
		}
		function replaceSuffix(string, oldSuffix, newSuffix) {
			if (!oldSuffix) return string + newSuffix;
			if (string.slice(-oldSuffix.length) != oldSuffix) throw Error(`string ${JSON.stringify(string)} doesn't end with suffix ${JSON.stringify(oldSuffix)}; this is a bug`);
			return string.slice(0, -oldSuffix.length) + newSuffix;
		}
		function removePrefix(string, oldPrefix) {
			return replacePrefix(string, oldPrefix, "");
		}
		function removeSuffix(string, oldSuffix) {
			return replaceSuffix(string, oldSuffix, "");
		}
		function maximumOverlap(string1, string2) {
			return string2.slice(0, overlapCount(string1, string2));
		}
		function overlapCount(a, b) {
			let startA = 0;
			if (a.length > b.length) startA = a.length - b.length;
			let endB = b.length;
			if (a.length < b.length) endB = a.length;
			const map = Array(endB);
			let k = 0;
			map[0] = 0;
			for (let j = 1; j < endB; j++) {
				if (b[j] == b[k]) map[j] = map[k];
				else map[j] = k;
				while (k > 0 && b[j] != b[k]) k = map[k];
				if (b[j] == b[k]) k++;
			}
			k = 0;
			for (let i = startA; i < a.length; i++) {
				while (k > 0 && a[i] != b[k]) k = map[k];
				if (a[i] == b[k]) k++;
			}
			return k;
		}
		/**
		* Split a string into segments using a word segmenter, merging consecutive
		* segments if they are both whitespace segments. Whitespace segments can
		* appear adjacent to one another for two reasons:
		* - newlines always get their own segment
		* - where a diacritic is attached to a whitespace character in the text, the
		*   segment ends after the diacritic, so e.g. " \u0300 " becomes two segments.
		* This function therefore runs the segmenter's .segment() method and then
		* merges consecutive segments of whitespace into a single part.
		*/
		function segment(string, segmenter) {
			const parts = [];
			for (const segmentObj of Array.from(segmenter.segment(string))) {
				const segment = segmentObj.segment;
				if (parts.length && /\s/.test(parts[parts.length - 1]) && /\s/.test(segment)) parts[parts.length - 1] += segment;
				else parts.push(segment);
			}
			return parts;
		}
		function trailingWs(string, segmenter) {
			if (segmenter) return leadingAndTrailingWs(string, segmenter)[1];
			let i;
			for (i = string.length - 1; i >= 0; i--) if (!string[i].match(/\s/)) break;
			return string.substring(i + 1);
		}
		function leadingWs(string, segmenter) {
			if (segmenter) return leadingAndTrailingWs(string, segmenter)[0];
			const match = string.match(/^\s*/);
			return match ? match[0] : "";
		}
		function leadingAndTrailingWs(string, segmenter) {
			if (!segmenter) return [leadingWs(string), trailingWs(string)];
			if (segmenter.resolvedOptions().granularity != "word") throw new Error("The segmenter passed must have a granularity of \"word\"");
			const segments = segment(string, segmenter);
			const firstSeg = segments[0];
			const lastSeg = segments[segments.length - 1];
			return [/\s/.test(firstSeg) ? firstSeg : "", /\s/.test(lastSeg) ? lastSeg : ""];
		}
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/diff/word.js
		const extendedWordChars = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
		const tokenizeIncludingWhitespace = new RegExp(`[${extendedWordChars}]+|\\s+|[^${extendedWordChars}]`, "ug");
		var WordDiff = class extends Diff {
			equals(left, right, options) {
				if (options.ignoreCase) {
					left = left.toLowerCase();
					right = right.toLowerCase();
				}
				return left.trim() === right.trim();
			}
			tokenize(value, options = {}) {
				let parts;
				if (options.intlSegmenter) {
					const segmenter = options.intlSegmenter;
					if (segmenter.resolvedOptions().granularity != "word") throw new Error("The segmenter passed must have a granularity of \"word\"");
					parts = segment(value, segmenter);
				} else parts = value.match(tokenizeIncludingWhitespace) || [];
				const tokens = [];
				let prevPart = null;
				parts.forEach((part) => {
					if (/\s/.test(part)) {
						if (prevPart == null) tokens.push(part);
						else tokens.push(tokens.pop() + part);
					} else if (prevPart != null && /\s/.test(prevPart)) {
						if (tokens[tokens.length - 1] == prevPart) tokens.push(tokens.pop() + part);
						else tokens.push(prevPart + part);
					} else tokens.push(part);
					prevPart = part;
				});
				return tokens;
			}
			join(tokens) {
				return tokens.map((token, i) => {
					if (i == 0) return token;
					else return token.replace(/^\s+/, "");
				}).join("");
			}
			postProcess(changes, options) {
				if (!changes || options.oneChangePerToken) return changes;
				let lastKeep = null;
				let insertion = null;
				let deletion = null;
				changes.forEach((change) => {
					if (change.added) insertion = change;
					else if (change.removed) deletion = change;
					else {
						if (insertion || deletion) dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, change, options.intlSegmenter);
						lastKeep = change;
						insertion = null;
						deletion = null;
					}
				});
				if (insertion || deletion) dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, null, options.intlSegmenter);
				return changes;
			}
		};
		new WordDiff();
		function dedupeWhitespaceInChangeObjects(startKeep, deletion, insertion, endKeep, segmenter) {
			if (deletion && insertion) {
				const [oldWsPrefix, oldWsSuffix] = leadingAndTrailingWs(deletion.value, segmenter);
				const [newWsPrefix, newWsSuffix] = leadingAndTrailingWs(insertion.value, segmenter);
				if (startKeep) {
					const commonWsPrefix = longestCommonPrefix(oldWsPrefix, newWsPrefix);
					startKeep.value = replaceSuffix(startKeep.value, newWsPrefix, commonWsPrefix);
					deletion.value = removePrefix(deletion.value, commonWsPrefix);
					insertion.value = removePrefix(insertion.value, commonWsPrefix);
				}
				if (endKeep) {
					const commonWsSuffix = longestCommonSuffix(oldWsSuffix, newWsSuffix);
					endKeep.value = replacePrefix(endKeep.value, newWsSuffix, commonWsSuffix);
					deletion.value = removeSuffix(deletion.value, commonWsSuffix);
					insertion.value = removeSuffix(insertion.value, commonWsSuffix);
				}
			} else if (insertion) {
				if (startKeep) {
					const ws = leadingWs(insertion.value, segmenter);
					insertion.value = insertion.value.substring(ws.length);
				}
				if (endKeep) {
					const ws = leadingWs(endKeep.value, segmenter);
					endKeep.value = endKeep.value.substring(ws.length);
				}
			} else if (startKeep && endKeep) {
				const newWsFull = leadingWs(endKeep.value, segmenter), [delWsStart, delWsEnd] = leadingAndTrailingWs(deletion.value, segmenter);
				const newWsStart = longestCommonPrefix(newWsFull, delWsStart);
				deletion.value = removePrefix(deletion.value, newWsStart);
				const newWsEnd = longestCommonSuffix(removePrefix(newWsFull, newWsStart), delWsEnd);
				deletion.value = removeSuffix(deletion.value, newWsEnd);
				endKeep.value = replacePrefix(endKeep.value, newWsFull, newWsEnd);
				startKeep.value = replaceSuffix(startKeep.value, newWsFull, newWsFull.slice(0, newWsFull.length - newWsEnd.length));
			} else if (endKeep) {
				const endKeepWsPrefix = leadingWs(endKeep.value, segmenter);
				const overlap = maximumOverlap(trailingWs(deletion.value, segmenter), endKeepWsPrefix);
				deletion.value = removeSuffix(deletion.value, overlap);
			} else if (startKeep) {
				const overlap = maximumOverlap(trailingWs(startKeep.value, segmenter), leadingWs(deletion.value, segmenter));
				deletion.value = removePrefix(deletion.value, overlap);
			}
		}
		var WordsWithSpaceDiff = class extends Diff {
			tokenize(value) {
				const regex = new RegExp(`(\\r?\\n)|[${extendedWordChars}]+|[^\\S\\n\\r]+|[^${extendedWordChars}]`, "ug");
				return value.match(regex) || [];
			}
		};
		const wordsWithSpaceDiff = new WordsWithSpaceDiff();
		function diffWordsWithSpace(oldStr, newStr, options) {
			return wordsWithSpaceDiff.diff(oldStr, newStr, options);
		}
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/diff/line.js
		var LineDiff = class extends Diff {
			constructor() {
				super(...arguments);
				this.tokenize = tokenize;
			}
			equals(left, right, options) {
				if (options.ignoreWhitespace) {
					if (!options.newlineIsToken || !left.includes("\n")) left = left.trim();
					if (!options.newlineIsToken || !right.includes("\n")) right = right.trim();
				} else if (options.ignoreNewlineAtEof && !options.newlineIsToken) {
					if (left.endsWith("\n")) left = left.slice(0, -1);
					if (right.endsWith("\n")) right = right.slice(0, -1);
				}
				return super.equals(left, right, options);
			}
		};
		const lineDiff = new LineDiff();
		function diffLines(oldStr, newStr, options) {
			return lineDiff.diff(oldStr, newStr, options);
		}
		function tokenize(value, options) {
			if (options.stripTrailingCr) value = value.replace(/\r\n/g, "\n");
			const retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
			if (!linesAndNewlines[linesAndNewlines.length - 1]) linesAndNewlines.pop();
			for (let i = 0; i < linesAndNewlines.length; i++) {
				const line = linesAndNewlines[i];
				if (i % 2 && !options.newlineIsToken) retLines[retLines.length - 1] += line;
				else retLines.push(line);
			}
			return retLines;
		}
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/diff/sentence.js
		function isSentenceEndPunct(char) {
			return char == "." || char == "!" || char == "?";
		}
		var SentenceDiff = class extends Diff {
			tokenize(value) {
				var _a;
				const result = [];
				let tokenStartI = 0;
				for (let i = 0; i < value.length; i++) {
					if (i == value.length - 1) {
						result.push(value.slice(tokenStartI));
						break;
					}
					if (isSentenceEndPunct(value[i]) && value[i + 1].match(/\s/)) {
						result.push(value.slice(tokenStartI, i + 1));
						i = tokenStartI = i + 1;
						while ((_a = value[i + 1]) === null || _a === void 0 ? void 0 : _a.match(/\s/)) i++;
						result.push(value.slice(tokenStartI, i + 1));
						tokenStartI = i + 1;
					}
				}
				return result;
			}
		};
		new SentenceDiff();
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/diff/css.js
		var CssDiff = class extends Diff {
			tokenize(value) {
				return value.split(/([{}:;,]|\s+)/);
			}
		};
		new CssDiff();
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/diff/json.js
		var JsonDiff = class extends Diff {
			constructor() {
				super(...arguments);
				this.tokenize = tokenize;
			}
			get useLongestToken() {
				return true;
			}
			castInput(value, options) {
				const { undefinedReplacement, stringifyReplacer = (k, v) => typeof v === "undefined" ? undefinedReplacement : v } = options;
				return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), null, "  ");
			}
			equals(left, right, options) {
				return super.equals(left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"), options);
			}
		};
		new JsonDiff();
		function canonicalize(obj, stack, replacementStack, replacer, key) {
			stack = stack || [];
			replacementStack = replacementStack || [];
			if (replacer) obj = replacer(key === void 0 ? "" : key, obj);
			let i;
			for (i = 0; i < stack.length; i += 1) if (stack[i] === obj) return replacementStack[i];
			let canonicalizedObj;
			if ("[object Array]" === Object.prototype.toString.call(obj)) {
				stack.push(obj);
				canonicalizedObj = new Array(obj.length);
				replacementStack.push(canonicalizedObj);
				for (i = 0; i < obj.length; i += 1) canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, String(i));
				stack.pop();
				replacementStack.pop();
				return canonicalizedObj;
			}
			if (obj && obj.toJSON) obj = obj.toJSON();
			if (typeof obj === "object" && obj !== null) {
				stack.push(obj);
				canonicalizedObj = {};
				replacementStack.push(canonicalizedObj);
				const sortedKeys = [];
				let key;
				for (key in obj)
 /* istanbul ignore else */
				if (Object.prototype.hasOwnProperty.call(obj, key)) sortedKeys.push(key);
				sortedKeys.sort();
				for (i = 0; i < sortedKeys.length; i += 1) {
					key = sortedKeys[i];
					canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack, replacer, key);
				}
				stack.pop();
				replacementStack.pop();
			} else canonicalizedObj = obj;
			return canonicalizedObj;
		}
		//#endregion
		//#region node_modules/.pnpm/diff@8.0.4/node_modules/diff/libesm/diff/array.js
		var ArrayDiff = class extends Diff {
			tokenize(value) {
				return value.slice();
			}
			join(value) {
				return value;
			}
			removeEmpty(value) {
				return value;
			}
		};
		new ArrayDiff();
		//#endregion
		//#region node_modules/.pnpm/@shikijs+types@4.4.3/node_modules/@shikijs/types/dist/index.mjs
		var ShikiError = class extends Error {
			constructor(message) {
				super(message);
				this.name = "ShikiError";
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js
		function clone(something) {
			return doClone(something);
		}
		function doClone(something) {
			if (Array.isArray(something)) return cloneArray(something);
			if (something instanceof RegExp) return something;
			if (typeof something === "object") return cloneObj(something);
			return something;
		}
		function cloneArray(arr) {
			let r = [];
			for (let i = 0, len = arr.length; i < len; i++) r[i] = doClone(arr[i]);
			return r;
		}
		function cloneObj(obj) {
			let r = {};
			for (let key in obj) r[key] = doClone(obj[key]);
			return r;
		}
		function mergeObjects(target, ...sources) {
			sources.forEach((source) => {
				for (let key in source) target[key] = source[key];
			});
			return target;
		}
		function basename(path) {
			const idx = ~path.lastIndexOf("/") || ~path.lastIndexOf("\\");
			if (idx === 0) return path;
			else if (~idx === path.length - 1) return basename(path.substring(0, path.length - 1));
			else return path.substr(~idx + 1);
		}
		var CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
		var RegexSource = class {
			static hasCaptures(regexSource) {
				if (regexSource === null) return false;
				CAPTURING_REGEX_SOURCE.lastIndex = 0;
				return CAPTURING_REGEX_SOURCE.test(regexSource);
			}
			static replaceCaptures(regexSource, captureSource, captureIndices) {
				return regexSource.replace(CAPTURING_REGEX_SOURCE, (match, index, commandIndex, command) => {
					let capture = captureIndices[parseInt(index || commandIndex, 10)];
					if (capture) {
						let result = captureSource.substring(capture.start, capture.end);
						while (result[0] === ".") result = result.substring(1);
						switch (command) {
							case "downcase": return result.toLowerCase();
							case "upcase": return result.toUpperCase();
							default: return result;
						}
					} else return match;
				});
			}
		};
		function strcmp(a, b) {
			if (a < b) return -1;
			if (a > b) return 1;
			return 0;
		}
		function strArrCmp(a, b) {
			if (a === null && b === null) return 0;
			if (!a) return -1;
			if (!b) return 1;
			let len1 = a.length;
			let len2 = b.length;
			if (len1 === len2) {
				for (let i = 0; i < len1; i++) {
					let res = strcmp(a[i], b[i]);
					if (res !== 0) return res;
				}
				return 0;
			}
			return len1 - len2;
		}
		function isValidHexColor(hex) {
			if (/^#[0-9a-f]{6}$/i.test(hex)) return true;
			if (/^#[0-9a-f]{8}$/i.test(hex)) return true;
			if (/^#[0-9a-f]{3}$/i.test(hex)) return true;
			if (/^#[0-9a-f]{4}$/i.test(hex)) return true;
			return false;
		}
		function escapeRegExpCharacters(value) {
			return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
		}
		var CachedFn = class {
			constructor(fn) {
				this.fn = fn;
			}
			cache = /* @__PURE__ */ new Map();
			get(key) {
				if (this.cache.has(key)) return this.cache.get(key);
				const value = this.fn(key);
				this.cache.set(key, value);
				return value;
			}
		};
		var Theme = class {
			constructor(_colorMap, _defaults, _root) {
				this._colorMap = _colorMap;
				this._defaults = _defaults;
				this._root = _root;
			}
			static createFromRawTheme(source, colorMap) {
				return this.createFromParsedTheme(parseTheme(source), colorMap);
			}
			static createFromParsedTheme(source, colorMap) {
				return resolveParsedThemeRules(source, colorMap);
			}
			_cachedMatchRoot = new CachedFn((scopeName) => this._root.match(scopeName));
			getColorMap() {
				return this._colorMap.getColorMap();
			}
			getDefaults() {
				return this._defaults;
			}
			match(scopePath) {
				if (scopePath === null) return this._defaults;
				const scopeName = scopePath.scopeName;
				const effectiveRule = this._cachedMatchRoot.get(scopeName).find((v) => _scopePathMatchesParentScopes(scopePath.parent, v.parentScopes));
				if (!effectiveRule) return null;
				return new StyleAttributes(effectiveRule.fontStyle, effectiveRule.foreground, effectiveRule.background);
			}
		};
		var ScopeStack = class _ScopeStack {
			constructor(parent, scopeName) {
				this.parent = parent;
				this.scopeName = scopeName;
			}
			static push(path, scopeNames) {
				for (const name of scopeNames) path = new _ScopeStack(path, name);
				return path;
			}
			static from(...segments) {
				let result = null;
				for (let i = 0; i < segments.length; i++) result = new _ScopeStack(result, segments[i]);
				return result;
			}
			push(scopeName) {
				return new _ScopeStack(this, scopeName);
			}
			getSegments() {
				let item = this;
				const result = [];
				while (item) {
					result.push(item.scopeName);
					item = item.parent;
				}
				result.reverse();
				return result;
			}
			toString() {
				return this.getSegments().join(" ");
			}
			extends(other) {
				if (this === other) return true;
				if (this.parent === null) return false;
				return this.parent.extends(other);
			}
			getExtensionIfDefined(base) {
				const result = [];
				let item = this;
				while (item && item !== base) {
					result.push(item.scopeName);
					item = item.parent;
				}
				return item === base ? result.reverse() : void 0;
			}
		};
		function _scopePathMatchesParentScopes(scopePath, parentScopes) {
			if (parentScopes.length === 0) return true;
			for (let index = 0; index < parentScopes.length; index++) {
				let scopePattern = parentScopes[index];
				let scopeMustMatch = false;
				if (scopePattern === ">") {
					if (index === parentScopes.length - 1) return false;
					scopePattern = parentScopes[++index];
					scopeMustMatch = true;
				}
				while (scopePath) {
					if (_matchesScope(scopePath.scopeName, scopePattern)) break;
					if (scopeMustMatch) return false;
					scopePath = scopePath.parent;
				}
				if (!scopePath) return false;
				scopePath = scopePath.parent;
			}
			return true;
		}
		function _matchesScope(scopeName, scopePattern) {
			return scopePattern === scopeName || scopeName.startsWith(scopePattern) && scopeName[scopePattern.length] === ".";
		}
		var StyleAttributes = class {
			constructor(fontStyle, foregroundId, backgroundId) {
				this.fontStyle = fontStyle;
				this.foregroundId = foregroundId;
				this.backgroundId = backgroundId;
			}
		};
		function parseTheme(source) {
			if (!source) return [];
			if (!source.settings || !Array.isArray(source.settings)) return [];
			let settings = source.settings;
			let result = [], resultLen = 0;
			for (let i = 0, len = settings.length; i < len; i++) {
				let entry = settings[i];
				if (!entry.settings) continue;
				let scopes;
				if (typeof entry.scope === "string") {
					let _scope = entry.scope;
					_scope = _scope.replace(/^[,]+/, "");
					_scope = _scope.replace(/[,]+$/, "");
					scopes = _scope.split(",");
				} else if (Array.isArray(entry.scope)) scopes = entry.scope;
				else scopes = [""];
				let fontStyle = -1;
				if (typeof entry.settings.fontStyle === "string") {
					fontStyle = 0;
					let segments = entry.settings.fontStyle.split(" ");
					for (let j = 0, lenJ = segments.length; j < lenJ; j++) switch (segments[j]) {
						case "italic":
							fontStyle = fontStyle | 1;
							break;
						case "bold":
							fontStyle = fontStyle | 2;
							break;
						case "underline":
							fontStyle = fontStyle | 4;
							break;
						case "strikethrough": fontStyle = fontStyle | 8;
					}
				}
				let foreground = null;
				if (typeof entry.settings.foreground === "string" && isValidHexColor(entry.settings.foreground)) foreground = entry.settings.foreground;
				let background = null;
				if (typeof entry.settings.background === "string" && isValidHexColor(entry.settings.background)) background = entry.settings.background;
				for (let j = 0, lenJ = scopes.length; j < lenJ; j++) {
					let segments = scopes[j].trim().split(" ");
					let scope = segments[segments.length - 1];
					let parentScopes = null;
					if (segments.length > 1) {
						parentScopes = segments.slice(0, segments.length - 1);
						parentScopes.reverse();
					}
					result[resultLen++] = new ParsedThemeRule(scope, parentScopes, i, fontStyle, foreground, background);
				}
			}
			return result;
		}
		var ParsedThemeRule = class {
			constructor(scope, parentScopes, index, fontStyle, foreground, background) {
				this.scope = scope;
				this.parentScopes = parentScopes;
				this.index = index;
				this.fontStyle = fontStyle;
				this.foreground = foreground;
				this.background = background;
			}
		};
		var FontStyle = /* @__PURE__ */ ((FontStyle2) => {
			FontStyle2[FontStyle2["NotSet"] = -1] = "NotSet";
			FontStyle2[FontStyle2["None"] = 0] = "None";
			FontStyle2[FontStyle2["Italic"] = 1] = "Italic";
			FontStyle2[FontStyle2["Bold"] = 2] = "Bold";
			FontStyle2[FontStyle2["Underline"] = 4] = "Underline";
			FontStyle2[FontStyle2["Strikethrough"] = 8] = "Strikethrough";
			return FontStyle2;
		})(FontStyle || {});
		function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
			parsedThemeRules.sort((a, b) => {
				let r = strcmp(a.scope, b.scope);
				if (r !== 0) return r;
				r = strArrCmp(a.parentScopes, b.parentScopes);
				if (r !== 0) return r;
				return a.index - b.index;
			});
			let defaultFontStyle = 0;
			let defaultForeground = "#000000";
			let defaultBackground = "#ffffff";
			while (parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === "") {
				let incomingDefaults = parsedThemeRules.shift();
				if (incomingDefaults.fontStyle !== -1) defaultFontStyle = incomingDefaults.fontStyle;
				if (incomingDefaults.foreground !== null) defaultForeground = incomingDefaults.foreground;
				if (incomingDefaults.background !== null) defaultBackground = incomingDefaults.background;
			}
			let colorMap = new ColorMap(_colorMap);
			let defaults = new StyleAttributes(defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground));
			let root = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1, 0, 0), []);
			for (let i = 0, len = parsedThemeRules.length; i < len; i++) {
				let rule = parsedThemeRules[i];
				root.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
			}
			return new Theme(colorMap, defaults, root);
		}
		var ColorMap = class {
			_isFrozen;
			_lastColorId;
			_id2color;
			_color2id;
			constructor(_colorMap) {
				this._lastColorId = 0;
				this._id2color = [];
				this._color2id = /* @__PURE__ */ Object.create(null);
				if (Array.isArray(_colorMap)) {
					this._isFrozen = true;
					for (let i = 0, len = _colorMap.length; i < len; i++) {
						this._color2id[_colorMap[i]] = i;
						this._id2color[i] = _colorMap[i];
					}
				} else this._isFrozen = false;
			}
			getId(color) {
				if (color === null) return 0;
				color = color.toUpperCase();
				let value = this._color2id[color];
				if (value) return value;
				if (this._isFrozen) throw new Error(`Missing color in color map - ${color}`);
				value = ++this._lastColorId;
				this._color2id[color] = value;
				this._id2color[value] = color;
				return value;
			}
			getColorMap() {
				return this._id2color.slice(0);
			}
		};
		var emptyParentScopes = Object.freeze([]);
		var ThemeTrieElementRule = class _ThemeTrieElementRule {
			scopeDepth;
			parentScopes;
			fontStyle;
			foreground;
			background;
			constructor(scopeDepth, parentScopes, fontStyle, foreground, background) {
				this.scopeDepth = scopeDepth;
				this.parentScopes = parentScopes || emptyParentScopes;
				this.fontStyle = fontStyle;
				this.foreground = foreground;
				this.background = background;
			}
			clone() {
				return new _ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
			}
			static cloneArr(arr) {
				let r = [];
				for (let i = 0, len = arr.length; i < len; i++) r[i] = arr[i].clone();
				return r;
			}
			acceptOverwrite(scopeDepth, fontStyle, foreground, background) {
				if (this.scopeDepth > scopeDepth) console.log("how did this happen?");
				else this.scopeDepth = scopeDepth;
				if (fontStyle !== -1) this.fontStyle = fontStyle;
				if (foreground !== 0) this.foreground = foreground;
				if (background !== 0) this.background = background;
			}
		};
		var ThemeTrieElement = class _ThemeTrieElement {
			constructor(_mainRule, rulesWithParentScopes = [], _children = {}) {
				this._mainRule = _mainRule;
				this._children = _children;
				this._rulesWithParentScopes = rulesWithParentScopes;
			}
			_rulesWithParentScopes;
			static _cmpBySpecificity(a, b) {
				if (a.scopeDepth !== b.scopeDepth) return b.scopeDepth - a.scopeDepth;
				let aParentIndex = 0;
				let bParentIndex = 0;
				while (true) {
					if (a.parentScopes[aParentIndex] === ">") aParentIndex++;
					if (b.parentScopes[bParentIndex] === ">") bParentIndex++;
					if (aParentIndex >= a.parentScopes.length || bParentIndex >= b.parentScopes.length) break;
					const parentScopeLengthDiff = b.parentScopes[bParentIndex].length - a.parentScopes[aParentIndex].length;
					if (parentScopeLengthDiff !== 0) return parentScopeLengthDiff;
					aParentIndex++;
					bParentIndex++;
				}
				return b.parentScopes.length - a.parentScopes.length;
			}
			match(scope) {
				if (scope !== "") {
					let dotIndex = scope.indexOf(".");
					let head;
					let tail;
					if (dotIndex === -1) {
						head = scope;
						tail = "";
					} else {
						head = scope.substring(0, dotIndex);
						tail = scope.substring(dotIndex + 1);
					}
					if (this._children.hasOwnProperty(head)) return this._children[head].match(tail);
				}
				const rules = this._rulesWithParentScopes.concat(this._mainRule);
				rules.sort(_ThemeTrieElement._cmpBySpecificity);
				return rules;
			}
			insert(scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
				if (scope === "") {
					this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
					return;
				}
				let dotIndex = scope.indexOf(".");
				let head;
				let tail;
				if (dotIndex === -1) {
					head = scope;
					tail = "";
				} else {
					head = scope.substring(0, dotIndex);
					tail = scope.substring(dotIndex + 1);
				}
				let child;
				if (this._children.hasOwnProperty(head)) child = this._children[head];
				else {
					child = new _ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes));
					this._children[head] = child;
				}
				child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
			}
			_doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background) {
				if (parentScopes === null) {
					this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
					return;
				}
				for (let i = 0, len = this._rulesWithParentScopes.length; i < len; i++) {
					let rule = this._rulesWithParentScopes[i];
					if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
						rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
						return;
					}
				}
				if (fontStyle === -1) fontStyle = this._mainRule.fontStyle;
				if (foreground === 0) foreground = this._mainRule.foreground;
				if (background === 0) background = this._mainRule.background;
				this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
			}
		};
		var EncodedTokenMetadata = class _EncodedTokenMetadata {
			static toBinaryStr(encodedTokenAttributes) {
				return encodedTokenAttributes.toString(2).padStart(32, "0");
			}
			static print(encodedTokenAttributes) {
				const languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
				const tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
				const fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
				const foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
				const background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
				console.log({
					languageId,
					tokenType,
					fontStyle,
					foreground,
					background
				});
			}
			static getLanguageId(encodedTokenAttributes) {
				return (encodedTokenAttributes & 255) >>> 0;
			}
			static getTokenType(encodedTokenAttributes) {
				return (encodedTokenAttributes & 768) >>> 8;
			}
			static containsBalancedBrackets(encodedTokenAttributes) {
				return (encodedTokenAttributes & 1024) !== 0;
			}
			static getFontStyle(encodedTokenAttributes) {
				return (encodedTokenAttributes & 30720) >>> 11;
			}
			static getForeground(encodedTokenAttributes) {
				return (encodedTokenAttributes & 16744448) >>> 15;
			}
			static getBackground(encodedTokenAttributes) {
				return (encodedTokenAttributes & 4278190080) >>> 24;
			}
			/**
			* Updates the fields in `metadata`.
			* A value of `0`, `NotSet` or `null` indicates that the corresponding field should be left as is.
			*/
			static set(encodedTokenAttributes, languageId, tokenType, containsBalancedBrackets, fontStyle, foreground, background) {
				let _languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
				let _tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
				let _containsBalancedBracketsBit = _EncodedTokenMetadata.containsBalancedBrackets(encodedTokenAttributes) ? 1 : 0;
				let _fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
				let _foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
				let _background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
				if (languageId !== 0) _languageId = languageId;
				if (tokenType !== 8) _tokenType = fromOptionalTokenType(tokenType);
				if (containsBalancedBrackets !== null) _containsBalancedBracketsBit = containsBalancedBrackets ? 1 : 0;
				if (fontStyle !== -1) _fontStyle = fontStyle;
				if (foreground !== 0) _foreground = foreground;
				if (background !== 0) _background = background;
				return (_languageId << 0 | _tokenType << 8 | _containsBalancedBracketsBit << 10 | _fontStyle << 11 | _foreground << 15 | _background << 24) >>> 0;
			}
		};
		function toOptionalTokenType(standardType) {
			return standardType;
		}
		function fromOptionalTokenType(standardType) {
			return standardType;
		}
		function createMatchers(selector, matchesName) {
			const results = [];
			const tokenizer = newTokenizer(selector);
			let token = tokenizer.next();
			while (token !== null) {
				let priority = 0;
				if (token.length === 2 && token.charAt(1) === ":") {
					switch (token.charAt(0)) {
						case "R":
							priority = 1;
							break;
						case "L":
							priority = -1;
							break;
						default: console.log(`Unknown priority ${token} in scope selector`);
					}
					token = tokenizer.next();
				}
				let matcher = parseConjunction();
				results.push({
					matcher,
					priority
				});
				if (token !== ",") break;
				token = tokenizer.next();
			}
			return results;
			function parseOperand() {
				if (token === "-") {
					token = tokenizer.next();
					const expressionToNegate = parseOperand();
					return (matcherInput) => !!expressionToNegate && !expressionToNegate(matcherInput);
				}
				if (token === "(") {
					token = tokenizer.next();
					const expressionInParents = parseInnerExpression();
					if (token === ")") token = tokenizer.next();
					return expressionInParents;
				}
				if (isIdentifier(token)) {
					const identifiers = [];
					do {
						identifiers.push(token);
						token = tokenizer.next();
					} while (isIdentifier(token));
					return (matcherInput) => matchesName(identifiers, matcherInput);
				}
				return null;
			}
			function parseConjunction() {
				const matchers = [];
				let matcher = parseOperand();
				while (matcher) {
					matchers.push(matcher);
					matcher = parseOperand();
				}
				return (matcherInput) => matchers.every((matcher2) => matcher2(matcherInput));
			}
			function parseInnerExpression() {
				const matchers = [];
				let matcher = parseConjunction();
				while (matcher) {
					matchers.push(matcher);
					if (token === "|" || token === ",") do
						token = tokenizer.next();
					while (token === "|" || token === ",");
					else break;
					matcher = parseConjunction();
				}
				return (matcherInput) => matchers.some((matcher2) => matcher2(matcherInput));
			}
		}
		function isIdentifier(token) {
			return !!token && !!token.match(/[\w\.:]+/);
		}
		function newTokenizer(input) {
			let regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
			let match = regex.exec(input);
			return { next: () => {
				if (!match) return null;
				const res = match[0];
				match = regex.exec(input);
				return res;
			} };
		}
		function disposeOnigString(str) {
			if (typeof str.dispose === "function") str.dispose();
		}
		var TopLevelRuleReference = class {
			constructor(scopeName) {
				this.scopeName = scopeName;
			}
			toKey() {
				return this.scopeName;
			}
		};
		var TopLevelRepositoryRuleReference = class {
			constructor(scopeName, ruleName) {
				this.scopeName = scopeName;
				this.ruleName = ruleName;
			}
			toKey() {
				return `${this.scopeName}#${this.ruleName}`;
			}
		};
		var ExternalReferenceCollector = class {
			_references = [];
			_seenReferenceKeys = /* @__PURE__ */ new Set();
			get references() {
				return this._references;
			}
			visitedRule = /* @__PURE__ */ new Set();
			add(reference) {
				const key = reference.toKey();
				if (this._seenReferenceKeys.has(key)) return;
				this._seenReferenceKeys.add(key);
				this._references.push(reference);
			}
		};
		var ScopeDependencyProcessor = class {
			constructor(repo, initialScopeName) {
				this.repo = repo;
				this.initialScopeName = initialScopeName;
				this.seenFullScopeRequests.add(this.initialScopeName);
				this.Q = [new TopLevelRuleReference(this.initialScopeName)];
			}
			seenFullScopeRequests = /* @__PURE__ */ new Set();
			seenPartialScopeRequests = /* @__PURE__ */ new Set();
			Q;
			processQueue() {
				const q = this.Q;
				this.Q = [];
				const deps = new ExternalReferenceCollector();
				for (const dep of q) collectReferencesOfReference(dep, this.initialScopeName, this.repo, deps);
				for (const dep of deps.references) if (dep instanceof TopLevelRuleReference) {
					if (this.seenFullScopeRequests.has(dep.scopeName)) continue;
					this.seenFullScopeRequests.add(dep.scopeName);
					this.Q.push(dep);
				} else {
					if (this.seenFullScopeRequests.has(dep.scopeName)) continue;
					if (this.seenPartialScopeRequests.has(dep.toKey())) continue;
					this.seenPartialScopeRequests.add(dep.toKey());
					this.Q.push(dep);
				}
			}
		};
		function collectReferencesOfReference(reference, baseGrammarScopeName, repo, result) {
			const selfGrammar = repo.lookup(reference.scopeName);
			if (!selfGrammar) {
				if (reference.scopeName === baseGrammarScopeName) throw new Error(`No grammar provided for <${baseGrammarScopeName}>`);
				return;
			}
			const baseGrammar = repo.lookup(baseGrammarScopeName);
			if (reference instanceof TopLevelRuleReference) collectExternalReferencesInTopLevelRule({
				baseGrammar,
				selfGrammar
			}, result);
			else collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, {
				baseGrammar,
				selfGrammar,
				repository: selfGrammar.repository
			}, result);
			const injections = repo.injections(reference.scopeName);
			if (injections) for (const injection of injections) result.add(new TopLevelRuleReference(injection));
		}
		function collectExternalReferencesInTopLevelRepositoryRule(ruleName, context, result) {
			if (context.repository && context.repository[ruleName]) {
				const rule = context.repository[ruleName];
				collectExternalReferencesInRules([rule], context, result);
			}
		}
		function collectExternalReferencesInTopLevelRule(context, result) {
			if (context.selfGrammar.patterns && Array.isArray(context.selfGrammar.patterns)) collectExternalReferencesInRules(context.selfGrammar.patterns, {
				...context,
				repository: context.selfGrammar.repository
			}, result);
			if (context.selfGrammar.injections) collectExternalReferencesInRules(Object.values(context.selfGrammar.injections), {
				...context,
				repository: context.selfGrammar.repository
			}, result);
		}
		function collectExternalReferencesInRules(rules, context, result) {
			for (const rule of rules) {
				if (result.visitedRule.has(rule)) continue;
				result.visitedRule.add(rule);
				const patternRepository = rule.repository ? mergeObjects({}, context.repository, rule.repository) : context.repository;
				if (Array.isArray(rule.patterns)) collectExternalReferencesInRules(rule.patterns, {
					...context,
					repository: patternRepository
				}, result);
				const include = rule.include;
				if (!include) continue;
				const reference = parseInclude(include);
				switch (reference.kind) {
					case 0:
						collectExternalReferencesInTopLevelRule({
							...context,
							selfGrammar: context.baseGrammar
						}, result);
						break;
					case 1:
						collectExternalReferencesInTopLevelRule(context, result);
						break;
					case 2:
						collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, {
							...context,
							repository: patternRepository
						}, result);
						break;
					case 3:
					case 4:
						const selfGrammar = reference.scopeName === context.selfGrammar.scopeName ? context.selfGrammar : reference.scopeName === context.baseGrammar.scopeName ? context.baseGrammar : void 0;
						if (selfGrammar) {
							const newContext = {
								baseGrammar: context.baseGrammar,
								selfGrammar,
								repository: patternRepository
							};
							if (reference.kind === 4) collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, newContext, result);
							else collectExternalReferencesInTopLevelRule(newContext, result);
						} else if (reference.kind === 4) result.add(new TopLevelRepositoryRuleReference(reference.scopeName, reference.ruleName));
						else result.add(new TopLevelRuleReference(reference.scopeName));
				}
			}
		}
		var BaseReference = class {
			kind = 0;
		};
		var SelfReference = class {
			kind = 1;
		};
		var RelativeReference = class {
			constructor(ruleName) {
				this.ruleName = ruleName;
			}
			kind = 2;
		};
		var TopLevelReference = class {
			constructor(scopeName) {
				this.scopeName = scopeName;
			}
			kind = 3;
		};
		var TopLevelRepositoryReference = class {
			constructor(scopeName, ruleName) {
				this.scopeName = scopeName;
				this.ruleName = ruleName;
			}
			kind = 4;
		};
		function parseInclude(include) {
			if (include === "$base") return new BaseReference();
			else if (include === "$self") return new SelfReference();
			const indexOfSharp = include.indexOf("#");
			if (indexOfSharp === -1) return new TopLevelReference(include);
			else if (indexOfSharp === 0) return new RelativeReference(include.substring(1));
			else return new TopLevelRepositoryReference(include.substring(0, indexOfSharp), include.substring(indexOfSharp + 1));
		}
		var HAS_BACK_REFERENCES = /\\(\d+)/;
		var BACK_REFERENCING_END = /\\(\d+)/g;
		var endRuleId = -1;
		var whileRuleId = -2;
		function ruleIdFromNumber(id) {
			return id;
		}
		function ruleIdToNumber(id) {
			return id;
		}
		var Rule = class {
			$location;
			id;
			_nameIsCapturing;
			_name;
			_contentNameIsCapturing;
			_contentName;
			constructor($location, id, name, contentName) {
				this.$location = $location;
				this.id = id;
				this._name = name || null;
				this._nameIsCapturing = RegexSource.hasCaptures(this._name);
				this._contentName = contentName || null;
				this._contentNameIsCapturing = RegexSource.hasCaptures(this._contentName);
			}
			get debugName() {
				const location = this.$location ? `${basename(this.$location.filename)}:${this.$location.line}` : "unknown";
				return `${this.constructor.name}#${this.id} @ ${location}`;
			}
			getName(lineText, captureIndices) {
				if (!this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null) return this._name;
				return RegexSource.replaceCaptures(this._name, lineText, captureIndices);
			}
			getContentName(lineText, captureIndices) {
				if (!this._contentNameIsCapturing || this._contentName === null) return this._contentName;
				return RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
			}
		};
		var CaptureRule = class extends Rule {
			retokenizeCapturedWithRuleId;
			constructor($location, id, name, contentName, retokenizeCapturedWithRuleId) {
				super($location, id, name, contentName);
				this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
			}
			dispose() {}
			collectPatterns(grammar, out) {
				throw new Error("Not supported!");
			}
			compile(grammar, endRegexSource) {
				throw new Error("Not supported!");
			}
			compileAG(grammar, endRegexSource, allowA, allowG) {
				throw new Error("Not supported!");
			}
		};
		var MatchRule = class extends Rule {
			_match;
			captures;
			_cachedCompiledPatterns;
			constructor($location, id, name, match, captures) {
				super($location, id, name, null);
				this._match = new RegExpSource(match, this.id);
				this.captures = captures;
				this._cachedCompiledPatterns = null;
			}
			dispose() {
				if (this._cachedCompiledPatterns) {
					this._cachedCompiledPatterns.dispose();
					this._cachedCompiledPatterns = null;
				}
			}
			get debugMatchRegExp() {
				return `${this._match.source}`;
			}
			collectPatterns(grammar, out) {
				out.push(this._match);
			}
			compile(grammar, endRegexSource) {
				return this._getCachedCompiledPatterns(grammar).compile(grammar);
			}
			compileAG(grammar, endRegexSource, allowA, allowG) {
				return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
			}
			_getCachedCompiledPatterns(grammar) {
				if (!this._cachedCompiledPatterns) {
					this._cachedCompiledPatterns = new RegExpSourceList();
					this.collectPatterns(grammar, this._cachedCompiledPatterns);
				}
				return this._cachedCompiledPatterns;
			}
		};
		var IncludeOnlyRule = class extends Rule {
			hasMissingPatterns;
			patterns;
			_cachedCompiledPatterns;
			constructor($location, id, name, contentName, patterns) {
				super($location, id, name, contentName);
				this.patterns = patterns.patterns;
				this.hasMissingPatterns = patterns.hasMissingPatterns;
				this._cachedCompiledPatterns = null;
			}
			dispose() {
				if (this._cachedCompiledPatterns) {
					this._cachedCompiledPatterns.dispose();
					this._cachedCompiledPatterns = null;
				}
			}
			collectPatterns(grammar, out) {
				for (const pattern of this.patterns) grammar.getRule(pattern).collectPatterns(grammar, out);
			}
			compile(grammar, endRegexSource) {
				return this._getCachedCompiledPatterns(grammar).compile(grammar);
			}
			compileAG(grammar, endRegexSource, allowA, allowG) {
				return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
			}
			_getCachedCompiledPatterns(grammar) {
				if (!this._cachedCompiledPatterns) {
					this._cachedCompiledPatterns = new RegExpSourceList();
					this.collectPatterns(grammar, this._cachedCompiledPatterns);
				}
				return this._cachedCompiledPatterns;
			}
		};
		var BeginEndRule = class extends Rule {
			_begin;
			beginCaptures;
			_end;
			endHasBackReferences;
			endCaptures;
			applyEndPatternLast;
			hasMissingPatterns;
			patterns;
			_cachedCompiledPatterns;
			constructor($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns) {
				super($location, id, name, contentName);
				this._begin = new RegExpSource(begin, this.id);
				this.beginCaptures = beginCaptures;
				this._end = new RegExpSource(end ? end : "￿", -1);
				this.endHasBackReferences = this._end.hasBackReferences;
				this.endCaptures = endCaptures;
				this.applyEndPatternLast = applyEndPatternLast || false;
				this.patterns = patterns.patterns;
				this.hasMissingPatterns = patterns.hasMissingPatterns;
				this._cachedCompiledPatterns = null;
			}
			dispose() {
				if (this._cachedCompiledPatterns) {
					this._cachedCompiledPatterns.dispose();
					this._cachedCompiledPatterns = null;
				}
			}
			get debugBeginRegExp() {
				return `${this._begin.source}`;
			}
			get debugEndRegExp() {
				return `${this._end.source}`;
			}
			getEndWithResolvedBackReferences(lineText, captureIndices) {
				return this._end.resolveBackReferences(lineText, captureIndices);
			}
			collectPatterns(grammar, out) {
				out.push(this._begin);
			}
			compile(grammar, endRegexSource) {
				return this._getCachedCompiledPatterns(grammar, endRegexSource).compile(grammar);
			}
			compileAG(grammar, endRegexSource, allowA, allowG) {
				return this._getCachedCompiledPatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
			}
			_getCachedCompiledPatterns(grammar, endRegexSource) {
				if (!this._cachedCompiledPatterns) {
					this._cachedCompiledPatterns = new RegExpSourceList();
					for (const pattern of this.patterns) grammar.getRule(pattern).collectPatterns(grammar, this._cachedCompiledPatterns);
					if (this.applyEndPatternLast) this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end);
					else this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
				}
				if (this._end.hasBackReferences) {
					if (this.applyEndPatternLast) this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource);
					else this._cachedCompiledPatterns.setSource(0, endRegexSource);
				}
				return this._cachedCompiledPatterns;
			}
		};
		var BeginWhileRule = class extends Rule {
			_begin;
			beginCaptures;
			whileCaptures;
			_while;
			whileHasBackReferences;
			hasMissingPatterns;
			patterns;
			_cachedCompiledPatterns;
			_cachedCompiledWhilePatterns;
			constructor($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns) {
				super($location, id, name, contentName);
				this._begin = new RegExpSource(begin, this.id);
				this.beginCaptures = beginCaptures;
				this.whileCaptures = whileCaptures;
				this._while = new RegExpSource(_while, whileRuleId);
				this.whileHasBackReferences = this._while.hasBackReferences;
				this.patterns = patterns.patterns;
				this.hasMissingPatterns = patterns.hasMissingPatterns;
				this._cachedCompiledPatterns = null;
				this._cachedCompiledWhilePatterns = null;
			}
			dispose() {
				if (this._cachedCompiledPatterns) {
					this._cachedCompiledPatterns.dispose();
					this._cachedCompiledPatterns = null;
				}
				if (this._cachedCompiledWhilePatterns) {
					this._cachedCompiledWhilePatterns.dispose();
					this._cachedCompiledWhilePatterns = null;
				}
			}
			get debugBeginRegExp() {
				return `${this._begin.source}`;
			}
			get debugWhileRegExp() {
				return `${this._while.source}`;
			}
			getWhileWithResolvedBackReferences(lineText, captureIndices) {
				return this._while.resolveBackReferences(lineText, captureIndices);
			}
			collectPatterns(grammar, out) {
				out.push(this._begin);
			}
			compile(grammar, endRegexSource) {
				return this._getCachedCompiledPatterns(grammar).compile(grammar);
			}
			compileAG(grammar, endRegexSource, allowA, allowG) {
				return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
			}
			_getCachedCompiledPatterns(grammar) {
				if (!this._cachedCompiledPatterns) {
					this._cachedCompiledPatterns = new RegExpSourceList();
					for (const pattern of this.patterns) grammar.getRule(pattern).collectPatterns(grammar, this._cachedCompiledPatterns);
				}
				return this._cachedCompiledPatterns;
			}
			compileWhile(grammar, endRegexSource) {
				return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compile(grammar);
			}
			compileWhileAG(grammar, endRegexSource, allowA, allowG) {
				return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
			}
			_getCachedCompiledWhilePatterns(grammar, endRegexSource) {
				if (!this._cachedCompiledWhilePatterns) {
					this._cachedCompiledWhilePatterns = new RegExpSourceList();
					this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while);
				}
				if (this._while.hasBackReferences) this._cachedCompiledWhilePatterns.setSource(0, endRegexSource ? endRegexSource : "￿");
				return this._cachedCompiledWhilePatterns;
			}
		};
		var RuleFactory = class _RuleFactory {
			static createCaptureRule(helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
				return helper.registerRule((id) => {
					return new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId);
				});
			}
			static getCompiledRuleId(desc, helper, repository) {
				if (!desc.id) helper.registerRule((id) => {
					desc.id = id;
					if (desc.match) return new MatchRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.match, _RuleFactory._compileCaptures(desc.captures, helper, repository));
					if (typeof desc.begin === "undefined") {
						if (desc.repository) repository = mergeObjects({}, repository, desc.repository);
						let patterns = desc.patterns;
						if (typeof patterns === "undefined" && desc.include) patterns = [{ include: desc.include }];
						return new IncludeOnlyRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, _RuleFactory._compilePatterns(patterns, helper, repository));
					}
					if (desc.while) return new BeginWhileRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.while, _RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository), _RuleFactory._compilePatterns(desc.patterns, helper, repository));
					return new BeginEndRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.end, _RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository), desc.applyEndPatternLast, _RuleFactory._compilePatterns(desc.patterns, helper, repository));
				});
				return desc.id;
			}
			static _compileCaptures(captures, helper, repository) {
				let r = [];
				if (captures) {
					let maximumCaptureId = 0;
					for (const captureId in captures) {
						if (captureId === "$vscodeTextmateLocation") continue;
						const numericCaptureId = parseInt(captureId, 10);
						if (numericCaptureId > maximumCaptureId) maximumCaptureId = numericCaptureId;
					}
					for (let i = 0; i <= maximumCaptureId; i++) r[i] = null;
					for (const captureId in captures) {
						if (captureId === "$vscodeTextmateLocation") continue;
						const numericCaptureId = parseInt(captureId, 10);
						let retokenizeCapturedWithRuleId = 0;
						if (captures[captureId].patterns) retokenizeCapturedWithRuleId = _RuleFactory.getCompiledRuleId(captures[captureId], helper, repository);
						r[numericCaptureId] = _RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
					}
				}
				return r;
			}
			static _compilePatterns(patterns, helper, repository) {
				let r = [];
				if (patterns) for (let i = 0, len = patterns.length; i < len; i++) {
					const pattern = patterns[i];
					let ruleId = -1;
					if (pattern.include) {
						const reference = parseInclude(pattern.include);
						switch (reference.kind) {
							case 0:
							case 1:
								ruleId = _RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
								break;
							case 2:
								let localIncludedRule = repository[reference.ruleName];
								if (localIncludedRule) ruleId = _RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository);
								break;
							case 3:
							case 4:
								const externalGrammarName = reference.scopeName;
								const externalGrammarInclude = reference.kind === 4 ? reference.ruleName : null;
								const externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
								if (externalGrammar) {
									if (externalGrammarInclude) {
										let externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
										if (externalIncludedRule) ruleId = _RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository);
									} else ruleId = _RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
								}
						}
					} else ruleId = _RuleFactory.getCompiledRuleId(pattern, helper, repository);
					if (ruleId !== -1) {
						const rule = helper.getRule(ruleId);
						let skipRule = false;
						if (rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) {
							if (rule.hasMissingPatterns && rule.patterns.length === 0) skipRule = true;
						}
						if (skipRule) continue;
						r.push(ruleId);
					}
				}
				return {
					patterns: r,
					hasMissingPatterns: (patterns ? patterns.length : 0) !== r.length
				};
			}
		};
		var RegExpSource = class _RegExpSource {
			source;
			ruleId;
			hasAnchor;
			hasBackReferences;
			_anchorCache;
			constructor(regExpSource, ruleId) {
				if (regExpSource && typeof regExpSource === "string") {
					const len = regExpSource.length;
					let lastPushedPos = 0;
					let output = [];
					let hasAnchor = false;
					for (let pos = 0; pos < len; pos++) if (regExpSource.charAt(pos) === "\\") {
						if (pos + 1 < len) {
							const nextCh = regExpSource.charAt(pos + 1);
							if (nextCh === "z") {
								output.push(regExpSource.substring(lastPushedPos, pos));
								output.push("$(?!\\n)(?<!\\n)");
								lastPushedPos = pos + 2;
							} else if (nextCh === "A" || nextCh === "G") hasAnchor = true;
							pos++;
						}
					}
					this.hasAnchor = hasAnchor;
					if (lastPushedPos === 0) this.source = regExpSource;
					else {
						output.push(regExpSource.substring(lastPushedPos, len));
						this.source = output.join("");
					}
				} else {
					this.hasAnchor = false;
					this.source = regExpSource;
				}
				if (this.hasAnchor) this._anchorCache = this._buildAnchorCache();
				else this._anchorCache = null;
				this.ruleId = ruleId;
				if (typeof this.source === "string") this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
				else this.hasBackReferences = false;
			}
			clone() {
				return new _RegExpSource(this.source, this.ruleId);
			}
			setSource(newSource) {
				if (this.source === newSource) return;
				this.source = newSource;
				if (this.hasAnchor) this._anchorCache = this._buildAnchorCache();
			}
			resolveBackReferences(lineText, captureIndices) {
				if (typeof this.source !== "string") throw new Error("This method should only be called if the source is a string");
				let capturedValues = captureIndices.map((capture) => {
					return lineText.substring(capture.start, capture.end);
				});
				BACK_REFERENCING_END.lastIndex = 0;
				return this.source.replace(BACK_REFERENCING_END, (match, g1) => {
					return escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || "");
				});
			}
			_buildAnchorCache() {
				if (typeof this.source !== "string") throw new Error("This method should only be called if the source is a string");
				let A0_G0_result = [];
				let A0_G1_result = [];
				let A1_G0_result = [];
				let A1_G1_result = [];
				let pos, len, ch, nextCh;
				for (pos = 0, len = this.source.length; pos < len; pos++) {
					ch = this.source.charAt(pos);
					A0_G0_result[pos] = ch;
					A0_G1_result[pos] = ch;
					A1_G0_result[pos] = ch;
					A1_G1_result[pos] = ch;
					if (ch === "\\") {
						if (pos + 1 < len) {
							nextCh = this.source.charAt(pos + 1);
							if (nextCh === "A") {
								A0_G0_result[pos + 1] = "￿";
								A0_G1_result[pos + 1] = "￿";
								A1_G0_result[pos + 1] = "A";
								A1_G1_result[pos + 1] = "A";
							} else if (nextCh === "G") {
								A0_G0_result[pos + 1] = "￿";
								A0_G1_result[pos + 1] = "G";
								A1_G0_result[pos + 1] = "￿";
								A1_G1_result[pos + 1] = "G";
							} else {
								A0_G0_result[pos + 1] = nextCh;
								A0_G1_result[pos + 1] = nextCh;
								A1_G0_result[pos + 1] = nextCh;
								A1_G1_result[pos + 1] = nextCh;
							}
							pos++;
						}
					}
				}
				return {
					A0_G0: A0_G0_result.join(""),
					A0_G1: A0_G1_result.join(""),
					A1_G0: A1_G0_result.join(""),
					A1_G1: A1_G1_result.join("")
				};
			}
			resolveAnchors(allowA, allowG) {
				if (!this.hasAnchor || !this._anchorCache || typeof this.source !== "string") return this.source;
				if (allowA) {
					if (allowG) return this._anchorCache.A1_G1;
					else return this._anchorCache.A1_G0;
				} else if (allowG) return this._anchorCache.A0_G1;
				else return this._anchorCache.A0_G0;
			}
		};
		var RegExpSourceList = class {
			_items;
			_hasAnchors;
			_cached;
			_anchorCache;
			constructor() {
				this._items = [];
				this._hasAnchors = false;
				this._cached = null;
				this._anchorCache = {
					A0_G0: null,
					A0_G1: null,
					A1_G0: null,
					A1_G1: null
				};
			}
			dispose() {
				this._disposeCaches();
			}
			_disposeCaches() {
				if (this._cached) {
					this._cached.dispose();
					this._cached = null;
				}
				if (this._anchorCache.A0_G0) {
					this._anchorCache.A0_G0.dispose();
					this._anchorCache.A0_G0 = null;
				}
				if (this._anchorCache.A0_G1) {
					this._anchorCache.A0_G1.dispose();
					this._anchorCache.A0_G1 = null;
				}
				if (this._anchorCache.A1_G0) {
					this._anchorCache.A1_G0.dispose();
					this._anchorCache.A1_G0 = null;
				}
				if (this._anchorCache.A1_G1) {
					this._anchorCache.A1_G1.dispose();
					this._anchorCache.A1_G1 = null;
				}
			}
			push(item) {
				this._items.push(item);
				this._hasAnchors = this._hasAnchors || item.hasAnchor;
			}
			unshift(item) {
				this._items.unshift(item);
				this._hasAnchors = this._hasAnchors || item.hasAnchor;
			}
			length() {
				return this._items.length;
			}
			setSource(index, newSource) {
				if (this._items[index].source !== newSource) {
					this._disposeCaches();
					this._items[index].setSource(newSource);
				}
			}
			compile(onigLib) {
				if (!this._cached) {
					let regExps = this._items.map((e) => e.source);
					this._cached = new CompiledRule(onigLib, regExps, this._items.map((e) => e.ruleId));
				}
				return this._cached;
			}
			compileAG(onigLib, allowA, allowG) {
				if (!this._hasAnchors) return this.compile(onigLib);
				else if (allowA) {
					if (allowG) {
						if (!this._anchorCache.A1_G1) this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG);
						return this._anchorCache.A1_G1;
					} else {
						if (!this._anchorCache.A1_G0) this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG);
						return this._anchorCache.A1_G0;
					}
				} else if (allowG) {
					if (!this._anchorCache.A0_G1) this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG);
					return this._anchorCache.A0_G1;
				} else {
					if (!this._anchorCache.A0_G0) this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG);
					return this._anchorCache.A0_G0;
				}
			}
			_resolveAnchors(onigLib, allowA, allowG) {
				return new CompiledRule(onigLib, this._items.map((e) => e.resolveAnchors(allowA, allowG)), this._items.map((e) => e.ruleId));
			}
		};
		var CompiledRule = class {
			constructor(onigLib, regExps, rules) {
				this.regExps = regExps;
				this.rules = rules;
				this.scanner = onigLib.createOnigScanner(regExps);
			}
			scanner;
			dispose() {
				if (typeof this.scanner.dispose === "function") this.scanner.dispose();
			}
			toString() {
				const r = [];
				for (let i = 0, len = this.rules.length; i < len; i++) r.push("   - " + this.rules[i] + ": " + this.regExps[i]);
				return r.join("\n");
			}
			findNextMatchSync(string, startPosition, options) {
				const result = this.scanner.findNextMatchSync(string, startPosition, options);
				if (!result) return null;
				return {
					ruleId: this.rules[result.index],
					captureIndices: result.captureIndices
				};
			}
		};
		var BasicScopeAttributes = class {
			constructor(languageId, tokenType) {
				this.languageId = languageId;
				this.tokenType = tokenType;
			}
		};
		var BasicScopeAttributesProvider = class _BasicScopeAttributesProvider {
			_defaultAttributes;
			_embeddedLanguagesMatcher;
			constructor(initialLanguageId, embeddedLanguages) {
				this._defaultAttributes = new BasicScopeAttributes(initialLanguageId, 8);
				this._embeddedLanguagesMatcher = new ScopeMatcher(Object.entries(embeddedLanguages || {}));
			}
			getDefaultAttributes() {
				return this._defaultAttributes;
			}
			getBasicScopeAttributes(scopeName) {
				if (scopeName === null) return _BasicScopeAttributesProvider._NULL_SCOPE_METADATA;
				return this._getBasicScopeAttributes.get(scopeName);
			}
			static _NULL_SCOPE_METADATA = new BasicScopeAttributes(0, 0);
			_getBasicScopeAttributes = new CachedFn((scopeName) => {
				return new BasicScopeAttributes(this._scopeToLanguage(scopeName), this._toStandardTokenType(scopeName));
			});
			/**
			* Given a produced TM scope, return the language that token describes or null if unknown.
			* e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
			*/
			_scopeToLanguage(scope) {
				return this._embeddedLanguagesMatcher.match(scope) || 0;
			}
			_toStandardTokenType(scopeName) {
				const m = scopeName.match(_BasicScopeAttributesProvider.STANDARD_TOKEN_TYPE_REGEXP);
				if (!m) return 8;
				switch (m[1]) {
					case "comment": return 1;
					case "string": return 2;
					case "regex": return 3;
					case "meta.embedded": return 0;
				}
				throw new Error("Unexpected match for standard token type!");
			}
			static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
		};
		var ScopeMatcher = class {
			values;
			scopesRegExp;
			constructor(values) {
				if (values.length === 0) {
					this.values = null;
					this.scopesRegExp = null;
				} else {
					this.values = new Map(values);
					const escapedScopes = values.map(([scopeName, value]) => escapeRegExpCharacters(scopeName));
					escapedScopes.sort();
					escapedScopes.reverse();
					this.scopesRegExp = new RegExp(`^((${escapedScopes.join(")|(")}))($|\\.)`, "");
				}
			}
			match(scope) {
				if (!this.scopesRegExp) return;
				const m = scope.match(this.scopesRegExp);
				if (!m) return;
				return this.values.get(m[1]);
			}
		};
		typeof process !== "undefined" && process.env["VSCODE_TEXTMATE_DEBUG"];
		var UseOnigurumaFindOptions = false;
		var TokenizeStringResult = class {
			constructor(stack, stoppedEarly) {
				this.stack = stack;
				this.stoppedEarly = stoppedEarly;
			}
		};
		function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions, timeLimit) {
			const lineLength = lineText.content.length;
			let STOP = false;
			let anchorPosition = -1;
			if (checkWhileConditions) {
				const whileCheckResult = _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens);
				stack = whileCheckResult.stack;
				linePos = whileCheckResult.linePos;
				isFirstLine = whileCheckResult.isFirstLine;
				anchorPosition = whileCheckResult.anchorPosition;
			}
			const startTime = Date.now();
			while (!STOP) {
				if (timeLimit !== 0) {
					if (Date.now() - startTime > timeLimit) return new TokenizeStringResult(stack, true);
				}
				scanNext();
			}
			return new TokenizeStringResult(stack, false);
			function scanNext() {
				const r = matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
				if (!r) {
					lineTokens.produce(stack, lineLength);
					STOP = true;
					return;
				}
				const captureIndices = r.captureIndices;
				const matchedRuleId = r.matchedRuleId;
				const hasAdvanced = captureIndices && captureIndices.length > 0 ? captureIndices[0].end > linePos : false;
				if (matchedRuleId === endRuleId) {
					const poppedRule = stack.getRule(grammar);
					lineTokens.produce(stack, captureIndices[0].start);
					stack = stack.withContentNameScopesList(stack.nameScopesList);
					handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, poppedRule.endCaptures, captureIndices);
					lineTokens.produce(stack, captureIndices[0].end);
					const popped = stack;
					stack = stack.parent;
					anchorPosition = popped.getAnchorPos();
					if (!hasAdvanced && popped.getEnterPos() === linePos) {
						stack = popped;
						lineTokens.produce(stack, lineLength);
						STOP = true;
						return;
					}
				} else {
					const _rule = grammar.getRule(matchedRuleId);
					lineTokens.produce(stack, captureIndices[0].start);
					const beforePush = stack;
					const scopeName = _rule.getName(lineText.content, captureIndices);
					const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
					stack = stack.push(matchedRuleId, linePos, anchorPosition, captureIndices[0].end === lineLength, null, nameScopesList, nameScopesList);
					if (_rule instanceof BeginEndRule) {
						const pushedRule = _rule;
						handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
						lineTokens.produce(stack, captureIndices[0].end);
						anchorPosition = captureIndices[0].end;
						const contentName = pushedRule.getContentName(lineText.content, captureIndices);
						const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
						stack = stack.withContentNameScopesList(contentNameScopesList);
						if (pushedRule.endHasBackReferences) stack = stack.withEndRule(pushedRule.getEndWithResolvedBackReferences(lineText.content, captureIndices));
						if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
							stack = stack.pop();
							lineTokens.produce(stack, lineLength);
							STOP = true;
							return;
						}
					} else if (_rule instanceof BeginWhileRule) {
						const pushedRule = _rule;
						handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
						lineTokens.produce(stack, captureIndices[0].end);
						anchorPosition = captureIndices[0].end;
						const contentName = pushedRule.getContentName(lineText.content, captureIndices);
						const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
						stack = stack.withContentNameScopesList(contentNameScopesList);
						if (pushedRule.whileHasBackReferences) stack = stack.withEndRule(pushedRule.getWhileWithResolvedBackReferences(lineText.content, captureIndices));
						if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
							stack = stack.pop();
							lineTokens.produce(stack, lineLength);
							STOP = true;
							return;
						}
					} else {
						handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, _rule.captures, captureIndices);
						lineTokens.produce(stack, captureIndices[0].end);
						stack = stack.pop();
						if (!hasAdvanced) {
							stack = stack.safePop();
							lineTokens.produce(stack, lineLength);
							STOP = true;
							return;
						}
					}
				}
				if (captureIndices[0].end > linePos) {
					linePos = captureIndices[0].end;
					isFirstLine = false;
				}
			}
		}
		function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
			let anchorPosition = stack.beginRuleCapturedEOL ? 0 : -1;
			const whileRules = [];
			for (let node = stack; node; node = node.pop()) {
				const nodeRule = node.getRule(grammar);
				if (nodeRule instanceof BeginWhileRule) whileRules.push({
					rule: nodeRule,
					stack: node
				});
			}
			for (let whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()) {
				const { ruleScanner, findOptions } = prepareRuleWhileSearch(whileRule.rule, grammar, whileRule.stack.endRule, isFirstLine, linePos === anchorPosition);
				const r = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
				if (r) {
					if (r.ruleId !== whileRuleId) {
						stack = whileRule.stack.pop();
						break;
					}
					if (r.captureIndices && r.captureIndices.length) {
						lineTokens.produce(whileRule.stack, r.captureIndices[0].start);
						handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r.captureIndices);
						lineTokens.produce(whileRule.stack, r.captureIndices[0].end);
						anchorPosition = r.captureIndices[0].end;
						if (r.captureIndices[0].end > linePos) {
							linePos = r.captureIndices[0].end;
							isFirstLine = false;
						}
					}
				} else {
					stack = whileRule.stack.pop();
					break;
				}
			}
			return {
				stack,
				linePos,
				anchorPosition,
				isFirstLine
			};
		}
		function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
			const matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
			const injections = grammar.getInjections();
			if (injections.length === 0) return matchResult;
			const injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
			if (!injectionResult) return matchResult;
			if (!matchResult) return injectionResult;
			const matchResultScore = matchResult.captureIndices[0].start;
			const injectionResultScore = injectionResult.captureIndices[0].start;
			if (injectionResultScore < matchResultScore || injectionResult.priorityMatch && injectionResultScore === matchResultScore) return injectionResult;
			return matchResult;
		}
		function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
			const { ruleScanner, findOptions } = prepareRuleSearch(stack.getRule(grammar), grammar, stack.endRule, isFirstLine, linePos === anchorPosition);
			const r = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
			if (r) return {
				captureIndices: r.captureIndices,
				matchedRuleId: r.ruleId
			};
			return null;
		}
		function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
			let bestMatchRating = Number.MAX_VALUE;
			let bestMatchCaptureIndices = null;
			let bestMatchRuleId;
			let bestMatchResultPriority = 0;
			const scopes = stack.contentNameScopesList.getScopeNames();
			for (let i = 0, len = injections.length; i < len; i++) {
				const injection = injections[i];
				if (!injection.matcher(scopes)) continue;
				const { ruleScanner, findOptions } = prepareRuleSearch(grammar.getRule(injection.ruleId), grammar, null, isFirstLine, linePos === anchorPosition);
				const matchResult = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
				if (!matchResult) continue;
				const matchRating = matchResult.captureIndices[0].start;
				if (matchRating >= bestMatchRating) continue;
				bestMatchRating = matchRating;
				bestMatchCaptureIndices = matchResult.captureIndices;
				bestMatchRuleId = matchResult.ruleId;
				bestMatchResultPriority = injection.priority;
				if (bestMatchRating === linePos) break;
			}
			if (bestMatchCaptureIndices) return {
				priorityMatch: bestMatchResultPriority === -1,
				captureIndices: bestMatchCaptureIndices,
				matchedRuleId: bestMatchRuleId
			};
			return null;
		}
		function prepareRuleSearch(rule, grammar, endRegexSource, allowA, allowG) {
			if (UseOnigurumaFindOptions) return {
				ruleScanner: rule.compile(grammar, endRegexSource),
				findOptions: getFindOptions(allowA, allowG)
			};
			return {
				ruleScanner: rule.compileAG(grammar, endRegexSource, allowA, allowG),
				findOptions: 0
			};
		}
		function prepareRuleWhileSearch(rule, grammar, endRegexSource, allowA, allowG) {
			if (UseOnigurumaFindOptions) return {
				ruleScanner: rule.compileWhile(grammar, endRegexSource),
				findOptions: getFindOptions(allowA, allowG)
			};
			return {
				ruleScanner: rule.compileWhileAG(grammar, endRegexSource, allowA, allowG),
				findOptions: 0
			};
		}
		function getFindOptions(allowA, allowG) {
			let options = 0;
			if (!allowA) options |= 1;
			if (!allowG) options |= 4;
			return options;
		}
		function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
			if (captures.length === 0) return;
			const lineTextContent = lineText.content;
			const len = Math.min(captures.length, captureIndices.length);
			const localStack = [];
			const maxEnd = captureIndices[0].end;
			for (let i = 0; i < len; i++) {
				const captureRule = captures[i];
				if (captureRule === null) continue;
				const captureIndex = captureIndices[i];
				if (captureIndex.length === 0) continue;
				if (captureIndex.start > maxEnd) break;
				while (localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start) {
					lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
					localStack.pop();
				}
				if (localStack.length > 0) lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start);
				else lineTokens.produce(stack, captureIndex.start);
				if (captureRule.retokenizeCapturedWithRuleId) {
					const scopeName = captureRule.getName(lineTextContent, captureIndices);
					const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
					const contentName = captureRule.getContentName(lineTextContent, captureIndices);
					const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
					const stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, false, null, nameScopesList, contentNameScopesList);
					const onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
					_tokenizeString(grammar, onigSubStr, isFirstLine && captureIndex.start === 0, captureIndex.start, stackClone, lineTokens, false, 0);
					disposeOnigString(onigSubStr);
					continue;
				}
				const captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
				if (captureRuleScopeName !== null) {
					const captureRuleScopesList = (localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList).pushAttributed(captureRuleScopeName, grammar);
					localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
				}
			}
			while (localStack.length > 0) {
				lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
				localStack.pop();
			}
		}
		var LocalStackElement = class {
			scopes;
			endPos;
			constructor(scopes, endPos) {
				this.scopes = scopes;
				this.endPos = endPos;
			}
		};
		function createGrammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib) {
			return new Grammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib);
		}
		function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
			const matchers = createMatchers(selector, nameMatcher);
			const ruleId = RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
			for (const matcher of matchers) result.push({
				debugSelector: selector,
				matcher: matcher.matcher,
				ruleId,
				grammar,
				priority: matcher.priority
			});
		}
		function nameMatcher(identifers, scopes) {
			if (scopes.length < identifers.length) return false;
			let lastIndex = 0;
			return identifers.every((identifier) => {
				for (let i = lastIndex; i < scopes.length; i++) if (scopesAreMatching(scopes[i], identifier)) {
					lastIndex = i + 1;
					return true;
				}
				return false;
			});
		}
		function scopesAreMatching(thisScopeName, scopeName) {
			if (!thisScopeName) return false;
			if (thisScopeName === scopeName) return true;
			const len = scopeName.length;
			return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === ".";
		}
		var Grammar = class {
			constructor(_rootScopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, _onigLib) {
				this._rootScopeName = _rootScopeName;
				this.balancedBracketSelectors = balancedBracketSelectors;
				this._onigLib = _onigLib;
				this._basicScopeAttributesProvider = new BasicScopeAttributesProvider(initialLanguage, embeddedLanguages);
				this._rootId = -1;
				this._lastRuleId = 0;
				this._ruleId2desc = [null];
				this._includedGrammars = {};
				this._grammarRepository = grammarRepository;
				this._grammar = initGrammar(grammar, null);
				this._injections = null;
				this._tokenTypeMatchers = [];
				if (tokenTypes) for (const selector of Object.keys(tokenTypes)) {
					const matchers = createMatchers(selector, nameMatcher);
					for (const matcher of matchers) this._tokenTypeMatchers.push({
						matcher: matcher.matcher,
						type: tokenTypes[selector]
					});
				}
			}
			_rootId;
			_lastRuleId;
			_ruleId2desc;
			_includedGrammars;
			_grammarRepository;
			_grammar;
			_injections;
			_basicScopeAttributesProvider;
			_tokenTypeMatchers;
			get themeProvider() {
				return this._grammarRepository;
			}
			dispose() {
				for (const rule of this._ruleId2desc) if (rule) rule.dispose();
			}
			createOnigScanner(sources) {
				return this._onigLib.createOnigScanner(sources);
			}
			createOnigString(sources) {
				return this._onigLib.createOnigString(sources);
			}
			getMetadataForScope(scope) {
				return this._basicScopeAttributesProvider.getBasicScopeAttributes(scope);
			}
			_collectInjections() {
				const grammarRepository = {
					lookup: (scopeName2) => {
						if (scopeName2 === this._rootScopeName) return this._grammar;
						return this.getExternalGrammar(scopeName2);
					},
					injections: (scopeName2) => {
						return this._grammarRepository.injections(scopeName2);
					}
				};
				const result = [];
				const scopeName = this._rootScopeName;
				const grammar = grammarRepository.lookup(scopeName);
				if (grammar) {
					const rawInjections = grammar.injections;
					if (rawInjections) for (let expression in rawInjections) collectInjections(result, expression, rawInjections[expression], this, grammar);
					const injectionScopeNames = this._grammarRepository.injections(scopeName);
					if (injectionScopeNames) injectionScopeNames.forEach((injectionScopeName) => {
						const injectionGrammar = this.getExternalGrammar(injectionScopeName);
						if (injectionGrammar) {
							const selector = injectionGrammar.injectionSelector;
							if (selector) collectInjections(result, selector, injectionGrammar, this, injectionGrammar);
						}
					});
				}
				result.sort((i1, i2) => i1.priority - i2.priority);
				return result;
			}
			getInjections() {
				if (this._injections === null) this._injections = this._collectInjections();
				return this._injections;
			}
			registerRule(factory) {
				const id = ++this._lastRuleId;
				const result = factory(ruleIdFromNumber(id));
				this._ruleId2desc[id] = result;
				return result;
			}
			getRule(ruleId) {
				return this._ruleId2desc[ruleIdToNumber(ruleId)];
			}
			getExternalGrammar(scopeName, repository) {
				if (this._includedGrammars[scopeName]) return this._includedGrammars[scopeName];
				else if (this._grammarRepository) {
					const rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
					if (rawIncludedGrammar) {
						this._includedGrammars[scopeName] = initGrammar(rawIncludedGrammar, repository && repository.$base);
						return this._includedGrammars[scopeName];
					}
				}
			}
			tokenizeLine(lineText, prevState, timeLimit = 0) {
				const r = this._tokenize(lineText, prevState, false, timeLimit);
				return {
					tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
					ruleStack: r.ruleStack,
					stoppedEarly: r.stoppedEarly
				};
			}
			tokenizeLine2(lineText, prevState, timeLimit = 0) {
				const r = this._tokenize(lineText, prevState, true, timeLimit);
				return {
					tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
					ruleStack: r.ruleStack,
					stoppedEarly: r.stoppedEarly
				};
			}
			_tokenize(lineText, prevState, emitBinaryTokens, timeLimit) {
				if (this._rootId === -1) {
					this._rootId = RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository);
					this.getInjections();
				}
				let isFirstLine;
				if (!prevState || prevState === StateStackImpl.NULL) {
					isFirstLine = true;
					const rawDefaultMetadata = this._basicScopeAttributesProvider.getDefaultAttributes();
					const defaultStyle = this.themeProvider.getDefaults();
					const defaultMetadata = EncodedTokenMetadata.set(0, rawDefaultMetadata.languageId, rawDefaultMetadata.tokenType, null, defaultStyle.fontStyle, defaultStyle.foregroundId, defaultStyle.backgroundId);
					const rootScopeName = this.getRule(this._rootId).getName(null, null);
					let scopeList;
					if (rootScopeName) scopeList = AttributedScopeStack.createRootAndLookUpScopeName(rootScopeName, defaultMetadata, this);
					else scopeList = AttributedScopeStack.createRoot("unknown", defaultMetadata);
					prevState = new StateStackImpl(null, this._rootId, -1, -1, false, null, scopeList, scopeList);
				} else {
					isFirstLine = false;
					prevState.reset();
				}
				lineText = lineText + "\n";
				const onigLineText = this.createOnigString(lineText);
				const lineLength = onigLineText.content.length;
				const lineTokens = new LineTokens(emitBinaryTokens, lineText, this._tokenTypeMatchers, this.balancedBracketSelectors);
				const r = _tokenizeString(this, onigLineText, isFirstLine, 0, prevState, lineTokens, true, timeLimit);
				disposeOnigString(onigLineText);
				return {
					lineLength,
					lineTokens,
					ruleStack: r.stack,
					stoppedEarly: r.stoppedEarly
				};
			}
		};
		function initGrammar(grammar, base) {
			grammar = clone(grammar);
			grammar.repository = grammar.repository || {};
			grammar.repository.$self = {
				$vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
				patterns: grammar.patterns,
				name: grammar.scopeName
			};
			grammar.repository.$base = base || grammar.repository.$self;
			return grammar;
		}
		var AttributedScopeStack = class _AttributedScopeStack {
			/**
			* Invariant:
			* ```
			* if (parent && !scopePath.extends(parent.scopePath)) {
			* 	throw new Error();
			* }
			* ```
			*/
			constructor(parent, scopePath, tokenAttributes) {
				this.parent = parent;
				this.scopePath = scopePath;
				this.tokenAttributes = tokenAttributes;
			}
			static fromExtension(namesScopeList, contentNameScopesList) {
				let current = namesScopeList;
				let scopeNames = namesScopeList?.scopePath ?? null;
				for (const frame of contentNameScopesList) {
					scopeNames = ScopeStack.push(scopeNames, frame.scopeNames);
					current = new _AttributedScopeStack(current, scopeNames, frame.encodedTokenAttributes);
				}
				return current;
			}
			static createRoot(scopeName, tokenAttributes) {
				return new _AttributedScopeStack(null, new ScopeStack(null, scopeName), tokenAttributes);
			}
			static createRootAndLookUpScopeName(scopeName, tokenAttributes, grammar) {
				const rawRootMetadata = grammar.getMetadataForScope(scopeName);
				const scopePath = new ScopeStack(null, scopeName);
				const rootStyle = grammar.themeProvider.themeMatch(scopePath);
				const resolvedTokenAttributes = _AttributedScopeStack.mergeAttributes(tokenAttributes, rawRootMetadata, rootStyle);
				return new _AttributedScopeStack(null, scopePath, resolvedTokenAttributes);
			}
			get scopeName() {
				return this.scopePath.scopeName;
			}
			toString() {
				return this.getScopeNames().join(" ");
			}
			equals(other) {
				return _AttributedScopeStack.equals(this, other);
			}
			static equals(a, b) {
				do {
					if (a === b) return true;
					if (!a && !b) return true;
					if (!a || !b) return false;
					if (a.scopeName !== b.scopeName || a.tokenAttributes !== b.tokenAttributes) return false;
					a = a.parent;
					b = b.parent;
				} while (true);
			}
			static mergeAttributes(existingTokenAttributes, basicScopeAttributes, styleAttributes) {
				let fontStyle = -1;
				let foreground = 0;
				let background = 0;
				if (styleAttributes !== null) {
					fontStyle = styleAttributes.fontStyle;
					foreground = styleAttributes.foregroundId;
					background = styleAttributes.backgroundId;
				}
				return EncodedTokenMetadata.set(existingTokenAttributes, basicScopeAttributes.languageId, basicScopeAttributes.tokenType, null, fontStyle, foreground, background);
			}
			pushAttributed(scopePath, grammar) {
				if (scopePath === null) return this;
				if (scopePath.indexOf(" ") === -1) return _AttributedScopeStack._pushAttributed(this, scopePath, grammar);
				const scopes = scopePath.split(/ /g);
				let result = this;
				for (const scope of scopes) result = _AttributedScopeStack._pushAttributed(result, scope, grammar);
				return result;
			}
			static _pushAttributed(target, scopeName, grammar) {
				const rawMetadata = grammar.getMetadataForScope(scopeName);
				const newPath = target.scopePath.push(scopeName);
				const scopeThemeMatchResult = grammar.themeProvider.themeMatch(newPath);
				const metadata = _AttributedScopeStack.mergeAttributes(target.tokenAttributes, rawMetadata, scopeThemeMatchResult);
				return new _AttributedScopeStack(target, newPath, metadata);
			}
			getScopeNames() {
				return this.scopePath.getSegments();
			}
			getExtensionIfDefined(base) {
				const result = [];
				let self = this;
				while (self && self !== base) {
					result.push({
						encodedTokenAttributes: self.tokenAttributes,
						scopeNames: self.scopePath.getExtensionIfDefined(self.parent?.scopePath ?? null)
					});
					self = self.parent;
				}
				return self === base ? result.reverse() : void 0;
			}
		};
		var StateStackImpl = class _StateStackImpl {
			/**
			* Invariant:
			* ```
			* if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
			* 	throw new Error();
			* }
			* if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
			* 	throw new Error();
			* }
			* ```
			*/
			constructor(parent, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
				this.parent = parent;
				this.ruleId = ruleId;
				this.beginRuleCapturedEOL = beginRuleCapturedEOL;
				this.endRule = endRule;
				this.nameScopesList = nameScopesList;
				this.contentNameScopesList = contentNameScopesList;
				this.depth = this.parent ? this.parent.depth + 1 : 1;
				this._enterPos = enterPos;
				this._anchorPos = anchorPos;
			}
			_stackElementBrand = void 0;
			static NULL = new _StateStackImpl(null, 0, 0, 0, false, null, null, null);
			/**
			* The position on the current line where this state was pushed.
			* This is relevant only while tokenizing a line, to detect endless loops.
			* Its value is meaningless across lines.
			*/
			_enterPos;
			/**
			* The captured anchor position when this stack element was pushed.
			* This is relevant only while tokenizing a line, to restore the anchor position when popping.
			* Its value is meaningless across lines.
			*/
			_anchorPos;
			/**
			* The depth of the stack.
			*/
			depth;
			equals(other) {
				if (other === null) return false;
				return _StateStackImpl._equals(this, other);
			}
			static _equals(a, b) {
				if (a === b) return true;
				if (!this._structuralEquals(a, b)) return false;
				return AttributedScopeStack.equals(a.contentNameScopesList, b.contentNameScopesList);
			}
			/**
			* A structural equals check. Does not take into account `scopes`.
			*/
			static _structuralEquals(a, b) {
				do {
					if (a === b) return true;
					if (!a && !b) return true;
					if (!a || !b) return false;
					if (a.depth !== b.depth || a.ruleId !== b.ruleId || a.endRule !== b.endRule) return false;
					a = a.parent;
					b = b.parent;
				} while (true);
			}
			clone() {
				return this;
			}
			static _reset(el) {
				while (el) {
					el._enterPos = -1;
					el._anchorPos = -1;
					el = el.parent;
				}
			}
			reset() {
				_StateStackImpl._reset(this);
			}
			pop() {
				return this.parent;
			}
			safePop() {
				if (this.parent) return this.parent;
				return this;
			}
			push(ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
				return new _StateStackImpl(this, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList);
			}
			getEnterPos() {
				return this._enterPos;
			}
			getAnchorPos() {
				return this._anchorPos;
			}
			getRule(grammar) {
				return grammar.getRule(this.ruleId);
			}
			toString() {
				const r = [];
				this._writeString(r, 0);
				return "[" + r.join(",") + "]";
			}
			_writeString(res, outIndex) {
				if (this.parent) outIndex = this.parent._writeString(res, outIndex);
				res[outIndex++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`;
				return outIndex;
			}
			withContentNameScopesList(contentNameScopeStack) {
				if (this.contentNameScopesList === contentNameScopeStack) return this;
				return this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, contentNameScopeStack);
			}
			withEndRule(endRule) {
				if (this.endRule === endRule) return this;
				return new _StateStackImpl(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, endRule, this.nameScopesList, this.contentNameScopesList);
			}
			hasSameRuleAs(other) {
				let el = this;
				while (el && el._enterPos === other._enterPos) {
					if (el.ruleId === other.ruleId) return true;
					el = el.parent;
				}
				return false;
			}
			toStateStackFrame() {
				return {
					ruleId: ruleIdToNumber(this.ruleId),
					beginRuleCapturedEOL: this.beginRuleCapturedEOL,
					endRule: this.endRule,
					nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
					contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
				};
			}
			static pushFrame(self, frame) {
				const namesScopeList = AttributedScopeStack.fromExtension(self?.nameScopesList ?? null, frame.nameScopesList);
				return new _StateStackImpl(self, ruleIdFromNumber(frame.ruleId), frame.enterPos ?? -1, frame.anchorPos ?? -1, frame.beginRuleCapturedEOL, frame.endRule, namesScopeList, AttributedScopeStack.fromExtension(namesScopeList, frame.contentNameScopesList));
			}
		};
		var BalancedBracketSelectors = class {
			balancedBracketScopes;
			unbalancedBracketScopes;
			allowAny = false;
			constructor(balancedBracketScopes, unbalancedBracketScopes) {
				this.balancedBracketScopes = balancedBracketScopes.flatMap((selector) => {
					if (selector === "*") {
						this.allowAny = true;
						return [];
					}
					return createMatchers(selector, nameMatcher).map((m) => m.matcher);
				});
				this.unbalancedBracketScopes = unbalancedBracketScopes.flatMap((selector) => createMatchers(selector, nameMatcher).map((m) => m.matcher));
			}
			get matchesAlways() {
				return this.allowAny && this.unbalancedBracketScopes.length === 0;
			}
			get matchesNever() {
				return this.balancedBracketScopes.length === 0 && !this.allowAny;
			}
			match(scopes) {
				for (const excluder of this.unbalancedBracketScopes) if (excluder(scopes)) return false;
				for (const includer of this.balancedBracketScopes) if (includer(scopes)) return true;
				return this.allowAny;
			}
		};
		var LineTokens = class {
			constructor(emitBinaryTokens, lineText, tokenTypeOverrides, balancedBracketSelectors) {
				this.balancedBracketSelectors = balancedBracketSelectors;
				this._emitBinaryTokens = emitBinaryTokens;
				this._tokenTypeOverrides = tokenTypeOverrides;
				this._lineText = null;
				this._tokens = [];
				this._binaryTokens = [];
				this._lastTokenEndIndex = 0;
			}
			_emitBinaryTokens;
			/**
			* defined only if `false`.
			*/
			_lineText;
			/**
			* used only if `_emitBinaryTokens` is false.
			*/
			_tokens;
			/**
			* used only if `_emitBinaryTokens` is true.
			*/
			_binaryTokens;
			_lastTokenEndIndex;
			_tokenTypeOverrides;
			produce(stack, endIndex) {
				this.produceFromScopes(stack.contentNameScopesList, endIndex);
			}
			produceFromScopes(scopesList, endIndex) {
				if (this._lastTokenEndIndex >= endIndex) return;
				if (this._emitBinaryTokens) {
					let metadata = scopesList?.tokenAttributes ?? 0;
					let containsBalancedBrackets = false;
					if (this.balancedBracketSelectors?.matchesAlways) containsBalancedBrackets = true;
					if (this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
						const scopes2 = scopesList?.getScopeNames() ?? [];
						for (const tokenType of this._tokenTypeOverrides) if (tokenType.matcher(scopes2)) metadata = EncodedTokenMetadata.set(metadata, 0, toOptionalTokenType(tokenType.type), null, -1, 0, 0);
						if (this.balancedBracketSelectors) containsBalancedBrackets = this.balancedBracketSelectors.match(scopes2);
					}
					if (containsBalancedBrackets) metadata = EncodedTokenMetadata.set(metadata, 0, 8, containsBalancedBrackets, -1, 0, 0);
					if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
						this._lastTokenEndIndex = endIndex;
						return;
					}
					this._binaryTokens.push(this._lastTokenEndIndex);
					this._binaryTokens.push(metadata);
					this._lastTokenEndIndex = endIndex;
					return;
				}
				const scopes = scopesList?.getScopeNames() ?? [];
				this._tokens.push({
					startIndex: this._lastTokenEndIndex,
					endIndex,
					scopes
				});
				this._lastTokenEndIndex = endIndex;
			}
			getResult(stack, lineLength) {
				if (this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1) this._tokens.pop();
				if (this._tokens.length === 0) {
					this._lastTokenEndIndex = -1;
					this.produce(stack, lineLength);
					this._tokens[this._tokens.length - 1].startIndex = 0;
				}
				return this._tokens;
			}
			getBinaryResult(stack, lineLength) {
				if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1) {
					this._binaryTokens.pop();
					this._binaryTokens.pop();
				}
				if (this._binaryTokens.length === 0) {
					this._lastTokenEndIndex = -1;
					this.produce(stack, lineLength);
					this._binaryTokens[this._binaryTokens.length - 2] = 0;
				}
				const result = new Uint32Array(this._binaryTokens.length);
				for (let i = 0, len = this._binaryTokens.length; i < len; i++) result[i] = this._binaryTokens[i];
				return result;
			}
		};
		var SyncRegistry = class {
			constructor(theme, _onigLib) {
				this._onigLib = _onigLib;
				this._theme = theme;
			}
			_grammars = /* @__PURE__ */ new Map();
			_rawGrammars = /* @__PURE__ */ new Map();
			_injectionGrammars = /* @__PURE__ */ new Map();
			_theme;
			dispose() {
				for (const grammar of this._grammars.values()) grammar.dispose();
			}
			setTheme(theme) {
				this._theme = theme;
			}
			getColorMap() {
				return this._theme.getColorMap();
			}
			/**
			* Add `grammar` to registry and return a list of referenced scope names
			*/
			addGrammar(grammar, injectionScopeNames) {
				this._rawGrammars.set(grammar.scopeName, grammar);
				if (injectionScopeNames) this._injectionGrammars.set(grammar.scopeName, injectionScopeNames);
			}
			/**
			* Lookup a raw grammar.
			*/
			lookup(scopeName) {
				return this._rawGrammars.get(scopeName);
			}
			/**
			* Returns the injections for the given grammar
			*/
			injections(targetScope) {
				return this._injectionGrammars.get(targetScope);
			}
			/**
			* Get the default theme settings
			*/
			getDefaults() {
				return this._theme.getDefaults();
			}
			/**
			* Match a scope in the theme.
			*/
			themeMatch(scopePath) {
				return this._theme.match(scopePath);
			}
			/**
			* Lookup a grammar.
			*/
			grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
				if (!this._grammars.has(scopeName)) {
					let rawGrammar = this._rawGrammars.get(scopeName);
					if (!rawGrammar) return null;
					this._grammars.set(scopeName, createGrammar(scopeName, rawGrammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, this, this._onigLib));
				}
				return this._grammars.get(scopeName);
			}
		};
		var Registry$1 = class {
			_options;
			_syncRegistry;
			_ensureGrammarCache;
			constructor(options) {
				this._options = options;
				this._syncRegistry = new SyncRegistry(Theme.createFromRawTheme(options.theme, options.colorMap), options.onigLib);
				this._ensureGrammarCache = /* @__PURE__ */ new Map();
			}
			dispose() {
				this._syncRegistry.dispose();
			}
			/**
			* Change the theme. Once called, no previous `ruleStack` should be used anymore.
			*/
			setTheme(theme, colorMap) {
				this._syncRegistry.setTheme(Theme.createFromRawTheme(theme, colorMap));
			}
			/**
			* Returns a lookup array for color ids.
			*/
			getColorMap() {
				return this._syncRegistry.getColorMap();
			}
			/**
			* Load the grammar for `scopeName` and all referenced included grammars asynchronously.
			* Please do not use language id 0.
			*/
			loadGrammarWithEmbeddedLanguages(initialScopeName, initialLanguage, embeddedLanguages) {
				return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, { embeddedLanguages });
			}
			/**
			* Load the grammar for `scopeName` and all referenced included grammars asynchronously.
			* Please do not use language id 0.
			*/
			loadGrammarWithConfiguration(initialScopeName, initialLanguage, configuration) {
				return this._loadGrammar(initialScopeName, initialLanguage, configuration.embeddedLanguages, configuration.tokenTypes, new BalancedBracketSelectors(configuration.balancedBracketSelectors || [], configuration.unbalancedBracketSelectors || []));
			}
			/**
			* Load the grammar for `scopeName` and all referenced included grammars asynchronously.
			*/
			loadGrammar(initialScopeName) {
				return this._loadGrammar(initialScopeName, 0, null, null, null);
			}
			_loadGrammar(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
				const dependencyProcessor = new ScopeDependencyProcessor(this._syncRegistry, initialScopeName);
				while (dependencyProcessor.Q.length > 0) {
					dependencyProcessor.Q.map((request) => this._loadSingleGrammar(request.scopeName));
					dependencyProcessor.processQueue();
				}
				return this._grammarForScopeName(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors);
			}
			_loadSingleGrammar(scopeName) {
				if (!this._ensureGrammarCache.has(scopeName)) {
					this._doLoadSingleGrammar(scopeName);
					this._ensureGrammarCache.set(scopeName, true);
				}
			}
			_doLoadSingleGrammar(scopeName) {
				const grammar = this._options.loadGrammar(scopeName);
				if (grammar) {
					const injections = typeof this._options.getInjections === "function" ? this._options.getInjections(scopeName) : void 0;
					this._syncRegistry.addGrammar(grammar, injections);
				}
			}
			/**
			* Adds a rawGrammar.
			*/
			addGrammar(rawGrammar, injections = [], initialLanguage = 0, embeddedLanguages = null) {
				this._syncRegistry.addGrammar(rawGrammar, injections);
				return this._grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages);
			}
			/**
			* Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
			*/
			_grammarForScopeName(scopeName, initialLanguage = 0, embeddedLanguages = null, tokenTypes = null, balancedBracketSelectors = null) {
				return this._syncRegistry.grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors);
			}
		};
		var INITIAL = StateStackImpl.NULL;
		//#endregion
		//#region node_modules/.pnpm/@shikijs+primitive@4.4.3/node_modules/@shikijs/primitive/dist/index.mjs
		function resolveColorReplacements(theme, options) {
			const replacements = typeof theme === "string" ? {} : { ...theme.colorReplacements };
			const themeName = typeof theme === "string" ? theme : theme.name;
			for (const [key, value] of Object.entries(options?.colorReplacements || {})) if (typeof value === "string") replacements[key] = value;
			else if (key === themeName) Object.assign(replacements, value);
			return replacements;
		}
		function applyColorReplacements(color, replacements) {
			if (!color) return color;
			return replacements?.[color?.toLowerCase()] || color;
		}
		function toArray(x) {
			return Array.isArray(x) ? x : [x];
		}
		/**
		* Normalize a getter to a promise.
		*/
		async function normalizeGetter(p) {
			return Promise.resolve(typeof p === "function" ? p() : p).then((r) => r.default || r);
		}
		/**
		* Check if the language is plaintext that is ignored by Shiki.
		*
		* Hard-coded plain text languages: `plaintext`, `txt`, `text`, `plain`.
		*/
		function isPlainLang(lang) {
			return !lang || [
				"plaintext",
				"txt",
				"text",
				"plain"
			].includes(lang);
		}
		/**
		* Check if the language is specially handled or bypassed by Shiki.
		*
		* Hard-coded languages: `ansi` and plaintexts like `plaintext`, `txt`, `text`, `plain`.
		*/
		function isSpecialLang(lang) {
			return lang === "ansi" || isPlainLang(lang);
		}
		/**
		* Check if the theme is specially handled or bypassed by Shiki.
		*
		* Hard-coded themes: `none`.
		*/
		function isNoneTheme(theme) {
			return theme === "none";
		}
		/**
		* Check if the theme is specially handled or bypassed by Shiki.
		*
		* Hard-coded themes: `none`.
		*/
		function isSpecialTheme(theme) {
			return isNoneTheme(theme);
		}
		/**
		* Split a string into lines, each line preserves the line ending.
		*
		* @param code - The code string to split into lines
		* @param preserveEnding - Whether to preserve line endings in the result
		* @returns Array of tuples containing [line content, offset index]
		*
		* @example
		* ```ts
		* splitLines('hello\nworld', false)
		* // => [['hello', 0], ['world', 6]]
		*
		* splitLines('hello\nworld', true)
		* // => [['hello\n', 0], ['world', 6]]
		* ```
		*/
		const RE_NEWLINE = /(\r?\n)/g;
		function splitLines(code, preserveEnding = false) {
			if (code.length === 0) return [["", 0]];
			const parts = code.split(RE_NEWLINE);
			let index = 0;
			const lines = [];
			for (let i = 0; i < parts.length; i += 2) {
				const line = preserveEnding ? parts[i] + (parts[i + 1] || "") : parts[i];
				lines.push([line, index]);
				index += parts[i].length;
				index += parts[i + 1]?.length || 0;
			}
			return lines;
		}
		/**
		* https://github.com/microsoft/vscode/blob/f7f05dee53fb33fe023db2e06e30a89d3094488f/src/vs/platform/theme/common/colorRegistry.ts#L258-L268
		*/
		const VSCODE_FALLBACK_EDITOR_FG = {
			light: "#333333",
			dark: "#bbbbbb"
		};
		const VSCODE_FALLBACK_EDITOR_BG = {
			light: "#fffffe",
			dark: "#1e1e1e"
		};
		const RESOLVED_KEY = "__shiki_resolved";
		/**
		* Normalize a textmate theme to shiki theme
		*/
		function normalizeTheme(rawTheme) {
			if (rawTheme?.[RESOLVED_KEY]) return rawTheme;
			const theme = { ...rawTheme };
			if (theme.tokenColors && !theme.settings) {
				theme.settings = theme.tokenColors;
				delete theme.tokenColors;
			}
			theme.type ||= "dark";
			theme.colorReplacements = { ...theme.colorReplacements };
			theme.settings ||= [];
			let { bg, fg } = theme;
			if (!bg || !fg) {
				/**
				* First try:
				* Theme might contain a global `tokenColor` without `name` or `scope`
				* Used as default value for foreground/background
				*/
				const globalSetting = theme.settings ? theme.settings.find((s) => !s.name && !s.scope) : void 0;
				if (globalSetting?.settings?.foreground) fg = globalSetting.settings.foreground;
				if (globalSetting?.settings?.background) bg = globalSetting.settings.background;
				/**
				* Second try:
				* If there's no global `tokenColor` without `name` or `scope`
				* Use `editor.foreground` and `editor.background`
				*/
				if (!fg && theme?.colors?.["editor.foreground"]) fg = theme.colors["editor.foreground"];
				if (!bg && theme?.colors?.["editor.background"]) bg = theme.colors["editor.background"];
				/**
				* Last try:
				* If there's no fg/bg color specified in theme, use default
				*/
				if (!fg) fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
				if (!bg) bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
				theme.fg = fg;
				theme.bg = bg;
			}
			if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) theme.settings.unshift({ settings: {
				foreground: theme.fg,
				background: theme.bg
			} });
			let replacementCount = 0;
			const replacementMap = /* @__PURE__ */ new Map();
			function getReplacementColor(value) {
				if (replacementMap.has(value)) return replacementMap.get(value);
				replacementCount += 1;
				const hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
				if (theme.colorReplacements?.[`#${hex}`]) return getReplacementColor(value);
				replacementMap.set(value, hex);
				return hex;
			}
			theme.settings = theme.settings.map((setting) => {
				const replaceFg = setting.settings?.foreground && !setting.settings.foreground.startsWith("#");
				const replaceBg = setting.settings?.background && !setting.settings.background.startsWith("#");
				if (!replaceFg && !replaceBg) return setting;
				const clone = {
					...setting,
					settings: { ...setting.settings }
				};
				if (replaceFg) {
					const replacement = getReplacementColor(setting.settings.foreground);
					theme.colorReplacements[replacement] = setting.settings.foreground;
					clone.settings.foreground = replacement;
				}
				if (replaceBg) {
					const replacement = getReplacementColor(setting.settings.background);
					theme.colorReplacements[replacement] = setting.settings.background;
					clone.settings.background = replacement;
				}
				return clone;
			});
			for (const key of Object.keys(theme.colors || {})) if (key === "editor.foreground" || key === "editor.background" || key.startsWith("terminal.ansi")) {
				if (!theme.colors[key]?.startsWith("#")) {
					const replacement = getReplacementColor(theme.colors[key]);
					theme.colorReplacements[replacement] = theme.colors[key];
					theme.colors[key] = replacement;
				}
			}
			Object.defineProperty(theme, RESOLVED_KEY, {
				enumerable: false,
				writable: false,
				value: true
			});
			return theme;
		}
		/**
		* Resolve
		*/
		async function resolveLangs(langs) {
			return [...new Set((await Promise.all(langs.filter((l) => !isSpecialLang(l)).map(async (lang) => await normalizeGetter(lang).then((r) => Array.isArray(r) ? r : [r])))).flat())];
		}
		async function resolveThemes(themes) {
			return (await Promise.all(themes.map(async (theme) => isSpecialTheme(theme) ? null : normalizeTheme(await normalizeGetter(theme))))).filter((i) => !!i);
		}
		function resolveLangAlias(name, alias) {
			if (!alias) return name;
			if (alias[name]) {
				const resolved = /* @__PURE__ */ new Set([name]);
				while (alias[name]) {
					name = alias[name];
					if (resolved.has(name)) throw new ShikiError(`Circular alias \`${[...resolved].join(" -> ")} -> ${name}\``);
					resolved.add(name);
				}
			}
			return name;
		}
		var Registry = class extends Registry$1 {
			_resolver;
			_themes;
			_langs;
			_alias;
			_resolvedThemes = /* @__PURE__ */ new Map();
			_resolvedGrammars = /* @__PURE__ */ new Map();
			_langMap = /* @__PURE__ */ new Map();
			_langGraph = /* @__PURE__ */ new Map();
			_textmateThemeCache = /* @__PURE__ */ new WeakMap();
			_loadedThemesCache = null;
			_loadedLanguagesCache = null;
			constructor(_resolver, _themes, _langs, _alias = {}) {
				super(_resolver);
				this._resolver = _resolver;
				this._themes = _themes;
				this._langs = _langs;
				this._alias = _alias;
				this._themes.map((t) => this.loadTheme(t));
				this.loadLanguages(this._langs);
			}
			getTheme(theme) {
				if (typeof theme === "string") return this._resolvedThemes.get(theme);
				else return this.loadTheme(theme);
			}
			loadTheme(theme) {
				const _theme = normalizeTheme(theme);
				if (_theme.name) {
					this._resolvedThemes.set(_theme.name, _theme);
					this._loadedThemesCache = null;
				}
				return _theme;
			}
			getLoadedThemes() {
				if (!this._loadedThemesCache) this._loadedThemesCache = [...this._resolvedThemes.keys()];
				return this._loadedThemesCache;
			}
			setTheme(theme) {
				let textmateTheme = this._textmateThemeCache.get(theme);
				if (!textmateTheme) {
					textmateTheme = Theme.createFromRawTheme(theme);
					this._textmateThemeCache.set(theme, textmateTheme);
				}
				this._syncRegistry.setTheme(textmateTheme);
			}
			getGrammar(name) {
				name = resolveLangAlias(name, this._alias);
				return this._resolvedGrammars.get(name);
			}
			loadLanguage(lang) {
				if (this.getGrammar(lang.name)) return;
				const embeddedLazilyBy = new Set([...this._langMap.values()].filter((i) => i.embeddedLangsLazy?.includes(lang.name)));
				this._resolver.addLanguage(lang);
				const grammarConfig = {
					balancedBracketSelectors: lang.balancedBracketSelectors || ["*"],
					unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
				};
				this._syncRegistry._rawGrammars.set(lang.scopeName, lang);
				const g = this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
				g.name = lang.name;
				this._resolvedGrammars.set(lang.name, g);
				if (lang.aliases) lang.aliases.forEach((alias) => {
					this._alias[alias] = lang.name;
				});
				this._loadedLanguagesCache = null;
				if (embeddedLazilyBy.size) for (const e of embeddedLazilyBy) {
					this._resolvedGrammars.delete(e.name);
					this._loadedLanguagesCache = null;
					this._syncRegistry?._injectionGrammars?.delete(e.scopeName);
					this._syncRegistry?._grammars?.delete(e.scopeName);
					this.loadLanguage(this._langMap.get(e.name));
				}
			}
			dispose() {
				super.dispose();
				this._resolvedThemes.clear();
				this._resolvedGrammars.clear();
				this._langMap.clear();
				this._langGraph.clear();
				this._loadedThemesCache = null;
			}
			loadLanguages(langs) {
				for (const lang of langs) this.resolveEmbeddedLanguages(lang);
				const langsGraphArray = [...this._langGraph.entries()];
				const missingLangs = langsGraphArray.filter(([_, lang]) => !lang);
				if (missingLangs.length) {
					const dependents = langsGraphArray.filter(([_, lang]) => {
						if (!lang) return false;
						return (lang.embeddedLanguages || lang.embeddedLangs)?.some((l) => missingLangs.map(([name]) => name).includes(l));
					}).filter((lang) => !missingLangs.includes(lang));
					throw new ShikiError(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(", ")}, required by ${dependents.map(([name]) => `\`${name}\``).join(", ")}`);
				}
				for (const [_, lang] of langsGraphArray) this._resolver.addLanguage(lang);
				for (const [_, lang] of langsGraphArray) this.loadLanguage(lang);
			}
			getLoadedLanguages() {
				if (!this._loadedLanguagesCache) this._loadedLanguagesCache = [.../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])];
				return this._loadedLanguagesCache;
			}
			resolveEmbeddedLanguages(lang) {
				this._langMap.set(lang.name, lang);
				this._langGraph.set(lang.name, lang);
				const embedded = lang.embeddedLanguages ?? lang.embeddedLangs;
				if (embedded) for (const embeddedLang of embedded) this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
			}
		};
		var Resolver = class {
			_langs = /* @__PURE__ */ new Map();
			_scopeToLang = /* @__PURE__ */ new Map();
			_injections = /* @__PURE__ */ new Map();
			_onigLib;
			constructor(engine, langs) {
				this._onigLib = {
					createOnigScanner: (patterns) => engine.createScanner(patterns),
					createOnigString: (s) => engine.createString(s)
				};
				langs.forEach((i) => this.addLanguage(i));
			}
			get onigLib() {
				return this._onigLib;
			}
			getLangRegistration(langIdOrAlias) {
				return this._langs.get(langIdOrAlias);
			}
			loadGrammar(scopeName) {
				return this._scopeToLang.get(scopeName);
			}
			addLanguage(l) {
				this._langs.set(l.name, l);
				if (l.aliases) l.aliases.forEach((a) => {
					this._langs.set(a, l);
				});
				this._scopeToLang.set(l.scopeName, l);
				if (l.injectTo) l.injectTo.forEach((i) => {
					if (!this._injections.get(i)) this._injections.set(i, []);
					this._injections.get(i).push(l.scopeName);
				});
			}
			getInjections(scopeName) {
				const scopeParts = scopeName.split(".");
				let injections = [];
				for (let i = 1; i <= scopeParts.length; i++) {
					const subScopeName = scopeParts.slice(0, i).join(".");
					injections = [...injections, ...this._injections.get(subScopeName) || []];
				}
				return injections;
			}
		};
		let instancesCount = 0;
		/**
		* Get the minimal shiki primitive instance.
		*
		* Requires to provide the engine and all themes and languages upfront.
		*/
		function createShikiPrimitive(options) {
			instancesCount += 1;
			if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0) console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
			let isDisposed = false;
			if (!options.engine) throw new ShikiError("`engine` option is required for synchronous mode");
			const langs = (options.langs || []).flat(1);
			const themes = (options.themes || []).flat(1).map(normalizeTheme);
			const _registry = new Registry(new Resolver(options.engine, langs), themes, langs, options.langAlias);
			let _lastTheme;
			function resolveLangAlias$1(name) {
				return resolveLangAlias(name, options.langAlias);
			}
			function getLanguage(name) {
				ensureNotDisposed();
				const _lang = _registry.getGrammar(typeof name === "string" ? name : name.name);
				if (!_lang) throw new ShikiError(`Language \`${name}\` not found, you may need to load it first`);
				return _lang;
			}
			function getTheme(name) {
				if (name === "none") return {
					bg: "",
					fg: "",
					name: "none",
					settings: [],
					type: "dark"
				};
				ensureNotDisposed();
				const _theme = _registry.getTheme(name);
				if (!_theme) throw new ShikiError(`Theme \`${name}\` not found, you may need to load it first`);
				return _theme;
			}
			function setTheme(name) {
				ensureNotDisposed();
				const theme = getTheme(name);
				if (_lastTheme !== name) {
					_registry.setTheme(theme);
					_lastTheme = name;
				}
				return {
					theme,
					colorMap: _registry.getColorMap()
				};
			}
			function getLoadedThemes() {
				ensureNotDisposed();
				return _registry.getLoadedThemes();
			}
			function getLoadedLanguages() {
				ensureNotDisposed();
				return _registry.getLoadedLanguages();
			}
			function loadLanguageSync(...langs) {
				ensureNotDisposed();
				_registry.loadLanguages(langs.flat(1));
			}
			async function loadLanguage(...langs) {
				return loadLanguageSync(await resolveLangs(langs));
			}
			function loadThemeSync(...themes) {
				ensureNotDisposed();
				for (const theme of themes.flat(1)) _registry.loadTheme(theme);
			}
			async function loadTheme(...themes) {
				ensureNotDisposed();
				return loadThemeSync(await resolveThemes(themes));
			}
			function ensureNotDisposed() {
				if (isDisposed) throw new ShikiError("Shiki instance has been disposed");
			}
			function dispose() {
				if (isDisposed) return;
				isDisposed = true;
				_registry.dispose();
				instancesCount -= 1;
			}
			return {
				setTheme,
				getTheme,
				getLanguage,
				getLoadedThemes,
				getLoadedLanguages,
				resolveLangAlias: resolveLangAlias$1,
				loadLanguage,
				loadLanguageSync,
				loadTheme,
				loadThemeSync,
				dispose,
				[Symbol.dispose]: dispose
			};
		}
		const _grammarStateMap = /* @__PURE__ */ new WeakMap();
		function setLastGrammarStateToMap(keys, state) {
			_grammarStateMap.set(keys, state);
		}
		function getLastGrammarStateFromMap(keys) {
			return _grammarStateMap.get(keys);
		}
		/**
		* GrammarState is a special reference object that holds the state of a grammar.
		*
		* It's used to highlight code snippets that are part of the target language.
		*/
		var GrammarState = class GrammarState {
			/**
			* Theme to Stack mapping
			*/
			_stacks = {};
			lang;
			get themes() {
				return Object.keys(this._stacks);
			}
			get theme() {
				return this.themes[0];
			}
			get _stack() {
				return this._stacks[this.theme];
			}
			/**
			* Static method to create a initial grammar state.
			*/
			static initial(lang, themes) {
				return new GrammarState(Object.fromEntries(toArray(themes).map((theme) => [theme, INITIAL])), lang);
			}
			constructor(...args) {
				if (args.length === 2) {
					const [stacksMap, lang] = args;
					this.lang = lang;
					this._stacks = stacksMap;
				} else {
					const [stack, lang, theme] = args;
					this.lang = lang;
					this._stacks = { [theme]: stack };
				}
			}
			/**
			* Get the internal stack object.
			* @internal
			*/
			getInternalStack(theme = this.theme) {
				return this._stacks[theme];
			}
			getScopes(theme = this.theme) {
				return getScopes(this._stacks[theme]);
			}
			toJSON() {
				return {
					lang: this.lang,
					theme: this.theme,
					themes: this.themes,
					scopes: this.getScopes()
				};
			}
		};
		function getScopes(stack) {
			const scopes = [];
			const visited = /* @__PURE__ */ new Set();
			function pushScope(stack) {
				if (visited.has(stack)) return;
				visited.add(stack);
				const name = stack?.nameScopesList?.scopeName;
				if (name) scopes.push(name);
				if (stack.parent) pushScope(stack.parent);
			}
			pushScope(stack);
			return scopes;
		}
		function getGrammarStack(state, theme) {
			if (!(state instanceof GrammarState)) throw new ShikiError("Invalid grammar state");
			return state.getInternalStack(theme);
		}
		const RE_COMMA = /,/;
		const RE_SPACE = / /;
		/**
		* Code to tokens, with a simple theme.
		*/
		function codeToTokensBase$1(primitive, code, options = {}) {
			const { theme: themeName = primitive.getLoadedThemes()[0] } = options;
			if (isPlainLang(primitive.resolveLangAlias(options.lang || "text")) || isNoneTheme(themeName)) return splitLines(code).map((line) => [{
				content: line[0],
				offset: line[1]
			}]);
			const { theme, colorMap } = primitive.setTheme(themeName);
			const _grammar = primitive.getLanguage(options.lang || "text");
			if (options.grammarState) {
				if (options.grammarState.lang !== _grammar.name) throw new ShikiError(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
				if (!options.grammarState.themes.includes(theme.name)) throw new ShikiError(`Grammar state themes "${options.grammarState.themes}" do not contain highlight theme "${theme.name}"`);
			}
			return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
		}
		function getLastGrammarState(...args) {
			if (args.length === 2) return getLastGrammarStateFromMap(args[1]);
			const [primitive, code, options = {}] = args;
			const { lang = "text", theme: themeName = primitive.getLoadedThemes()[0] } = options;
			if (isPlainLang(lang) || isNoneTheme(themeName)) throw new ShikiError("Plain language does not have grammar state");
			if (lang === "ansi") throw new ShikiError("ANSI language does not have grammar state");
			const { theme, colorMap } = primitive.setTheme(themeName);
			const _grammar = primitive.getLanguage(lang);
			return new GrammarState(_tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack, _grammar.name, theme.name);
		}
		function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
			const result = _tokenizeWithTheme(code, grammar, theme, colorMap, options);
			const grammarState = new GrammarState(result.stateStack, grammar.name, theme.name);
			setLastGrammarStateToMap(result.tokens, grammarState);
			return result.tokens;
		}
		function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
			const colorReplacements = resolveColorReplacements(theme, options);
			const { tokenizeMaxLineLength = 0, tokenizeTimeLimit = 500, includeExplanation = false } = options;
			const lines = splitLines(code);
			let stateStack = options.grammarState ? getGrammarStack(options.grammarState, theme.name) ?? INITIAL : options.grammarContextCode != null ? _tokenizeWithTheme(options.grammarContextCode, grammar, theme, colorMap, {
				...options,
				grammarState: void 0,
				grammarContextCode: void 0
			}).stateStack : INITIAL;
			let actual = [];
			const final = [];
			for (let i = 0, len = lines.length; i < len; i++) {
				const [line, lineOffset] = lines[i];
				if (line === "") {
					actual = [];
					final.push([]);
					continue;
				}
				if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
					actual = [];
					final.push([{
						content: line,
						offset: lineOffset,
						color: "",
						fontStyle: 0
					}]);
					continue;
				}
				let resultWithScopes;
				let tokensWithScopes;
				let tokensWithScopesIndex;
				if (includeExplanation && includeExplanation !== "tokenType") {
					resultWithScopes = grammar.tokenizeLine(line, stateStack, tokenizeTimeLimit);
					tokensWithScopes = resultWithScopes.tokens;
					tokensWithScopesIndex = 0;
				}
				const result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit);
				const tokensLength = result.tokens.length / 2;
				for (let j = 0; j < tokensLength; j++) {
					const startIndex = result.tokens[2 * j];
					const nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
					if (startIndex === nextStartIndex) continue;
					const metadata = result.tokens[2 * j + 1];
					const color = applyColorReplacements(colorMap[EncodedTokenMetadata.getForeground(metadata)], colorReplacements);
					const fontStyle = EncodedTokenMetadata.getFontStyle(metadata);
					const token = {
						content: line.substring(startIndex, nextStartIndex),
						offset: lineOffset + startIndex,
						color,
						fontStyle
					};
					if (includeExplanation === "tokenType") token.type = EncodedTokenMetadata.getTokenType(metadata);
					else if (includeExplanation) {
						const themeSettingsSelectors = [];
						if (includeExplanation !== "scopeName") for (const setting of theme.settings) {
							let selectors;
							switch (typeof setting.scope) {
								case "string":
									selectors = setting.scope.split(RE_COMMA).map((scope) => scope.trim());
									break;
								case "object":
									selectors = setting.scope;
									break;
								default: continue;
							}
							themeSettingsSelectors.push({
								settings: setting,
								selectors: selectors.map((selector) => selector.split(RE_SPACE))
							});
						}
						token.explanation = [];
						let offset = 0;
						while (startIndex + offset < nextStartIndex) {
							const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
							const tokenWithScopesText = line.substring(tokenWithScopes.startIndex, tokenWithScopes.endIndex);
							offset += tokenWithScopesText.length;
							token.explanation.push({
								content: tokenWithScopesText,
								scopes: includeExplanation === "scopeName" ? explainThemeScopesNameOnly(tokenWithScopes.scopes) : explainThemeScopesFull(themeSettingsSelectors, tokenWithScopes.scopes)
							});
							tokensWithScopesIndex += 1;
						}
					}
					actual.push(token);
				}
				final.push(actual);
				actual = [];
				stateStack = result.ruleStack;
			}
			return {
				tokens: final,
				stateStack
			};
		}
		function explainThemeScopesNameOnly(scopes) {
			return scopes.map((scope) => ({ scopeName: scope }));
		}
		function explainThemeScopesFull(themeSelectors, scopes) {
			const result = [];
			for (let i = 0, len = scopes.length; i < len; i++) {
				const scope = scopes[i];
				result[i] = {
					scopeName: scope,
					themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i))
				};
			}
			return result;
		}
		function matchesOne(selector, scope) {
			return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
		}
		function matches(selectors, scope, parentScopes) {
			if (!matchesOne(selectors.at(-1), scope)) return false;
			let selectorParentIndex = selectors.length - 2;
			let parentIndex = parentScopes.length - 1;
			while (selectorParentIndex >= 0 && parentIndex >= 0) {
				if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex])) selectorParentIndex -= 1;
				parentIndex -= 1;
			}
			if (selectorParentIndex === -1) return true;
			return false;
		}
		function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
			const result = [];
			for (const { selectors, settings } of themeSettingsSelectors) for (const selectorPieces of selectors) if (matches(selectorPieces, scope, parentScopes)) {
				result.push(settings);
				break;
			}
			return result;
		}
		/**
		* Get tokens with multiple themes
		*/
		function codeToTokensWithThemes(primitive, code, options, codeToTokensBaseFn = codeToTokensBase$1) {
			const themes = Object.entries(options.themes).filter((i) => i[1]).map((i) => ({
				color: i[0],
				theme: i[1]
			}));
			const themedTokens = themes.map((t) => {
				const tokens = codeToTokensBaseFn(primitive, code, {
					...options,
					theme: t.theme
				});
				return {
					tokens,
					state: getLastGrammarStateFromMap(tokens),
					theme: typeof t.theme === "string" ? t.theme : t.theme.name
				};
			});
			const tokens = alignThemesTokenization(...themedTokens.map((i) => i.tokens));
			const mergedTokens = tokens[0].map((line, lineIdx) => line.map((_token, tokenIdx) => {
				const mergedToken = {
					content: _token.content,
					variants: {},
					offset: _token.offset
				};
				if ("includeExplanation" in options && options.includeExplanation) mergedToken.explanation = _token.explanation;
				tokens.forEach((t, themeIdx) => {
					const { content: _, explanation: __, offset: ___, ...styles } = t[lineIdx][tokenIdx];
					mergedToken.variants[themes[themeIdx].color] = styles;
				});
				return mergedToken;
			}));
			const mergedGrammarState = themedTokens[0].state ? new GrammarState(Object.fromEntries(themedTokens.map((s) => [s.theme, s.state?.getInternalStack(s.theme)])), themedTokens[0].state.lang) : void 0;
			if (mergedGrammarState) setLastGrammarStateToMap(mergedTokens, mergedGrammarState);
			return mergedTokens;
		}
		/**
		* Break tokens from multiple themes into same tokenization.
		*
		* For example, given two themes that tokenize `console.log("hello")` as:
		*
		* - `console . log (" hello ")` (6 tokens)
		* - `console .log ( "hello" )` (5 tokens)
		*
		* This function will return:
		*
		* - `console . log ( " hello " )` (8 tokens)
		* - `console . log ( " hello " )` (8 tokens)
		*/
		function alignThemesTokenization(...themes) {
			const outThemes = themes.map(() => []);
			const count = themes.length;
			for (let i = 0; i < themes[0].length; i++) {
				const lines = themes.map((t) => t[i]);
				const outLines = outThemes.map(() => []);
				outThemes.forEach((t, i) => t.push(outLines[i]));
				const indexes = lines.map(() => 0);
				const current = lines.map((l) => l[0]);
				while (current.every((t) => t)) {
					const minLength = Math.min(...current.map((t) => t.content.length));
					for (let n = 0; n < count; n++) {
						const token = current[n];
						if (token.content.length === minLength) {
							outLines[n].push(token);
							indexes[n] += 1;
							current[n] = lines[n][indexes[n]];
						} else {
							outLines[n].push({
								...token,
								content: token.content.slice(0, minLength)
							});
							current[n] = {
								...token,
								content: token.content.slice(minLength),
								offset: token.offset + minLength
							};
						}
					}
				}
			}
			return outThemes;
		}
		//#endregion
		//#region node_modules/.pnpm/html-void-elements@3.0.0/node_modules/html-void-elements/index.js
		/**
		* List of HTML void tag names.
		*
		* @type {Array<string>}
		*/
		const htmlVoidElements = [
			"area",
			"base",
			"basefont",
			"bgsound",
			"br",
			"col",
			"command",
			"embed",
			"frame",
			"hr",
			"image",
			"img",
			"input",
			"keygen",
			"link",
			"meta",
			"param",
			"source",
			"track",
			"wbr"
		];
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/schema.js
		/**
		* @import {Schema as SchemaType, Space} from 'property-information'
		*/
		/** @type {SchemaType} */
		var Schema = class {
			/**
			* @param {SchemaType['property']} property
			*   Property.
			* @param {SchemaType['normal']} normal
			*   Normal.
			* @param {Space | undefined} [space]
			*   Space.
			* @returns
			*   Schema.
			*/
			constructor(property, normal, space) {
				this.normal = normal;
				this.property = property;
				if (space) this.space = space;
			}
		};
		Schema.prototype.normal = {};
		Schema.prototype.property = {};
		Schema.prototype.space = void 0;
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/merge.js
		/**
		* @import {Info, Space} from 'property-information'
		*/
		/**
		* @param {ReadonlyArray<Schema>} definitions
		*   Definitions.
		* @param {Space | undefined} [space]
		*   Space.
		* @returns {Schema}
		*   Schema.
		*/
		function merge(definitions, space) {
			/** @type {Record<string, Info>} */
			const property = {};
			/** @type {Record<string, string>} */
			const normal = {};
			for (const definition of definitions) {
				Object.assign(property, definition.property);
				Object.assign(normal, definition.normal);
			}
			return new Schema(property, normal, space);
		}
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/normalize.js
		/**
		* Get the cleaned case insensitive form of an attribute or property.
		*
		* @param {string} value
		*   An attribute-like or property-like name.
		* @returns {string}
		*   Value that can be used to look up the properly cased property on a
		*   `Schema`.
		*/
		function normalize(value) {
			return value.toLowerCase();
		}
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/info.js
		/**
		* @import {Info as InfoType} from 'property-information'
		*/
		/** @type {InfoType} */
		var Info = class {
			/**
			* @param {string} property
			*   Property.
			* @param {string} attribute
			*   Attribute.
			* @returns
			*   Info.
			*/
			constructor(property, attribute) {
				this.attribute = attribute;
				this.property = property;
			}
		};
		Info.prototype.attribute = "";
		Info.prototype.booleanish = false;
		Info.prototype.boolean = false;
		Info.prototype.commaOrSpaceSeparated = false;
		Info.prototype.commaSeparated = false;
		Info.prototype.defined = false;
		Info.prototype.mustUseProperty = false;
		Info.prototype.number = false;
		Info.prototype.overloadedBoolean = false;
		Info.prototype.property = "";
		Info.prototype.spaceSeparated = false;
		Info.prototype.space = void 0;
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/types.js
		var types_exports = /* @__PURE__ */ __exportAll({
			boolean: () => boolean,
			booleanish: () => booleanish,
			commaOrSpaceSeparated: () => commaOrSpaceSeparated,
			commaSeparated: () => commaSeparated,
			number: () => number,
			overloadedBoolean: () => overloadedBoolean,
			spaceSeparated: () => spaceSeparated
		});
		let powers = 0;
		const boolean = increment();
		const booleanish = increment();
		const overloadedBoolean = increment();
		const number = increment();
		const spaceSeparated = increment();
		const commaSeparated = increment();
		const commaOrSpaceSeparated = increment();
		function increment() {
			return 2 ** ++powers;
		}
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/defined-info.js
		/**
		* @import {Space} from 'property-information'
		*/
		const checks = Object.keys(types_exports);
		var DefinedInfo = class extends Info {
			/**
			* @constructor
			* @param {string} property
			*   Property.
			* @param {string} attribute
			*   Attribute.
			* @param {number | null | undefined} [mask]
			*   Mask.
			* @param {Space | undefined} [space]
			*   Space.
			* @returns
			*   Info.
			*/
			constructor(property, attribute, mask, space) {
				let index = -1;
				super(property, attribute);
				mark(this, "space", space);
				if (typeof mask === "number") while (++index < checks.length) {
					const check = checks[index];
					mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
				}
			}
		};
		DefinedInfo.prototype.defined = true;
		/**
		* @template {keyof DefinedInfo} Key
		*   Key type.
		* @param {DefinedInfo} values
		*   Info.
		* @param {Key} key
		*   Key.
		* @param {DefinedInfo[Key]} value
		*   Value.
		* @returns {undefined}
		*   Nothing.
		*/
		function mark(values, key, value) {
			if (value) values[key] = value;
		}
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/create.js
		/**
		* @import {Info, Space} from 'property-information'
		*/
		/**
		* @typedef Definition
		*   Definition of a schema.
		* @property {Record<string, string> | undefined} [attributes]
		*   Normalzed names to special attribute case.
		* @property {ReadonlyArray<string> | undefined} [mustUseProperty]
		*   Normalized names that must be set as properties.
		* @property {Record<string, number | null>} properties
		*   Property names to their types.
		* @property {Space | undefined} [space]
		*   Space.
		* @property {Transform} transform
		*   Transform a property name.
		*/
		/**
		* @callback Transform
		*   Transform.
		* @param {Record<string, string>} attributes
		*   Attributes.
		* @param {string} property
		*   Property.
		* @returns {string}
		*   Attribute.
		*/
		/**
		* @param {Definition} definition
		*   Definition.
		* @returns {Schema}
		*   Schema.
		*/
		function create(definition) {
			/** @type {Record<string, Info>} */
			const properties = {};
			/** @type {Record<string, string>} */
			const normals = {};
			for (const [property, value] of Object.entries(definition.properties)) {
				const info = new DefinedInfo(property, definition.transform(definition.attributes || {}, property), value, definition.space);
				if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) info.mustUseProperty = true;
				properties[property] = info;
				normals[normalize(property)] = property;
				normals[normalize(info.attribute)] = property;
			}
			return new Schema(properties, normals, definition.space);
		}
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/aria.js
		const aria = create({
			properties: {
				ariaActiveDescendant: null,
				ariaAtomic: booleanish,
				ariaAutoComplete: null,
				ariaBusy: booleanish,
				ariaChecked: booleanish,
				ariaColCount: number,
				ariaColIndex: number,
				ariaColSpan: number,
				ariaControls: spaceSeparated,
				ariaCurrent: null,
				ariaDescribedBy: spaceSeparated,
				ariaDetails: null,
				ariaDisabled: booleanish,
				ariaDropEffect: spaceSeparated,
				ariaErrorMessage: null,
				ariaExpanded: booleanish,
				ariaFlowTo: spaceSeparated,
				ariaGrabbed: booleanish,
				ariaHasPopup: null,
				ariaHidden: booleanish,
				ariaInvalid: null,
				ariaKeyShortcuts: null,
				ariaLabel: null,
				ariaLabelledBy: spaceSeparated,
				ariaLevel: number,
				ariaLive: null,
				ariaModal: booleanish,
				ariaMultiLine: booleanish,
				ariaMultiSelectable: booleanish,
				ariaOrientation: null,
				ariaOwns: spaceSeparated,
				ariaPlaceholder: null,
				ariaPosInSet: number,
				ariaPressed: booleanish,
				ariaReadOnly: booleanish,
				ariaRelevant: null,
				ariaRequired: booleanish,
				ariaRoleDescription: spaceSeparated,
				ariaRowCount: number,
				ariaRowIndex: number,
				ariaRowSpan: number,
				ariaSelected: booleanish,
				ariaSetSize: number,
				ariaSort: null,
				ariaValueMax: number,
				ariaValueMin: number,
				ariaValueNow: number,
				ariaValueText: null,
				role: null
			},
			transform(_, property) {
				return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
			}
		});
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/case-sensitive-transform.js
		/**
		* @param {Record<string, string>} attributes
		*   Attributes.
		* @param {string} attribute
		*   Attribute.
		* @returns {string}
		*   Transformed attribute.
		*/
		function caseSensitiveTransform(attributes, attribute) {
			return attribute in attributes ? attributes[attribute] : attribute;
		}
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/case-insensitive-transform.js
		/**
		* @param {Record<string, string>} attributes
		*   Attributes.
		* @param {string} property
		*   Property.
		* @returns {string}
		*   Transformed property.
		*/
		function caseInsensitiveTransform(attributes, property) {
			return caseSensitiveTransform(attributes, property.toLowerCase());
		}
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/html.js
		const html$3 = create({
			attributes: {
				acceptcharset: "accept-charset",
				classname: "class",
				htmlfor: "for",
				httpequiv: "http-equiv"
			},
			mustUseProperty: [
				"checked",
				"multiple",
				"muted",
				"selected"
			],
			properties: {
				abbr: null,
				accept: commaSeparated,
				acceptCharset: spaceSeparated,
				accessKey: spaceSeparated,
				action: null,
				allow: null,
				allowFullScreen: boolean,
				allowPaymentRequest: boolean,
				allowUserMedia: boolean,
				alpha: boolean,
				alt: null,
				as: null,
				async: boolean,
				autoCapitalize: null,
				autoComplete: spaceSeparated,
				autoFocus: boolean,
				autoPlay: boolean,
				blocking: spaceSeparated,
				capture: null,
				charSet: null,
				checked: boolean,
				cite: null,
				className: spaceSeparated,
				closedBy: null,
				colorSpace: null,
				cols: number,
				colSpan: number,
				command: null,
				commandFor: null,
				content: null,
				contentEditable: booleanish,
				controls: boolean,
				controlsList: spaceSeparated,
				coords: number | commaSeparated,
				crossOrigin: null,
				data: null,
				dateTime: null,
				decoding: null,
				default: boolean,
				defer: boolean,
				dir: null,
				dirName: null,
				disabled: boolean,
				download: overloadedBoolean,
				draggable: booleanish,
				encType: null,
				enterKeyHint: null,
				fetchPriority: null,
				form: null,
				formAction: null,
				formEncType: null,
				formMethod: null,
				formNoValidate: boolean,
				formTarget: null,
				headers: spaceSeparated,
				height: number,
				hidden: overloadedBoolean,
				high: number,
				href: null,
				hrefLang: null,
				htmlFor: spaceSeparated,
				httpEquiv: spaceSeparated,
				id: null,
				imageSizes: null,
				imageSrcSet: null,
				inert: boolean,
				inputMode: null,
				integrity: null,
				is: null,
				isMap: boolean,
				itemId: null,
				itemProp: spaceSeparated,
				itemRef: spaceSeparated,
				itemScope: boolean,
				itemType: spaceSeparated,
				kind: null,
				label: null,
				lang: null,
				language: null,
				list: null,
				loading: null,
				loop: boolean,
				low: number,
				manifest: null,
				max: null,
				maxLength: number,
				media: null,
				method: null,
				min: null,
				minLength: number,
				multiple: boolean,
				muted: boolean,
				name: null,
				nonce: null,
				noModule: boolean,
				noValidate: boolean,
				onAbort: null,
				onAfterPrint: null,
				onAuxClick: null,
				onBeforeMatch: null,
				onBeforePrint: null,
				onBeforeToggle: null,
				onBeforeUnload: null,
				onBlur: null,
				onCancel: null,
				onCanPlay: null,
				onCanPlayThrough: null,
				onChange: null,
				onClick: null,
				onClose: null,
				onContextLost: null,
				onContextMenu: null,
				onContextRestored: null,
				onCopy: null,
				onCueChange: null,
				onCut: null,
				onDblClick: null,
				onDrag: null,
				onDragEnd: null,
				onDragEnter: null,
				onDragExit: null,
				onDragLeave: null,
				onDragOver: null,
				onDragStart: null,
				onDrop: null,
				onDurationChange: null,
				onEmptied: null,
				onEnded: null,
				onError: null,
				onFocus: null,
				onFormData: null,
				onHashChange: null,
				onInput: null,
				onInvalid: null,
				onKeyDown: null,
				onKeyPress: null,
				onKeyUp: null,
				onLanguageChange: null,
				onLoad: null,
				onLoadedData: null,
				onLoadedMetadata: null,
				onLoadEnd: null,
				onLoadStart: null,
				onMessage: null,
				onMessageError: null,
				onMouseDown: null,
				onMouseEnter: null,
				onMouseLeave: null,
				onMouseMove: null,
				onMouseOut: null,
				onMouseOver: null,
				onMouseUp: null,
				onOffline: null,
				onOnline: null,
				onPageHide: null,
				onPageShow: null,
				onPaste: null,
				onPause: null,
				onPlay: null,
				onPlaying: null,
				onPopState: null,
				onProgress: null,
				onRateChange: null,
				onRejectionHandled: null,
				onReset: null,
				onResize: null,
				onScroll: null,
				onScrollEnd: null,
				onSecurityPolicyViolation: null,
				onSeeked: null,
				onSeeking: null,
				onSelect: null,
				onSlotChange: null,
				onStalled: null,
				onStorage: null,
				onSubmit: null,
				onSuspend: null,
				onTimeUpdate: null,
				onToggle: null,
				onUnhandledRejection: null,
				onUnload: null,
				onVolumeChange: null,
				onWaiting: null,
				onWheel: null,
				open: boolean,
				optimum: number,
				pattern: null,
				ping: spaceSeparated,
				placeholder: null,
				playsInline: boolean,
				popover: null,
				popoverTarget: null,
				popoverTargetAction: null,
				poster: null,
				preload: null,
				readOnly: boolean,
				referrerPolicy: null,
				rel: spaceSeparated,
				required: boolean,
				reversed: boolean,
				rows: number,
				rowSpan: number,
				sandbox: spaceSeparated,
				scope: null,
				scoped: boolean,
				seamless: boolean,
				selected: boolean,
				shadowRootClonable: boolean,
				shadowRootCustomElementRegistry: boolean,
				shadowRootDelegatesFocus: boolean,
				shadowRootMode: null,
				shadowRootSerializable: boolean,
				shape: null,
				size: number,
				sizes: null,
				slot: null,
				span: number,
				spellCheck: booleanish,
				src: null,
				srcDoc: null,
				srcLang: null,
				srcSet: null,
				start: number,
				step: null,
				style: null,
				tabIndex: number,
				target: null,
				title: null,
				translate: null,
				type: null,
				typeMustMatch: boolean,
				useMap: null,
				value: booleanish,
				width: number,
				wrap: null,
				writingSuggestions: null,
				align: null,
				aLink: null,
				archive: spaceSeparated,
				axis: null,
				background: null,
				bgColor: null,
				border: number,
				borderColor: null,
				bottomMargin: number,
				cellPadding: null,
				cellSpacing: null,
				char: null,
				charOff: null,
				classId: null,
				clear: null,
				code: null,
				codeBase: null,
				codeType: null,
				color: null,
				compact: boolean,
				declare: boolean,
				event: null,
				face: null,
				frame: null,
				frameBorder: null,
				hSpace: number,
				leftMargin: number,
				link: null,
				longDesc: null,
				lowSrc: null,
				marginHeight: number,
				marginWidth: number,
				noResize: boolean,
				noHref: boolean,
				noShade: boolean,
				noWrap: boolean,
				object: null,
				profile: null,
				prompt: null,
				rev: null,
				rightMargin: number,
				rules: null,
				scheme: null,
				scrolling: booleanish,
				standby: null,
				summary: null,
				text: null,
				topMargin: number,
				valueType: null,
				version: null,
				vAlign: null,
				vLink: null,
				vSpace: number,
				allowTransparency: null,
				autoCorrect: null,
				autoSave: null,
				credentialless: boolean,
				disablePictureInPicture: boolean,
				disableRemotePlayback: boolean,
				exportParts: commaSeparated,
				part: spaceSeparated,
				prefix: null,
				property: null,
				results: number,
				security: null,
				unselectable: null
			},
			space: "html",
			transform: caseInsensitiveTransform
		});
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/svg.js
		const svg$1 = create({
			attributes: {
				accentHeight: "accent-height",
				alignmentBaseline: "alignment-baseline",
				arabicForm: "arabic-form",
				baselineShift: "baseline-shift",
				capHeight: "cap-height",
				className: "class",
				clipPath: "clip-path",
				clipRule: "clip-rule",
				colorInterpolation: "color-interpolation",
				colorInterpolationFilters: "color-interpolation-filters",
				colorProfile: "color-profile",
				colorRendering: "color-rendering",
				crossOrigin: "crossorigin",
				dataType: "datatype",
				dominantBaseline: "dominant-baseline",
				enableBackground: "enable-background",
				fillOpacity: "fill-opacity",
				fillRule: "fill-rule",
				floodColor: "flood-color",
				floodOpacity: "flood-opacity",
				fontFamily: "font-family",
				fontSize: "font-size",
				fontSizeAdjust: "font-size-adjust",
				fontStretch: "font-stretch",
				fontStyle: "font-style",
				fontVariant: "font-variant",
				fontWeight: "font-weight",
				glyphName: "glyph-name",
				glyphOrientationHorizontal: "glyph-orientation-horizontal",
				glyphOrientationVertical: "glyph-orientation-vertical",
				hrefLang: "hreflang",
				horizAdvX: "horiz-adv-x",
				horizOriginX: "horiz-origin-x",
				horizOriginY: "horiz-origin-y",
				imageRendering: "image-rendering",
				letterSpacing: "letter-spacing",
				lightingColor: "lighting-color",
				markerEnd: "marker-end",
				markerMid: "marker-mid",
				markerStart: "marker-start",
				maskType: "mask-type",
				navDown: "nav-down",
				navDownLeft: "nav-down-left",
				navDownRight: "nav-down-right",
				navLeft: "nav-left",
				navNext: "nav-next",
				navPrev: "nav-prev",
				navRight: "nav-right",
				navUp: "nav-up",
				navUpLeft: "nav-up-left",
				navUpRight: "nav-up-right",
				onAbort: "onabort",
				onActivate: "onactivate",
				onAfterPrint: "onafterprint",
				onBeforePrint: "onbeforeprint",
				onBegin: "onbegin",
				onCancel: "oncancel",
				onCanPlay: "oncanplay",
				onCanPlayThrough: "oncanplaythrough",
				onChange: "onchange",
				onClick: "onclick",
				onClose: "onclose",
				onCopy: "oncopy",
				onCueChange: "oncuechange",
				onCut: "oncut",
				onDblClick: "ondblclick",
				onDrag: "ondrag",
				onDragEnd: "ondragend",
				onDragEnter: "ondragenter",
				onDragExit: "ondragexit",
				onDragLeave: "ondragleave",
				onDragOver: "ondragover",
				onDragStart: "ondragstart",
				onDrop: "ondrop",
				onDurationChange: "ondurationchange",
				onEmptied: "onemptied",
				onEnd: "onend",
				onEnded: "onended",
				onError: "onerror",
				onFocus: "onfocus",
				onFocusIn: "onfocusin",
				onFocusOut: "onfocusout",
				onHashChange: "onhashchange",
				onInput: "oninput",
				onInvalid: "oninvalid",
				onKeyDown: "onkeydown",
				onKeyPress: "onkeypress",
				onKeyUp: "onkeyup",
				onLoad: "onload",
				onLoadedData: "onloadeddata",
				onLoadedMetadata: "onloadedmetadata",
				onLoadStart: "onloadstart",
				onMessage: "onmessage",
				onMouseDown: "onmousedown",
				onMouseEnter: "onmouseenter",
				onMouseLeave: "onmouseleave",
				onMouseMove: "onmousemove",
				onMouseOut: "onmouseout",
				onMouseOver: "onmouseover",
				onMouseUp: "onmouseup",
				onMouseWheel: "onmousewheel",
				onOffline: "onoffline",
				onOnline: "ononline",
				onPageHide: "onpagehide",
				onPageShow: "onpageshow",
				onPaste: "onpaste",
				onPause: "onpause",
				onPlay: "onplay",
				onPlaying: "onplaying",
				onPopState: "onpopstate",
				onProgress: "onprogress",
				onRateChange: "onratechange",
				onRepeat: "onrepeat",
				onReset: "onreset",
				onResize: "onresize",
				onScroll: "onscroll",
				onSeeked: "onseeked",
				onSeeking: "onseeking",
				onSelect: "onselect",
				onShow: "onshow",
				onStalled: "onstalled",
				onStorage: "onstorage",
				onSubmit: "onsubmit",
				onSuspend: "onsuspend",
				onTimeUpdate: "ontimeupdate",
				onToggle: "ontoggle",
				onUnload: "onunload",
				onVolumeChange: "onvolumechange",
				onWaiting: "onwaiting",
				onZoom: "onzoom",
				overlinePosition: "overline-position",
				overlineThickness: "overline-thickness",
				paintOrder: "paint-order",
				panose1: "panose-1",
				pointerEvents: "pointer-events",
				referrerPolicy: "referrerpolicy",
				renderingIntent: "rendering-intent",
				shapeRendering: "shape-rendering",
				stopColor: "stop-color",
				stopOpacity: "stop-opacity",
				strikethroughPosition: "strikethrough-position",
				strikethroughThickness: "strikethrough-thickness",
				strokeDashArray: "stroke-dasharray",
				strokeDashOffset: "stroke-dashoffset",
				strokeLineCap: "stroke-linecap",
				strokeLineJoin: "stroke-linejoin",
				strokeMiterLimit: "stroke-miterlimit",
				strokeOpacity: "stroke-opacity",
				strokeWidth: "stroke-width",
				tabIndex: "tabindex",
				textAnchor: "text-anchor",
				textDecoration: "text-decoration",
				textRendering: "text-rendering",
				transformOrigin: "transform-origin",
				typeOf: "typeof",
				underlinePosition: "underline-position",
				underlineThickness: "underline-thickness",
				unicodeBidi: "unicode-bidi",
				unicodeRange: "unicode-range",
				unitsPerEm: "units-per-em",
				vAlphabetic: "v-alphabetic",
				vHanging: "v-hanging",
				vIdeographic: "v-ideographic",
				vMathematical: "v-mathematical",
				vectorEffect: "vector-effect",
				vertAdvY: "vert-adv-y",
				vertOriginX: "vert-origin-x",
				vertOriginY: "vert-origin-y",
				wordSpacing: "word-spacing",
				writingMode: "writing-mode",
				xHeight: "x-height",
				playbackOrder: "playbackorder",
				timelineBegin: "timelinebegin"
			},
			properties: {
				about: commaOrSpaceSeparated,
				accentHeight: number,
				accumulate: null,
				additive: null,
				alignmentBaseline: null,
				alphabetic: number,
				amplitude: number,
				arabicForm: null,
				ascent: number,
				attributeName: null,
				attributeType: null,
				azimuth: number,
				bandwidth: null,
				baselineShift: null,
				baseFrequency: null,
				baseProfile: null,
				bbox: null,
				begin: null,
				bias: number,
				by: null,
				calcMode: null,
				capHeight: number,
				className: spaceSeparated,
				clip: null,
				clipPath: null,
				clipPathUnits: null,
				clipRule: null,
				color: null,
				colorInterpolation: null,
				colorInterpolationFilters: null,
				colorProfile: null,
				colorRendering: null,
				content: null,
				contentScriptType: null,
				contentStyleType: null,
				crossOrigin: null,
				cursor: null,
				cx: null,
				cy: null,
				d: null,
				dataType: null,
				defaultAction: null,
				descent: number,
				diffuseConstant: number,
				direction: null,
				display: null,
				dur: null,
				divisor: number,
				dominantBaseline: null,
				download: boolean,
				dx: null,
				dy: null,
				edgeMode: null,
				editable: null,
				elevation: number,
				enableBackground: null,
				end: null,
				event: null,
				exponent: number,
				externalResourcesRequired: null,
				fill: null,
				fillOpacity: number,
				fillRule: null,
				filter: null,
				filterRes: null,
				filterUnits: null,
				floodColor: null,
				floodOpacity: null,
				focusable: null,
				focusHighlight: null,
				fontFamily: null,
				fontSize: null,
				fontSizeAdjust: null,
				fontStretch: null,
				fontStyle: null,
				fontVariant: null,
				fontWeight: null,
				format: null,
				fr: null,
				from: null,
				fx: null,
				fy: null,
				g1: commaSeparated,
				g2: commaSeparated,
				glyphName: commaSeparated,
				glyphOrientationHorizontal: null,
				glyphOrientationVertical: null,
				glyphRef: null,
				gradientTransform: null,
				gradientUnits: null,
				handler: null,
				hanging: number,
				hatchContentUnits: null,
				hatchUnits: null,
				height: null,
				href: null,
				hrefLang: null,
				horizAdvX: number,
				horizOriginX: number,
				horizOriginY: number,
				id: null,
				ideographic: number,
				imageRendering: null,
				initialVisibility: null,
				in: null,
				in2: null,
				intercept: number,
				k: number,
				k1: number,
				k2: number,
				k3: number,
				k4: number,
				kernelMatrix: commaOrSpaceSeparated,
				kernelUnitLength: null,
				keyPoints: null,
				keySplines: null,
				keyTimes: null,
				kerning: null,
				lang: null,
				lengthAdjust: null,
				letterSpacing: null,
				lightingColor: null,
				limitingConeAngle: number,
				local: null,
				markerEnd: null,
				markerMid: null,
				markerStart: null,
				markerHeight: null,
				markerUnits: null,
				markerWidth: null,
				mask: null,
				maskContentUnits: null,
				maskType: null,
				maskUnits: null,
				mathematical: null,
				max: null,
				media: null,
				mediaCharacterEncoding: null,
				mediaContentEncodings: null,
				mediaSize: number,
				mediaTime: null,
				method: null,
				min: null,
				mode: null,
				name: null,
				navDown: null,
				navDownLeft: null,
				navDownRight: null,
				navLeft: null,
				navNext: null,
				navPrev: null,
				navRight: null,
				navUp: null,
				navUpLeft: null,
				navUpRight: null,
				numOctaves: null,
				observer: null,
				offset: null,
				onAbort: null,
				onActivate: null,
				onAfterPrint: null,
				onBeforePrint: null,
				onBegin: null,
				onCancel: null,
				onCanPlay: null,
				onCanPlayThrough: null,
				onChange: null,
				onClick: null,
				onClose: null,
				onCopy: null,
				onCueChange: null,
				onCut: null,
				onDblClick: null,
				onDrag: null,
				onDragEnd: null,
				onDragEnter: null,
				onDragExit: null,
				onDragLeave: null,
				onDragOver: null,
				onDragStart: null,
				onDrop: null,
				onDurationChange: null,
				onEmptied: null,
				onEnd: null,
				onEnded: null,
				onError: null,
				onFocus: null,
				onFocusIn: null,
				onFocusOut: null,
				onHashChange: null,
				onInput: null,
				onInvalid: null,
				onKeyDown: null,
				onKeyPress: null,
				onKeyUp: null,
				onLoad: null,
				onLoadedData: null,
				onLoadedMetadata: null,
				onLoadStart: null,
				onMessage: null,
				onMouseDown: null,
				onMouseEnter: null,
				onMouseLeave: null,
				onMouseMove: null,
				onMouseOut: null,
				onMouseOver: null,
				onMouseUp: null,
				onMouseWheel: null,
				onOffline: null,
				onOnline: null,
				onPageHide: null,
				onPageShow: null,
				onPaste: null,
				onPause: null,
				onPlay: null,
				onPlaying: null,
				onPopState: null,
				onProgress: null,
				onRateChange: null,
				onRepeat: null,
				onReset: null,
				onResize: null,
				onScroll: null,
				onSeeked: null,
				onSeeking: null,
				onSelect: null,
				onShow: null,
				onStalled: null,
				onStorage: null,
				onSubmit: null,
				onSuspend: null,
				onTimeUpdate: null,
				onToggle: null,
				onUnload: null,
				onVolumeChange: null,
				onWaiting: null,
				onZoom: null,
				opacity: null,
				operator: null,
				order: null,
				orient: null,
				orientation: null,
				origin: null,
				overflow: null,
				overlay: null,
				overlinePosition: number,
				overlineThickness: number,
				paintOrder: null,
				panose1: null,
				path: null,
				pathLength: number,
				patternContentUnits: null,
				patternTransform: null,
				patternUnits: null,
				phase: null,
				ping: spaceSeparated,
				pitch: null,
				playbackOrder: null,
				pointerEvents: null,
				points: null,
				pointsAtX: number,
				pointsAtY: number,
				pointsAtZ: number,
				preserveAlpha: null,
				preserveAspectRatio: null,
				primitiveUnits: null,
				propagate: null,
				property: commaOrSpaceSeparated,
				r: null,
				radius: null,
				referrerPolicy: null,
				refX: null,
				refY: null,
				rel: commaOrSpaceSeparated,
				rev: commaOrSpaceSeparated,
				renderingIntent: null,
				repeatCount: null,
				repeatDur: null,
				requiredExtensions: commaOrSpaceSeparated,
				requiredFeatures: commaOrSpaceSeparated,
				requiredFonts: commaOrSpaceSeparated,
				requiredFormats: commaOrSpaceSeparated,
				resource: null,
				restart: null,
				result: null,
				rotate: null,
				rx: null,
				ry: null,
				scale: null,
				seed: null,
				shapeRendering: null,
				side: null,
				slope: null,
				snapshotTime: null,
				specularConstant: number,
				specularExponent: number,
				spreadMethod: null,
				spacing: null,
				startOffset: null,
				stdDeviation: null,
				stemh: null,
				stemv: null,
				stitchTiles: null,
				stopColor: null,
				stopOpacity: null,
				strikethroughPosition: number,
				strikethroughThickness: number,
				string: null,
				stroke: null,
				strokeDashArray: commaOrSpaceSeparated,
				strokeDashOffset: null,
				strokeLineCap: null,
				strokeLineJoin: null,
				strokeMiterLimit: number,
				strokeOpacity: number,
				strokeWidth: null,
				style: null,
				surfaceScale: number,
				syncBehavior: null,
				syncBehaviorDefault: null,
				syncMaster: null,
				syncTolerance: null,
				syncToleranceDefault: null,
				systemLanguage: commaOrSpaceSeparated,
				tabIndex: number,
				tableValues: null,
				target: null,
				targetX: number,
				targetY: number,
				textAnchor: null,
				textDecoration: null,
				textRendering: null,
				textLength: null,
				timelineBegin: null,
				title: null,
				transformBehavior: null,
				type: null,
				typeOf: commaOrSpaceSeparated,
				to: null,
				transform: null,
				transformOrigin: null,
				u1: null,
				u2: null,
				underlinePosition: number,
				underlineThickness: number,
				unicode: null,
				unicodeBidi: null,
				unicodeRange: null,
				unitsPerEm: number,
				values: null,
				vAlphabetic: number,
				vMathematical: number,
				vectorEffect: null,
				vHanging: number,
				vIdeographic: number,
				version: null,
				vertAdvY: number,
				vertOriginX: number,
				vertOriginY: number,
				viewBox: null,
				viewTarget: null,
				visibility: null,
				width: null,
				widths: null,
				wordSpacing: null,
				writingMode: null,
				x: null,
				x1: null,
				x2: null,
				xChannelSelector: null,
				xHeight: number,
				y: null,
				y1: null,
				y2: null,
				yChannelSelector: null,
				z: null,
				zoomAndPan: null
			},
			space: "svg",
			transform: caseSensitiveTransform
		});
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xlink.js
		const xlink = create({
			properties: {
				xLinkActuate: null,
				xLinkArcRole: null,
				xLinkHref: null,
				xLinkRole: null,
				xLinkShow: null,
				xLinkTitle: null,
				xLinkType: null
			},
			space: "xlink",
			transform(_, property) {
				return "xlink:" + property.slice(5).toLowerCase();
			}
		});
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xmlns.js
		const xmlns = create({
			attributes: { xmlnsxlink: "xmlns:xlink" },
			properties: {
				xmlnsXLink: null,
				xmlns: null
			},
			space: "xmlns",
			transform: caseInsensitiveTransform
		});
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xml.js
		const xml = create({
			properties: {
				xmlBase: null,
				xmlLang: null,
				xmlSpace: null
			},
			space: "xml",
			transform(_, property) {
				return "xml:" + property.slice(3).toLowerCase();
			}
		});
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/find.js
		/**
		* @import {Schema} from 'property-information'
		*/
		const cap = /[A-Z]/g;
		const dash = /-[a-z]/g;
		const valid = /^data[-\w.:]+$/i;
		/**
		* Look up info on a property.
		*
		* In most cases the given `schema` contains info on the property.
		* All standard,
		* most legacy,
		* and some non-standard properties are supported.
		* For these cases,
		* the returned `Info` has hints about the value of the property.
		*
		* `name` can also be a valid data attribute or property,
		* in which case an `Info` object with the correctly cased `attribute` and
		* `property` is returned.
		*
		* `name` can be an unknown attribute,
		* in which case an `Info` object with `attribute` and `property` set to the
		* given name is returned.
		* It is not recommended to provide unsupported legacy or recently specced
		* properties.
		*
		*
		* @param {Schema} schema
		*   Schema;
		*   either the `html` or `svg` export.
		* @param {string} value
		*   An attribute-like or property-like name;
		*   it will be passed through `normalize` to hopefully find the correct info.
		* @returns {Info}
		*   Info.
		*/
		function find(schema, value) {
			const normal = normalize(value);
			let property = value;
			let Type = Info;
			if (normal in schema.normal) return schema.property[schema.normal[normal]];
			if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
				if (value.charAt(4) === "-") {
					const rest = value.slice(5).replace(dash, camelcase);
					property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
				} else {
					const rest = value.slice(4);
					if (!dash.test(rest)) {
						let dashes = rest.replace(cap, kebab);
						if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
						value = "data" + dashes;
					}
				}
				Type = DefinedInfo;
			}
			return new Type(property, value);
		}
		/**
		* @param {string} $0
		*   Value.
		* @returns {string}
		*   Kebab.
		*/
		function kebab($0) {
			return "-" + $0.toLowerCase();
		}
		/**
		* @param {string} $0
		*   Value.
		* @returns {string}
		*   Camel.
		*/
		function camelcase($0) {
			return $0.charAt(1).toUpperCase();
		}
		//#endregion
		//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/index.js
		const html$2 = merge([
			aria,
			html$3,
			xlink,
			xmlns,
			xml
		], "html");
		const svg = merge([
			aria,
			svg$1,
			xlink,
			xmlns,
			xml
		], "svg");
		//#endregion
		//#region node_modules/.pnpm/zwitch@2.0.4/node_modules/zwitch/index.js
		/**
		* @callback Handler
		*   Handle a value, with a certain ID field set to a certain value.
		*   The ID field is passed to `zwitch`, and it’s value is this function’s
		*   place on the `handlers` record.
		* @param {...any} parameters
		*   Arbitrary parameters passed to the zwitch.
		*   The first will be an object with a certain ID field set to a certain value.
		* @returns {any}
		*   Anything!
		*/
		/**
		* @callback UnknownHandler
		*   Handle values that do have a certain ID field, but it’s set to a value
		*   that is not listed in the `handlers` record.
		* @param {unknown} value
		*   An object with a certain ID field set to an unknown value.
		* @param {...any} rest
		*   Arbitrary parameters passed to the zwitch.
		* @returns {any}
		*   Anything!
		*/
		/**
		* @callback InvalidHandler
		*   Handle values that do not have a certain ID field.
		* @param {unknown} value
		*   Any unknown value.
		* @param {...any} rest
		*   Arbitrary parameters passed to the zwitch.
		* @returns {void|null|undefined|never}
		*   This should crash or return nothing.
		*/
		/**
		* @template {InvalidHandler} [Invalid=InvalidHandler]
		* @template {UnknownHandler} [Unknown=UnknownHandler]
		* @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
		* @typedef Options
		*   Configuration (required).
		* @property {Invalid} [invalid]
		*   Handler to use for invalid values.
		* @property {Unknown} [unknown]
		*   Handler to use for unknown values.
		* @property {Handlers} [handlers]
		*   Handlers to use.
		*/
		const own$2 = {}.hasOwnProperty;
		/**
		* Handle values based on a field.
		*
		* @template {InvalidHandler} [Invalid=InvalidHandler]
		* @template {UnknownHandler} [Unknown=UnknownHandler]
		* @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
		* @param {string} key
		*   Field to switch on.
		* @param {Options<Invalid, Unknown, Handlers>} [options]
		*   Configuration (required).
		* @returns {{unknown: Unknown, invalid: Invalid, handlers: Handlers, (...parameters: Parameters<Handlers[keyof Handlers]>): ReturnType<Handlers[keyof Handlers]>, (...parameters: Parameters<Unknown>): ReturnType<Unknown>}}
		*/
		function zwitch(key, options) {
			const settings = options || {};
			/**
			* Handle one value.
			*
			* Based on the bound `key`, a respective handler will be called.
			* If `value` is not an object, or doesn’t have a `key` property, the special
			* “invalid” handler will be called.
			* If `value` has an unknown `key`, the special “unknown” handler will be
			* called.
			*
			* All arguments, and the context object, are passed through to the handler,
			* and it’s result is returned.
			*
			* @this {unknown}
			*   Any context object.
			* @param {unknown} [value]
			*   Any value.
			* @param {...unknown} parameters
			*   Arbitrary parameters passed to the zwitch.
			* @property {Handler} invalid
			*   Handle for values that do not have a certain ID field.
			* @property {Handler} unknown
			*   Handle values that do have a certain ID field, but it’s set to a value
			*   that is not listed in the `handlers` record.
			* @property {Handlers} handlers
			*   Record of handlers.
			* @returns {unknown}
			*   Anything.
			*/
			function one(value, ...parameters) {
				/** @type {Handler|undefined} */
				let fn = one.invalid;
				const handlers = one.handlers;
				if (value && own$2.call(value, key)) {
					const id = String(value[key]);
					fn = own$2.call(handlers, id) ? handlers[id] : one.unknown;
				}
				if (fn) return fn.call(this, value, ...parameters);
			}
			one.handlers = settings.handlers || {};
			one.invalid = settings.invalid;
			one.unknown = settings.unknown;
			return one;
		}
		//#endregion
		//#region node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/core.js
		/**
		* @typedef CoreOptions
		* @property {ReadonlyArray<string>} [subset=[]]
		*   Whether to only escape the given subset of characters.
		* @property {boolean} [escapeOnly=false]
		*   Whether to only escape possibly dangerous characters.
		*   Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
		*
		* @typedef FormatOptions
		* @property {(code: number, next: number, options: CoreWithFormatOptions) => string} format
		*   Format strategy.
		*
		* @typedef {CoreOptions & FormatOptions & import('./util/format-smart.js').FormatSmartOptions} CoreWithFormatOptions
		*/
		const defaultSubsetRegex = /["&'<>`]/g;
		const surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		const controlCharactersRegex = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
		const regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
		/** @type {WeakMap<ReadonlyArray<string>, RegExp>} */
		const subsetToRegexCache = /* @__PURE__ */ new WeakMap();
		/**
		* Encode certain characters in `value`.
		*
		* @param {string} value
		* @param {CoreWithFormatOptions} options
		* @returns {string}
		*/
		function core(value, options) {
			value = value.replace(options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex, basic);
			if (options.subset || options.escapeOnly) return value;
			return value.replace(surrogatePairsRegex, surrogate).replace(controlCharactersRegex, basic);
			/**
			* @param {string} pair
			* @param {number} index
			* @param {string} all
			*/
			function surrogate(pair, index, all) {
				return options.format((pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536, all.charCodeAt(index + 2), options);
			}
			/**
			* @param {string} character
			* @param {number} index
			* @param {string} all
			*/
			function basic(character, index, all) {
				return options.format(character.charCodeAt(0), all.charCodeAt(index + 1), options);
			}
		}
		/**
		* A wrapper function that caches the result of `charactersToExpression` with a WeakMap.
		* This can improve performance when tooling calls `charactersToExpression` repeatedly
		* with the same subset.
		*
		* @param {ReadonlyArray<string>} subset
		* @returns {RegExp}
		*/
		function charactersToExpressionCached(subset) {
			let cached = subsetToRegexCache.get(subset);
			if (!cached) {
				cached = charactersToExpression(subset);
				subsetToRegexCache.set(subset, cached);
			}
			return cached;
		}
		/**
		* @param {ReadonlyArray<string>} subset
		* @returns {RegExp}
		*/
		function charactersToExpression(subset) {
			/** @type {Array<string>} */
			const groups = [];
			let index = -1;
			while (++index < subset.length) groups.push(subset[index].replace(regexEscapeRegex, "\\$&"));
			return new RegExp("(?:" + groups.join("|") + ")", "g");
		}
		//#endregion
		//#region node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/util/to-hexadecimal.js
		const hexadecimalRegex = /[\dA-Fa-f]/;
		/**
		* Configurable ways to encode characters as hexadecimal references.
		*
		* @param {number} code
		* @param {number} next
		* @param {boolean|undefined} omit
		* @returns {string}
		*/
		function toHexadecimal(code, next, omit) {
			const value = "&#x" + code.toString(16).toUpperCase();
			return omit && next && !hexadecimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
		}
		//#endregion
		//#region node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/util/to-decimal.js
		const decimalRegex = /\d/;
		/**
		* Configurable ways to encode characters as decimal references.
		*
		* @param {number} code
		* @param {number} next
		* @param {boolean|undefined} omit
		* @returns {string}
		*/
		function toDecimal(code, next, omit) {
			const value = "&#" + String(code);
			return omit && next && !decimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
		}
		//#endregion
		//#region node_modules/.pnpm/character-entities-legacy@3.0.0/node_modules/character-entities-legacy/index.js
		/**
		* List of legacy HTML named character references that don’t need a trailing semicolon.
		*
		* @type {Array<string>}
		*/
		const characterEntitiesLegacy = [
			"AElig",
			"AMP",
			"Aacute",
			"Acirc",
			"Agrave",
			"Aring",
			"Atilde",
			"Auml",
			"COPY",
			"Ccedil",
			"ETH",
			"Eacute",
			"Ecirc",
			"Egrave",
			"Euml",
			"GT",
			"Iacute",
			"Icirc",
			"Igrave",
			"Iuml",
			"LT",
			"Ntilde",
			"Oacute",
			"Ocirc",
			"Ograve",
			"Oslash",
			"Otilde",
			"Ouml",
			"QUOT",
			"REG",
			"THORN",
			"Uacute",
			"Ucirc",
			"Ugrave",
			"Uuml",
			"Yacute",
			"aacute",
			"acirc",
			"acute",
			"aelig",
			"agrave",
			"amp",
			"aring",
			"atilde",
			"auml",
			"brvbar",
			"ccedil",
			"cedil",
			"cent",
			"copy",
			"curren",
			"deg",
			"divide",
			"eacute",
			"ecirc",
			"egrave",
			"eth",
			"euml",
			"frac12",
			"frac14",
			"frac34",
			"gt",
			"iacute",
			"icirc",
			"iexcl",
			"igrave",
			"iquest",
			"iuml",
			"laquo",
			"lt",
			"macr",
			"micro",
			"middot",
			"nbsp",
			"not",
			"ntilde",
			"oacute",
			"ocirc",
			"ograve",
			"ordf",
			"ordm",
			"oslash",
			"otilde",
			"ouml",
			"para",
			"plusmn",
			"pound",
			"quot",
			"raquo",
			"reg",
			"sect",
			"shy",
			"sup1",
			"sup2",
			"sup3",
			"szlig",
			"thorn",
			"times",
			"uacute",
			"ucirc",
			"ugrave",
			"uml",
			"uuml",
			"yacute",
			"yen",
			"yuml"
		];
		//#endregion
		//#region node_modules/.pnpm/character-entities-html4@2.1.0/node_modules/character-entities-html4/index.js
		/**
		* Map of named character references from HTML 4.
		*
		* @type {Record<string, string>}
		*/
		const characterEntitiesHtml4 = {
			nbsp: "\xA0",
			iexcl: "¡",
			cent: "¢",
			pound: "£",
			curren: "¤",
			yen: "¥",
			brvbar: "¦",
			sect: "§",
			uml: "¨",
			copy: "©",
			ordf: "ª",
			laquo: "«",
			not: "¬",
			shy: "­",
			reg: "®",
			macr: "¯",
			deg: "°",
			plusmn: "±",
			sup2: "²",
			sup3: "³",
			acute: "´",
			micro: "µ",
			para: "¶",
			middot: "·",
			cedil: "¸",
			sup1: "¹",
			ordm: "º",
			raquo: "»",
			frac14: "¼",
			frac12: "½",
			frac34: "¾",
			iquest: "¿",
			Agrave: "À",
			Aacute: "Á",
			Acirc: "Â",
			Atilde: "Ã",
			Auml: "Ä",
			Aring: "Å",
			AElig: "Æ",
			Ccedil: "Ç",
			Egrave: "È",
			Eacute: "É",
			Ecirc: "Ê",
			Euml: "Ë",
			Igrave: "Ì",
			Iacute: "Í",
			Icirc: "Î",
			Iuml: "Ï",
			ETH: "Ð",
			Ntilde: "Ñ",
			Ograve: "Ò",
			Oacute: "Ó",
			Ocirc: "Ô",
			Otilde: "Õ",
			Ouml: "Ö",
			times: "×",
			Oslash: "Ø",
			Ugrave: "Ù",
			Uacute: "Ú",
			Ucirc: "Û",
			Uuml: "Ü",
			Yacute: "Ý",
			THORN: "Þ",
			szlig: "ß",
			agrave: "à",
			aacute: "á",
			acirc: "â",
			atilde: "ã",
			auml: "ä",
			aring: "å",
			aelig: "æ",
			ccedil: "ç",
			egrave: "è",
			eacute: "é",
			ecirc: "ê",
			euml: "ë",
			igrave: "ì",
			iacute: "í",
			icirc: "î",
			iuml: "ï",
			eth: "ð",
			ntilde: "ñ",
			ograve: "ò",
			oacute: "ó",
			ocirc: "ô",
			otilde: "õ",
			ouml: "ö",
			divide: "÷",
			oslash: "ø",
			ugrave: "ù",
			uacute: "ú",
			ucirc: "û",
			uuml: "ü",
			yacute: "ý",
			thorn: "þ",
			yuml: "ÿ",
			fnof: "ƒ",
			Alpha: "Α",
			Beta: "Β",
			Gamma: "Γ",
			Delta: "Δ",
			Epsilon: "Ε",
			Zeta: "Ζ",
			Eta: "Η",
			Theta: "Θ",
			Iota: "Ι",
			Kappa: "Κ",
			Lambda: "Λ",
			Mu: "Μ",
			Nu: "Ν",
			Xi: "Ξ",
			Omicron: "Ο",
			Pi: "Π",
			Rho: "Ρ",
			Sigma: "Σ",
			Tau: "Τ",
			Upsilon: "Υ",
			Phi: "Φ",
			Chi: "Χ",
			Psi: "Ψ",
			Omega: "Ω",
			alpha: "α",
			beta: "β",
			gamma: "γ",
			delta: "δ",
			epsilon: "ε",
			zeta: "ζ",
			eta: "η",
			theta: "θ",
			iota: "ι",
			kappa: "κ",
			lambda: "λ",
			mu: "μ",
			nu: "ν",
			xi: "ξ",
			omicron: "ο",
			pi: "π",
			rho: "ρ",
			sigmaf: "ς",
			sigma: "σ",
			tau: "τ",
			upsilon: "υ",
			phi: "φ",
			chi: "χ",
			psi: "ψ",
			omega: "ω",
			thetasym: "ϑ",
			upsih: "ϒ",
			piv: "ϖ",
			bull: "•",
			hellip: "…",
			prime: "′",
			Prime: "″",
			oline: "‾",
			frasl: "⁄",
			weierp: "℘",
			image: "ℑ",
			real: "ℜ",
			trade: "™",
			alefsym: "ℵ",
			larr: "←",
			uarr: "↑",
			rarr: "→",
			darr: "↓",
			harr: "↔",
			crarr: "↵",
			lArr: "⇐",
			uArr: "⇑",
			rArr: "⇒",
			dArr: "⇓",
			hArr: "⇔",
			forall: "∀",
			part: "∂",
			exist: "∃",
			empty: "∅",
			nabla: "∇",
			isin: "∈",
			notin: "∉",
			ni: "∋",
			prod: "∏",
			sum: "∑",
			minus: "−",
			lowast: "∗",
			radic: "√",
			prop: "∝",
			infin: "∞",
			ang: "∠",
			and: "∧",
			or: "∨",
			cap: "∩",
			cup: "∪",
			int: "∫",
			there4: "∴",
			sim: "∼",
			cong: "≅",
			asymp: "≈",
			ne: "≠",
			equiv: "≡",
			le: "≤",
			ge: "≥",
			sub: "⊂",
			sup: "⊃",
			nsub: "⊄",
			sube: "⊆",
			supe: "⊇",
			oplus: "⊕",
			otimes: "⊗",
			perp: "⊥",
			sdot: "⋅",
			lceil: "⌈",
			rceil: "⌉",
			lfloor: "⌊",
			rfloor: "⌋",
			lang: "〈",
			rang: "〉",
			loz: "◊",
			spades: "♠",
			clubs: "♣",
			hearts: "♥",
			diams: "♦",
			quot: "\"",
			amp: "&",
			lt: "<",
			gt: ">",
			OElig: "Œ",
			oelig: "œ",
			Scaron: "Š",
			scaron: "š",
			Yuml: "Ÿ",
			circ: "ˆ",
			tilde: "˜",
			ensp: " ",
			emsp: " ",
			thinsp: " ",
			zwnj: "‌",
			zwj: "‍",
			lrm: "‎",
			rlm: "‏",
			ndash: "–",
			mdash: "—",
			lsquo: "‘",
			rsquo: "’",
			sbquo: "‚",
			ldquo: "“",
			rdquo: "”",
			bdquo: "„",
			dagger: "†",
			Dagger: "‡",
			permil: "‰",
			lsaquo: "‹",
			rsaquo: "›",
			euro: "€"
		};
		//#endregion
		//#region node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/constant/dangerous.js
		/**
		* List of legacy (that don’t need a trailing `;`) named references which could,
		* depending on what follows them, turn into a different meaning
		*
		* @type {Array<string>}
		*/
		const dangerous = [
			"cent",
			"copy",
			"divide",
			"gt",
			"lt",
			"not",
			"para",
			"times"
		];
		//#endregion
		//#region node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/util/to-named.js
		const own$1 = {}.hasOwnProperty;
		/**
		* `characterEntitiesHtml4` but inverted.
		*
		* @type {Record<string, string>}
		*/
		const characters = {};
		/** @type {string} */
		let key;
		for (key in characterEntitiesHtml4) if (own$1.call(characterEntitiesHtml4, key)) characters[characterEntitiesHtml4[key]] = key;
		const notAlphanumericRegex = /[^\dA-Za-z]/;
		/**
		* Configurable ways to encode characters as named references.
		*
		* @param {number} code
		* @param {number} next
		* @param {boolean|undefined} omit
		* @param {boolean|undefined} attribute
		* @returns {string}
		*/
		function toNamed(code, next, omit, attribute) {
			const character = String.fromCharCode(code);
			if (own$1.call(characters, character)) {
				const name = characters[character];
				const value = "&" + name;
				if (omit && characterEntitiesLegacy.includes(name) && !dangerous.includes(name) && (!attribute || next && next !== 61 && notAlphanumericRegex.test(String.fromCharCode(next)))) return value;
				return value + ";";
			}
			return "";
		}
		//#endregion
		//#region node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/util/format-smart.js
		/**
		* @typedef FormatSmartOptions
		* @property {boolean} [useNamedReferences=false]
		*   Prefer named character references (`&amp;`) where possible.
		* @property {boolean} [useShortestReferences=false]
		*   Prefer the shortest possible reference, if that results in less bytes.
		*   **Note**: `useNamedReferences` can be omitted when using `useShortestReferences`.
		* @property {boolean} [omitOptionalSemicolons=false]
		*   Whether to omit semicolons when possible.
		*   **Note**: This creates what HTML calls “parse errors” but is otherwise still valid HTML — don’t use this except when building a minifier.
		*   Omitting semicolons is possible for certain named and numeric references in some cases.
		* @property {boolean} [attribute=false]
		*   Create character references which don’t fail in attributes.
		*   **Note**: `attribute` only applies when operating dangerously with
		*   `omitOptionalSemicolons: true`.
		*/
		/**
		* Configurable ways to encode a character yielding pretty or small results.
		*
		* @param {number} code
		* @param {number} next
		* @param {FormatSmartOptions} options
		* @returns {string}
		*/
		function formatSmart(code, next, options) {
			let numeric = toHexadecimal(code, next, options.omitOptionalSemicolons);
			/** @type {string|undefined} */
			let named;
			if (options.useNamedReferences || options.useShortestReferences) named = toNamed(code, next, options.omitOptionalSemicolons, options.attribute);
			if ((options.useShortestReferences || !named) && options.useShortestReferences) {
				const decimal = toDecimal(code, next, options.omitOptionalSemicolons);
				if (decimal.length < numeric.length) numeric = decimal;
			}
			return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
		}
		//#endregion
		//#region node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/index.js
		/**
		* @typedef {import('./core.js').CoreOptions & import('./util/format-smart.js').FormatSmartOptions} Options
		* @typedef {import('./core.js').CoreOptions} LightOptions
		*/
		/**
		* Encode special characters in `value`.
		*
		* @param {string} value
		*   Value to encode.
		* @param {Options} [options]
		*   Configuration.
		* @returns {string}
		*   Encoded value.
		*/
		function stringifyEntities(value, options) {
			return core(value, Object.assign({ format: formatSmart }, options));
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/comment.js
		/**
		* @import {Comment, Parents} from 'hast'
		* @import {State} from '../index.js'
		*/
		const htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;
		const bogusCommentEntitySubset = [">"];
		const commentEntitySubset = ["<", ">"];
		/**
		* Serialize a comment.
		*
		* @param {Comment} node
		*   Node to handle.
		* @param {number | undefined} _1
		*   Index of `node` in `parent.
		* @param {Parents | undefined} _2
		*   Parent of `node`.
		* @param {State} state
		*   Info passed around about the current state.
		* @returns {string}
		*   Serialized node.
		*/
		function comment(node, _1, _2, state) {
			return state.settings.bogusComments ? "<?" + stringifyEntities(node.value, Object.assign({}, state.settings.characterReferences, { subset: bogusCommentEntitySubset })) + ">" : "<!--" + node.value.replace(htmlCommentRegex, encode) + "-->";
			/**
			* @param {string} $0
			*/
			function encode($0) {
				return stringifyEntities($0, Object.assign({}, state.settings.characterReferences, { subset: commentEntitySubset }));
			}
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/doctype.js
		/**
		* @import {Doctype, Parents} from 'hast'
		* @import {State} from '../index.js'
		*/
		/**
		* Serialize a doctype.
		*
		* @param {Doctype} _1
		*   Node to handle.
		* @param {number | undefined} _2
		*   Index of `node` in `parent.
		* @param {Parents | undefined} _3
		*   Parent of `node`.
		* @param {State} state
		*   Info passed around about the current state.
		* @returns {string}
		*   Serialized node.
		*/
		function doctype(_1, _2, _3, state) {
			return "<!" + (state.settings.upperDoctype ? "DOCTYPE" : "doctype") + (state.settings.tightDoctype ? "" : " ") + "html>";
		}
		//#endregion
		//#region node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js
		/**
		* Count how often a character (or substring) is used in a string.
		*
		* @param {string} value
		*   Value to search in.
		* @param {string} character
		*   Character (or substring) to look for.
		* @return {number}
		*   Number of times `character` occurred in `value`.
		*/
		function ccount(value, character) {
			const source = String(value);
			if (typeof character !== "string") throw new TypeError("Expected character");
			let count = 0;
			let index = source.indexOf(character);
			while (index !== -1) {
				count++;
				index = source.indexOf(character, index + character.length);
			}
			return count;
		}
		//#endregion
		//#region node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js
		/**
		* Serialize an array of strings or numbers to comma-separated tokens.
		*
		* @param {Array<string|number>} values
		*   List of tokens.
		* @param {Options} [options]
		*   Configuration for `stringify` (optional).
		* @returns {string}
		*   Comma-separated tokens.
		*/
		function stringify$2(values, options) {
			const settings = options || {};
			return (values[values.length - 1] === "" ? [...values, ""] : values).join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
		}
		//#endregion
		//#region node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js
		/**
		* Serialize an array of strings as space separated-tokens.
		*
		* @param {Array<string|number>} values
		*   List of tokens.
		* @returns {string}
		*   Space-separated tokens.
		*/
		function stringify$1(values) {
			return values.join(" ").trim();
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js
		/**
		* @typedef {import('hast').Nodes} Nodes
		*/
		const re$1 = /[ \t\n\f\r]/g;
		/**
		* Check if the given value is *inter-element whitespace*.
		*
		* @param {Nodes | string} thing
		*   Thing to check (`Node` or `string`).
		* @returns {boolean}
		*   Whether the `value` is inter-element whitespace (`boolean`): consisting of
		*   zero or more of space, tab (`\t`), line feed (`\n`), carriage return
		*   (`\r`), or form feed (`\f`); if a node is passed it must be a `Text` node,
		*   whose `value` field is checked.
		*/
		function whitespace(thing) {
			return typeof thing === "object" ? thing.type === "text" ? empty(thing.value) : false : empty(thing);
		}
		/**
		* @param {string} value
		* @returns {boolean}
		*/
		function empty(value) {
			return value.replace(re$1, "") === "";
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/omission/util/siblings.js
		/**
		* @import {Parents, RootContent} from 'hast'
		*/
		const siblingAfter = siblings(1);
		const siblingBefore = siblings(-1);
		/** @type {Array<RootContent>} */
		const emptyChildren$1 = [];
		/**
		* Factory to check siblings in a direction.
		*
		* @param {number} increment
		*/
		function siblings(increment) {
			return sibling;
			/**
			* Find applicable siblings in a direction.
			*
			* @template {Parents} Parent
			*   Parent type.
			* @param {Parent | undefined} parent
			*   Parent.
			* @param {number | undefined} index
			*   Index of child in `parent`.
			* @param {boolean | undefined} [includeWhitespace=false]
			*   Whether to include whitespace (default: `false`).
			* @returns {Parent extends {children: Array<infer Child>} ? Child | undefined : never}
			*   Child of parent.
			*/
			function sibling(parent, index, includeWhitespace) {
				const siblings = parent ? parent.children : emptyChildren$1;
				let offset = (index || 0) + increment;
				let next = siblings[offset];
				if (!includeWhitespace) while (next && whitespace(next)) {
					offset += increment;
					next = siblings[offset];
				}
				return next;
			}
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/omission/omission.js
		/**
		* @import {Element, Parents} from 'hast'
		*/
		/**
		* @callback OmitHandle
		*   Check if a tag can be omitted.
		* @param {Element} element
		*   Element to check.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether to omit a tag.
		*
		*/
		const own = {}.hasOwnProperty;
		/**
		* Factory to check if a given node can have a tag omitted.
		*
		* @param {Record<string, OmitHandle>} handlers
		*   Omission handlers, where each key is a tag name, and each value is the
		*   corresponding handler.
		* @returns {OmitHandle}
		*   Whether to omit a tag of an element.
		*/
		function omission(handlers) {
			return omit;
			/**
			* Check if a given node can have a tag omitted.
			*
			* @type {OmitHandle}
			*/
			function omit(node, index, parent) {
				return own.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
			}
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/omission/closing.js
		/**
		* @import {Element, Parents} from 'hast'
		*/
		const closing = omission({
			body: body$1,
			caption: headOrColgroupOrCaption,
			colgroup: headOrColgroupOrCaption,
			dd,
			dt,
			head: headOrColgroupOrCaption,
			html: html$1,
			li,
			optgroup,
			option,
			p,
			rp: rubyElement,
			rt: rubyElement,
			tbody: tbody$1,
			td: cells,
			tfoot,
			th: cells,
			thead,
			tr
		});
		/**
		* Macro for `</head>`, `</colgroup>`, and `</caption>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function headOrColgroupOrCaption(_, index, parent) {
			const next = siblingAfter(parent, index, true);
			return !next || next.type !== "comment" && !(next.type === "text" && whitespace(next.value.charAt(0)));
		}
		/**
		* Whether to omit `</html>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function html$1(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type !== "comment";
		}
		/**
		* Whether to omit `</body>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function body$1(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type !== "comment";
		}
		/**
		* Whether to omit `</p>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function p(_, index, parent) {
			const next = siblingAfter(parent, index);
			return next ? next.type === "element" && (next.tagName === "address" || next.tagName === "article" || next.tagName === "aside" || next.tagName === "blockquote" || next.tagName === "details" || next.tagName === "div" || next.tagName === "dl" || next.tagName === "fieldset" || next.tagName === "figcaption" || next.tagName === "figure" || next.tagName === "footer" || next.tagName === "form" || next.tagName === "h1" || next.tagName === "h2" || next.tagName === "h3" || next.tagName === "h4" || next.tagName === "h5" || next.tagName === "h6" || next.tagName === "header" || next.tagName === "hgroup" || next.tagName === "hr" || next.tagName === "main" || next.tagName === "menu" || next.tagName === "nav" || next.tagName === "ol" || next.tagName === "p" || next.tagName === "pre" || next.tagName === "section" || next.tagName === "table" || next.tagName === "ul") : !parent || !(parent.type === "element" && (parent.tagName === "a" || parent.tagName === "audio" || parent.tagName === "del" || parent.tagName === "ins" || parent.tagName === "map" || parent.tagName === "noscript" || parent.tagName === "video"));
		}
		/**
		* Whether to omit `</li>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function li(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type === "element" && next.tagName === "li";
		}
		/**
		* Whether to omit `</dt>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function dt(_, index, parent) {
			const next = siblingAfter(parent, index);
			return Boolean(next && next.type === "element" && (next.tagName === "dt" || next.tagName === "dd"));
		}
		/**
		* Whether to omit `</dd>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function dd(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
		}
		/**
		* Whether to omit `</rt>` or `</rp>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function rubyElement(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type === "element" && (next.tagName === "rp" || next.tagName === "rt");
		}
		/**
		* Whether to omit `</optgroup>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function optgroup(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type === "element" && next.tagName === "optgroup";
		}
		/**
		* Whether to omit `</option>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function option(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type === "element" && (next.tagName === "option" || next.tagName === "optgroup");
		}
		/**
		* Whether to omit `</thead>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function thead(_, index, parent) {
			const next = siblingAfter(parent, index);
			return Boolean(next && next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot"));
		}
		/**
		* Whether to omit `</tbody>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function tbody$1(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
		}
		/**
		* Whether to omit `</tfoot>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function tfoot(_, index, parent) {
			return !siblingAfter(parent, index);
		}
		/**
		* Whether to omit `</tr>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function tr(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type === "element" && next.tagName === "tr";
		}
		/**
		* Whether to omit `</td>` or `</th>`.
		*
		* @param {Element} _
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the closing tag can be omitted.
		*/
		function cells(_, index, parent) {
			const next = siblingAfter(parent, index);
			return !next || next.type === "element" && (next.tagName === "td" || next.tagName === "th");
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/omission/opening.js
		/**
		* @import {Element, Parents} from 'hast'
		*/
		const opening = omission({
			body,
			colgroup,
			head,
			html,
			tbody
		});
		/**
		* Whether to omit `<html>`.
		*
		* @param {Element} node
		*   Element.
		* @returns {boolean}
		*   Whether the opening tag can be omitted.
		*/
		function html(node) {
			const head = siblingAfter(node, -1);
			return !head || head.type !== "comment";
		}
		/**
		* Whether to omit `<head>`.
		*
		* @param {Element} node
		*   Element.
		* @returns {boolean}
		*   Whether the opening tag can be omitted.
		*/
		function head(node) {
			/** @type {Set<string>} */
			const seen = /* @__PURE__ */ new Set();
			for (const child of node.children) if (child.type === "element" && (child.tagName === "base" || child.tagName === "title")) {
				if (seen.has(child.tagName)) return false;
				seen.add(child.tagName);
			}
			const child = node.children[0];
			return !child || child.type === "element";
		}
		/**
		* Whether to omit `<body>`.
		*
		* @param {Element} node
		*   Element.
		* @returns {boolean}
		*   Whether the opening tag can be omitted.
		*/
		function body(node) {
			const head = siblingAfter(node, -1, true);
			return !head || head.type !== "comment" && !(head.type === "text" && whitespace(head.value.charAt(0))) && !(head.type === "element" && (head.tagName === "meta" || head.tagName === "link" || head.tagName === "script" || head.tagName === "style" || head.tagName === "template"));
		}
		/**
		* Whether to omit `<colgroup>`.
		* The spec describes some logic for the opening tag, but it’s easier to
		* implement in the closing tag, to the same effect, so we handle it there
		* instead.
		*
		* @param {Element} node
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the opening tag can be omitted.
		*/
		function colgroup(node, index, parent) {
			const previous = siblingBefore(parent, index);
			const head = siblingAfter(node, -1, true);
			if (parent && previous && previous.type === "element" && previous.tagName === "colgroup" && closing(previous, parent.children.indexOf(previous), parent)) return false;
			return Boolean(head && head.type === "element" && head.tagName === "col");
		}
		/**
		* Whether to omit `<tbody>`.
		*
		* @param {Element} node
		*   Element.
		* @param {number | undefined} index
		*   Index of element in parent.
		* @param {Parents | undefined} parent
		*   Parent of element.
		* @returns {boolean}
		*   Whether the opening tag can be omitted.
		*/
		function tbody(node, index, parent) {
			const previous = siblingBefore(parent, index);
			const head = siblingAfter(node, -1);
			if (parent && previous && previous.type === "element" && (previous.tagName === "thead" || previous.tagName === "tbody") && closing(previous, parent.children.indexOf(previous), parent)) return false;
			return Boolean(head && head.type === "element" && head.tagName === "tr");
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/element.js
		/**
		* @import {Element, Parents, Properties} from 'hast'
		* @import {State} from '../index.js'
		*/
		/**
		* Maps of subsets.
		*
		* Each value is a matrix of tuples.
		* The value at `0` causes parse errors, the value at `1` is valid.
		* Of both, the value at `0` is unsafe, and the value at `1` is safe.
		*
		* @type {Record<'double' | 'name' | 'single' | 'unquoted', Array<[Array<string>, Array<string>]>>}
		*/
		const constants = {
			name: [["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")], ["\0	\n\f\r \"&'/<=>".split(""), "\0	\n\f\r \"&'/<=>`".split("")]],
			unquoted: [["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")], ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]],
			single: [["&'".split(""), "\"&'`".split("")], ["\0&'".split(""), "\0\"&'`".split("")]],
			double: [["\"&".split(""), "\"&'`".split("")], ["\0\"&".split(""), "\0\"&'`".split("")]]
		};
		/**
		* Serialize an element node.
		*
		* @param {Element} node
		*   Node to handle.
		* @param {number | undefined} index
		*   Index of `node` in `parent.
		* @param {Parents | undefined} parent
		*   Parent of `node`.
		* @param {State} state
		*   Info passed around about the current state.
		* @returns {string}
		*   Serialized node.
		*/
		function element(node, index, parent, state) {
			const schema = state.schema;
			const omit = schema.space === "svg" ? false : state.settings.omitOptionalTags;
			let selfClosing = schema.space === "svg" ? state.settings.closeEmptyElements : state.settings.voids.includes(node.tagName.toLowerCase());
			/** @type {Array<string>} */
			const parts = [];
			/** @type {string} */
			let last;
			if (schema.space === "html" && node.tagName === "svg") state.schema = svg;
			const attributes = serializeAttributes(state, node.properties);
			const content = state.all(schema.space === "html" && node.tagName === "template" ? node.content : node);
			state.schema = schema;
			if (content) selfClosing = false;
			if (attributes || !omit || !opening(node, index, parent)) {
				parts.push("<", node.tagName, attributes ? " " + attributes : "");
				if (selfClosing && (schema.space === "svg" || state.settings.closeSelfClosing)) {
					last = attributes.charAt(attributes.length - 1);
					if (!state.settings.tightSelfClosing || last === "/" || last && last !== "\"" && last !== "'") parts.push(" ");
					parts.push("/");
				}
				parts.push(">");
			}
			parts.push(content);
			if (!selfClosing && (!omit || !closing(node, index, parent))) parts.push("</" + node.tagName + ">");
			return parts.join("");
		}
		/**
		* @param {State} state
		* @param {Properties | null | undefined} properties
		* @returns {string}
		*/
		function serializeAttributes(state, properties) {
			/** @type {Array<string>} */
			const values = [];
			let index = -1;
			/** @type {string} */
			let key;
			if (properties) {
				for (key in properties) if (properties[key] !== null && properties[key] !== void 0) {
					const value = serializeAttribute(state, key, properties[key]);
					if (value) values.push(value);
				}
			}
			while (++index < values.length) {
				const last = state.settings.tightAttributes ? values[index].charAt(values[index].length - 1) : void 0;
				if (index !== values.length - 1 && last !== "\"" && last !== "'") values[index] += " ";
			}
			return values.join("");
		}
		/**
		* @param {State} state
		* @param {string} key
		* @param {Properties[keyof Properties]} value
		* @returns {string}
		*/
		function serializeAttribute(state, key, value) {
			const info = find(state.schema, key);
			const x = state.settings.allowParseErrors && state.schema.space === "html" ? 0 : 1;
			const y = state.settings.allowDangerousCharacters ? 0 : 1;
			let quote = state.quote;
			/** @type {string | undefined} */
			let result;
			if (info.overloadedBoolean && (value === info.attribute || value === "")) value = true;
			else if ((info.boolean || info.overloadedBoolean) && (typeof value !== "string" || value === info.attribute || value === "")) value = Boolean(value);
			if (value === null || value === void 0 || value === false || typeof value === "number" && Number.isNaN(value)) return "";
			const name = stringifyEntities(info.attribute, Object.assign({}, state.settings.characterReferences, { subset: constants.name[x][y] }));
			if (value === true) return name;
			value = Array.isArray(value) ? (info.commaSeparated ? stringify$2 : stringify$1)(value, { padLeft: !state.settings.tightCommaSeparatedLists }) : String(value);
			if (state.settings.collapseEmptyAttributes && !value) return name;
			if (state.settings.preferUnquoted) result = stringifyEntities(value, Object.assign({}, state.settings.characterReferences, {
				attribute: true,
				subset: constants.unquoted[x][y]
			}));
			if (result !== value) {
				if (state.settings.quoteSmart && ccount(value, quote) > ccount(value, state.alternative)) quote = state.alternative;
				result = quote + stringifyEntities(value, Object.assign({}, state.settings.characterReferences, {
					subset: (quote === "'" ? constants.single : constants.double)[x][y],
					attribute: true
				})) + quote;
			}
			return name + (result ? "=" + result : result);
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/text.js
		/**
		* @import {Parents, Text} from 'hast'
		* @import {Raw} from 'mdast-util-to-hast'
		* @import {State} from '../index.js'
		*/
		const textEntitySubset = ["<", "&"];
		/**
		* Serialize a text node.
		*
		* @param {Raw | Text} node
		*   Node to handle.
		* @param {number | undefined} _
		*   Index of `node` in `parent.
		* @param {Parents | undefined} parent
		*   Parent of `node`.
		* @param {State} state
		*   Info passed around about the current state.
		* @returns {string}
		*   Serialized node.
		*/
		function text(node, _, parent, state) {
			return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node.value : stringifyEntities(node.value, Object.assign({}, state.settings.characterReferences, { subset: textEntitySubset }));
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/raw.js
		/**
		* @import {Parents} from 'hast'
		* @import {Raw} from 'mdast-util-to-hast'
		* @import {State} from '../index.js'
		*/
		/**
		* Serialize a raw node.
		*
		* @param {Raw} node
		*   Node to handle.
		* @param {number | undefined} index
		*   Index of `node` in `parent.
		* @param {Parents | undefined} parent
		*   Parent of `node`.
		* @param {State} state
		*   Info passed around about the current state.
		* @returns {string}
		*   Serialized node.
		*/
		function raw(node, index, parent, state) {
			return state.settings.allowDangerousHtml ? node.value : text(node, index, parent, state);
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/root.js
		/**
		* @import {Parents, Root} from 'hast'
		* @import {State} from '../index.js'
		*/
		/**
		* Serialize a root.
		*
		* @param {Root} node
		*   Node to handle.
		* @param {number | undefined} _1
		*   Index of `node` in `parent.
		* @param {Parents | undefined} _2
		*   Parent of `node`.
		* @param {State} state
		*   Info passed around about the current state.
		* @returns {string}
		*   Serialized node.
		*/
		function root(node, _1, _2, state) {
			return state.all(node);
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/index.js
		/**
		* @import {Nodes, Parents} from 'hast'
		* @import {State} from '../index.js'
		*/
		/**
		* @type {(node: Nodes, index: number | undefined, parent: Parents | undefined, state: State) => string}
		*/
		const handle = zwitch("type", {
			invalid,
			unknown,
			handlers: {
				comment,
				doctype,
				element,
				raw,
				root,
				text
			}
		});
		/**
		* Fail when a non-node is found in the tree.
		*
		* @param {unknown} node
		*   Unknown value.
		* @returns {never}
		*   Never.
		*/
		function invalid(node) {
			throw new Error("Expected node, not `" + node + "`");
		}
		/**
		* Fail when a node with an unknown type is found in the tree.
		*
		* @param {unknown} node_
		*  Unknown node.
		* @returns {never}
		*   Never.
		*/
		function unknown(node_) {
			throw new Error("Cannot compile unknown node `" + node_.type + "`");
		}
		//#endregion
		//#region node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/index.js
		/**
		* @import {Nodes, Parents, RootContent} from 'hast'
		* @import {Schema} from 'property-information'
		* @import {Options as StringifyEntitiesOptions} from 'stringify-entities'
		*/
		/**
		* @typedef {Omit<StringifyEntitiesOptions, 'attribute' | 'escapeOnly' | 'subset'>} CharacterReferences
		*
		* @typedef Options
		*   Configuration.
		* @property {boolean | null | undefined} [allowDangerousCharacters=false]
		*   Do not encode some characters which cause XSS vulnerabilities in older
		*   browsers (default: `false`).
		*
		*   > ⚠️ **Danger**: only set this if you completely trust the content.
		* @property {boolean | null | undefined} [allowDangerousHtml=false]
		*   Allow `raw` nodes and insert them as raw HTML (default: `false`).
		*
		*   When `false`, `Raw` nodes are encoded.
		*
		*   > ⚠️ **Danger**: only set this if you completely trust the content.
		* @property {boolean | null | undefined} [allowParseErrors=false]
		*   Do not encode characters which cause parse errors (even though they work),
		*   to save bytes (default: `false`).
		*
		*   Not used in the SVG space.
		*
		*   > 👉 **Note**: intentionally creates parse errors in markup (how parse
		*   > errors are handled is well defined, so this works but isn’t pretty).
		* @property {boolean | null | undefined} [bogusComments=false]
		*   Use “bogus comments” instead of comments to save byes: `<?charlie>`
		*   instead of `<!--charlie-->` (default: `false`).
		*
		*   > 👉 **Note**: intentionally creates parse errors in markup (how parse
		*   > errors are handled is well defined, so this works but isn’t pretty).
		* @property {CharacterReferences | null | undefined} [characterReferences]
		*   Configure how to serialize character references (optional).
		* @property {boolean | null | undefined} [closeEmptyElements=false]
		*   Close SVG elements without any content with slash (`/`) on the opening tag
		*   instead of an end tag: `<circle />` instead of `<circle></circle>`
		*   (default: `false`).
		*
		*   See `tightSelfClosing` to control whether a space is used before the
		*   slash.
		*
		*   Not used in the HTML space.
		* @property {boolean | null | undefined} [closeSelfClosing=false]
		*   Close self-closing nodes with an extra slash (`/`): `<img />` instead of
		*   `<img>` (default: `false`).
		*
		*   See `tightSelfClosing` to control whether a space is used before the
		*   slash.
		*
		*   Not used in the SVG space.
		* @property {boolean | null | undefined} [collapseEmptyAttributes=false]
		*   Collapse empty attributes: get `class` instead of `class=""` (default:
		*   `false`).
		*
		*   Not used in the SVG space.
		*
		*   > 👉 **Note**: boolean attributes (such as `hidden`) are always collapsed.
		* @property {boolean | null | undefined} [omitOptionalTags=false]
		*   Omit optional opening and closing tags (default: `false`).
		*
		*   For example, in `<ol><li>one</li><li>two</li></ol>`, both `</li>` closing
		*   tags can be omitted.
		*   The first because it’s followed by another `li`, the last because it’s
		*   followed by nothing.
		*
		*   Not used in the SVG space.
		* @property {boolean | null | undefined} [preferUnquoted=false]
		*   Leave attributes unquoted if that results in less bytes (default: `false`).
		*
		*   Not used in the SVG space.
		* @property {boolean | null | undefined} [quoteSmart=false]
		*   Use the other quote if that results in less bytes (default: `false`).
		* @property {Quote | null | undefined} [quote='"']
		*   Preferred quote to use (default: `'"'`).
		* @property {Space | null | undefined} [space='html']
		*   When an `<svg>` element is found in the HTML space, this package already
		*   automatically switches to and from the SVG space when entering and exiting
		*   it (default: `'html'`).
		*
		*   > 👉 **Note**: hast is not XML.
		*   > It supports SVG as embedded in HTML.
		*   > It does not support the features available in XML.
		*   > Passing SVG might break but fragments of modern SVG should be fine.
		*   > Use [`xast`][xast] if you need to support SVG as XML.
		* @property {boolean | null | undefined} [tightAttributes=false]
		*   Join attributes together, without whitespace, if possible: get
		*   `class="a b"title="c d"` instead of `class="a b" title="c d"` to save
		*   bytes (default: `false`).
		*
		*   Not used in the SVG space.
		*
		*   > 👉 **Note**: intentionally creates parse errors in markup (how parse
		*   > errors are handled is well defined, so this works but isn’t pretty).
		* @property {boolean | null | undefined} [tightCommaSeparatedLists=false]
		*   Join known comma-separated attribute values with just a comma (`,`),
		*   instead of padding them on the right as well (`,␠`, where `␠` represents a
		*   space) (default: `false`).
		* @property {boolean | null | undefined} [tightDoctype=false]
		*   Drop unneeded spaces in doctypes: `<!doctypehtml>` instead of
		*   `<!doctype html>` to save bytes (default: `false`).
		*
		*   > 👉 **Note**: intentionally creates parse errors in markup (how parse
		*   > errors are handled is well defined, so this works but isn’t pretty).
		* @property {boolean | null | undefined} [tightSelfClosing=false]
		*   Do not use an extra space when closing self-closing elements: `<img/>`
		*   instead of `<img />` (default: `false`).
		*
		*   > 👉 **Note**: only used if `closeSelfClosing: true` or
		*   > `closeEmptyElements: true`.
		* @property {boolean | null | undefined} [upperDoctype=false]
		*   Use a `<!DOCTYPE…` instead of `<!doctype…` (default: `false`).
		*
		*   Useless except for XHTML.
		* @property {ReadonlyArray<string> | null | undefined} [voids]
		*   Tag names of elements to serialize without closing tag (default: `html-void-elements`).
		*
		*   Not used in the SVG space.
		*
		*   > 👉 **Note**: It’s highly unlikely that you want to pass this, because
		*   > hast is not for XML, and HTML will not add more void elements.
		*
		* @typedef {'"' | "'"} Quote
		*   HTML quotes for attribute values.
		*
		* @typedef {Omit<Required<{[key in keyof Options]: Exclude<Options[key], null | undefined>}>, 'space' | 'quote'>} Settings
		*
		* @typedef {'html' | 'svg'} Space
		*   Namespace.
		*
		* @typedef State
		*   Info passed around about the current state.
		* @property {(node: Parents | undefined) => string} all
		*   Serialize the children of a parent node.
		* @property {Quote} alternative
		*   Alternative quote.
		* @property {(node: Nodes, index: number | undefined, parent: Parents | undefined) => string} one
		*   Serialize one node.
		* @property {Quote} quote
		*   Preferred quote.
		* @property {Schema} schema
		*   Current schema.
		* @property {Settings} settings
		*   User configuration.
		*/
		/** @type {Options} */
		const emptyOptions = {};
		/** @type {CharacterReferences} */
		const emptyCharacterReferences = {};
		/** @type {Array<never>} */
		const emptyChildren = [];
		/**
		* Serialize hast as HTML.
		*
		* @param {Array<RootContent> | Nodes} tree
		*   Tree to serialize.
		* @param {Options | null | undefined} [options]
		*   Configuration (optional).
		* @returns {string}
		*   Serialized HTML.
		*/
		function toHtml(tree, options) {
			const options_ = options || emptyOptions;
			const quote = options_.quote || "\"";
			const alternative = quote === "\"" ? "'" : "\"";
			if (quote !== "\"" && quote !== "'") throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
			return {
				one,
				all,
				settings: {
					omitOptionalTags: options_.omitOptionalTags || false,
					allowParseErrors: options_.allowParseErrors || false,
					allowDangerousCharacters: options_.allowDangerousCharacters || false,
					quoteSmart: options_.quoteSmart || false,
					preferUnquoted: options_.preferUnquoted || false,
					tightAttributes: options_.tightAttributes || false,
					upperDoctype: options_.upperDoctype || false,
					tightDoctype: options_.tightDoctype || false,
					bogusComments: options_.bogusComments || false,
					tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
					tightSelfClosing: options_.tightSelfClosing || false,
					collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
					allowDangerousHtml: options_.allowDangerousHtml || false,
					voids: options_.voids || htmlVoidElements,
					characterReferences: options_.characterReferences || emptyCharacterReferences,
					closeSelfClosing: options_.closeSelfClosing || false,
					closeEmptyElements: options_.closeEmptyElements || false
				},
				schema: options_.space === "svg" ? svg : html$2,
				quote,
				alternative
			}.one(Array.isArray(tree) ? {
				type: "root",
				children: tree
			} : tree, void 0, void 0);
		}
		/**
		* Serialize a node.
		*
		* @this {State}
		*   Info passed around about the current state.
		* @param {Nodes} node
		*   Node to handle.
		* @param {number | undefined} index
		*   Index of `node` in `parent.
		* @param {Parents | undefined} parent
		*   Parent of `node`.
		* @returns {string}
		*   Serialized node.
		*/
		function one(node, index, parent) {
			return handle(node, index, parent, this);
		}
		/**
		* Serialize all children of `parent`.
		*
		* @this {State}
		*   Info passed around about the current state.
		* @param {Parents | undefined} parent
		*   Parent whose children to serialize.
		* @returns {string}
		*/
		function all(parent) {
			/** @type {Array<string>} */
			const results = [];
			const children = parent && parent.children || emptyChildren;
			let index = -1;
			while (++index < children.length) results[index] = this.one(children[index], index, parent);
			return results.join("");
		}
		//#endregion
		//#region node_modules/.pnpm/@shikijs+core@4.4.3/node_modules/@shikijs/core/dist/index.mjs
		const RE_WHITESPACE = /\s+/g;
		/**
		* Utility to append class to a hast node
		*
		* If the `property.class` is a string, it will be splitted by space and converted to an array.
		*/
		function addClassToHast(node, className) {
			if (!className) return node;
			node.properties ||= {};
			node.properties.class ||= [];
			if (typeof node.properties.class === "string") node.properties.class = node.properties.class.split(RE_WHITESPACE);
			if (!Array.isArray(node.properties.class)) node.properties.class = [];
			const targets = Array.isArray(className) ? className : className.split(RE_WHITESPACE);
			for (const c of targets) if (c && !node.properties.class.includes(c)) node.properties.class.push(c);
			return node;
		}
		/**
		* Creates a converter between index and position in a code block.
		*
		* Overflow/underflow are unchecked.
		*/
		function createPositionConverter(code) {
			const lines = splitLines(code, true).map(([line]) => line);
			function indexToPos(index) {
				if (index === code.length) return {
					line: lines.length - 1,
					character: lines.at(-1).length
				};
				let character = index;
				let line = 0;
				for (const lineText of lines) {
					if (character < lineText.length) break;
					character -= lineText.length;
					line++;
				}
				return {
					line,
					character
				};
			}
			function posToIndex(line, character) {
				let index = 0;
				for (let i = 0; i < line; i++) index += lines[i].length;
				index += character;
				return index;
			}
			return {
				lines,
				indexToPos,
				posToIndex
			};
		}
		const COLOR_KEYS = ["color", "background-color"];
		/**
		* Split a token into multiple tokens by given offsets.
		*
		* The offsets are relative to the token, and should be sorted.
		*/
		function splitToken(token, offsets) {
			let lastOffset = 0;
			const tokens = [];
			for (const offset of offsets) {
				if (offset > lastOffset) tokens.push({
					...token,
					content: token.content.slice(lastOffset, offset),
					offset: token.offset + lastOffset
				});
				lastOffset = offset;
			}
			if (lastOffset < token.content.length) tokens.push({
				...token,
				content: token.content.slice(lastOffset),
				offset: token.offset + lastOffset
			});
			return tokens;
		}
		function findFirstBreakpointAfter(breakpoints, offset) {
			let start = 0;
			let end = breakpoints.length;
			while (start < end) {
				const middle = start + (end - start >> 1);
				if (breakpoints[middle] <= offset) start = middle + 1;
				else end = middle;
			}
			return start;
		}
		/**
		* Split 2D tokens array by given breakpoints.
		*/
		function splitTokens(tokens, breakpoints) {
			const sorted = [...breakpoints instanceof Set ? breakpoints : new Set(breakpoints)].sort((a, b) => a - b);
			if (!sorted.length) return tokens;
			return tokens.map((line) => {
				return line.flatMap((token) => {
					const tokenEnd = token.offset + token.content.length;
					const start = findFirstBreakpointAfter(sorted, token.offset);
					let end = start;
					while (end < sorted.length && sorted[end] < tokenEnd) end++;
					if (start === end) return token;
					const breakpointsInToken = sorted.slice(start, end);
					for (let index = 0; index < breakpointsInToken.length; index++) breakpointsInToken[index] -= token.offset;
					return splitToken(token, breakpointsInToken);
				});
			});
		}
		function flatTokenVariants(merged, variantsOrder, cssVariablePrefix, defaultColor, colorsRendering = "css-vars") {
			const token = {
				content: merged.content,
				explanation: merged.explanation,
				offset: merged.offset
			};
			const styles = variantsOrder.map((t) => getTokenStyleObject(merged.variants[t]));
			const styleKeys = new Set(styles.flatMap((t) => Object.keys(t)));
			const mergedStyles = {};
			const varKey = (idx, key) => {
				const keyName = key === "color" ? "" : key === "background-color" ? "-bg" : `-${key}`;
				return cssVariablePrefix + variantsOrder[idx] + (key === "color" ? "" : keyName);
			};
			styles.forEach((cur, idx) => {
				for (const key of styleKeys) {
					const value = cur[key] || "inherit";
					if (idx === 0 && defaultColor && COLOR_KEYS.includes(key)) if (defaultColor === "light-dark()" && styles.length > 1) {
						const lightIndex = variantsOrder.findIndex((t) => t === "light");
						const darkIndex = variantsOrder.findIndex((t) => t === "dark");
						if (lightIndex === -1 || darkIndex === -1) throw new ShikiError("When using `defaultColor: \"light-dark()\"`, you must provide both `light` and `dark` themes");
						const lightValue = styles[lightIndex][key] || "inherit";
						const darkValue = styles[darkIndex][key] || "inherit";
						mergedStyles[key] = `light-dark(${lightValue}, ${darkValue})`;
						if (colorsRendering === "css-vars") mergedStyles[varKey(idx, key)] = value;
					} else mergedStyles[key] = value;
					else if (colorsRendering === "css-vars") mergedStyles[varKey(idx, key)] = value;
				}
			});
			token.htmlStyle = mergedStyles;
			return token;
		}
		function getTokenStyleObject(token) {
			const styles = {};
			if (token.color) styles.color = token.color;
			if (token.bgColor) styles["background-color"] = token.bgColor;
			if (token.fontStyle) {
				if (token.fontStyle & FontStyle.Italic) styles["font-style"] = "italic";
				if (token.fontStyle & FontStyle.Bold) styles["font-weight"] = "bold";
				const decorations = [];
				if (token.fontStyle & FontStyle.Underline) decorations.push("underline");
				if (token.fontStyle & FontStyle.Strikethrough) decorations.push("line-through");
				if (decorations.length) styles["text-decoration"] = decorations.join(" ");
			}
			return styles;
		}
		function stringifyTokenStyle(token) {
			if (typeof token === "string") return token;
			return Object.entries(token).map(([key, value]) => `${key}:${value}`).join(";");
		}
		/**
		* A built-in transformer to add decorations to the highlighted code.
		*/
		function transformerDecorations() {
			const map = /* @__PURE__ */ new WeakMap();
			function getContext(shiki) {
				if (!map.has(shiki.meta)) {
					const converter = createPositionConverter(shiki.source);
					function normalizePosition(p) {
						if (typeof p === "number") {
							if (p < 0 || p > shiki.source.length) throw new ShikiError(`Invalid decoration offset: ${p}. Code length: ${shiki.source.length}`);
							return {
								...converter.indexToPos(p),
								offset: p
							};
						} else {
							const line = converter.lines[p.line];
							if (line === void 0) throw new ShikiError(`Invalid decoration position ${JSON.stringify(p)}. Lines length: ${converter.lines.length}`);
							let character = p.character;
							if (character < 0) character = line.length + character;
							if (character < 0 || character > line.length) throw new ShikiError(`Invalid decoration position ${JSON.stringify(p)}. Line ${p.line} length: ${line.length}`);
							return {
								...p,
								character,
								offset: converter.posToIndex(p.line, character)
							};
						}
					}
					const decorations = (shiki.options.decorations || []).map((d) => ({
						...d,
						start: normalizePosition(d.start),
						end: normalizePosition(d.end)
					}));
					verifyIntersections(decorations);
					map.set(shiki.meta, {
						decorations,
						converter,
						source: shiki.source
					});
				}
				return map.get(shiki.meta);
			}
			return {
				name: "shiki:decorations",
				tokens(tokens) {
					if (!this.options.decorations?.length) return;
					return splitTokens(tokens, getContext(this).decorations.flatMap((d) => [d.start.offset, d.end.offset]));
				},
				code(codeEl) {
					if (!this.options.decorations?.length) return;
					const ctx = getContext(this);
					const lines = [...codeEl.children].filter((i) => i.type === "element" && i.tagName === "span");
					if (lines.length !== ctx.converter.lines.length) throw new ShikiError(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
					function applyLineSection(line, start, end, decoration) {
						const lineEl = lines[line];
						let text = "";
						let startIndex = -1;
						let endIndex = -1;
						if (start === 0) startIndex = 0;
						if (end === 0) endIndex = 0;
						if (end === Number.POSITIVE_INFINITY) endIndex = lineEl.children.length;
						if (startIndex === -1 || endIndex === -1) for (let i = 0; i < lineEl.children.length; i++) {
							text += stringify(lineEl.children[i]);
							if (startIndex === -1 && text.length === start) startIndex = i + 1;
							if (endIndex === -1 && text.length === end) endIndex = i + 1;
						}
						if (startIndex === -1) throw new ShikiError(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
						if (endIndex === -1) throw new ShikiError(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
						const children = lineEl.children.slice(startIndex, endIndex);
						if (!decoration.alwaysWrap && children.length === lineEl.children.length) applyDecoration(lineEl, decoration, "line");
						else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element") applyDecoration(children[0], decoration, "token");
						else {
							const wrapper = {
								type: "element",
								tagName: "span",
								properties: {},
								children
							};
							applyDecoration(wrapper, decoration, "wrapper");
							lineEl.children.splice(startIndex, children.length, wrapper);
						}
					}
					function applyLine(line, decoration) {
						lines[line] = applyDecoration(lines[line], decoration, "line");
					}
					function applyDecoration(el, decoration, type) {
						const properties = decoration.properties || {};
						const transform = decoration.transform || ((i) => i);
						el.tagName = decoration.tagName || "span";
						el.properties = {
							...el.properties,
							...properties,
							class: el.properties.class
						};
						if (decoration.properties?.class) addClassToHast(el, decoration.properties.class);
						el = transform(el, type) || el;
						return el;
					}
					const lineApplies = [];
					const sorted = ctx.decorations.sort((a, b) => b.start.offset - a.start.offset || a.end.offset - b.end.offset);
					for (const decoration of sorted) {
						const { start, end } = decoration;
						if (start.line === end.line) applyLineSection(start.line, start.character, end.character, decoration);
						else if (start.line < end.line) {
							applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
							for (let i = start.line + 1; i < end.line; i++) lineApplies.unshift(() => applyLine(i, decoration));
							applyLineSection(end.line, 0, end.character, decoration);
						}
					}
					lineApplies.forEach((i) => i());
				}
			};
		}
		function verifyIntersections(items) {
			for (let i = 0; i < items.length; i++) {
				const foo = items[i];
				if (foo.start.offset > foo.end.offset) throw new ShikiError(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
				for (let j = i + 1; j < items.length; j++) {
					const bar = items[j];
					const isFooHasBarStart = foo.start.offset <= bar.start.offset && bar.start.offset < foo.end.offset;
					const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset <= foo.end.offset;
					const isBarHasFooStart = bar.start.offset <= foo.start.offset && foo.start.offset < bar.end.offset;
					const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset <= bar.end.offset;
					if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
						if (isFooHasBarStart && isFooHasBarEnd) continue;
						if (isBarHasFooStart && isBarHasFooEnd) continue;
						if (isBarHasFooStart && foo.start.offset === foo.end.offset) continue;
						if (isFooHasBarEnd && bar.start.offset === bar.end.offset) continue;
						throw new ShikiError(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
					}
				}
			}
		}
		function stringify(el) {
			if (el.type === "text") return el.value;
			if (el.type === "element") return el.children.map(stringify).join("");
			return "";
		}
		const builtInTransformers = [/* @__PURE__ */ transformerDecorations()];
		function getTransformers(options) {
			const transformers = sortTransformersByEnforcement(options.transformers || []);
			return [
				...transformers.pre,
				...transformers.normal,
				...transformers.post,
				...builtInTransformers
			];
		}
		function sortTransformersByEnforcement(transformers) {
			const pre = [];
			const post = [];
			const normal = [];
			for (const transformer of transformers) switch (transformer.enforce) {
				case "pre":
					pre.push(transformer);
					break;
				case "post":
					post.push(transformer);
					break;
				default: normal.push(transformer);
			}
			return {
				pre,
				post,
				normal
			};
		}
		var namedColors = [
			"black",
			"red",
			"green",
			"yellow",
			"blue",
			"magenta",
			"cyan",
			"white",
			"brightBlack",
			"brightRed",
			"brightGreen",
			"brightYellow",
			"brightBlue",
			"brightMagenta",
			"brightCyan",
			"brightWhite"
		];
		var decorations = {
			1: "bold",
			2: "dim",
			3: "italic",
			4: "underline",
			7: "reverse",
			8: "hidden",
			9: "strikethrough"
		};
		function findSequence(value, position) {
			const nextEscape = value.indexOf("\x1B", position);
			if (nextEscape !== -1) {
				if (value[nextEscape + 1] === "[") {
					const nextClose = value.indexOf("m", nextEscape);
					if (nextClose !== -1) return {
						sequence: value.substring(nextEscape + 2, nextClose).split(";"),
						startPosition: nextEscape,
						position: nextClose + 1
					};
				}
			}
			return { position: value.length };
		}
		function parseColor(sequence) {
			const colorMode = sequence.shift();
			if (colorMode === "2") {
				const rgb = sequence.splice(0, 3).map((x) => Number.parseInt(x));
				if (rgb.length !== 3 || rgb.some((x) => Number.isNaN(x))) return;
				return {
					type: "rgb",
					rgb
				};
			} else if (colorMode === "5") {
				const index = sequence.shift();
				if (index) return {
					type: "table",
					index: Number(index)
				};
			}
		}
		function parseSequence(sequence) {
			const commands = [];
			while (sequence.length > 0) {
				const code = sequence.shift();
				if (!code) continue;
				const codeInt = Number.parseInt(code);
				if (Number.isNaN(codeInt)) continue;
				if (codeInt === 0) commands.push({ type: "resetAll" });
				else if (codeInt <= 9) {
					if (decorations[codeInt]) commands.push({
						type: "setDecoration",
						value: decorations[codeInt]
					});
				} else if (codeInt <= 29) {
					const decoration = decorations[codeInt - 20];
					if (decoration) {
						commands.push({
							type: "resetDecoration",
							value: decoration
						});
						if (decoration === "dim") commands.push({
							type: "resetDecoration",
							value: "bold"
						});
					}
				} else if (codeInt <= 37) commands.push({
					type: "setForegroundColor",
					value: {
						type: "named",
						name: namedColors[codeInt - 30]
					}
				});
				else if (codeInt === 38) {
					const color = parseColor(sequence);
					if (color) commands.push({
						type: "setForegroundColor",
						value: color
					});
				} else if (codeInt === 39) commands.push({ type: "resetForegroundColor" });
				else if (codeInt <= 47) commands.push({
					type: "setBackgroundColor",
					value: {
						type: "named",
						name: namedColors[codeInt - 40]
					}
				});
				else if (codeInt === 48) {
					const color = parseColor(sequence);
					if (color) commands.push({
						type: "setBackgroundColor",
						value: color
					});
				} else if (codeInt === 49) commands.push({ type: "resetBackgroundColor" });
				else if (codeInt === 53) commands.push({
					type: "setDecoration",
					value: "overline"
				});
				else if (codeInt === 55) commands.push({
					type: "resetDecoration",
					value: "overline"
				});
				else if (codeInt >= 90 && codeInt <= 97) commands.push({
					type: "setForegroundColor",
					value: {
						type: "named",
						name: namedColors[codeInt - 90 + 8]
					}
				});
				else if (codeInt >= 100 && codeInt <= 107) commands.push({
					type: "setBackgroundColor",
					value: {
						type: "named",
						name: namedColors[codeInt - 100 + 8]
					}
				});
			}
			return commands;
		}
		function createAnsiSequenceParser() {
			let foreground = null;
			let background = null;
			let decorations2 = /* @__PURE__ */ new Set();
			return { parse(value) {
				const tokens = [];
				let position = 0;
				do {
					const findResult = findSequence(value, position);
					const text = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
					if (text.length > 0) tokens.push({
						value: text,
						foreground,
						background,
						decorations: new Set(decorations2)
					});
					if (findResult.sequence) {
						const commands = parseSequence(findResult.sequence);
						for (const styleToken of commands) if (styleToken.type === "resetAll") {
							foreground = null;
							background = null;
							decorations2.clear();
						} else if (styleToken.type === "resetForegroundColor") foreground = null;
						else if (styleToken.type === "resetBackgroundColor") background = null;
						else if (styleToken.type === "resetDecoration") decorations2.delete(styleToken.value);
						for (const styleToken of commands) if (styleToken.type === "setForegroundColor") foreground = styleToken.value;
						else if (styleToken.type === "setBackgroundColor") background = styleToken.value;
						else if (styleToken.type === "setDecoration") decorations2.add(styleToken.value);
					}
					position = findResult.position;
				} while (position < value.length);
				return tokens;
			} };
		}
		var defaultNamedColorsMap = {
			black: "#000000",
			red: "#bb0000",
			green: "#00bb00",
			yellow: "#bbbb00",
			blue: "#0000bb",
			magenta: "#ff00ff",
			cyan: "#00bbbb",
			white: "#eeeeee",
			brightBlack: "#555555",
			brightRed: "#ff5555",
			brightGreen: "#00ff00",
			brightYellow: "#ffff55",
			brightBlue: "#5555ff",
			brightMagenta: "#ff55ff",
			brightCyan: "#55ffff",
			brightWhite: "#ffffff"
		};
		function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
			function namedColor(name) {
				return namedColorsMap[name];
			}
			function rgbColor(rgb) {
				return `#${rgb.map((x) => Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
			}
			let colorTable;
			function getColorTable() {
				if (colorTable) return colorTable;
				colorTable = [];
				for (let i = 0; i < namedColors.length; i++) colorTable.push(namedColor(namedColors[i]));
				let levels = [
					0,
					95,
					135,
					175,
					215,
					255
				];
				for (let r = 0; r < 6; r++) for (let g = 0; g < 6; g++) for (let b = 0; b < 6; b++) colorTable.push(rgbColor([
					levels[r],
					levels[g],
					levels[b]
				]));
				let level = 8;
				for (let i = 0; i < 24; i++, level += 10) colorTable.push(rgbColor([
					level,
					level,
					level
				]));
				return colorTable;
			}
			function tableColor(index) {
				return getColorTable()[index];
			}
			function value(color) {
				switch (color.type) {
					case "named": return namedColor(color.name);
					case "rgb": return rgbColor(color.rgb);
					case "table": return tableColor(color.index);
				}
			}
			return { value };
		}
		const RE_HEX_COLOR = /#([0-9a-f]{3,8})/i;
		const RE_CSS_VAR_ANSI = /var\((--[\w-]+-ansi-[\w-]+)\)/;
		/**
		* Default ANSI palette (VSCode compatible fallbacks)
		* Used when the theme does not define terminal.ansi* colors.
		*/
		const defaultAnsiColors = {
			black: "#000000",
			red: "#cd3131",
			green: "#0DBC79",
			yellow: "#E5E510",
			blue: "#2472C8",
			magenta: "#BC3FBC",
			cyan: "#11A8CD",
			white: "#E5E5E5",
			brightBlack: "#666666",
			brightRed: "#F14C4C",
			brightGreen: "#23D18B",
			brightYellow: "#F5F543",
			brightBlue: "#3B8EEA",
			brightMagenta: "#D670D6",
			brightCyan: "#29B8DB",
			brightWhite: "#FFFFFF"
		};
		function tokenizeAnsiWithTheme(theme, fileContents, options) {
			const colorReplacements = resolveColorReplacements(theme, options);
			const lines = splitLines(fileContents);
			const colorPalette = createColorPalette(Object.fromEntries(namedColors.map((name) => {
				const key = `terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`;
				return [name, theme.colors?.[key] || defaultAnsiColors[name]];
			})));
			const parser = createAnsiSequenceParser();
			return lines.map((line) => parser.parse(line[0]).map((token) => {
				let color;
				let bgColor;
				if (token.decorations.has("reverse")) {
					color = token.background ? colorPalette.value(token.background) : theme.bg;
					bgColor = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
				} else {
					color = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
					bgColor = token.background ? colorPalette.value(token.background) : void 0;
				}
				color = applyColorReplacements(color, colorReplacements);
				bgColor = applyColorReplacements(bgColor, colorReplacements);
				if (token.decorations.has("dim")) color = dimColor(color);
				let fontStyle = FontStyle.None;
				if (token.decorations.has("bold")) fontStyle |= FontStyle.Bold;
				if (token.decorations.has("italic")) fontStyle |= FontStyle.Italic;
				if (token.decorations.has("underline")) fontStyle |= FontStyle.Underline;
				if (token.decorations.has("strikethrough")) fontStyle |= FontStyle.Strikethrough;
				return {
					content: token.value,
					offset: line[1],
					color,
					bgColor,
					fontStyle
				};
			}));
		}
		/**
		* Adds 50% alpha to a hex color string or the "-dim" postfix to a CSS variable
		*/
		function dimColor(color) {
			const hexMatch = color.match(RE_HEX_COLOR);
			if (hexMatch) {
				const hex = hexMatch[1];
				if (hex.length === 8) {
					const alpha = Math.round(Number.parseInt(hex.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
					return `#${hex.slice(0, 6)}${alpha}`;
				} else if (hex.length === 6) return `#${hex}80`;
				else if (hex.length === 4) {
					const r = hex[0];
					const g = hex[1];
					const b = hex[2];
					const a = hex[3];
					return `#${r}${r}${g}${g}${b}${b}${Math.round(Number.parseInt(`${a}${a}`, 16) / 2).toString(16).padStart(2, "0")}`;
				} else if (hex.length === 3) {
					const r = hex[0];
					const g = hex[1];
					const b = hex[2];
					return `#${r}${r}${g}${g}${b}${b}80`;
				}
			}
			const cssVarMatch = color.match(RE_CSS_VAR_ANSI);
			if (cssVarMatch) return `var(${cssVarMatch[1]}-dim)`;
			return color;
		}
		/**
		* Code to tokens, with a simple theme.
		* This wraps the tokenizer's implementation to add ANSI support.
		*/
		function codeToTokensBase(primitive, code, options = {}) {
			const lang = primitive.resolveLangAlias(options.lang || "text");
			const { theme: themeName = primitive.getLoadedThemes()[0] } = options;
			if (!isPlainLang(lang) && !isNoneTheme(themeName) && lang === "ansi") {
				const { theme } = primitive.setTheme(themeName);
				return tokenizeAnsiWithTheme(theme, code, options);
			}
			return codeToTokensBase$1(primitive, code, options);
		}
		/**
		* High-level code-to-tokens API.
		*
		* It will use `codeToTokensWithThemes` or `codeToTokensBase` based on the options.
		*/
		function codeToTokens(primitive, code, options) {
			let bg;
			let fg;
			let tokens;
			let themeName;
			let rootStyle;
			let grammarState;
			if ("themes" in options) {
				const { defaultColor = "light", cssVariablePrefix = "--shiki-", colorsRendering = "css-vars" } = options;
				const themes = Object.entries(options.themes).filter((i) => i[1]).map((i) => ({
					color: i[0],
					theme: i[1]
				})).sort((a, b) => a.color === defaultColor ? -1 : b.color === defaultColor ? 1 : 0);
				if (themes.length === 0) throw new ShikiError("`themes` option must not be empty");
				const themeTokens = codeToTokensWithThemes(primitive, code, options, codeToTokensBase);
				grammarState = getLastGrammarStateFromMap(themeTokens);
				if (defaultColor && "light-dark()" !== defaultColor && !themes.some((t) => t.color === defaultColor)) throw new ShikiError(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
				const themeRegs = themes.map((t) => primitive.getTheme(t.theme));
				const themesOrder = themes.map((t) => t.color);
				tokens = themeTokens.map((line) => line.map((token) => flatTokenVariants(token, themesOrder, cssVariablePrefix, defaultColor, colorsRendering)));
				if (grammarState) setLastGrammarStateToMap(tokens, grammarState);
				const themeColorReplacements = themes.map((t) => resolveColorReplacements(t.theme, options));
				fg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "fg", colorsRendering);
				bg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "bg", colorsRendering);
				themeName = `shiki-themes ${themeRegs.map((t) => t.name).join(" ")}`;
				rootStyle = defaultColor ? void 0 : [fg, bg].join(";");
			} else if ("theme" in options) {
				const colorReplacements = resolveColorReplacements(options.theme, options);
				tokens = codeToTokensBase(primitive, code, options);
				const _theme = primitive.getTheme(options.theme);
				bg = applyColorReplacements(_theme.bg, colorReplacements);
				fg = applyColorReplacements(_theme.fg, colorReplacements);
				themeName = _theme.name;
				grammarState = getLastGrammarStateFromMap(tokens);
			} else throw new ShikiError("Invalid options, either `theme` or `themes` must be provided");
			return {
				tokens,
				fg,
				bg,
				themeName,
				rootStyle,
				grammarState
			};
		}
		function mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, property, colorsRendering) {
			return themes.map((t, idx) => {
				const value = applyColorReplacements(themeRegs[idx][property], themeColorReplacements[idx]) || "inherit";
				const cssVar = `${cssVariablePrefix + t.color}${property === "bg" ? "-bg" : ""}:${value}`;
				if (idx === 0 && defaultColor) {
					if (defaultColor === "light-dark()" && themes.length > 1) {
						const lightIndex = themes.findIndex((t) => t.color === "light");
						const darkIndex = themes.findIndex((t) => t.color === "dark");
						if (lightIndex === -1 || darkIndex === -1) throw new ShikiError("When using `defaultColor: \"light-dark()\"`, you must provide both `light` and `dark` themes");
						return `light-dark(${applyColorReplacements(themeRegs[lightIndex][property], themeColorReplacements[lightIndex]) || "inherit"}, ${applyColorReplacements(themeRegs[darkIndex][property], themeColorReplacements[darkIndex]) || "inherit"});${cssVar}`;
					}
					return value;
				}
				if (colorsRendering === "css-vars") return cssVar;
				return null;
			}).filter((i) => !!i).join(";");
		}
		const RE_WHITESPACE_ONLY = /^\s+$/;
		const RE_LEADING_TRAILING_WHITESPACE = /^(\s*)(.*?)(\s*)$/;
		function codeToHast(primitive, code, options, transformerContext = {
			meta: {},
			options,
			codeToHast: (_code, _options) => codeToHast(primitive, _code, _options),
			codeToTokens: (_code, _options) => codeToTokens(primitive, _code, _options)
		}) {
			let input = code;
			for (const transformer of getTransformers(options)) input = transformer.preprocess?.call(transformerContext, input, options) || input;
			let { tokens, fg, bg, themeName, rootStyle, grammarState } = codeToTokens(primitive, input, options);
			const { mergeWhitespaces = true, mergeSameStyleTokens = false } = options;
			if (mergeWhitespaces === true) tokens = mergeWhitespaceTokens(tokens);
			else if (mergeWhitespaces === "never") tokens = splitWhitespaceTokens(tokens);
			if (mergeSameStyleTokens) tokens = mergeAdjacentStyledTokens(tokens);
			const contextSource = {
				...transformerContext,
				get source() {
					return input;
				}
			};
			for (const transformer of getTransformers(options)) tokens = transformer.tokens?.call(contextSource, tokens) || tokens;
			return tokensToHast(tokens, {
				...options,
				fg,
				bg,
				themeName,
				rootStyle: options.rootStyle === false ? false : options.rootStyle ?? rootStyle
			}, contextSource, grammarState);
		}
		function tokensToHast(tokens, options, transformerContext, grammarState = getLastGrammarStateFromMap(tokens)) {
			const transformers = getTransformers(options);
			const lines = [];
			const root = {
				type: "root",
				children: []
			};
			const { structure = "classic", tabindex = "0" } = options;
			const properties = { class: `shiki ${options.themeName || ""}` };
			if (options.rootStyle !== false) if (options.rootStyle != null) properties.style = options.rootStyle;
			else properties.style = `background-color:${options.bg};color:${options.fg}`;
			if (tabindex !== false && tabindex != null) properties.tabindex = tabindex.toString();
			for (const [key, value] of Object.entries(options.meta || {})) if (!key.startsWith("_")) properties[key] = value;
			let preNode = {
				type: "element",
				tagName: "pre",
				properties,
				children: [],
				data: options.data
			};
			let codeNode = {
				type: "element",
				tagName: "code",
				properties: {},
				children: lines
			};
			const lineNodes = [];
			const context = {
				...transformerContext,
				structure,
				addClassToHast,
				get source() {
					return transformerContext.source;
				},
				get tokens() {
					return tokens;
				},
				get options() {
					return options;
				},
				get root() {
					return root;
				},
				get pre() {
					return preNode;
				},
				get code() {
					return codeNode;
				},
				get lines() {
					return lineNodes;
				}
			};
			tokens.forEach((line, idx) => {
				if (idx) {
					if (structure === "inline") root.children.push({
						type: "element",
						tagName: "br",
						properties: {},
						children: []
					});
					else if (structure === "classic") lines.push({
						type: "text",
						value: "\n"
					});
				}
				let lineNode = {
					type: "element",
					tagName: "span",
					properties: { class: "line" },
					children: []
				};
				let col = 0;
				for (const token of line) {
					let tokenNode = {
						type: "element",
						tagName: "span",
						properties: { ...token.htmlAttrs },
						children: [{
							type: "text",
							value: token.content
						}]
					};
					const style = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
					if (style) tokenNode.properties.style = style;
					for (const transformer of transformers) tokenNode = transformer?.span?.call(context, tokenNode, idx + 1, col, lineNode, token) || tokenNode;
					if (structure === "inline") root.children.push(tokenNode);
					else if (structure === "classic") lineNode.children.push(tokenNode);
					col += token.content.length;
				}
				if (structure === "classic") {
					for (const transformer of transformers) lineNode = transformer?.line?.call(context, lineNode, idx + 1) || lineNode;
					lineNodes.push(lineNode);
					lines.push(lineNode);
				} else if (structure === "inline") lineNodes.push(lineNode);
			});
			if (structure === "classic") {
				for (const transformer of transformers) codeNode = transformer?.code?.call(context, codeNode) || codeNode;
				preNode.children.push(codeNode);
				for (const transformer of transformers) preNode = transformer?.pre?.call(context, preNode) || preNode;
				root.children.push(preNode);
			} else if (structure === "inline") {
				const syntheticLines = [];
				let currentLine = {
					type: "element",
					tagName: "span",
					properties: { class: "line" },
					children: []
				};
				for (const child of root.children) if (child.type === "element" && child.tagName === "br") {
					syntheticLines.push(currentLine);
					currentLine = {
						type: "element",
						tagName: "span",
						properties: { class: "line" },
						children: []
					};
				} else if (child.type === "element" || child.type === "text") currentLine.children.push(child);
				syntheticLines.push(currentLine);
				let transformedCode = {
					type: "element",
					tagName: "code",
					properties: {},
					children: syntheticLines
				};
				for (const transformer of transformers) transformedCode = transformer?.code?.call(context, transformedCode) || transformedCode;
				root.children = [];
				for (let i = 0; i < transformedCode.children.length; i++) {
					if (i > 0) root.children.push({
						type: "element",
						tagName: "br",
						properties: {},
						children: []
					});
					const line = transformedCode.children[i];
					if (line.type === "element") root.children.push(...line.children);
				}
			}
			let result = root;
			for (const transformer of transformers) result = transformer?.root?.call(context, result) || result;
			if (grammarState) setLastGrammarStateToMap(result, grammarState);
			return result;
		}
		function mergeWhitespaceTokens(tokens) {
			return tokens.map((line) => {
				const newLine = [];
				let carryOnContent = "";
				let firstOffset;
				line.forEach((token, idx) => {
					const couldMerge = !(token.fontStyle && (token.fontStyle & FontStyle.Underline || token.fontStyle & FontStyle.Strikethrough));
					if (couldMerge && RE_WHITESPACE_ONLY.test(token.content) && line[idx + 1]) {
						if (firstOffset === void 0) firstOffset = token.offset;
						carryOnContent += token.content;
					} else if (carryOnContent) {
						if (couldMerge) newLine.push({
							...token,
							offset: firstOffset,
							content: carryOnContent + token.content
						});
						else newLine.push({
							content: carryOnContent,
							offset: firstOffset
						}, token);
						firstOffset = void 0;
						carryOnContent = "";
					} else newLine.push(token);
				});
				return newLine;
			});
		}
		function splitWhitespaceTokens(tokens) {
			return tokens.map((line) => {
				return line.flatMap((token) => {
					if (RE_WHITESPACE_ONLY.test(token.content)) return token;
					const match = token.content.match(RE_LEADING_TRAILING_WHITESPACE);
					if (!match) return token;
					const [, leading, content, trailing] = match;
					if (!leading && !trailing) return token;
					const expanded = [{
						...token,
						offset: token.offset + leading.length,
						content
					}];
					if (leading) expanded.unshift({
						content: leading,
						offset: token.offset
					});
					if (trailing) expanded.push({
						content: trailing,
						offset: token.offset + leading.length + content.length
					});
					return expanded;
				});
			});
		}
		function mergeAdjacentStyledTokens(tokens) {
			return tokens.map((line) => {
				const newLine = [];
				for (const token of line) {
					if (newLine.length === 0) {
						newLine.push({ ...token });
						continue;
					}
					const prevToken = newLine.at(-1);
					const prevStyle = stringifyTokenStyle(prevToken.htmlStyle || getTokenStyleObject(prevToken));
					const currentStyle = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
					const isPrevDecorated = prevToken.fontStyle && (prevToken.fontStyle & FontStyle.Underline || prevToken.fontStyle & FontStyle.Strikethrough);
					const isDecorated = token.fontStyle && (token.fontStyle & FontStyle.Underline || token.fontStyle & FontStyle.Strikethrough);
					if (!isPrevDecorated && !isDecorated && prevStyle === currentStyle) prevToken.content += token.content;
					else newLine.push({ ...token });
				}
				return newLine;
			});
		}
		const hastToHtml = toHtml;
		/**
		* Get highlighted code in HTML.
		*/
		function codeToHtml(primitive, code, options) {
			const context = {
				meta: {},
				options,
				codeToHast: (_code, _options) => codeToHast(primitive, _code, _options),
				codeToTokens: (_code, _options) => codeToTokens(primitive, _code, _options)
			};
			let result = hastToHtml(codeToHast(primitive, code, options, context));
			for (const transformer of getTransformers(options)) result = transformer.postprocess?.call(context, result, options) || result;
			return result;
		}
		/**
		* Create a Shiki core highlighter instance, with no languages or themes bundled.
		* Wasm and each language and theme must be loaded manually.
		*
		* Synchronous version of `createHighlighterCore`, which requires to provide the engine and all themes and languages upfront.
		*
		* @see http://shiki.style/guide/bundles#fine-grained-bundle
		*/
		function createHighlighterCoreSync(options) {
			const internal = createShikiPrimitive(options);
			return {
				getLastGrammarState: (...args) => getLastGrammarState(internal, ...args),
				codeToTokensBase: (code, options) => codeToTokensBase(internal, code, options),
				codeToTokensWithThemes: (code, options) => codeToTokensWithThemes(internal, code, options),
				codeToTokens: (code, options) => codeToTokens(internal, code, options),
				codeToHast: (code, options) => codeToHast(internal, code, options),
				codeToHtml: (code, options) => codeToHtml(internal, code, options),
				getBundledLanguages: () => ({}),
				getBundledThemes: () => ({}),
				...internal,
				getInternalContext: () => internal
			};
		}
		/**
		* A factory function to create a css-variable-based theme
		*
		* @see https://shiki.style/guide/theme-colors#css-variables-theme
		*/
		function createCssVariablesTheme(options = {}) {
			const { name = "css-variables", variablePrefix = "--shiki-", fontStyle = true } = options;
			const variable = (name) => {
				if (options.variableDefaults?.[name]) return `var(${variablePrefix}${name}, ${options.variableDefaults[name]})`;
				return `var(${variablePrefix}${name})`;
			};
			const theme = {
				name,
				type: "dark",
				colors: {
					"editor.foreground": variable("foreground"),
					"editor.background": variable("background"),
					"terminal.ansiBlack": variable("ansi-black"),
					"terminal.ansiRed": variable("ansi-red"),
					"terminal.ansiGreen": variable("ansi-green"),
					"terminal.ansiYellow": variable("ansi-yellow"),
					"terminal.ansiBlue": variable("ansi-blue"),
					"terminal.ansiMagenta": variable("ansi-magenta"),
					"terminal.ansiCyan": variable("ansi-cyan"),
					"terminal.ansiWhite": variable("ansi-white"),
					"terminal.ansiBrightBlack": variable("ansi-bright-black"),
					"terminal.ansiBrightRed": variable("ansi-bright-red"),
					"terminal.ansiBrightGreen": variable("ansi-bright-green"),
					"terminal.ansiBrightYellow": variable("ansi-bright-yellow"),
					"terminal.ansiBrightBlue": variable("ansi-bright-blue"),
					"terminal.ansiBrightMagenta": variable("ansi-bright-magenta"),
					"terminal.ansiBrightCyan": variable("ansi-bright-cyan"),
					"terminal.ansiBrightWhite": variable("ansi-bright-white")
				},
				tokenColors: [
					{
						scope: [
							"keyword.operator.accessor",
							"meta.group.braces.round.function.arguments",
							"meta.template.expression",
							"markup.fenced_code meta.embedded.block"
						],
						settings: { foreground: variable("foreground") }
					},
					{
						scope: "emphasis",
						settings: { fontStyle: "italic" }
					},
					{
						scope: [
							"strong",
							"markup.heading.markdown",
							"markup.bold.markdown"
						],
						settings: { fontStyle: "bold" }
					},
					{
						scope: ["markup.italic.markdown"],
						settings: { fontStyle: "italic" }
					},
					{
						scope: "meta.link.inline.markdown",
						settings: {
							fontStyle: "underline",
							foreground: variable("token-link")
						}
					},
					{
						scope: [
							"string",
							"markup.fenced_code",
							"markup.inline"
						],
						settings: { foreground: variable("token-string") }
					},
					{
						scope: ["comment", "string.quoted.docstring.multi"],
						settings: { foreground: variable("token-comment") }
					},
					{
						scope: [
							"constant.numeric",
							"constant.language",
							"constant.other.placeholder",
							"constant.character.format.placeholder",
							"variable.language.this",
							"variable.other.object",
							"variable.other.class",
							"variable.other.constant",
							"meta.property-name",
							"meta.property-value",
							"support"
						],
						settings: { foreground: variable("token-constant") }
					},
					{
						scope: [
							"keyword",
							"storage.modifier",
							"storage.type",
							"storage.control.clojure",
							"entity.name.function.clojure",
							"entity.name.tag.yaml",
							"support.function.node",
							"support.type.property-name.json",
							"punctuation.separator.key-value",
							"punctuation.definition.template-expression"
						],
						settings: { foreground: variable("token-keyword") }
					},
					{
						scope: "variable.parameter.function",
						settings: { foreground: variable("token-parameter") }
					},
					{
						scope: [
							"support.function",
							"entity.name.type",
							"entity.other.inherited-class",
							"meta.function-call",
							"meta.instance.constructor",
							"entity.other.attribute-name",
							"entity.name.function",
							"constant.keyword.clojure"
						],
						settings: { foreground: variable("token-function") }
					},
					{
						scope: [
							"entity.name.tag",
							"string.quoted",
							"string.regexp",
							"string.interpolated",
							"string.template",
							"string.unquoted.plain.out.yaml",
							"keyword.other.template"
						],
						settings: { foreground: variable("token-string-expression") }
					},
					{
						scope: [
							"punctuation.definition.arguments",
							"punctuation.definition.dict",
							"punctuation.separator",
							"meta.function-call.arguments"
						],
						settings: { foreground: variable("token-punctuation") }
					},
					{
						scope: ["markup.underline.link", "punctuation.definition.metadata.markdown"],
						settings: { foreground: variable("token-link") }
					},
					{
						scope: ["beginning.punctuation.definition.list.markdown"],
						settings: { foreground: variable("token-string") }
					},
					{
						scope: [
							"punctuation.definition.string.begin.markdown",
							"punctuation.definition.string.end.markdown",
							"string.other.link.title.markdown",
							"string.other.link.description.markdown"
						],
						settings: { foreground: variable("token-keyword") }
					},
					{
						scope: [
							"markup.inserted",
							"meta.diff.header.to-file",
							"punctuation.definition.inserted"
						],
						settings: { foreground: variable("token-inserted") }
					},
					{
						scope: [
							"markup.deleted",
							"meta.diff.header.from-file",
							"punctuation.definition.deleted"
						],
						settings: { foreground: variable("token-deleted") }
					},
					{
						scope: ["markup.changed", "punctuation.definition.changed"],
						settings: { foreground: variable("token-changed") }
					}
				]
			};
			if (!fontStyle) theme.tokenColors = theme.tokenColors?.map((tokenColor) => {
				if (tokenColor.settings?.fontStyle) delete tokenColor.settings.fontStyle;
				return tokenColor;
			});
			return theme;
		}
		//#endregion
		//#region node_modules/.pnpm/@shikijs+engine-javascript@4.4.3/node_modules/@shikijs/engine-javascript/dist/scanner-DX8LRFGE.mjs
		const MAX = 4294967295;
		var JavaScriptScanner = class {
			patterns;
			options;
			regexps;
			constructor(patterns, options = {}) {
				this.patterns = patterns;
				this.options = options;
				const { forgiving = false, cache, regexConstructor } = options;
				if (!regexConstructor) throw new Error("Option `regexConstructor` is not provided");
				this.regexps = patterns.map((p) => {
					if (typeof p !== "string") return p;
					const cached = cache?.get(p);
					if (cached) {
						if (cached instanceof RegExp) return cached;
						if (forgiving) return null;
						throw cached;
					}
					try {
						const regex = regexConstructor(p);
						cache?.set(p, regex);
						return regex;
					} catch (e) {
						cache?.set(p, e);
						if (forgiving) return null;
						throw e;
					}
				});
			}
			findNextMatchSync(string, startPosition, _options) {
				const str = typeof string === "string" ? string : string.content;
				const pending = [];
				function toResult(index, match, offset = 0) {
					return {
						index,
						captureIndices: match.indices.map((indice) => {
							if (indice == null) return {
								start: MAX,
								end: MAX,
								length: 0
							};
							return {
								start: indice[0] + offset,
								end: indice[1] + offset,
								length: indice[1] - indice[0]
							};
						})
					};
				}
				for (let i = 0; i < this.regexps.length; i++) {
					const regexp = this.regexps[i];
					if (!regexp) continue;
					try {
						regexp.lastIndex = startPosition;
						const match = regexp.exec(str);
						if (!match) continue;
						if (match.index === startPosition) return toResult(i, match, 0);
						pending.push([
							i,
							match,
							0
						]);
					} catch (e) {
						if (this.options.forgiving) continue;
						throw e;
					}
				}
				if (pending.length) {
					const minIndex = Math.min(...pending.map((m) => m[1].index));
					for (const [i, match, offset] of pending) if (match.index === minIndex) return toResult(i, match, offset);
				}
				return null;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/oniguruma-parser@0.12.2/node_modules/oniguruma-parser/dist/utils.js
		function r$2(e) {
			if ([...e].length !== 1) throw new Error(`Expected "${e}" to be a single code point`);
			return e.codePointAt(0);
		}
		function l$1(e, t, n) {
			return e.has(t) || e.set(t, n), e.get(t);
		}
		const i = /* @__PURE__ */ new Set([
			"alnum",
			"alpha",
			"ascii",
			"blank",
			"cntrl",
			"digit",
			"graph",
			"lower",
			"print",
			"punct",
			"space",
			"upper",
			"word",
			"xdigit"
		]);
		const o$1 = String.raw;
		function u(e, t) {
			if (e == null) throw new Error(t ?? "Value expected");
			return e;
		}
		//#endregion
		//#region node_modules/.pnpm/oniguruma-parser@0.12.2/node_modules/oniguruma-parser/dist/tokenizer/tokenize.js
		const m$1 = o$1`\[\^?`;
		const b$1 = `c.? | C(?:-.?)?|${o$1`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${o$1`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${o$1`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${o$1`o\{[^\}]*\}?`}|${o$1`\d{1,3}`}`;
		const y$1 = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/;
		const C$1 = new RegExp(o$1`
  \\ (?:
    ${b$1}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${y$1.source})+
  | ${m$1}
  | .
`.replace(/\s+/g, ""), "gsu");
		const T$1 = new RegExp(o$1`
  \\ (?:
    ${b$1}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${m$1}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
		function M$1(e, n = {}) {
			const t = {
				flags: "",
				...n,
				rules: {
					captureGroup: !1,
					singleline: !1,
					...n.rules
				}
			};
			if (typeof e != "string") throw new Error("String expected as pattern");
			const o = Y(t.flags), s = [o.extended], a = {
				captureGroup: t.rules.captureGroup,
				getCurrentModX() {
					return s.at(-1);
				},
				numOpenGroups: 0,
				popModX() {
					s.pop();
				},
				pushModX(u) {
					s.push(u);
				},
				replaceCurrentModX(u) {
					s[s.length - 1] = u;
				},
				singleline: t.rules.singleline
			};
			let r = [], i;
			for (C$1.lastIndex = 0; i = C$1.exec(e);) {
				const u = F$1(a, e, i[0], C$1.lastIndex);
				u.tokens ? r.push(...u.tokens) : u.token && r.push(u.token), u.lastIndex !== void 0 && (C$1.lastIndex = u.lastIndex);
			}
			const l = [];
			let c = 0;
			r.filter((u) => u.type === "GroupOpen").forEach((u) => {
				u.kind === "capturing" ? u.number = ++c : u.raw === "(" && l.push(u);
			}), c || l.forEach((u, S) => {
				u.kind = "capturing", u.number = S + 1;
			});
			const g = c || l.length;
			return {
				tokens: r.map((u) => u.type === "EscapedNumber" ? ee$1(u, g) : u).flat(),
				flags: o
			};
		}
		function F$1(e, n, t, o) {
			const [s, a] = t;
			if (t === "[" || t === "[^") {
				const r = K$1(n, t, o);
				return {
					tokens: r.tokens,
					lastIndex: r.lastIndex
				};
			}
			if (s === "\\") {
				if ("AbBGyYzZ".includes(a)) return { token: w$1(t, t) };
				if (/^\\g[<']/.test(t)) {
					if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
					return { token: R$1(t) };
				}
				if (/^\\k[<']/.test(t)) {
					if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
					return { token: A$1(t) };
				}
				if (a === "K") return { token: I$1("keep", t) };
				if (a === "N" || a === "R") return { token: k$1("newline", t, { negate: a === "N" }) };
				if (a === "O") return { token: k$1("any", t) };
				if (a === "X") return { token: k$1("text_segment", t) };
				const r = x$1(t, { inCharClass: !1 });
				return Array.isArray(r) ? { tokens: r } : { token: r };
			}
			if (s === "(") {
				if (a === "*") return { token: j(t) };
				if (t === "(?{") throw new Error(`Unsupported callout "${t}"`);
				if (t.startsWith("(?#")) {
					if (n[o] !== ")") throw new Error("Unclosed comment group \"(?#\"");
					return { lastIndex: o + 1 };
				}
				if (/^\(\?[-imx]+[:)]$/.test(t)) return { token: L$1(t, e) };
				if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, t === "(" && !e.captureGroup || t === "(?:") return { token: f("group", t) };
				if (t === "(?>") return { token: f("atomic", t) };
				if (t === "(?=" || t === "(?!" || t === "(?<=" || t === "(?<!") return { token: f(t[2] === "<" ? "lookbehind" : "lookahead", t, { negate: t.endsWith("!") }) };
				if (t === "(" && e.captureGroup || t.startsWith("(?<") && t.endsWith(">") || t.startsWith("(?'") && t.endsWith("'")) return { token: f("capturing", t, { ...t !== "(" && { name: t.slice(3, -1) } }) };
				if (t.startsWith("(?~")) {
					if (t === "(?~|") throw new Error(`Unsupported absence function kind "${t}"`);
					return { token: f("absence_repeater", t) };
				}
				throw t === "(?(" ? /* @__PURE__ */ new Error(`Unsupported conditional "${t}"`) : /* @__PURE__ */ new Error(`Invalid or unsupported group option "${t}"`);
			}
			if (t === ")") {
				if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0) throw new Error("Unmatched \")\"");
				return { token: Q$1(t) };
			}
			if (e.getCurrentModX()) {
				if (t === "#") {
					const r = n.indexOf(`
`, o);
					return { lastIndex: r === -1 ? n.length : r };
				}
				if (/^\s$/.test(t)) {
					const r = /\s+/y;
					return r.lastIndex = o, { lastIndex: r.exec(n) ? r.lastIndex : o };
				}
			}
			if (t === ".") return { token: k$1("dot", t) };
			if (t === "^" || t === "$") return { token: w$1(e.singleline ? {
				"^": o$1`\A`,
				$: o$1`\Z`
			}[t] : t, t) };
			return t === "|" ? { token: P$1(t) } : y$1.test(t) ? { tokens: te$1(t) } : { token: d(r$2(t), t) };
		}
		function K$1(e, n, t) {
			const o = [E$1(n[1] === "^", n)];
			let s = 1, a;
			for (T$1.lastIndex = t; a = T$1.exec(e);) {
				const r = a[0];
				if (r[0] === "[" && r[1] !== ":") s++, o.push(E$1(r[1] === "^", r));
				else if (r === "]") {
					if (o.at(-1).type === "CharacterClassOpen") o.push(d(93, r));
					else if (s--, o.push(z$1(r)), !s) break;
				} else {
					const i = X$1(r);
					Array.isArray(i) ? o.push(...i) : o.push(i);
				}
			}
			return {
				tokens: o,
				lastIndex: T$1.lastIndex || e.length
			};
		}
		function X$1(e) {
			if (e[0] === "\\") return x$1(e, { inCharClass: !0 });
			if (e[0] === "[") {
				const n = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
				if (!n || !i.has(n.groups.name)) throw new Error(`Invalid POSIX class "${e}"`);
				return k$1("posix", e, {
					value: n.groups.name,
					negate: !!n.groups.negate
				});
			}
			return e === "-" ? U$1(e) : e === "&&" ? H(e) : d(r$2(e), e);
		}
		function x$1(e, { inCharClass: n }) {
			const t = e[1];
			if (t === "c" || t === "C") return Z(e);
			if ("dDhHsSwW".includes(t)) return q(e);
			if (e.startsWith(o$1`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
			if (/^\\[pP]\{/.test(e)) {
				if (e.length === 3) throw new Error(`Incomplete or invalid Unicode property "${e}"`);
				return V$1(e);
			}
			if (/^\\x[89A-Fa-f]\p{AHex}/u.test(e)) try {
				const o = e.split(/\\x/).slice(1).map((i) => parseInt(i, 16)), s = new TextDecoder("utf-8", {
					ignoreBOM: !0,
					fatal: !0
				}).decode(new Uint8Array(o)), a = new TextEncoder();
				return [...s].map((i) => {
					const l = [...a.encode(i)].map((c) => `\\x${c.toString(16)}`).join("");
					return d(r$2(i), l);
				});
			} catch {
				throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
			}
			if (t === "u" || t === "x") return d(J$1(e), e);
			if ($$1.has(t)) return d($$1.get(t), e);
			if (/\d/.test(t)) return W$1(n, e);
			if (e === "\\") throw new Error(o$1`Incomplete escape "\"`);
			if (t === "M") throw new Error(`Unsupported meta "${e}"`);
			if ([...e].length === 2) return d(e.codePointAt(1), e);
			throw new Error(`Unexpected escape "${e}"`);
		}
		function P$1(e) {
			return {
				type: "Alternator",
				raw: e
			};
		}
		function w$1(e, n) {
			return {
				type: "Assertion",
				kind: e,
				raw: n
			};
		}
		function A$1(e) {
			return {
				type: "Backreference",
				raw: e
			};
		}
		function d(e, n) {
			return {
				type: "Character",
				value: e,
				raw: n
			};
		}
		function z$1(e) {
			return {
				type: "CharacterClassClose",
				raw: e
			};
		}
		function U$1(e) {
			return {
				type: "CharacterClassHyphen",
				raw: e
			};
		}
		function H(e) {
			return {
				type: "CharacterClassIntersector",
				raw: e
			};
		}
		function E$1(e, n) {
			return {
				type: "CharacterClassOpen",
				negate: e,
				raw: n
			};
		}
		function k$1(e, n, t = {}) {
			return {
				type: "CharacterSet",
				kind: e,
				...t,
				raw: n
			};
		}
		function I$1(e, n, t = {}) {
			return e === "keep" ? {
				type: "Directive",
				kind: e,
				raw: n
			} : {
				type: "Directive",
				kind: e,
				flags: u(t.flags),
				raw: n
			};
		}
		function W$1(e, n) {
			return {
				type: "EscapedNumber",
				inCharClass: e,
				raw: n
			};
		}
		function Q$1(e) {
			return {
				type: "GroupClose",
				raw: e
			};
		}
		function f(e, n, t = {}) {
			return {
				type: "GroupOpen",
				kind: e,
				...t,
				raw: n
			};
		}
		function D$1(e, n, t, o) {
			return {
				type: "NamedCallout",
				kind: e,
				tag: n,
				arguments: t,
				raw: o
			};
		}
		function _$1(e, n, t, o) {
			return {
				type: "Quantifier",
				kind: e,
				min: n,
				max: t,
				raw: o
			};
		}
		function R$1(e) {
			return {
				type: "Subroutine",
				raw: e
			};
		}
		const B$1 = /* @__PURE__ */ new Set([
			"COUNT",
			"CMP",
			"ERROR",
			"FAIL",
			"MAX",
			"MISMATCH",
			"SKIP",
			"TOTAL_COUNT"
		]);
		const $$1 = /* @__PURE__ */ new Map([
			["a", 7],
			["b", 8],
			["e", 27],
			["f", 12],
			["n", 10],
			["r", 13],
			["t", 9],
			["v", 11]
		]);
		function Z(e) {
			const n = e[1] === "c" ? e[2] : e[3];
			if (!n || !/[A-Za-z]/.test(n)) throw new Error(`Unsupported control character "${e}"`);
			return d(r$2(n.toUpperCase()) - 64, e);
		}
		function L$1(e, n) {
			let { on: t, off: o } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
			o ??= "";
			const s = (n.getCurrentModX() || t.includes("x")) && !o.includes("x"), a = v(t), r = v(o), i = {};
			if (a && (i.enable = a), r && (i.disable = r), e.endsWith(")")) return n.replaceCurrentModX(s), I$1("flags", e, { flags: i });
			if (e.endsWith(":")) return n.pushModX(s), n.numOpenGroups++, f("group", e, { ...(a || r) && { flags: i } });
			throw new Error(`Unexpected flag modifier "${e}"`);
		}
		function j(e) {
			const n = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e);
			if (!n) throw new Error(`Incomplete or invalid named callout "${e}"`);
			const { name: t, tag: o, args: s } = n.groups;
			if (!t) throw new Error(`Invalid named callout "${e}"`);
			if (o === "") throw new Error(`Named callout tag with empty value not allowed "${e}"`);
			const a = s ? s.split(",").filter((g) => g !== "").map((g) => /^[+-]?\d+$/.test(g) ? +g : g) : [], [r, i, l] = a, c = B$1.has(t) ? t.toLowerCase() : "custom";
			switch (c) {
				case "fail":
				case "mismatch":
				case "skip":
					if (a.length > 0) throw new Error(`Named callout arguments not allowed "${a}"`);
					break;
				case "error":
					if (a.length > 1) throw new Error(`Named callout allows only one argument "${a}"`);
					if (typeof r == "string") throw new Error(`Named callout argument must be a number "${r}"`);
					break;
				case "max":
					if (!a.length || a.length > 2) throw new Error(`Named callout must have one or two arguments "${a}"`);
					if (typeof r == "string" && !/^[A-Za-z_]\w*$/.test(r)) throw new Error(`Named callout argument one must be a tag or number "${r}"`);
					if (a.length === 2 && (typeof i == "number" || !/^[<>X]$/.test(i))) throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${i}"`);
					break;
				case "count":
				case "total_count":
					if (a.length > 1) throw new Error(`Named callout allows only one argument "${a}"`);
					if (a.length === 1 && (typeof r == "number" || !/^[<>X]$/.test(r))) throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${r}"`);
					break;
				case "cmp":
					if (a.length !== 3) throw new Error(`Named callout must have three arguments "${a}"`);
					if (typeof r == "string" && !/^[A-Za-z_]\w*$/.test(r)) throw new Error(`Named callout argument one must be a tag or number "${r}"`);
					if (typeof i == "number" || !/^(?:[<>!=]=|[<>])$/.test(i)) throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${i}"`);
					if (typeof l == "string" && !/^[A-Za-z_]\w*$/.test(l)) throw new Error(`Named callout argument three must be a tag or number "${l}"`);
					break;
				case "custom": throw new Error(`Undefined callout name "${t}"`);
				default: throw new Error(`Unexpected named callout kind "${c}"`);
			}
			return D$1(c, o ?? null, s?.split(",") ?? null, e);
		}
		function O$1(e) {
			let n = null, t, o;
			if (e[0] === "{") {
				const { minStr: s, maxStr: a } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups, r = 1e5;
				if (+s > r || a && +a > r) throw new Error("Quantifier value unsupported in Oniguruma");
				if (t = +s, o = a === void 0 ? +s : a === "" ? 1 / 0 : +a, t > o && (n = "possessive", [t, o] = [o, t]), e.endsWith("?")) {
					if (n === "possessive") throw new Error("Unsupported possessive interval quantifier chain with \"?\"");
					n = "lazy";
				} else n || (n = "greedy");
			} else t = e[0] === "+" ? 1 : 0, o = e[0] === "?" ? 1 : 1 / 0, n = e[1] === "+" ? "possessive" : e[1] === "?" ? "lazy" : "greedy";
			return _$1(n, t, o, e);
		}
		function q(e) {
			const n = e[1].toLowerCase();
			return k$1({
				d: "digit",
				h: "hex",
				s: "space",
				w: "word"
			}[n], e, { negate: e[1] !== n });
		}
		function V$1(e) {
			const { p: n, neg: t, value: o } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups;
			return k$1("property", e, {
				value: o,
				negate: n === "P" && !t || n === "p" && !!t
			});
		}
		function v(e) {
			const n = {};
			return e.includes("i") && (n.ignoreCase = !0), e.includes("m") && (n.dotAll = !0), e.includes("x") && (n.extended = !0), Object.keys(n).length ? n : null;
		}
		function Y(e) {
			const n = {
				ignoreCase: !1,
				dotAll: !1,
				extended: !1,
				digitIsAscii: !1,
				posixIsAscii: !1,
				spaceIsAscii: !1,
				wordIsAscii: !1,
				textSegmentMode: null
			};
			for (let t = 0; t < e.length; t++) {
				const o = e[t];
				if (!"imxDPSWy".includes(o)) throw new Error(`Invalid flag "${o}"`);
				if (o === "y") {
					if (!/^y{[gw]}/.test(e.slice(t))) throw new Error("Invalid or unspecified flag \"y\" mode");
					n.textSegmentMode = e[t + 2] === "g" ? "grapheme" : "word", t += 3;
					continue;
				}
				n[{
					i: "ignoreCase",
					m: "dotAll",
					x: "extended",
					D: "digitIsAscii",
					P: "posixIsAscii",
					S: "spaceIsAscii",
					W: "wordIsAscii"
				}[o]] = !0;
			}
			return n;
		}
		function J$1(e) {
			if (/^(?:\\u(?!\p{AHex}{4})|\\x(?!\p{AHex}{1,2}|\{\p{AHex}{1,8}\}))/u.test(e)) throw new Error(`Incomplete or invalid escape "${e}"`);
			const n = e[2] === "{" ? /^\\x\{\s*(?<hex>\p{AHex}+)/u.exec(e).groups.hex : e.slice(2);
			return parseInt(n, 16);
		}
		function ee$1(e, n) {
			const { raw: t, inCharClass: o } = e, s = t.slice(1);
			if (!o && (s !== "0" && s.length === 1 || s[0] !== "0" && +s <= n)) return [A$1(t)];
			const a = [], r = s.match(/^[0-7]+|\d/g);
			for (let i = 0; i < r.length; i++) {
				const l = r[i];
				let c;
				if (i === 0 && l !== "8" && l !== "9") {
					if (c = parseInt(l, 8), c > 127) throw new Error(o$1`Octal encoded byte above 177 unsupported "${t}"`);
				} else c = r$2(l);
				a.push(d(c, (i === 0 ? "\\" : "") + l));
			}
			return a;
		}
		function te$1(e) {
			const n = [], t = new RegExp(y$1, "gy");
			let o;
			for (; o = t.exec(e);) {
				const s = o[0];
				if (s[0] === "{") {
					const a = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(s);
					if (a) {
						const { min: r, max: i } = a.groups;
						if (+r > +i && s.endsWith("?")) {
							t.lastIndex--, n.push(O$1(s.slice(0, -1)));
							continue;
						}
					}
				}
				n.push(O$1(s));
			}
			return n;
		}
		//#endregion
		//#region node_modules/.pnpm/oniguruma-parser@0.12.2/node_modules/oniguruma-parser/dist/parser/node-utils.js
		function o(e, t) {
			if (!Array.isArray(e.body)) throw new Error("Expected node with body array");
			if (e.body.length !== 1) return !1;
			const r = e.body[0];
			return !t || Object.keys(t).every((n) => t[n] === r[n]);
		}
		function s(e) {
			return y.has(e.type);
		}
		const y = /* @__PURE__ */ new Set([
			"AbsenceFunction",
			"Backreference",
			"CapturingGroup",
			"Character",
			"CharacterClass",
			"CharacterSet",
			"Group",
			"Quantifier",
			"Subroutine"
		]);
		//#endregion
		//#region node_modules/.pnpm/oniguruma-parser@0.12.2/node_modules/oniguruma-parser/dist/parser/parse.js
		function J(e, r = {}) {
			const n = {
				flags: "",
				normalizeUnknownPropertyNames: !1,
				skipBackrefValidation: !1,
				skipLookbehindValidation: !1,
				skipPropertyNameValidation: !1,
				unicodePropertyMap: null,
				...r,
				rules: {
					captureGroup: !1,
					singleline: !1,
					...r.rules
				}
			}, o = M$1(e, {
				flags: n.flags,
				rules: {
					captureGroup: n.rules.captureGroup,
					singleline: n.rules.singleline
				}
			}), i = (p, N) => {
				const u = o.tokens[t.nextIndex];
				switch (t.parent = p, t.nextIndex++, u.type) {
					case "Alternator": return b();
					case "Assertion": return W(u);
					case "Backreference": return X(u, t);
					case "Character": return m(u.value, { useLastValid: !!N.isCheckingRangeEnd });
					case "CharacterClassHyphen": return ee(u, t, N);
					case "CharacterClassOpen": return re(u, t, N);
					case "CharacterSet": return ne(u, t);
					case "Directive": return I(u.kind, { flags: u.flags });
					case "GroupOpen": return te(u, t, N);
					case "NamedCallout": return U(u.kind, u.tag, u.arguments);
					case "Quantifier": return oe(u, t);
					case "Subroutine": return ae(u, t);
					default: throw new Error(`Unexpected token type "${u.type}"`);
				}
			}, t = {
				capturingGroups: [],
				hasNumberedRef: !1,
				namedGroupsByName: /* @__PURE__ */ new Map(),
				nextIndex: 0,
				normalizeUnknownPropertyNames: n.normalizeUnknownPropertyNames,
				parent: null,
				skipBackrefValidation: n.skipBackrefValidation,
				skipLookbehindValidation: n.skipLookbehindValidation,
				skipPropertyNameValidation: n.skipPropertyNameValidation,
				subroutines: [],
				tokens: o.tokens,
				unicodePropertyMap: n.unicodePropertyMap,
				walk: i
			}, d = B(T(o.flags));
			let s = d.body[0];
			for (; t.nextIndex < o.tokens.length;) {
				const p = i(s, {});
				p.type === "Alternative" ? (d.body.push(p), s = p) : s.body.push(p);
			}
			const { capturingGroups: a, hasNumberedRef: l, namedGroupsByName: c, subroutines: f } = t;
			if (l && c.size && !n.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
			for (const { ref: p } of f) if (typeof p == "number") {
				if (p > a.length) throw new Error("Subroutine uses a group number that's not defined");
				p && (a[p - 1].isSubroutined = !0);
			} else if (c.has(p)) {
				if (c.get(p).length > 1) throw new Error(o$1`Subroutine uses a duplicate group name "\g<${p}>"`);
				c.get(p)[0].isSubroutined = !0;
			} else throw new Error(o$1`Subroutine uses a group name that's not defined "\g<${p}>"`);
			return d;
		}
		function W({ kind: e }) {
			return F(u({
				"^": "line_start",
				$: "line_end",
				"\\A": "string_start",
				"\\b": "word_boundary",
				"\\B": "word_boundary",
				"\\G": "search_start",
				"\\y": "text_segment_boundary",
				"\\Y": "text_segment_boundary",
				"\\z": "string_end",
				"\\Z": "string_end_newline"
			}[e], `Unexpected assertion kind "${e}"`), { negate: e === o$1`\B` || e === o$1`\Y` });
		}
		function X({ raw: e }, r) {
			const n = /^\\k[<']/.test(e), o = n ? e.slice(3, -1) : e.slice(1), i = (t, d = !1) => {
				const s = r.capturingGroups.length;
				let a = !1;
				if (t > s) if (r.skipBackrefValidation) a = !0;
				else throw new Error(`Not enough capturing groups defined to the left "${e}"`);
				return r.hasNumberedRef = !0, k(d ? s + 1 - t : t, { orphan: a });
			};
			if (n) {
				const t = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(o);
				if (t) return i(+t.groups.num, !!t.groups.sign);
				if (/[-+]/.test(o)) throw new Error(`Invalid backref name "${e}"`);
				if (!r.namedGroupsByName.has(o)) throw new Error(`Group name not defined to the left "${e}"`);
				return k(o);
			}
			return i(+o);
		}
		function ee(e, r, n) {
			const { tokens: o, walk: i } = r, t = r.parent, d = t.body.at(-1), s = o[r.nextIndex];
			if (!n.isCheckingRangeEnd && d && d.type !== "CharacterClass" && d.type !== "CharacterClassRange" && s && s.type !== "CharacterClassOpen" && s.type !== "CharacterClassClose" && s.type !== "CharacterClassIntersector") {
				const a = i(t, {
					...n,
					isCheckingRangeEnd: !0
				});
				if (d.type === "Character" && a.type === "Character") return t.body.pop(), L(d, a);
				throw new Error("Invalid character class range");
			}
			return m(r$2("-"));
		}
		function re({ negate: e }, r, n) {
			const { tokens: o, walk: i } = r, t = [C()], d = o[r.nextIndex];
			let s = z(d);
			for (; s.type !== "CharacterClassClose";) {
				if (s.type === "CharacterClassIntersector") t.push(C()), r.nextIndex++;
				else {
					const l = t.at(-1);
					l.body.push(i(l, n));
				}
				s = z(o[r.nextIndex], d);
			}
			const a = C({ negate: e });
			return t.length === 1 ? a.body = t[0].body : (a.kind = "intersection", a.body = t.map((l) => l.body.length === 1 ? l.body[0] : l)), r.nextIndex++, a;
		}
		function ne({ kind: e, negate: r, value: n }, o) {
			const { normalizeUnknownPropertyNames: i$1, skipPropertyNameValidation: t, unicodePropertyMap: d } = o;
			if (e === "property") {
				const s = w(n);
				if (i.has(s) && !d?.has(s)) e = "posix", n = s;
				else return Q(n, {
					negate: r,
					normalizeUnknownPropertyNames: i$1,
					skipPropertyNameValidation: t,
					unicodePropertyMap: d
				});
			}
			return e === "posix" ? R(n, { negate: r }) : E(e, { negate: r });
		}
		function te(e, r, n) {
			const { tokens: o, capturingGroups: i, namedGroupsByName: t, skipLookbehindValidation: d, walk: s } = r, a = ie(e), l = a.type === "AbsenceFunction", c = $(a), f = c && a.negate;
			if (a.type === "CapturingGroup" && (i.push(a), a.name && l$1(t, a.name, []).push(a)), l && n.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
			let p = D(o[r.nextIndex]);
			for (; p.type !== "GroupClose";) {
				if (p.type === "Alternator") a.body.push(b()), r.nextIndex++;
				else {
					const N = a.body.at(-1), u = s(N, {
						...n,
						isInAbsenceFunction: n.isInAbsenceFunction || l,
						isInLookbehind: n.isInLookbehind || c,
						isInNegLookbehind: n.isInNegLookbehind || f
					});
					if (N.body.push(u), (c || n.isInLookbehind) && !d) {
						const v = "Lookbehind includes a pattern not allowed by Oniguruma";
						if (f || n.isInNegLookbehind) {
							if (M(u) || u.type === "CapturingGroup") throw new Error(v);
						} else if (M(u) || $(u) && u.negate) throw new Error(v);
					}
				}
				p = D(o[r.nextIndex]);
			}
			return r.nextIndex++, a;
		}
		function oe({ kind: e, min: r, max: n }, o) {
			const i = o.parent, t = i.body.at(-1);
			if (!t || !s(t)) throw new Error("Quantifier requires a repeatable token");
			const d = _(e, r, n, t);
			return i.body.pop(), d;
		}
		function ae({ raw: e }, r) {
			const { capturingGroups: n, subroutines: o } = r;
			let i = e.slice(3, -1);
			const t = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(i);
			if (t) {
				const s = +t.groups.num, a = n.length;
				if (r.hasNumberedRef = !0, i = {
					"": s,
					"+": a + s,
					"-": a + 1 - s
				}[t.groups.sign], i < 1) throw new Error("Invalid subroutine number");
			} else i === "0" && (i = 0);
			const d = O(i);
			return o.push(d), d;
		}
		function G(e, r) {
			if (e !== "repeater") throw new Error(`Unexpected absence function kind "${e}"`);
			return {
				type: "AbsenceFunction",
				kind: e,
				body: h(r?.body)
			};
		}
		function b(e) {
			return {
				type: "Alternative",
				body: V(e?.body)
			};
		}
		function F(e, r) {
			const n = {
				type: "Assertion",
				kind: e
			};
			return (e === "word_boundary" || e === "text_segment_boundary") && (n.negate = !!r?.negate), n;
		}
		function k(e, r) {
			const n = !!r?.orphan;
			return {
				type: "Backreference",
				ref: e,
				...n && { orphan: n }
			};
		}
		function P(e, r) {
			const n = {
				name: void 0,
				isSubroutined: !1,
				...r
			};
			if (n.name !== void 0 && !se(n.name)) throw new Error(`Group name "${n.name}" invalid in Oniguruma`);
			return {
				type: "CapturingGroup",
				number: e,
				...n.name && { name: n.name },
				...n.isSubroutined && { isSubroutined: n.isSubroutined },
				body: h(r?.body)
			};
		}
		function m(e, r) {
			const n = {
				useLastValid: !1,
				...r
			};
			if (e > 1114111) {
				const o = e.toString(16);
				if (n.useLastValid) e = 1114111;
				else throw e > 1310719 ? /* @__PURE__ */ new Error(`Invalid code point out of range "\\x{${o}}"`) : /* @__PURE__ */ new Error(`Invalid code point out of range in JS "\\x{${o}}"`);
			}
			return {
				type: "Character",
				value: e
			};
		}
		function C(e) {
			const r = {
				kind: "union",
				negate: !1,
				...e
			};
			return {
				type: "CharacterClass",
				kind: r.kind,
				negate: r.negate,
				body: V(e?.body)
			};
		}
		function L(e, r) {
			if (r.value < e.value) throw new Error("Character class range out of order");
			return {
				type: "CharacterClassRange",
				min: e,
				max: r
			};
		}
		function E(e, r) {
			const n = !!r?.negate, o = {
				type: "CharacterSet",
				kind: e
			};
			return (e === "digit" || e === "hex" || e === "newline" || e === "space" || e === "word") && (o.negate = n), (e === "text_segment" || e === "newline" && !n) && (o.variableLength = !0), o;
		}
		function I(e, r = {}) {
			if (e === "keep") return {
				type: "Directive",
				kind: e
			};
			if (e === "flags") return {
				type: "Directive",
				kind: e,
				flags: u(r.flags)
			};
			throw new Error(`Unexpected directive kind "${e}"`);
		}
		function T(e) {
			return {
				type: "Flags",
				...e
			};
		}
		function A(e) {
			const r = e?.atomic, n = e?.flags;
			if (r && n) throw new Error("Atomic group cannot have flags");
			return {
				type: "Group",
				...r && { atomic: r },
				...n && { flags: n },
				body: h(e?.body)
			};
		}
		function K(e) {
			const r = {
				behind: !1,
				negate: !1,
				...e
			};
			return {
				type: "LookaroundAssertion",
				kind: r.behind ? "lookbehind" : "lookahead",
				negate: r.negate,
				body: h(e?.body)
			};
		}
		function U(e, r, n) {
			return {
				type: "NamedCallout",
				kind: e,
				tag: r,
				arguments: n
			};
		}
		function R(e, r) {
			const n = !!r?.negate;
			if (!i.has(e)) throw new Error(`Invalid POSIX class "${e}"`);
			return {
				type: "CharacterSet",
				kind: "posix",
				value: e,
				negate: n
			};
		}
		function _(e, r, n, o) {
			if (r > n) throw new Error("Invalid reversed quantifier range");
			return {
				type: "Quantifier",
				kind: e,
				min: r,
				max: n,
				body: o
			};
		}
		function B(e, r) {
			return {
				type: "Regex",
				body: h(r?.body),
				flags: e
			};
		}
		function O(e) {
			return {
				type: "Subroutine",
				ref: e
			};
		}
		function Q(e, r) {
			const n = {
				negate: !1,
				normalizeUnknownPropertyNames: !1,
				skipPropertyNameValidation: !1,
				unicodePropertyMap: null,
				...r
			};
			let o = n.unicodePropertyMap?.get(w(e));
			if (!o) {
				if (n.normalizeUnknownPropertyNames) o = de(e);
				else if (n.unicodePropertyMap && !n.skipPropertyNameValidation) throw new Error(o$1`Invalid Unicode property "\p{${e}}"`);
			}
			return {
				type: "CharacterSet",
				kind: "property",
				value: o ?? e,
				negate: n.negate
			};
		}
		function ie({ flags: e, kind: r, name: n, negate: o, number: i }) {
			switch (r) {
				case "absence_repeater": return G("repeater");
				case "atomic": return A({ atomic: !0 });
				case "capturing": return P(i, { name: n });
				case "group": return A({ flags: e });
				case "lookahead":
				case "lookbehind": return K({
					behind: r === "lookbehind",
					negate: o
				});
				default: throw new Error(`Unexpected group kind "${r}"`);
			}
		}
		function h(e) {
			if (e === void 0) e = [b()];
			else if (!Array.isArray(e) || !e.length || !e.every((r) => r.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
			return e;
		}
		function V(e) {
			if (e === void 0) e = [];
			else if (!Array.isArray(e) || !e.every((r) => !!r.type)) throw new Error("Invalid body; expected array of nodes");
			return e;
		}
		function M(e) {
			return e.type === "LookaroundAssertion" && e.kind === "lookahead";
		}
		function $(e) {
			return e.type === "LookaroundAssertion" && e.kind === "lookbehind";
		}
		function se(e) {
			return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e);
		}
		function de(e) {
			return e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (r) => r[0].toUpperCase() + r.slice(1).toLowerCase());
		}
		function w(e) {
			return e.replace(/[- _]+/g, "").toLowerCase();
		}
		function z(e, r) {
			const n = r;
			return u(e, `Unclosed character class${n?.type === "Character" && n.value === 93 && n.raw === "]" ? " (started with \"]\")" : ""}`);
		}
		function D(e) {
			return u(e, "Unclosed group");
		}
		//#endregion
		//#region node_modules/.pnpm/oniguruma-parser@0.12.2/node_modules/oniguruma-parser/dist/traverser/traverse.js
		function S(a, v, N = null) {
			function b(e, s) {
				for (let t = 0; t < e.length; t++) {
					const r = n(e[t], s, t, e);
					t = Math.max(-1, t + r);
				}
			}
			function n(e, s = null, t = null, r = null) {
				let i = 0, c = !1;
				const d = {
					node: e,
					parent: s,
					key: t,
					container: r,
					root: a,
					remove() {
						x(r).splice(Math.max(0, l(t) + i), 1), i--, c = !0;
					},
					removeAllNextSiblings() {
						return x(r).splice(l(t) + 1);
					},
					removeAllPrevSiblings() {
						const o = l(t) + i;
						return i -= o, x(r).splice(0, Math.max(0, o));
					},
					replaceWith(o, m = {}) {
						const y = !!m.traverse;
						r ? r[Math.max(0, l(t) + i)] = o : u(s, "Can't replace root node")[t] = o, y && n(o, s, t, r), c = !0;
					},
					replaceWithMultiple(o, m = {}) {
						const y = !!m.traverse;
						if (x(r).splice(Math.max(0, l(t) + i), 1, ...o), i += o.length - 1, y) {
							let g = 0;
							for (let p = 0; p < o.length; p++) g += n(o[p], s, l(t) + p + g, r);
						}
						c = !0;
					},
					skip() {
						c = !0;
					}
				}, { type: f } = e, u$1 = v["*"], h = v[f], R = typeof u$1 == "function" ? u$1 : u$1?.enter, P = typeof h == "function" ? h : h?.enter;
				if (R?.(d, N), P?.(d, N), !c) switch (f) {
					case "AbsenceFunction":
					case "Alternative":
					case "CapturingGroup":
					case "CharacterClass":
					case "Group":
					case "LookaroundAssertion":
						b(e.body, e);
						break;
					case "Assertion":
					case "Backreference":
					case "Character":
					case "CharacterSet":
					case "Directive":
					case "Flags":
					case "NamedCallout":
					case "Subroutine": break;
					case "CharacterClassRange":
						n(e.min, e, "min"), n(e.max, e, "max");
						break;
					case "Quantifier":
						n(e.body, e, "body");
						break;
					case "Regex":
						b(e.body, e), n(e.flags, e, "flags");
						break;
					default: throw new Error(`Unexpected node type "${f}"`);
				}
				return h?.exit?.(d, N), u$1?.exit?.(d, N), i;
			}
			return n(a), a;
		}
		function x(a) {
			if (!Array.isArray(a)) throw new Error("Container expected");
			return a;
		}
		function l(a) {
			if (typeof a != "number") throw new Error("Numeric key expected");
			return a;
		}
		//#endregion
		//#region node_modules/.pnpm/regex@6.1.0/node_modules/regex/src/utils-internals.js
		const noncapturingDelim = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
		/**
		Updates the array in place by incrementing each value greater than or equal to the threshold.
		@param {Array<number>} arr
		@param {number} threshold
		*/
		function incrementIfAtLeast$1(arr, threshold) {
			for (let i = 0; i < arr.length; i++) if (arr[i] >= threshold) arr[i]++;
		}
		/**
		@param {string} str
		@param {number} pos
		@param {string} oldValue
		@param {string} newValue
		@returns {string}
		*/
		function spliceStr(str, pos, oldValue, newValue) {
			return str.slice(0, pos) + newValue + str.slice(pos + oldValue.length);
		}
		//#endregion
		//#region node_modules/.pnpm/regex-utilities@2.3.0/node_modules/regex-utilities/src/index.js
		const Context = Object.freeze({
			DEFAULT: "DEFAULT",
			CHAR_CLASS: "CHAR_CLASS"
		});
		/**
		Replaces all unescaped instances of a regex pattern in the given context, using a replacement
		string or callback.
		
		Doesn't skip over complete multicharacter tokens (only `\` plus its folowing char) so must be used
		with knowledge of what's safe to do given regex syntax. Assumes UnicodeSets-mode syntax.
		@param {string} expression Search target
		@param {string} needle Search as a regex pattern, with flags `su` applied
		@param {string | (match: RegExpExecArray, details: {
		context: 'DEFAULT' | 'CHAR_CLASS';
		negated: boolean;
		}) => string} replacement
		@param {'DEFAULT' | 'CHAR_CLASS'} [context] All contexts if not specified
		@returns {string} Updated expression
		@example
		const str = '.\\.\\\\.[[\\.].].';
		replaceUnescaped(str, '\\.', '@');
		// → '@\\.\\\\@[[\\.]@]@'
		replaceUnescaped(str, '\\.', '@', Context.DEFAULT);
		// → '@\\.\\\\@[[\\.].]@'
		replaceUnescaped(str, '\\.', '@', Context.CHAR_CLASS);
		// → '.\\.\\\\.[[\\.]@].'
		*/
		function replaceUnescaped(expression, needle, replacement, context) {
			const re = new RegExp(String.raw`${needle}|(?<$skip>\[\^?|\\?.)`, "gsu");
			const negated = [false];
			let numCharClassesOpen = 0;
			let result = "";
			for (const match of expression.matchAll(re)) {
				const { 0: m, groups: { $skip } } = match;
				if (!$skip && (!context || context === Context.DEFAULT === !numCharClassesOpen)) {
					if (replacement instanceof Function) result += replacement(match, {
						context: numCharClassesOpen ? Context.CHAR_CLASS : Context.DEFAULT,
						negated: negated[negated.length - 1]
					});
					else result += replacement;
					continue;
				}
				if (m[0] === "[") {
					numCharClassesOpen++;
					negated.push(m[1] === "^");
				} else if (m === "]" && numCharClassesOpen) {
					numCharClassesOpen--;
					negated.pop();
				}
				result += m;
			}
			return result;
		}
		/**
		Runs a callback for each unescaped instance of a regex pattern in the given context.
		
		Doesn't skip over complete multicharacter tokens (only `\` plus its folowing char) so must be used
		with knowledge of what's safe to do given regex syntax. Assumes UnicodeSets-mode syntax.
		@param {string} expression Search target
		@param {string} needle Search as a regex pattern, with flags `su` applied
		@param {(match: RegExpExecArray, details: {
		context: 'DEFAULT' | 'CHAR_CLASS';
		negated: boolean;
		}) => void} callback
		@param {'DEFAULT' | 'CHAR_CLASS'} [context] All contexts if not specified
		*/
		function forEachUnescaped(expression, needle, callback, context) {
			replaceUnescaped(expression, needle, callback, context);
		}
		/**
		Returns a match object for the first unescaped instance of a regex pattern in the given context, or
		`null`.
		
		Doesn't skip over complete multicharacter tokens (only `\` plus its folowing char) so must be used
		with knowledge of what's safe to do given regex syntax. Assumes UnicodeSets-mode syntax.
		@param {string} expression Search target
		@param {string} needle Search as a regex pattern, with flags `su` applied
		@param {number} [pos] Offset to start the search
		@param {'DEFAULT' | 'CHAR_CLASS'} [context] All contexts if not specified
		@returns {RegExpExecArray | null}
		*/
		function execUnescaped(expression, needle, pos = 0, context) {
			if (!new RegExp(needle, "su").test(expression)) return null;
			const re = new RegExp(`${needle}|(?<$skip>\\\\?.)`, "gsu");
			re.lastIndex = pos;
			let numCharClassesOpen = 0;
			let match;
			while (match = re.exec(expression)) {
				const { 0: m, groups: { $skip } } = match;
				if (!$skip && (!context || context === Context.DEFAULT === !numCharClassesOpen)) return match;
				if (m === "[") numCharClassesOpen++;
				else if (m === "]" && numCharClassesOpen) numCharClassesOpen--;
				if (re.lastIndex == match.index) re.lastIndex++;
			}
			return null;
		}
		/**
		Checks whether an unescaped instance of a regex pattern appears in the given context.
		
		Doesn't skip over complete multicharacter tokens (only `\` plus its folowing char) so must be used
		with knowledge of what's safe to do given regex syntax. Assumes UnicodeSets-mode syntax.
		@param {string} expression Search target
		@param {string} needle Search as a regex pattern, with flags `su` applied
		@param {'DEFAULT' | 'CHAR_CLASS'} [context] All contexts if not specified
		@returns {boolean} Whether the pattern was found
		*/
		function hasUnescaped(expression, needle, context) {
			return !!execUnescaped(expression, needle, 0, context);
		}
		/**
		Extracts the full contents of a group (subpattern) from the given expression, accounting for
		escaped characters, nested groups, and character classes. The group is identified by the position
		where its contents start (the string index just after the group's opening delimiter). Returns the
		rest of the string if the group is unclosed.
		
		Assumes UnicodeSets-mode syntax.
		@param {string} expression Search target
		@param {number} contentsStartPos
		@returns {string}
		*/
		function getGroupContents(expression, contentsStartPos) {
			const token = /\\?./gsu;
			token.lastIndex = contentsStartPos;
			let contentsEndPos = expression.length;
			let numCharClassesOpen = 0;
			let numGroupsOpen = 1;
			let match;
			while (match = token.exec(expression)) {
				const [m] = match;
				if (m === "[") numCharClassesOpen++;
				else if (!numCharClassesOpen) {
					if (m === "(") numGroupsOpen++;
					else if (m === ")") {
						numGroupsOpen--;
						if (!numGroupsOpen) {
							contentsEndPos = match.index;
							break;
						}
					}
				} else if (m === "]") numCharClassesOpen--;
			}
			return expression.slice(contentsStartPos, contentsEndPos);
		}
		//#endregion
		//#region node_modules/.pnpm/regex@6.1.0/node_modules/regex/src/atomic.js
		/**
		@import {PluginData, PluginResult} from './regex.js';
		*/
		const atomicPluginToken = new RegExp(String.raw`(?<noncapturingStart>${noncapturingDelim})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
		/**
		Apply transformations for atomic groups: `(?>…)`.
		@param {string} expression
		@param {PluginData} [data]
		@returns {Required<PluginResult>}
		*/
		function atomic(expression, data) {
			const hiddenCaptures = data?.hiddenCaptures ?? [];
			let captureTransfers = data?.captureTransfers ?? /* @__PURE__ */ new Map();
			if (!/\(\?>/.test(expression)) return {
				pattern: expression,
				captureTransfers,
				hiddenCaptures
			};
			const aGDelim = "(?>";
			const emulatedAGDelim = "(?:(?=(";
			const captureNumMap = [0];
			const addedHiddenCaptures = [];
			let numCapturesBeforeAG = 0;
			let numAGs = 0;
			let aGPos = NaN;
			let hasProcessedAG;
			do {
				hasProcessedAG = false;
				let numCharClassesOpen = 0;
				let numGroupsOpenInAG = 0;
				let inAG = false;
				let match;
				atomicPluginToken.lastIndex = Number.isNaN(aGPos) ? 0 : aGPos + 7;
				while (match = atomicPluginToken.exec(expression)) {
					const { 0: m, index, groups: { capturingStart, noncapturingStart } } = match;
					if (m === "[") numCharClassesOpen++;
					else if (!numCharClassesOpen) {
						if (m === aGDelim && !inAG) {
							aGPos = index;
							inAG = true;
						} else if (inAG && noncapturingStart) numGroupsOpenInAG++;
						else if (capturingStart) {
							if (inAG) numGroupsOpenInAG++;
							else {
								numCapturesBeforeAG++;
								captureNumMap.push(numCapturesBeforeAG + numAGs);
							}
						} else if (m === ")" && inAG) {
							if (!numGroupsOpenInAG) {
								numAGs++;
								const addedCaptureNum = numCapturesBeforeAG + numAGs;
								expression = `${expression.slice(0, aGPos)}${emulatedAGDelim}${expression.slice(aGPos + 3, index)}))<$$${addedCaptureNum}>)${expression.slice(index + 1)}`;
								hasProcessedAG = true;
								addedHiddenCaptures.push(addedCaptureNum);
								incrementIfAtLeast$1(hiddenCaptures, addedCaptureNum);
								if (captureTransfers.size) {
									const newCaptureTransfers = /* @__PURE__ */ new Map();
									captureTransfers.forEach((from, to) => {
										newCaptureTransfers.set(to >= addedCaptureNum ? to + 1 : to, from.map((f) => f >= addedCaptureNum ? f + 1 : f));
									});
									captureTransfers = newCaptureTransfers;
								}
								break;
							}
							numGroupsOpenInAG--;
						}
					} else if (m === "]") numCharClassesOpen--;
				}
			} while (hasProcessedAG);
			hiddenCaptures.push(...addedHiddenCaptures);
			expression = replaceUnescaped(expression, String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`, ({ 0: m, groups: { backrefNum, wrappedBackrefNum } }) => {
				if (backrefNum) {
					const bNum = +backrefNum;
					if (bNum > captureNumMap.length - 1) throw new Error(`Backref "${m}" greater than number of captures`);
					return `\\${captureNumMap[bNum]}`;
				}
				return `\\${wrappedBackrefNum}`;
			}, Context.DEFAULT);
			return {
				pattern: expression,
				captureTransfers,
				hiddenCaptures
			};
		}
		const baseQuantifier = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`;
		const possessivePluginToken = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${baseQuantifier})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");
		/**
		Transform posessive quantifiers into atomic groups. The posessessive quantifiers are:
		`?+`, `*+`, `++`, `{N}+`, `{N,}+`, `{N,N}+`.
		This follows Java, PCRE, Perl, and Python.
		Possessive quantifiers in Oniguruma and Onigmo are only: `?+`, `*+`, `++`.
		@param {string} expression
		@returns {PluginResult}
		*/
		function possessive(expression) {
			if (!new RegExp(`${baseQuantifier}\\+`).test(expression)) return { pattern: expression };
			const openGroupIndices = [];
			let lastGroupIndex = null;
			let lastCharClassIndex = null;
			let lastToken = "";
			let numCharClassesOpen = 0;
			let match;
			possessivePluginToken.lastIndex = 0;
			while (match = possessivePluginToken.exec(expression)) {
				const { 0: m, index, groups: { qBase, qMod, invalidQ } } = match;
				if (m === "[") {
					if (!numCharClassesOpen) lastCharClassIndex = index;
					numCharClassesOpen++;
				} else if (m === "]") {
					if (numCharClassesOpen) numCharClassesOpen--;
					else lastCharClassIndex = null;
				} else if (!numCharClassesOpen) {
					if (qMod === "+" && lastToken && !lastToken.startsWith("(")) {
						if (invalidQ) throw new Error(`Invalid quantifier "${m}"`);
						let charsAdded = -1;
						if (/^\{\d+\}$/.test(qBase)) expression = spliceStr(expression, index + qBase.length, qMod, "");
						else {
							if (lastToken === ")" || lastToken === "]") {
								const nodeIndex = lastToken === ")" ? lastGroupIndex : lastCharClassIndex;
								if (nodeIndex === null) throw new Error(`Invalid unmatched "${lastToken}"`);
								expression = `${expression.slice(0, nodeIndex)}(?>${expression.slice(nodeIndex, index)}${qBase})${expression.slice(index + m.length)}`;
							} else expression = `${expression.slice(0, index - lastToken.length)}(?>${lastToken}${qBase})${expression.slice(index + m.length)}`;
							charsAdded += 4;
						}
						possessivePluginToken.lastIndex += charsAdded;
					} else if (m[0] === "(") openGroupIndices.push(index);
					else if (m === ")") lastGroupIndex = openGroupIndices.length ? openGroupIndices.pop() : null;
				}
				lastToken = m;
			}
			return { pattern: expression };
		}
		//#endregion
		//#region node_modules/.pnpm/regex-recursion@6.0.2/node_modules/regex-recursion/src/index.js
		const r$1 = String.raw;
		const recursiveToken = r$1`\(\?R=(?<rDepth>[^\)]+)\)|${r$1`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`}`;
		const namedCaptureDelim = r$1`\(\?<(?![=!])(?<captureName>[^>]+)>`;
		const captureDelim = r$1`${namedCaptureDelim}|(?<unnamed>\()(?!\?)`;
		const token = new RegExp(r$1`${namedCaptureDelim}|${recursiveToken}|\(\?|\\?.`, "gsu");
		const overlappingRecursionMsg = "Cannot use multiple overlapping recursions";
		/**
		@param {string} pattern
		@param {{
		flags?: string;
		captureTransfers?: Map<number, Array<number>>;
		hiddenCaptures?: Array<number>;
		mode?: 'plugin' | 'external';
		}} [data]
		@returns {{
		pattern: string;
		captureTransfers: Map<number, Array<number>>;
		hiddenCaptures: Array<number>;
		}}
		*/
		function recursion(pattern, data) {
			const { hiddenCaptures, mode } = {
				hiddenCaptures: [],
				mode: "plugin",
				...data
			};
			let captureTransfers = data?.captureTransfers ?? /* @__PURE__ */ new Map();
			if (!new RegExp(recursiveToken, "su").test(pattern)) return {
				pattern,
				captureTransfers,
				hiddenCaptures
			};
			if (mode === "plugin" && hasUnescaped(pattern, r$1`\(\?\(DEFINE\)`, Context.DEFAULT)) throw new Error("DEFINE groups cannot be used with recursion");
			const addedHiddenCaptures = [];
			const hasNumberedBackref = hasUnescaped(pattern, r$1`\\[1-9]`, Context.DEFAULT);
			const groupContentsStartPos = /* @__PURE__ */ new Map();
			const openGroups = [];
			let hasRecursed = false;
			let numCharClassesOpen = 0;
			let numCapturesPassed = 0;
			let match;
			token.lastIndex = 0;
			while (match = token.exec(pattern)) {
				const { 0: m, groups: { captureName, rDepth, gRNameOrNum, gRDepth } } = match;
				if (m === "[") numCharClassesOpen++;
				else if (!numCharClassesOpen) {
					if (rDepth) {
						assertMaxInBounds(rDepth);
						if (hasRecursed) throw new Error(overlappingRecursionMsg);
						if (hasNumberedBackref) throw new Error(`${mode === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`);
						const left = pattern.slice(0, match.index);
						const right = pattern.slice(token.lastIndex);
						if (hasUnescaped(right, recursiveToken, Context.DEFAULT)) throw new Error(overlappingRecursionMsg);
						const reps = +rDepth - 1;
						pattern = makeRecursive(left, right, reps, false, hiddenCaptures, addedHiddenCaptures, numCapturesPassed);
						captureTransfers = mapCaptureTransfers(captureTransfers, left, reps, addedHiddenCaptures.length, 0, numCapturesPassed);
						break;
					} else if (gRNameOrNum) {
						assertMaxInBounds(gRDepth);
						let isWithinReffedGroup = false;
						for (const g of openGroups) if (g.name === gRNameOrNum || g.num === +gRNameOrNum) {
							isWithinReffedGroup = true;
							if (g.hasRecursedWithin) throw new Error(overlappingRecursionMsg);
							break;
						}
						if (!isWithinReffedGroup) throw new Error(r$1`Recursive \g cannot be used outside the referenced group "${mode === "external" ? gRNameOrNum : r$1`\g<${gRNameOrNum}&R=${gRDepth}>`}"`);
						const startPos = groupContentsStartPos.get(gRNameOrNum);
						const groupContents = getGroupContents(pattern, startPos);
						if (hasNumberedBackref && hasUnescaped(groupContents, r$1`${namedCaptureDelim}|\((?!\?)`, Context.DEFAULT)) throw new Error(`${mode === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`);
						const groupContentsLeft = pattern.slice(startPos, match.index);
						const groupContentsRight = groupContents.slice(groupContentsLeft.length + m.length);
						const numAddedHiddenCapturesPreExpansion = addedHiddenCaptures.length;
						const reps = +gRDepth - 1;
						const expansion = makeRecursive(groupContentsLeft, groupContentsRight, reps, true, hiddenCaptures, addedHiddenCaptures, numCapturesPassed);
						captureTransfers = mapCaptureTransfers(captureTransfers, groupContentsLeft, reps, addedHiddenCaptures.length - numAddedHiddenCapturesPreExpansion, numAddedHiddenCapturesPreExpansion, numCapturesPassed);
						pattern = `${pattern.slice(0, startPos)}${expansion}${pattern.slice(startPos + groupContents.length)}`;
						token.lastIndex += expansion.length - m.length - groupContentsLeft.length - groupContentsRight.length;
						openGroups.forEach((g) => g.hasRecursedWithin = true);
						hasRecursed = true;
					} else if (captureName) {
						numCapturesPassed++;
						groupContentsStartPos.set(String(numCapturesPassed), token.lastIndex);
						groupContentsStartPos.set(captureName, token.lastIndex);
						openGroups.push({
							num: numCapturesPassed,
							name: captureName
						});
					} else if (m[0] === "(") {
						const isUnnamedCapture = m === "(";
						if (isUnnamedCapture) {
							numCapturesPassed++;
							groupContentsStartPos.set(String(numCapturesPassed), token.lastIndex);
						}
						openGroups.push(isUnnamedCapture ? { num: numCapturesPassed } : {});
					} else if (m === ")") openGroups.pop();
				} else if (m === "]") numCharClassesOpen--;
			}
			hiddenCaptures.push(...addedHiddenCaptures);
			return {
				pattern,
				captureTransfers,
				hiddenCaptures
			};
		}
		/**
		@param {string} max
		*/
		function assertMaxInBounds(max) {
			const errMsg = `Max depth must be integer between 2 and 100; used ${max}`;
			if (!/^[1-9]\d*$/.test(max)) throw new Error(errMsg);
			max = +max;
			if (max < 2 || max > 100) throw new Error(errMsg);
		}
		/**
		@param {string} left
		@param {string} right
		@param {number} reps
		@param {boolean} isSubpattern
		@param {Array<number>} hiddenCaptures
		@param {Array<number>} addedHiddenCaptures
		@param {number} numCapturesPassed
		@returns {string}
		*/
		function makeRecursive(left, right, reps, isSubpattern, hiddenCaptures, addedHiddenCaptures, numCapturesPassed) {
			const namesInRecursed = /* @__PURE__ */ new Set();
			if (isSubpattern) forEachUnescaped(left + right, namedCaptureDelim, ({ groups: { captureName } }) => {
				namesInRecursed.add(captureName);
			}, Context.DEFAULT);
			const rest = [
				reps,
				isSubpattern ? namesInRecursed : null,
				hiddenCaptures,
				addedHiddenCaptures,
				numCapturesPassed
			];
			return `${left}${repeatWithDepth(`(?:${left}`, "forward", ...rest)}(?:)${repeatWithDepth(`${right})`, "backward", ...rest)}${right}`;
		}
		/**
		@param {string} pattern
		@param {'forward' | 'backward'} direction
		@param {number} reps
		@param {Set<string> | null} namesInRecursed
		@param {Array<number>} hiddenCaptures
		@param {Array<number>} addedHiddenCaptures
		@param {number} numCapturesPassed
		@returns {string}
		*/
		function repeatWithDepth(pattern, direction, reps, namesInRecursed, hiddenCaptures, addedHiddenCaptures, numCapturesPassed) {
			const startNum = 2;
			const getDepthNum = (i) => direction === "forward" ? i + startNum : reps - i + startNum - 1;
			let result = "";
			for (let i = 0; i < reps; i++) {
				const depthNum = getDepthNum(i);
				result += replaceUnescaped(pattern, r$1`${captureDelim}|\\k<(?<backref>[^>]+)>`, ({ 0: m, groups: { captureName, unnamed, backref } }) => {
					if (backref && namesInRecursed && !namesInRecursed.has(backref)) return m;
					const suffix = `_$${depthNum}`;
					if (unnamed || captureName) {
						const addedCaptureNum = numCapturesPassed + addedHiddenCaptures.length + 1;
						addedHiddenCaptures.push(addedCaptureNum);
						incrementIfAtLeast(hiddenCaptures, addedCaptureNum);
						return unnamed ? m : `(?<${captureName}${suffix}>`;
					}
					return r$1`\k<${backref}${suffix}>`;
				}, Context.DEFAULT);
			}
			return result;
		}
		/**
		Updates the array in place by incrementing each value greater than or equal to the threshold.
		@param {Array<number>} arr
		@param {number} threshold
		*/
		function incrementIfAtLeast(arr, threshold) {
			for (let i = 0; i < arr.length; i++) if (arr[i] >= threshold) arr[i]++;
		}
		/**
		@param {Map<number, Array<number>>} captureTransfers
		@param {string} left
		@param {number} reps
		@param {number} numCapturesAddedInExpansion
		@param {number} numAddedHiddenCapturesPreExpansion
		@param {number} numCapturesPassed
		@returns {Map<number, Array<number>>}
		*/
		function mapCaptureTransfers(captureTransfers, left, reps, numCapturesAddedInExpansion, numAddedHiddenCapturesPreExpansion, numCapturesPassed) {
			if (captureTransfers.size && numCapturesAddedInExpansion) {
				let numCapturesInLeft = 0;
				forEachUnescaped(left, captureDelim, () => numCapturesInLeft++, Context.DEFAULT);
				const recursionDelimCaptureNum = numCapturesPassed - numCapturesInLeft + numAddedHiddenCapturesPreExpansion;
				const newCaptureTransfers = /* @__PURE__ */ new Map();
				captureTransfers.forEach((from, to) => {
					const numCapturesInRight = (numCapturesAddedInExpansion - numCapturesInLeft * reps) / reps;
					const numCapturesAddedInLeft = numCapturesInLeft * reps;
					const newTo = to > recursionDelimCaptureNum + numCapturesInLeft ? to + numCapturesAddedInExpansion : to;
					const newFrom = [];
					for (const f of from) if (f <= recursionDelimCaptureNum) newFrom.push(f);
					else if (f > recursionDelimCaptureNum + numCapturesInLeft + numCapturesInRight) newFrom.push(f + numCapturesAddedInExpansion);
					else if (f <= recursionDelimCaptureNum + numCapturesInLeft) for (let i = 0; i <= reps; i++) newFrom.push(f + numCapturesInLeft * i);
					else for (let i = 0; i <= reps; i++) newFrom.push(f + numCapturesAddedInLeft + numCapturesInRight * i);
					newCaptureTransfers.set(newTo, newFrom);
				});
				return newCaptureTransfers;
			}
			return captureTransfers;
		}
		//#endregion
		//#region node_modules/.pnpm/oniguruma-to-es@4.3.6/node_modules/oniguruma-to-es/dist/esm/index.js
		var cp = String.fromCodePoint;
		var r = String.raw;
		var envFlags = {};
		var globalRegExp = globalThis.RegExp;
		envFlags.flagGroups = (() => {
			try {
				new globalRegExp("(?i:)");
			} catch {
				return false;
			}
			return true;
		})();
		envFlags.unicodeSets = (() => {
			try {
				new globalRegExp("[[]]", "v");
			} catch {
				return false;
			}
			return true;
		})();
		envFlags.bugFlagVLiteralHyphenIsRange = envFlags.unicodeSets ? (() => {
			try {
				new globalRegExp(r`[\d\-a]`, "v");
			} catch {
				return true;
			}
			return false;
		})() : false;
		envFlags.bugNestedClassIgnoresNegation = envFlags.unicodeSets && new globalRegExp("[[^a]]", "v").test("a");
		function getNewCurrentFlags(current, { enable, disable }) {
			return {
				dotAll: !disable?.dotAll && !!(enable?.dotAll || current.dotAll),
				ignoreCase: !disable?.ignoreCase && !!(enable?.ignoreCase || current.ignoreCase)
			};
		}
		function getOrInsert(map, key, defaultValue) {
			if (!map.has(key)) map.set(key, defaultValue);
			return map.get(key);
		}
		function isMinTarget(target, min) {
			return EsVersion[target] >= EsVersion[min];
		}
		function throwIfNullish(value, msg) {
			if (value == null) throw new Error(msg ?? "Value expected");
			return value;
		}
		var EsVersion = {
			ES2025: 2025,
			ES2024: 2024,
			ES2018: 2018
		};
		var Target = (
		/** @type {const} */
		{
			auto: "auto",
			ES2025: "ES2025",
			ES2024: "ES2024",
			ES2018: "ES2018"
		});
		function getOptions(options = {}) {
			if ({}.toString.call(options) !== "[object Object]") throw new Error("Unexpected options");
			if (options.target !== void 0 && !Target[options.target]) throw new Error(`Unexpected target "${options.target}"`);
			const opts = {
				accuracy: "default",
				avoidSubclass: false,
				flags: "",
				global: false,
				hasIndices: false,
				lazyCompileLength: Infinity,
				target: "auto",
				verbose: false,
				...options,
				rules: {
					allowOrphanBackrefs: false,
					asciiWordBoundaries: false,
					captureGroup: false,
					recursionLimit: 20,
					singleline: false,
					...options.rules
				}
			};
			if (opts.target === "auto") opts.target = envFlags.flagGroups ? "ES2025" : envFlags.unicodeSets ? "ES2024" : "ES2018";
			return opts;
		}
		var asciiSpaceChar = "[	-\r ]";
		var CharsWithoutIgnoreCaseExpansion = /* @__PURE__ */ new Set([cp(304), cp(305)]);
		var defaultWordChar = r`[\p{L}\p{M}\p{N}\p{Pc}]`;
		function getIgnoreCaseMatchChars(char) {
			if (CharsWithoutIgnoreCaseExpansion.has(char)) return [char];
			const set = /* @__PURE__ */ new Set();
			const lower = char.toLowerCase();
			const upper = lower.toUpperCase();
			const title = LowerToTitleCaseMap.get(lower);
			const altLower = LowerToAlternativeLowerCaseMap.get(lower);
			const altUpper = LowerToAlternativeUpperCaseMap.get(lower);
			if ([...upper].length === 1) set.add(upper);
			altUpper && set.add(altUpper);
			title && set.add(title);
			set.add(lower);
			altLower && set.add(altLower);
			return [...set];
		}
		var JsUnicodePropertyMap = /* @__PURE__ */ new Map(`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map((p) => [w(p), p]));
		var LowerToAlternativeLowerCaseMap = /* @__PURE__ */ new Map([["s", cp(383)], [cp(383), "s"]]);
		var LowerToAlternativeUpperCaseMap = /* @__PURE__ */ new Map([
			[cp(223), cp(7838)],
			[cp(107), cp(8490)],
			[cp(229), cp(8491)],
			[cp(969), cp(8486)]
		]);
		var LowerToTitleCaseMap = new Map([
			titleEntry(453),
			titleEntry(456),
			titleEntry(459),
			titleEntry(498),
			...titleRange(8072, 8079),
			...titleRange(8088, 8095),
			...titleRange(8104, 8111),
			titleEntry(8124),
			titleEntry(8140),
			titleEntry(8188)
		]);
		var PosixClassMap = /* @__PURE__ */ new Map([
			["alnum", r`[\p{Alpha}\p{Nd}]`],
			["alpha", r`\p{Alpha}`],
			["ascii", r`\p{ASCII}`],
			["blank", r`[\p{Zs}\t]`],
			["cntrl", r`\p{Cc}`],
			["digit", r`\p{Nd}`],
			["graph", r`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`],
			["lower", r`\p{Lower}`],
			["print", r`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
			["punct", r`[\p{P}\p{S}]`],
			["space", r`\p{space}`],
			["upper", r`\p{Upper}`],
			["word", r`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
			["xdigit", r`\p{AHex}`]
		]);
		function range(start, end) {
			const range2 = [];
			for (let i = start; i <= end; i++) range2.push(i);
			return range2;
		}
		function titleEntry(codePoint) {
			const char = cp(codePoint);
			return [char.toLowerCase(), char];
		}
		function titleRange(start, end) {
			return range(start, end).map((codePoint) => titleEntry(codePoint));
		}
		var UnicodePropertiesWithSpecificCase = /* @__PURE__ */ new Set([
			"Lower",
			"Lowercase",
			"Upper",
			"Uppercase",
			"Ll",
			"Lowercase_Letter",
			"Lt",
			"Titlecase_Letter",
			"Lu",
			"Uppercase_Letter"
		]);
		function transform(ast, options) {
			const opts = {
				accuracy: "default",
				asciiWordBoundaries: false,
				avoidSubclass: false,
				bestEffortTarget: "ES2025",
				...options
			};
			addParentProperties(ast);
			const firstPassState = {
				accuracy: opts.accuracy,
				asciiWordBoundaries: opts.asciiWordBoundaries,
				avoidSubclass: opts.avoidSubclass,
				flagDirectivesByAlt: /* @__PURE__ */ new Map(),
				jsGroupNameMap: /* @__PURE__ */ new Map(),
				minTargetEs2024: isMinTarget(opts.bestEffortTarget, "ES2024"),
				passedLookbehind: false,
				strategy: null,
				subroutineRefMap: /* @__PURE__ */ new Map(),
				supportedGNodes: /* @__PURE__ */ new Set(),
				digitIsAscii: ast.flags.digitIsAscii,
				spaceIsAscii: ast.flags.spaceIsAscii,
				wordIsAscii: ast.flags.wordIsAscii
			};
			S(ast, FirstPassVisitor, firstPassState);
			const globalFlags = {
				dotAll: ast.flags.dotAll,
				ignoreCase: ast.flags.ignoreCase
			};
			const secondPassState = {
				currentFlags: globalFlags,
				prevFlags: null,
				globalFlags,
				groupOriginByCopy: /* @__PURE__ */ new Map(),
				groupsByName: /* @__PURE__ */ new Map(),
				multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(),
				openRefs: /* @__PURE__ */ new Map(),
				reffedNodesByReferencer: /* @__PURE__ */ new Map(),
				subroutineRefMap: firstPassState.subroutineRefMap
			};
			S(ast, SecondPassVisitor, secondPassState);
			S(ast, ThirdPassVisitor, {
				groupsByName: secondPassState.groupsByName,
				highestOrphanBackref: 0,
				numCapturesToLeft: 0,
				reffedNodesByReferencer: secondPassState.reffedNodesByReferencer
			});
			ast._originMap = secondPassState.groupOriginByCopy;
			ast._strategy = firstPassState.strategy;
			return ast;
		}
		var FirstPassVisitor = {
			AbsenceFunction({ node, parent, replaceWith }) {
				const { body, kind } = node;
				if (kind === "repeater") {
					const innerGroup = A();
					innerGroup.body[0].body.push(K({
						negate: true,
						body
					}), Q("Any"));
					const outerGroup = A();
					outerGroup.body[0].body.push(_("greedy", 0, Infinity, innerGroup));
					replaceWith(setParentDeep(outerGroup, parent), { traverse: true });
				} else throw new Error(`Unsupported absence function "(?~|"`);
			},
			Alternative: {
				enter({ node, parent, key }, { flagDirectivesByAlt }) {
					const flagDirectives = node.body.filter((el) => el.kind === "flags");
					for (let i = key + 1; i < parent.body.length; i++) {
						const forwardSiblingAlt = parent.body[i];
						getOrInsert(flagDirectivesByAlt, forwardSiblingAlt, []).push(...flagDirectives);
					}
				},
				exit({ node }, { flagDirectivesByAlt }) {
					if (flagDirectivesByAlt.get(node)?.length) {
						const flags = getCombinedFlagModsFromFlagNodes(flagDirectivesByAlt.get(node));
						if (flags) {
							const flagGroup = A({ flags });
							flagGroup.body[0].body = node.body;
							node.body = [setParentDeep(flagGroup, node)];
						}
					}
				}
			},
			Assertion({ node, parent, key, container, root, remove, replaceWith }, state) {
				const { kind, negate } = node;
				const { asciiWordBoundaries, avoidSubclass, supportedGNodes, wordIsAscii } = state;
				if (kind === "text_segment_boundary") throw new Error(`Unsupported text segment boundary "\\${negate ? "Y" : "y"}"`);
				else if (kind === "line_end") replaceWith(setParentDeep(K({ body: [b({ body: [F("string_end")] }), b({ body: [m(10)] })] }), parent));
				else if (kind === "line_start") replaceWith(setParentDeep(parseFragment(r`(?<=\A|\n(?!\z))`, { skipLookbehindValidation: true }), parent));
				else if (kind === "search_start") {
					if (supportedGNodes.has(node)) {
						root.flags.sticky = true;
						remove();
					} else {
						const prev = container[key - 1];
						if (prev && isAlwaysNonZeroLength(prev)) replaceWith(setParentDeep(K({ negate: true }), parent));
						else if (avoidSubclass) throw new Error(r`Uses "\G" in a way that requires a subclass`);
						else {
							replaceWith(setParent(F("string_start"), parent));
							state.strategy = "clip_search";
						}
					}
				} else if (kind === "string_end" || kind === "string_start") {} else if (kind === "string_end_newline") replaceWith(setParentDeep(parseFragment(r`(?=\n?\z)`), parent));
				else if (kind === "word_boundary") {
					if (!wordIsAscii && !asciiWordBoundaries) {
						const b = `(?:(?<=${defaultWordChar})(?!${defaultWordChar})|(?<!${defaultWordChar})(?=${defaultWordChar}))`;
						const B = `(?:(?<=${defaultWordChar})(?=${defaultWordChar})|(?<!${defaultWordChar})(?!${defaultWordChar}))`;
						replaceWith(setParentDeep(parseFragment(negate ? B : b), parent));
					}
				} else throw new Error(`Unexpected assertion kind "${kind}"`);
			},
			Backreference({ node }, { jsGroupNameMap }) {
				let { ref } = node;
				if (typeof ref === "string" && !isValidJsGroupName(ref)) {
					ref = getAndStoreJsGroupName(ref, jsGroupNameMap);
					node.ref = ref;
				}
			},
			CapturingGroup({ node }, { jsGroupNameMap, subroutineRefMap }) {
				let { name } = node;
				if (name && !isValidJsGroupName(name)) {
					name = getAndStoreJsGroupName(name, jsGroupNameMap);
					node.name = name;
				}
				subroutineRefMap.set(node.number, node);
				if (name) subroutineRefMap.set(name, node);
			},
			CharacterClassRange({ node, parent, replaceWith }) {
				if (parent.kind === "intersection") replaceWith(setParentDeep(C({ body: [node] }), parent), { traverse: true });
			},
			CharacterSet({ node, parent, replaceWith }, { accuracy, minTargetEs2024, digitIsAscii, spaceIsAscii, wordIsAscii }) {
				const { kind, negate, value } = node;
				if (digitIsAscii && (kind === "digit" || value === "digit")) {
					replaceWith(setParent(E("digit", { negate }), parent));
					return;
				}
				if (spaceIsAscii && (kind === "space" || value === "space")) {
					replaceWith(setParentDeep(setNegate(parseFragment(asciiSpaceChar), negate), parent));
					return;
				}
				if (wordIsAscii && (kind === "word" || value === "word")) {
					replaceWith(setParent(E("word", { negate }), parent));
					return;
				}
				if (kind === "any") replaceWith(setParent(Q("Any"), parent));
				else if (kind === "digit") replaceWith(setParent(Q("Nd", { negate }), parent));
				else if (kind === "dot") {} else if (kind === "text_segment") {
					if (accuracy === "strict") throw new Error(r`Use of "\X" requires non-strict accuracy`);
					const eBase = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?";
					const emoji = r`\p{RI}{2}|${eBase}(?:\u200D${eBase})*`;
					replaceWith(setParentDeep(parseFragment(r`(?>\r\n|${minTargetEs2024 ? r`\p{RGI_Emoji}` : emoji}|\P{M}\p{M}*)`, { skipPropertyNameValidation: true }), parent));
				} else if (kind === "hex") replaceWith(setParent(Q("AHex", { negate }), parent));
				else if (kind === "newline") replaceWith(setParentDeep(parseFragment(negate ? "[^\n]" : "(?>\r\n?|[\n\v\f\u2028\u2029])"), parent));
				else if (kind === "posix") {
					if (!minTargetEs2024 && (value === "graph" || value === "print")) {
						if (accuracy === "strict") throw new Error(`POSIX class "${value}" requires min target ES2024 or non-strict accuracy`);
						let ascii = {
							graph: "!-~",
							print: " -~"
						}[value];
						if (negate) ascii = `\0-${cp(ascii.codePointAt(0) - 1)}${cp(ascii.codePointAt(2) + 1)}-\u{10FFFF}`;
						replaceWith(setParentDeep(parseFragment(`[${ascii}]`), parent));
					} else replaceWith(setParentDeep(setNegate(parseFragment(PosixClassMap.get(value)), negate), parent));
				} else if (kind === "property") {
					if (!JsUnicodePropertyMap.has(w(value))) node.key = "sc";
				} else if (kind === "space") replaceWith(setParent(Q("space", { negate }), parent));
				else if (kind === "word") replaceWith(setParentDeep(setNegate(parseFragment(defaultWordChar), negate), parent));
				else throw new Error(`Unexpected character set kind "${kind}"`);
			},
			Directive({ node, parent, root, remove, replaceWith, removeAllPrevSiblings, removeAllNextSiblings }) {
				const { kind, flags } = node;
				if (kind === "flags") {
					if (!flags.enable && !flags.disable) remove();
					else {
						const flagGroup = A({ flags });
						flagGroup.body[0].body = removeAllNextSiblings();
						replaceWith(setParentDeep(flagGroup, parent), { traverse: true });
					}
				} else if (kind === "keep") {
					const firstAlt = root.body[0];
					const topLevel = root.body.length === 1 && o(firstAlt, { type: "Group" }) && firstAlt.body[0].body.length === 1 ? firstAlt.body[0] : root;
					if (parent.parent !== topLevel || topLevel.body.length > 1) throw new Error(r`Uses "\K" in a way that's unsupported`);
					const lookbehind = K({ behind: true });
					lookbehind.body[0].body = removeAllPrevSiblings();
					replaceWith(setParentDeep(lookbehind, parent));
				} else throw new Error(`Unexpected directive kind "${kind}"`);
			},
			Flags({ node, parent }) {
				if (node.posixIsAscii) throw new Error("Unsupported flag \"P\"");
				if (node.textSegmentMode === "word") throw new Error("Unsupported flag \"y{w}\"");
				[
					"digitIsAscii",
					"extended",
					"posixIsAscii",
					"spaceIsAscii",
					"wordIsAscii",
					"textSegmentMode"
				].forEach((f) => delete node[f]);
				Object.assign(node, {
					global: false,
					hasIndices: false,
					multiline: false,
					sticky: node.sticky ?? false
				});
				parent.options = {
					disable: {
						x: true,
						n: true
					},
					force: { v: true }
				};
			},
			Group({ node }) {
				if (!node.flags) return;
				const { enable, disable } = node.flags;
				enable?.extended && delete enable.extended;
				disable?.extended && delete disable.extended;
				enable?.dotAll && disable?.dotAll && delete enable.dotAll;
				enable?.ignoreCase && disable?.ignoreCase && delete enable.ignoreCase;
				enable && !Object.keys(enable).length && delete node.flags.enable;
				disable && !Object.keys(disable).length && delete node.flags.disable;
				!node.flags.enable && !node.flags.disable && delete node.flags;
			},
			LookaroundAssertion({ node }, state) {
				const { kind } = node;
				if (kind === "lookbehind") state.passedLookbehind = true;
			},
			NamedCallout({ node, parent, replaceWith }) {
				const { kind } = node;
				if (kind === "fail") replaceWith(setParentDeep(K({ negate: true }), parent));
				else throw new Error(`Unsupported named callout "(*${kind.toUpperCase()}"`);
			},
			Quantifier({ node }) {
				if (node.body.type === "Quantifier") {
					const group = A();
					group.body[0].body.push(node.body);
					node.body = setParentDeep(group, node);
				}
			},
			Regex: {
				enter({ node }, { supportedGNodes }) {
					const leadingGs = [];
					let hasAltWithLeadG = false;
					let hasAltWithoutLeadG = false;
					for (const alt of node.body) if (alt.body.length === 1 && alt.body[0].kind === "search_start") alt.body.pop();
					else {
						const leadingG = getLeadingG(alt.body);
						if (leadingG) {
							hasAltWithLeadG = true;
							Array.isArray(leadingG) ? leadingGs.push(...leadingG) : leadingGs.push(leadingG);
						} else hasAltWithoutLeadG = true;
					}
					if (hasAltWithLeadG && !hasAltWithoutLeadG) leadingGs.forEach((g) => supportedGNodes.add(g));
				},
				exit(_, { accuracy, passedLookbehind, strategy }) {
					if (accuracy === "strict" && passedLookbehind && strategy) throw new Error(r`Uses "\G" in a way that requires non-strict accuracy`);
				}
			},
			Subroutine({ node }, { jsGroupNameMap }) {
				let { ref } = node;
				if (typeof ref === "string" && !isValidJsGroupName(ref)) {
					ref = getAndStoreJsGroupName(ref, jsGroupNameMap);
					node.ref = ref;
				}
			}
		};
		var SecondPassVisitor = {
			Backreference({ node }, { multiplexCapturesToLeftByRef, reffedNodesByReferencer }) {
				const { orphan, ref } = node;
				if (!orphan) reffedNodesByReferencer.set(node, [...multiplexCapturesToLeftByRef.get(ref).map(({ node: node2 }) => node2)]);
			},
			CapturingGroup: {
				enter({ node, parent, replaceWith, skip }, { groupOriginByCopy, groupsByName, multiplexCapturesToLeftByRef, openRefs, reffedNodesByReferencer }) {
					const origin = groupOriginByCopy.get(node);
					if (origin && openRefs.has(node.number)) {
						const recursion2 = setParent(createRecursion(node.number), parent);
						reffedNodesByReferencer.set(recursion2, openRefs.get(node.number));
						replaceWith(recursion2);
						return;
					}
					openRefs.set(node.number, node);
					multiplexCapturesToLeftByRef.set(node.number, []);
					if (node.name) getOrInsert(multiplexCapturesToLeftByRef, node.name, []);
					const multiplexNodes = multiplexCapturesToLeftByRef.get(node.name ?? node.number);
					for (let i = 0; i < multiplexNodes.length; i++) {
						const multiplex = multiplexNodes[i];
						if (origin === multiplex.node || origin && origin === multiplex.origin || node === multiplex.origin) {
							multiplexNodes.splice(i, 1);
							break;
						}
					}
					multiplexCapturesToLeftByRef.get(node.number).push({
						node,
						origin
					});
					if (node.name) multiplexCapturesToLeftByRef.get(node.name).push({
						node,
						origin
					});
					if (node.name) {
						const groupsWithSameName = getOrInsert(groupsByName, node.name, /* @__PURE__ */ new Map());
						let hasDuplicateNameToRemove = false;
						if (origin) hasDuplicateNameToRemove = true;
						else for (const groupInfo of groupsWithSameName.values()) if (!groupInfo.hasDuplicateNameToRemove) {
							hasDuplicateNameToRemove = true;
							break;
						}
						groupsByName.get(node.name).set(node, {
							node,
							hasDuplicateNameToRemove
						});
					}
				},
				exit({ node }, { openRefs }) {
					if (openRefs.get(node.number) === node) openRefs.delete(node.number);
				}
			},
			Group: {
				enter({ node }, state) {
					state.prevFlags = state.currentFlags;
					if (node.flags) state.currentFlags = getNewCurrentFlags(state.currentFlags, node.flags);
				},
				exit(_, state) {
					state.currentFlags = state.prevFlags;
				}
			},
			Subroutine({ node, parent, replaceWith }, state) {
				const { isRecursive, ref } = node;
				if (isRecursive) {
					let reffed = parent;
					while (reffed = reffed.parent) if (reffed.type === "CapturingGroup" && (reffed.name === ref || reffed.number === ref)) break;
					state.reffedNodesByReferencer.set(node, reffed);
					return;
				}
				const reffedGroupNode = state.subroutineRefMap.get(ref);
				const isGlobalRecursion = ref === 0;
				const expandedSubroutine = isGlobalRecursion ? createRecursion(0) : cloneCapturingGroup(reffedGroupNode, state.groupOriginByCopy, null);
				let replacement = expandedSubroutine;
				if (!isGlobalRecursion) {
					const reffedGroupFlagMods = getCombinedFlagModsFromFlagNodes(getAllParents(reffedGroupNode, (p) => p.type === "Group" && !!p.flags));
					const reffedGroupFlags = reffedGroupFlagMods ? getNewCurrentFlags(state.globalFlags, reffedGroupFlagMods) : state.globalFlags;
					if (!areFlagsEqual(reffedGroupFlags, state.currentFlags)) {
						replacement = A({ flags: getFlagModsFromFlags(reffedGroupFlags) });
						replacement.body[0].body.push(expandedSubroutine);
					}
				}
				replaceWith(setParentDeep(replacement, parent), { traverse: !isGlobalRecursion });
			}
		};
		var ThirdPassVisitor = {
			Backreference({ node, parent, replaceWith }, state) {
				if (node.orphan) {
					state.highestOrphanBackref = Math.max(state.highestOrphanBackref, node.ref);
					return;
				}
				const participants = state.reffedNodesByReferencer.get(node).filter((reffed) => canParticipateWithNode(reffed, node));
				if (!participants.length) replaceWith(setParentDeep(K({ negate: true }), parent));
				else if (participants.length > 1) replaceWith(setParentDeep(A({
					atomic: true,
					body: participants.reverse().map((reffed) => b({ body: [k(reffed.number)] }))
				}), parent));
				else node.ref = participants[0].number;
			},
			CapturingGroup({ node }, state) {
				node.number = ++state.numCapturesToLeft;
				if (node.name) {
					if (state.groupsByName.get(node.name).get(node).hasDuplicateNameToRemove) delete node.name;
				}
			},
			Regex: { exit({ node }, state) {
				const numCapsNeeded = Math.max(state.highestOrphanBackref - state.numCapturesToLeft, 0);
				for (let i = 0; i < numCapsNeeded; i++) {
					const emptyCapture = P();
					node.body.at(-1).body.push(emptyCapture);
				}
			} },
			Subroutine({ node }, state) {
				if (!node.isRecursive || node.ref === 0) return;
				node.ref = state.reffedNodesByReferencer.get(node).number;
			}
		};
		function addParentProperties(root) {
			S(root, { "*"({ node, parent }) {
				node.parent = parent;
			} });
		}
		function areFlagsEqual(a, b) {
			return a.dotAll === b.dotAll && a.ignoreCase === b.ignoreCase;
		}
		function canParticipateWithNode(capture, node) {
			let rightmostPoint = node;
			do {
				if (rightmostPoint.type === "Regex") return false;
				if (rightmostPoint.type === "Alternative") continue;
				if (rightmostPoint === capture) return false;
				const kidsOfParent = getKids(rightmostPoint.parent);
				for (const kid of kidsOfParent) {
					if (kid === rightmostPoint) break;
					if (kid === capture || isAncestorOf(kid, capture)) return true;
				}
			} while (rightmostPoint = rightmostPoint.parent);
			throw new Error("Unexpected path");
		}
		function cloneCapturingGroup(obj, originMap, up, up2) {
			const store = Array.isArray(obj) ? [] : {};
			for (const [key, value] of Object.entries(obj)) if (key === "parent") store.parent = Array.isArray(up) ? up2 : up;
			else if (value && typeof value === "object") store[key] = cloneCapturingGroup(value, originMap, store, up);
			else {
				if (key === "type" && value === "CapturingGroup") originMap.set(store, originMap.get(obj) ?? obj);
				store[key] = value;
			}
			return store;
		}
		function createRecursion(ref) {
			const node = O(ref);
			node.isRecursive = true;
			return node;
		}
		function getAllParents(node, filterFn) {
			const results = [];
			while (node = node.parent) if (!filterFn || filterFn(node)) results.push(node);
			return results;
		}
		function getAndStoreJsGroupName(name, map) {
			if (map.has(name)) return map.get(name);
			const jsName = `$${map.size}_${name.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/gu, "_")}`;
			map.set(name, jsName);
			return jsName;
		}
		function getCombinedFlagModsFromFlagNodes(flagNodes) {
			const flagProps = ["dotAll", "ignoreCase"];
			const combinedFlags = {
				enable: {},
				disable: {}
			};
			flagNodes.forEach(({ flags }) => {
				flagProps.forEach((prop) => {
					if (flags.enable?.[prop]) {
						delete combinedFlags.disable[prop];
						combinedFlags.enable[prop] = true;
					}
					if (flags.disable?.[prop]) combinedFlags.disable[prop] = true;
				});
			});
			if (!Object.keys(combinedFlags.enable).length) delete combinedFlags.enable;
			if (!Object.keys(combinedFlags.disable).length) delete combinedFlags.disable;
			if (combinedFlags.enable || combinedFlags.disable) return combinedFlags;
			return null;
		}
		function getFlagModsFromFlags({ dotAll, ignoreCase }) {
			const mods = {};
			if (dotAll || ignoreCase) {
				mods.enable = {};
				dotAll && (mods.enable.dotAll = true);
				ignoreCase && (mods.enable.ignoreCase = true);
			}
			if (!dotAll || !ignoreCase) {
				mods.disable = {};
				!dotAll && (mods.disable.dotAll = true);
				!ignoreCase && (mods.disable.ignoreCase = true);
			}
			return mods;
		}
		function getKids(node) {
			if (!node) throw new Error("Node expected");
			const { body } = node;
			return Array.isArray(body) ? body : body ? [body] : null;
		}
		function getLeadingG(els) {
			const firstToConsider = els.find((el) => el.kind === "search_start" || isLoneGLookaround(el, { negate: false }) || !isAlwaysZeroLength(el));
			if (!firstToConsider) return null;
			if (firstToConsider.kind === "search_start") return firstToConsider;
			if (firstToConsider.type === "LookaroundAssertion") return firstToConsider.body[0].body[0];
			if (firstToConsider.type === "CapturingGroup" || firstToConsider.type === "Group") {
				const gNodesForGroup = [];
				for (const alt of firstToConsider.body) {
					const leadingG = getLeadingG(alt.body);
					if (!leadingG) return null;
					Array.isArray(leadingG) ? gNodesForGroup.push(...leadingG) : gNodesForGroup.push(leadingG);
				}
				return gNodesForGroup;
			}
			return null;
		}
		function isAncestorOf(node, descendant) {
			const kids = getKids(node) ?? [];
			for (const kid of kids) if (kid === descendant || isAncestorOf(kid, descendant)) return true;
			return false;
		}
		function isAlwaysZeroLength({ type }) {
			return type === "Assertion" || type === "Directive" || type === "LookaroundAssertion";
		}
		function isAlwaysNonZeroLength(node) {
			const types = [
				"Character",
				"CharacterClass",
				"CharacterSet"
			];
			return types.includes(node.type) || node.type === "Quantifier" && node.min && types.includes(node.body.type);
		}
		function isLoneGLookaround(node, options) {
			const opts = {
				negate: null,
				...options
			};
			return node.type === "LookaroundAssertion" && (opts.negate === null || node.negate === opts.negate) && node.body.length === 1 && o(node.body[0], {
				type: "Assertion",
				kind: "search_start"
			});
		}
		function isValidJsGroupName(name) {
			return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(name);
		}
		function parseFragment(pattern, options) {
			const alts = J(pattern, {
				...options,
				unicodePropertyMap: JsUnicodePropertyMap
			}).body;
			if (alts.length > 1 || alts[0].body.length > 1) return A({ body: alts });
			return alts[0].body[0];
		}
		function setNegate(node, negate) {
			node.negate = negate;
			return node;
		}
		function setParent(node, parent) {
			node.parent = parent;
			return node;
		}
		function setParentDeep(node, parent) {
			addParentProperties(node);
			node.parent = parent;
			return node;
		}
		function generate(ast, options) {
			const opts = getOptions(options);
			const minTargetEs2024 = isMinTarget(opts.target, "ES2024");
			const minTargetEs2025 = isMinTarget(opts.target, "ES2025");
			const recursionLimit = opts.rules.recursionLimit;
			if (!Number.isInteger(recursionLimit) || recursionLimit < 2 || recursionLimit > 20) throw new Error("Invalid recursionLimit; use 2-20");
			let hasCaseInsensitiveNode = null;
			let hasCaseSensitiveNode = null;
			if (!minTargetEs2025) {
				const iStack = [ast.flags.ignoreCase];
				S(ast, FlagModifierVisitor, {
					getCurrentModI: () => iStack.at(-1),
					popModI() {
						iStack.pop();
					},
					pushModI(isIOn) {
						iStack.push(isIOn);
					},
					setHasCasedChar() {
						if (iStack.at(-1)) hasCaseInsensitiveNode = true;
						else hasCaseSensitiveNode = true;
					}
				});
			}
			const appliedGlobalFlags = {
				dotAll: ast.flags.dotAll,
				ignoreCase: !!((ast.flags.ignoreCase || hasCaseInsensitiveNode) && !hasCaseSensitiveNode)
			};
			let lastNode = ast;
			const state = {
				accuracy: opts.accuracy,
				appliedGlobalFlags,
				captureMap: /* @__PURE__ */ new Map(),
				currentFlags: {
					dotAll: ast.flags.dotAll,
					ignoreCase: ast.flags.ignoreCase
				},
				inCharClass: false,
				lastNode,
				originMap: ast._originMap,
				recursionLimit,
				useAppliedIgnoreCase: !!(!minTargetEs2025 && hasCaseInsensitiveNode && hasCaseSensitiveNode),
				useFlagMods: minTargetEs2025,
				useFlagV: minTargetEs2024,
				verbose: opts.verbose
			};
			function gen(node) {
				state.lastNode = lastNode;
				lastNode = node;
				return throwIfNullish(generator[node.type], `Unexpected node type "${node.type}"`)(node, state, gen);
			}
			const result = {
				pattern: ast.body.map(gen).join("|"),
				flags: gen(ast.flags),
				options: { ...ast.options }
			};
			if (!minTargetEs2024) {
				delete result.options.force.v;
				result.options.disable.v = true;
				result.options.unicodeSetsPlugin = null;
			}
			result._captureTransfers = /* @__PURE__ */ new Map();
			result._hiddenCaptures = [];
			state.captureMap.forEach((value, key) => {
				if (value.hidden) result._hiddenCaptures.push(key);
				if (value.transferTo) getOrInsert(result._captureTransfers, value.transferTo, []).push(key);
			});
			return result;
		}
		var FlagModifierVisitor = {
			"*": {
				enter({ node }, state) {
					if (isAnyGroup(node)) {
						const currentModI = state.getCurrentModI();
						state.pushModI(node.flags ? getNewCurrentFlags({ ignoreCase: currentModI }, node.flags).ignoreCase : currentModI);
					}
				},
				exit({ node }, state) {
					if (isAnyGroup(node)) state.popModI();
				}
			},
			Backreference(_, state) {
				state.setHasCasedChar();
			},
			Character({ node }, state) {
				if (charHasCase(cp(node.value))) state.setHasCasedChar();
			},
			CharacterClassRange({ node, skip }, state) {
				skip();
				if (getCasesOutsideCharClassRange(node, { firstOnly: true }).length) state.setHasCasedChar();
			},
			CharacterSet({ node }, state) {
				if (node.kind === "property" && UnicodePropertiesWithSpecificCase.has(node.value)) state.setHasCasedChar();
			}
		};
		var generator = {
			/**
			@param {AlternativeNode} node
			*/
			Alternative({ body }, _, gen) {
				return body.map(gen).join("");
			},
			/**
			@param {AssertionNode} node
			*/
			Assertion({ kind, negate }) {
				if (kind === "string_end") return "$";
				if (kind === "string_start") return "^";
				if (kind === "word_boundary") return negate ? r`\B` : r`\b`;
				throw new Error(`Unexpected assertion kind "${kind}"`);
			},
			/**
			@param {BackreferenceNode} node
			*/
			Backreference({ ref }, state) {
				if (typeof ref !== "number") throw new Error("Unexpected named backref in transformed AST");
				if (!state.useFlagMods && state.accuracy === "strict" && state.currentFlags.ignoreCase && !state.captureMap.get(ref).ignoreCase) throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
				return "\\" + ref;
			},
			/**
			@param {CapturingGroupNode} node
			*/
			CapturingGroup(node, state, gen) {
				const { body, name, number } = node;
				const data = { ignoreCase: state.currentFlags.ignoreCase };
				const origin = state.originMap.get(node);
				if (origin) {
					data.hidden = true;
					if (number > origin.number) data.transferTo = origin.number;
				}
				state.captureMap.set(number, data);
				return `(${name ? `?<${name}>` : ""}${body.map(gen).join("|")})`;
			},
			/**
			@param {CharacterNode} node
			*/
			Character({ value }, state) {
				const char = cp(value);
				const escaped = getCharEscape(value, {
					escDigit: state.lastNode.type === "Backreference",
					inCharClass: state.inCharClass,
					useFlagV: state.useFlagV
				});
				if (escaped !== char) return escaped;
				if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase && charHasCase(char)) {
					const cases = getIgnoreCaseMatchChars(char);
					return state.inCharClass ? cases.join("") : cases.length > 1 ? `[${cases.join("")}]` : cases[0];
				}
				return char;
			},
			/**
			@param {CharacterClassNode} node
			*/
			CharacterClass(node, state, gen) {
				const { kind, negate, parent } = node;
				let { body } = node;
				if (kind === "intersection" && !state.useFlagV) throw new Error("Use of character class intersection requires min target ES2024");
				if (envFlags.bugFlagVLiteralHyphenIsRange && state.useFlagV && body.some(isLiteralHyphen)) body = [m(45), ...body.filter((kid) => !isLiteralHyphen(kid))];
				const genClass = () => `[${negate ? "^" : ""}${body.map(gen).join(kind === "intersection" ? "&&" : "")}]`;
				if (!state.inCharClass) {
					if ((!state.useFlagV || envFlags.bugNestedClassIgnoresNegation) && !negate) {
						const negatedChildClasses = body.filter((kid) => kid.type === "CharacterClass" && kid.kind === "union" && kid.negate);
						if (negatedChildClasses.length) {
							const group = A();
							const groupFirstAlt = group.body[0];
							group.parent = parent;
							groupFirstAlt.parent = group;
							body = body.filter((kid) => !negatedChildClasses.includes(kid));
							node.body = body;
							if (body.length) {
								node.parent = groupFirstAlt;
								groupFirstAlt.body.push(node);
							} else group.body.pop();
							negatedChildClasses.forEach((cc) => {
								const newAlt = b({ body: [cc] });
								cc.parent = newAlt;
								newAlt.parent = group;
								group.body.push(newAlt);
							});
							return gen(group);
						}
					}
					state.inCharClass = true;
					const result = genClass();
					state.inCharClass = false;
					return result;
				}
				const firstEl = body[0];
				if (kind === "union" && !negate && firstEl && ((!state.useFlagV || !state.verbose) && parent.kind === "union" && !(envFlags.bugFlagVLiteralHyphenIsRange && state.useFlagV) || !state.verbose && parent.kind === "intersection" && body.length === 1 && firstEl.type !== "CharacterClassRange")) return body.map(gen).join("");
				if (!state.useFlagV && parent.type === "CharacterClass") throw new Error("Uses nested character class in a way that requires min target ES2024");
				return genClass();
			},
			/**
			@param {CharacterClassRangeNode} node
			*/
			CharacterClassRange(node, state) {
				const min = node.min.value;
				const max = node.max.value;
				const escOpts = {
					escDigit: false,
					inCharClass: true,
					useFlagV: state.useFlagV
				};
				const minStr = getCharEscape(min, escOpts);
				const maxStr = getCharEscape(max, escOpts);
				const extraChars = /* @__PURE__ */ new Set();
				if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase) getCodePointRangesFromChars(getCasesOutsideCharClassRange(node)).forEach((value) => {
					extraChars.add(Array.isArray(value) ? `${getCharEscape(value[0], escOpts)}-${getCharEscape(value[1], escOpts)}` : getCharEscape(value, escOpts));
				});
				return `${minStr}-${maxStr}${[...extraChars].join("")}`;
			},
			/**
			@param {CharacterSetNode} node
			*/
			CharacterSet({ kind, negate, value, key }, state) {
				if (kind === "dot") return state.currentFlags.dotAll ? state.appliedGlobalFlags.dotAll || state.useFlagMods ? "." : "[^]" : r`[^\n]`;
				if (kind === "digit") return negate ? r`\D` : r`\d`;
				if (kind === "property") {
					if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase && UnicodePropertiesWithSpecificCase.has(value)) throw new Error(`Unicode property "${value}" can't be case-insensitive when other chars have specific case`);
					return `${negate ? r`\P` : r`\p`}{${key ? `${key}=` : ""}${value}}`;
				}
				if (kind === "word") return negate ? r`\W` : r`\w`;
				throw new Error(`Unexpected character set kind "${kind}"`);
			},
			/**
			@param {FlagsNode} node
			*/
			Flags(node, state) {
				return (state.appliedGlobalFlags.ignoreCase ? "i" : "") + (node.dotAll ? "s" : "") + (node.sticky ? "y" : "");
			},
			/**
			@param {GroupNode} node
			*/
			Group({ atomic: atomic2, body, flags, parent }, state, gen) {
				const currentFlags = state.currentFlags;
				if (flags) state.currentFlags = getNewCurrentFlags(currentFlags, flags);
				const contents = body.map(gen).join("|");
				const result = !state.verbose && body.length === 1 && parent.type !== "Quantifier" && !atomic2 && (!state.useFlagMods || !flags) ? contents : `(?${getGroupPrefix(atomic2, flags, state.useFlagMods)}${contents})`;
				state.currentFlags = currentFlags;
				return result;
			},
			/**
			@param {LookaroundAssertionNode} node
			*/
			LookaroundAssertion({ body, kind, negate }, _, gen) {
				return `(?${`${kind === "lookahead" ? "" : "<"}${negate ? "!" : "="}`}${body.map(gen).join("|")})`;
			},
			/**
			@param {QuantifierNode} node
			*/
			Quantifier(node, _, gen) {
				return gen(node.body) + getQuantifierStr(node);
			},
			/**
			@param {SubroutineNode & {isRecursive: true}} node
			*/
			Subroutine({ isRecursive, ref }, state) {
				if (!isRecursive) throw new Error("Unexpected non-recursive subroutine in transformed AST");
				const limit = state.recursionLimit;
				return ref === 0 ? `(?R=${limit})` : r`\g<${ref}&R=${limit}>`;
			}
		};
		var BaseEscapeChars = /* @__PURE__ */ new Set([
			"$",
			"(",
			")",
			"*",
			"+",
			".",
			"?",
			"[",
			"\\",
			"]",
			"^",
			"{",
			"|",
			"}"
		]);
		var CharClassEscapeChars = /* @__PURE__ */ new Set([
			"-",
			"\\",
			"]",
			"^",
			"["
		]);
		var CharClassEscapeCharsFlagV = /* @__PURE__ */ new Set([
			"(",
			")",
			"-",
			"/",
			"[",
			"\\",
			"]",
			"^",
			"{",
			"|",
			"}",
			"!",
			"#",
			"$",
			"%",
			"&",
			"*",
			"+",
			",",
			".",
			":",
			";",
			"<",
			"=",
			">",
			"?",
			"@",
			"`",
			"~"
		]);
		var CharCodeEscapeMap = /* @__PURE__ */ new Map([
			[9, r`\t`],
			[10, r`\n`],
			[11, r`\v`],
			[12, r`\f`],
			[13, r`\r`],
			[8232, r`\u2028`],
			[8233, r`\u2029`],
			[65279, r`\uFEFF`]
		]);
		var casedRe = /^\p{Cased}$/u;
		function charHasCase(char) {
			return casedRe.test(char);
		}
		function getCasesOutsideCharClassRange(node, options) {
			const firstOnly = !!options?.firstOnly;
			const min = node.min.value;
			const max = node.max.value;
			const found = [];
			if (min < 65 && (max === 65535 || max >= 131071) || min === 65536 && max >= 131071) return found;
			for (let i = min; i <= max; i++) {
				const char = cp(i);
				if (!charHasCase(char)) continue;
				const charsOutsideRange = getIgnoreCaseMatchChars(char).filter((caseOfChar) => {
					const num = caseOfChar.codePointAt(0);
					return num < min || num > max;
				});
				if (charsOutsideRange.length) {
					found.push(...charsOutsideRange);
					if (firstOnly) break;
				}
			}
			return found;
		}
		function getCharEscape(codePoint, { escDigit, inCharClass, useFlagV }) {
			if (CharCodeEscapeMap.has(codePoint)) return CharCodeEscapeMap.get(codePoint);
			if (codePoint < 32 || codePoint > 126 && codePoint < 160 || codePoint > 262143 || escDigit && isDigitCharCode(codePoint)) return codePoint > 255 ? `\\u{${codePoint.toString(16).toUpperCase()}}` : `\\x${codePoint.toString(16).toUpperCase().padStart(2, "0")}`;
			const escapeChars = inCharClass ? useFlagV ? CharClassEscapeCharsFlagV : CharClassEscapeChars : BaseEscapeChars;
			const char = cp(codePoint);
			return (escapeChars.has(char) ? "\\" : "") + char;
		}
		function getCodePointRangesFromChars(chars) {
			const codePoints = chars.map((char) => char.codePointAt(0)).sort((a, b) => a - b);
			const values = [];
			let start = null;
			for (let i = 0; i < codePoints.length; i++) if (codePoints[i + 1] === codePoints[i] + 1) start ??= codePoints[i];
			else if (start === null) values.push(codePoints[i]);
			else {
				values.push([start, codePoints[i]]);
				start = null;
			}
			return values;
		}
		function getGroupPrefix(atomic2, flagMods, useFlagMods) {
			if (atomic2) return ">";
			let mods = "";
			if (flagMods && useFlagMods) {
				const { enable, disable } = flagMods;
				mods = (enable?.ignoreCase ? "i" : "") + (enable?.dotAll ? "s" : "") + (disable ? "-" : "") + (disable?.ignoreCase ? "i" : "") + (disable?.dotAll ? "s" : "");
			}
			return `${mods}:`;
		}
		function getQuantifierStr({ kind, max, min }) {
			let base;
			if (!min && max === 1) base = "?";
			else if (!min && max === Infinity) base = "*";
			else if (min === 1 && max === Infinity) base = "+";
			else if (min === max) base = `{${min}}`;
			else base = `{${min},${max === Infinity ? "" : max}}`;
			return base + {
				greedy: "",
				lazy: "?",
				possessive: "+"
			}[kind];
		}
		function isAnyGroup({ type }) {
			return type === "CapturingGroup" || type === "Group" || type === "LookaroundAssertion";
		}
		function isDigitCharCode(value) {
			return value > 47 && value < 58;
		}
		function isLiteralHyphen({ type, value }) {
			return type === "Character" && value === 45;
		}
		var EmulatedRegExp = class _EmulatedRegExp extends RegExp {
			/**
			@type {Map<number, {
			hidden?: true;
			transferTo?: number;
			}>}
			*/
			#captureMap = /* @__PURE__ */ new Map();
			/**
			@type {RegExp | EmulatedRegExp | null}
			*/
			#compiled = null;
			/**
			@type {string}
			*/
			#pattern;
			/**
			@type {Map<number, string>?}
			*/
			#nameMap = null;
			/**
			@type {string?}
			*/
			#strategy = null;
			/**
			Can be used to serialize the instance.
			@type {EmulatedRegExpOptions}
			*/
			rawOptions = {};
			get source() {
				return this.#pattern || "(?:)";
			}
			/**
			@overload
			@param {string} pattern
			@param {string} [flags]
			@param {EmulatedRegExpOptions} [options]
			*/
			/**
			@overload
			@param {EmulatedRegExp} pattern
			@param {string} [flags]
			*/
			constructor(pattern, flags, options) {
				const lazyCompile = !!options?.lazyCompile;
				if (pattern instanceof RegExp) {
					if (options) throw new Error("Cannot provide options when copying a regexp");
					const re = pattern;
					super(re, flags);
					this.#pattern = re.source;
					if (re instanceof _EmulatedRegExp) {
						this.#captureMap = re.#captureMap;
						this.#nameMap = re.#nameMap;
						this.#strategy = re.#strategy;
						this.rawOptions = re.rawOptions;
					}
				} else {
					const opts = {
						hiddenCaptures: [],
						strategy: null,
						transfers: [],
						...options
					};
					super(lazyCompile ? "" : pattern, flags);
					this.#pattern = pattern;
					this.#captureMap = createCaptureMap(opts.hiddenCaptures, opts.transfers);
					this.#strategy = opts.strategy;
					this.rawOptions = options ?? {};
				}
				if (!lazyCompile) this.#compiled = this;
			}
			/**
			Called internally by all String/RegExp methods that use regexes.
			@override
			@param {string} str
			@returns {RegExpExecArray?}
			*/
			exec(str) {
				if (!this.#compiled) {
					const { lazyCompile, ...rest } = this.rawOptions;
					this.#compiled = new _EmulatedRegExp(this.#pattern, this.flags, rest);
				}
				const useLastIndex = this.global || this.sticky;
				const pos = this.lastIndex;
				if (this.#strategy === "clip_search" && useLastIndex && pos) {
					this.lastIndex = 0;
					const match = this.#execCore(str.slice(pos));
					if (match) {
						adjustMatchDetailsForOffset(match, pos, str, this.hasIndices);
						this.lastIndex += pos;
					}
					return match;
				}
				return this.#execCore(str);
			}
			/**
			Adds support for hidden and transfer captures.
			@param {string} str
			@returns
			*/
			#execCore(str) {
				this.#compiled.lastIndex = this.lastIndex;
				const match = super.exec.call(this.#compiled, str);
				this.lastIndex = this.#compiled.lastIndex;
				if (!match || !this.#captureMap.size) return match;
				const matchCopy = [...match];
				match.length = 1;
				let indicesCopy;
				if (this.hasIndices) {
					indicesCopy = [...match.indices];
					match.indices.length = 1;
				}
				const mappedNums = [0];
				for (let i = 1; i < matchCopy.length; i++) {
					const { hidden, transferTo } = this.#captureMap.get(i) ?? {};
					if (hidden) mappedNums.push(null);
					else {
						mappedNums.push(match.length);
						match.push(matchCopy[i]);
						if (this.hasIndices) match.indices.push(indicesCopy[i]);
					}
					if (transferTo && matchCopy[i] !== void 0) {
						const to = mappedNums[transferTo];
						if (!to) throw new Error(`Invalid capture transfer to "${to}"`);
						match[to] = matchCopy[i];
						if (this.hasIndices) match.indices[to] = indicesCopy[i];
						if (match.groups) {
							if (!this.#nameMap) this.#nameMap = createNameMap(this.source);
							const name = this.#nameMap.get(transferTo);
							if (name) {
								match.groups[name] = matchCopy[i];
								if (this.hasIndices) match.indices.groups[name] = indicesCopy[i];
							}
						}
					}
				}
				return match;
			}
		};
		function adjustMatchDetailsForOffset(match, offset, input, hasIndices) {
			match.index += offset;
			match.input = input;
			if (hasIndices) {
				const indices = match.indices;
				for (let i = 0; i < indices.length; i++) {
					const arr = indices[i];
					if (arr) indices[i] = [arr[0] + offset, arr[1] + offset];
				}
				const groupIndices = indices.groups;
				if (groupIndices) Object.keys(groupIndices).forEach((key) => {
					const arr = groupIndices[key];
					if (arr) groupIndices[key] = [arr[0] + offset, arr[1] + offset];
				});
			}
		}
		function createCaptureMap(hiddenCaptures, transfers) {
			const captureMap = /* @__PURE__ */ new Map();
			for (const num of hiddenCaptures) captureMap.set(num, { hidden: true });
			for (const [to, from] of transfers) for (const num of from) getOrInsert(captureMap, num, {}).transferTo = to;
			return captureMap;
		}
		function createNameMap(pattern) {
			const re = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu;
			const map = /* @__PURE__ */ new Map();
			let numCharClassesOpen = 0;
			let numCaptures = 0;
			let match;
			while (match = re.exec(pattern)) {
				const { 0: m, groups: { capture, name } } = match;
				if (m === "[") numCharClassesOpen++;
				else if (!numCharClassesOpen) {
					if (capture) {
						numCaptures++;
						if (name) map.set(numCaptures, name);
					}
				} else if (m === "]") numCharClassesOpen--;
			}
			return map;
		}
		function toRegExp(pattern, options) {
			const d = toRegExpDetails(pattern, options);
			if (d.options) return new EmulatedRegExp(d.pattern, d.flags, d.options);
			return new RegExp(d.pattern, d.flags);
		}
		function toRegExpDetails(pattern, options) {
			const opts = getOptions(options);
			const regexPlusAst = transform(J(pattern, {
				flags: opts.flags,
				normalizeUnknownPropertyNames: true,
				rules: {
					captureGroup: opts.rules.captureGroup,
					singleline: opts.rules.singleline
				},
				skipBackrefValidation: opts.rules.allowOrphanBackrefs,
				unicodePropertyMap: JsUnicodePropertyMap
			}), {
				accuracy: opts.accuracy,
				asciiWordBoundaries: opts.rules.asciiWordBoundaries,
				avoidSubclass: opts.avoidSubclass,
				bestEffortTarget: opts.target
			});
			const generated = generate(regexPlusAst, opts);
			const recursionResult = recursion(generated.pattern, {
				captureTransfers: generated._captureTransfers,
				hiddenCaptures: generated._hiddenCaptures,
				mode: "external"
			});
			const atomicResult = atomic(possessive(recursionResult.pattern).pattern, {
				captureTransfers: recursionResult.captureTransfers,
				hiddenCaptures: recursionResult.hiddenCaptures
			});
			const details = {
				pattern: atomicResult.pattern,
				flags: `${opts.hasIndices ? "d" : ""}${opts.global ? "g" : ""}${generated.flags}${generated.options.disable.v ? "u" : "v"}`
			};
			if (opts.avoidSubclass) {
				if (opts.lazyCompileLength !== Infinity) throw new Error("Lazy compilation requires subclass");
			} else {
				const hiddenCaptures = atomicResult.hiddenCaptures.sort((a, b) => a - b);
				const transfers = Array.from(atomicResult.captureTransfers);
				const strategy = regexPlusAst._strategy;
				const lazyCompile = details.pattern.length >= opts.lazyCompileLength;
				if (hiddenCaptures.length || transfers.length || strategy || lazyCompile) details.options = {
					...hiddenCaptures.length && { hiddenCaptures },
					...transfers.length && { transfers },
					...strategy && { strategy },
					...lazyCompile && { lazyCompile }
				};
			}
			return details;
		}
		//#endregion
		//#region node_modules/.pnpm/@shikijs+engine-javascript@4.4.3/node_modules/@shikijs/engine-javascript/dist/engine-compile.mjs
		/**
		* The default regex constructor for the JavaScript RegExp engine.
		*/
		function defaultJavaScriptRegexConstructor(pattern, options) {
			return toRegExp(pattern, {
				global: true,
				hasIndices: true,
				lazyCompileLength: 3e3,
				rules: {
					allowOrphanBackrefs: true,
					asciiWordBoundaries: true,
					captureGroup: true,
					recursionLimit: 5,
					singleline: true
				},
				...options
			});
		}
		/**
		* Use the modern JavaScript RegExp engine to implement the OnigScanner.
		*
		* As Oniguruma supports some features that can't be emulated using native JavaScript regexes, some
		* patterns are not supported. Errors will be thrown when parsing TextMate grammars with
		* unsupported patterns, and when the grammar includes patterns that use invalid Oniguruma syntax.
		* Set `forgiving` to `true` to ignore these errors and skip any unsupported or invalid patterns.
		*/
		function createJavaScriptRegexEngine(options = {}) {
			const _options = {
				target: "auto",
				cache: /* @__PURE__ */ new Map(),
				...options
			};
			_options.regexConstructor ||= (pattern) => defaultJavaScriptRegexConstructor(pattern, { target: _options.target });
			return {
				createScanner(patterns) {
					return new JavaScriptScanner(patterns, _options);
				},
				createString(s) {
					return { content: s };
				}
			};
		}
		//#endregion
		//#region src/client/highlight.ts
		/**
		* The plugin's OWN per-line syntax highlighter (synchronous shiki core).
		*
		* The dsh shell keeps its shiki machinery private: the pinned build harness
		* never exported the per-line highlight API from ui-primitives, and rc.6
		* retracted it entirely. This plugin therefore ships its own copy so diff
		* syntax coloring works on every dsh version, bundled into lib/client.js via
		* tsdown (shiki is a plugin dependency, not a platform module).
		*
		* Only the three grammars a file diff actually hits (TypeScript family, shell,
		* JSON) load into the singleton. The css-variables theme colors every run
		* through `--shiki-*` custom properties, which the host theme sheets already
		* define for the stock MarkdownText code blocks — so highlighted runs pick up
		* the active theme without shipping any palette here.
		*/
		/** The grammars the singleton loads at boot, each keyed by its `name` id. */
		const LANGS = [
			[Object.freeze(JSON.parse("{\"displayName\":\"TypeScript\",\"name\":\"typescript\",\"patterns\":[{\"include\":\"#directives\"},{\"include\":\"#statements\"},{\"include\":\"#shebang\"}],\"repository\":{\"access-modifier\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"storage.modifier.ts\"},\"after-operator-block-as-object-literal\":{\"begin\":\"(?<!\\\\+\\\\+|--)(?<=[!(+,:=>?\\\\[]|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^yield|[^$._[:alnum:]]yield|^throw|[^$._[:alnum:]]throw|^in|[^$._[:alnum:]]in|^of|[^$._[:alnum:]]of|^typeof|[^$._[:alnum:]]typeof|&&|\\\\|\\\\||\\\\*)\\\\s*(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"name\":\"meta.objectliteral.ts\",\"patterns\":[{\"include\":\"#object-member\"}]},\"array-binding-pattern\":{\"begin\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"punctuation.definition.binding-pattern.array.ts\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.binding-pattern.array.ts\"}},\"patterns\":[{\"include\":\"#binding-element\"},{\"include\":\"#punctuation-comma\"}]},\"array-binding-pattern-const\":{\"begin\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"punctuation.definition.binding-pattern.array.ts\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.binding-pattern.array.ts\"}},\"patterns\":[{\"include\":\"#binding-element-const\"},{\"include\":\"#punctuation-comma\"}]},\"array-literal\":{\"begin\":\"\\\\s*(\\\\[)\",\"beginCaptures\":{\"1\":{\"name\":\"meta.brace.square.ts\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.square.ts\"}},\"name\":\"meta.array.literal.ts\",\"patterns\":[{\"include\":\"#expression\"},{\"include\":\"#punctuation-comma\"}]},\"arrow-function\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"},\"2\":{\"name\":\"variable.parameter.ts\"}},\"match\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async)\\\\s+)?([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?==>)\",\"name\":\"meta.arrow.ts\"},{\"begin\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async))?((?<![]!)}])\\\\s*(?=((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"}},\"end\":\"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))\",\"name\":\"meta.arrow.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#type-parameters\"},{\"include\":\"#function-parameters\"},{\"include\":\"#arrow-return-type\"},{\"include\":\"#possibly-arrow-return-type\"}]},{\"begin\":\"=>\",\"beginCaptures\":{\"0\":{\"name\":\"storage.type.function.arrow.ts\"}},\"end\":\"((?<=[}\\\\S])(?<!=>)|((?!\\\\{)(?=\\\\S)))(?!/[*/])\",\"name\":\"meta.arrow.ts\",\"patterns\":[{\"include\":\"#single-line-comment-consuming-line-ending\"},{\"include\":\"#decl-block\"},{\"include\":\"#expression\"}]}]},\"arrow-return-type\":{\"begin\":\"(?<=\\\\))\\\\s*(:)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.type.annotation.ts\"}},\"end\":\"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))\",\"name\":\"meta.return.type.arrow.ts\",\"patterns\":[{\"include\":\"#arrow-return-type-body\"}]},\"arrow-return-type-body\":{\"patterns\":[{\"begin\":\"(?<=:)(?=\\\\s*\\\\{)\",\"end\":\"(?<=})\",\"patterns\":[{\"include\":\"#type-object\"}]},{\"include\":\"#type-predicate-operator\"},{\"include\":\"#type\"}]},\"async-modifier\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(async)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"storage.modifier.async.ts\"},\"binding-element\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"include\":\"#numeric-literal\"},{\"include\":\"#regex\"},{\"include\":\"#object-binding-pattern\"},{\"include\":\"#array-binding-pattern\"},{\"include\":\"#destructuring-variable-rest\"},{\"include\":\"#variable-initializer\"}]},\"binding-element-const\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"include\":\"#numeric-literal\"},{\"include\":\"#regex\"},{\"include\":\"#object-binding-pattern-const\"},{\"include\":\"#array-binding-pattern-const\"},{\"include\":\"#destructuring-variable-rest-const\"},{\"include\":\"#variable-initializer\"}]},\"boolean-literal\":{\"patterns\":[{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))true(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"constant.language.boolean.true.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))false(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"constant.language.boolean.false.ts\"}]},\"brackets\":{\"patterns\":[{\"begin\":\"\\\\{\",\"end\":\"}|(?=\\\\*/)\",\"patterns\":[{\"include\":\"#brackets\"}]},{\"begin\":\"\\\\[\",\"end\":\"]|(?=\\\\*/)\",\"patterns\":[{\"include\":\"#brackets\"}]}]},\"cast\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"meta.brace.angle.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"meta.brace.angle.ts\"}},\"match\":\"\\\\s*(<)\\\\s*(const)\\\\s*(>)\",\"name\":\"cast.expr.ts\"},{\"begin\":\"(?<!\\\\+\\\\+|--)(?<=^return|[^$._[:alnum:]]return|^throw|[^$._[:alnum:]]throw|^yield|[^$._[:alnum:]]yield|^await|[^$._[:alnum:]]await|^default|[^$._[:alnum:]]default|[\\\\&(*,:=>?^|]|[^$_[:alnum:]](?:\\\\+\\\\+|--)|[^+]\\\\+|[^-]-)\\\\s*(<)(?!<?=)(?!\\\\s*$)\",\"beginCaptures\":{\"1\":{\"name\":\"meta.brace.angle.ts\"}},\"end\":\"(>)\",\"endCaptures\":{\"1\":{\"name\":\"meta.brace.angle.ts\"}},\"name\":\"cast.expr.ts\",\"patterns\":[{\"include\":\"#type\"}]},{\"begin\":\"(?<=^)\\\\s*(<)(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*>)\",\"beginCaptures\":{\"1\":{\"name\":\"meta.brace.angle.ts\"}},\"end\":\"(>)\",\"endCaptures\":{\"1\":{\"name\":\"meta.brace.angle.ts\"}},\"name\":\"cast.expr.ts\",\"patterns\":[{\"include\":\"#type\"}]}]},\"class-declaration\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(class)\\\\b(?=\\\\s+|/[*/])\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.modifier.ts\"},\"4\":{\"name\":\"storage.type.class.ts\"}},\"end\":\"(?<=})\",\"name\":\"meta.class.ts\",\"patterns\":[{\"include\":\"#class-declaration-or-expression-patterns\"}]},\"class-declaration-or-expression-patterns\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#class-or-interface-heritage\"},{\"captures\":{\"0\":{\"name\":\"entity.name.type.class.ts\"}},\"match\":\"[$_[:alpha:]][$_[:alnum:]]*\"},{\"include\":\"#type-parameters\"},{\"include\":\"#class-or-interface-body\"}]},\"class-expression\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(class)\\\\b(?=\\\\s+|[<{]|/[*/])\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"storage.type.class.ts\"}},\"end\":\"(?<=})\",\"name\":\"meta.class.ts\",\"patterns\":[{\"include\":\"#class-declaration-or-expression-patterns\"}]},\"class-or-interface-body\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#decorator\"},{\"begin\":\"(?<=:)\\\\s*\",\"end\":\"(?=[-\\\\])+,:;}\\\\s]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"patterns\":[{\"include\":\"#expression\"}]},{\"include\":\"#method-declaration\"},{\"include\":\"#indexer-declaration\"},{\"include\":\"#field-declaration\"},{\"include\":\"#string\"},{\"include\":\"#type-annotation\"},{\"include\":\"#variable-initializer\"},{\"include\":\"#access-modifier\"},{\"include\":\"#property-accessor\"},{\"include\":\"#async-modifier\"},{\"include\":\"#after-operator-block-as-object-literal\"},{\"include\":\"#decl-block\"},{\"include\":\"#expression\"},{\"include\":\"#punctuation-comma\"},{\"include\":\"#punctuation-semicolon\"}]},\"class-or-interface-heritage\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(extends|implements)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"}},\"end\":\"(?=\\\\{)\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#class-or-interface-heritage\"},{\"include\":\"#type-parameters\"},{\"include\":\"#expressionWithoutIdentifiers\"},{\"captures\":{\"1\":{\"name\":\"entity.name.type.module.ts\"},\"2\":{\"name\":\"punctuation.accessor.ts\"},\"3\":{\"name\":\"punctuation.accessor.optional.ts\"}},\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*(\\\\s*\\\\??\\\\.\\\\s*[$_[:alpha:]][$_[:alnum:]]*)*\\\\s*)\"},{\"captures\":{\"1\":{\"name\":\"entity.other.inherited-class.ts\"}},\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\"},{\"include\":\"#expressionPunctuations\"}]},\"comment\":{\"patterns\":[{\"begin\":\"/\\\\*\\\\*(?!/)\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.ts\"}},\"end\":\"\\\\*/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.ts\"}},\"name\":\"comment.block.documentation.ts\",\"patterns\":[{\"include\":\"#docblock\"}]},{\"begin\":\"(/\\\\*)(?:\\\\s*((@)internal)(?=\\\\s|(\\\\*/)))?\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.comment.ts\"},\"2\":{\"name\":\"storage.type.internaldeclaration.ts\"},\"3\":{\"name\":\"punctuation.decorator.internaldeclaration.ts\"}},\"end\":\"\\\\*/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.ts\"}},\"name\":\"comment.block.ts\"},{\"begin\":\"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.whitespace.comment.leading.ts\"},\"2\":{\"name\":\"comment.line.double-slash.ts\"},\"3\":{\"name\":\"punctuation.definition.comment.ts\"},\"4\":{\"name\":\"storage.type.internaldeclaration.ts\"},\"5\":{\"name\":\"punctuation.decorator.internaldeclaration.ts\"}},\"contentName\":\"comment.line.double-slash.ts\",\"end\":\"(?=$)\"}]},\"control-statement\":{\"patterns\":[{\"include\":\"#switch-statement\"},{\"include\":\"#for-loop\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(catch|finally|throw|try)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.control.trycatch.ts\"},{\"captures\":{\"1\":{\"name\":\"keyword.control.loop.ts\"},\"2\":{\"name\":\"entity.name.label.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|goto)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|do|goto|while)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.control.loop.ts\"},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(return)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.control.flow.ts\"}},\"end\":\"(?=[;}]|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"patterns\":[{\"include\":\"#expression\"}]},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default|switch)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.control.switch.ts\"},{\"include\":\"#if-statement\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(else|if)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.control.conditional.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(with)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.control.with.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(package)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.control.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(debugger)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.other.debugger.ts\"}]},\"decl-block\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"name\":\"meta.block.ts\",\"patterns\":[{\"include\":\"#statements\"}]},\"declaration\":{\"patterns\":[{\"include\":\"#decorator\"},{\"include\":\"#var-expr\"},{\"include\":\"#function-declaration\"},{\"include\":\"#class-declaration\"},{\"include\":\"#interface-declaration\"},{\"include\":\"#enum-declaration\"},{\"include\":\"#namespace-declaration\"},{\"include\":\"#type-alias-declaration\"},{\"include\":\"#import-equals-declaration\"},{\"include\":\"#import-declaration\"},{\"include\":\"#export-declaration\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(declare|export)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"storage.modifier.ts\"}]},\"decorator\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))@\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.decorator.ts\"}},\"end\":\"(?=\\\\s)\",\"name\":\"meta.decorator.ts\",\"patterns\":[{\"include\":\"#expression\"}]},\"destructuring-const\":{\"patterns\":[{\"begin\":\"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)\",\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))\",\"name\":\"meta.object-binding-pattern-variable.ts\",\"patterns\":[{\"include\":\"#object-binding-pattern-const\"},{\"include\":\"#type-annotation\"},{\"include\":\"#comment\"}]},{\"begin\":\"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)\",\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))\",\"name\":\"meta.array-binding-pattern-variable.ts\",\"patterns\":[{\"include\":\"#array-binding-pattern-const\"},{\"include\":\"#type-annotation\"},{\"include\":\"#comment\"}]}]},\"destructuring-parameter\":{\"patterns\":[{\"begin\":\"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"punctuation.definition.binding-pattern.object.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.binding-pattern.object.ts\"}},\"name\":\"meta.parameter.object-binding-pattern.ts\",\"patterns\":[{\"include\":\"#parameter-object-binding-element\"}]},{\"begin\":\"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"punctuation.definition.binding-pattern.array.ts\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.binding-pattern.array.ts\"}},\"name\":\"meta.paramter.array-binding-pattern.ts\",\"patterns\":[{\"include\":\"#parameter-binding-element\"},{\"include\":\"#punctuation-comma\"}]}]},\"destructuring-parameter-rest\":{\"captures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"variable.parameter.ts\"}},\"match\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)\"},\"destructuring-variable\":{\"patterns\":[{\"begin\":\"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)\",\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))\",\"name\":\"meta.object-binding-pattern-variable.ts\",\"patterns\":[{\"include\":\"#object-binding-pattern\"},{\"include\":\"#type-annotation\"},{\"include\":\"#comment\"}]},{\"begin\":\"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)\",\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))\",\"name\":\"meta.array-binding-pattern-variable.ts\",\"patterns\":[{\"include\":\"#array-binding-pattern\"},{\"include\":\"#type-annotation\"},{\"include\":\"#comment\"}]}]},\"destructuring-variable-rest\":{\"captures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"meta.definition.variable.ts variable.other.readwrite.ts\"}},\"match\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)\"},\"destructuring-variable-rest-const\":{\"captures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"meta.definition.variable.ts variable.other.constant.ts\"}},\"match\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)\"},\"directives\":{\"begin\":\"^(///)\\\\s*(?=<(reference|amd-dependency|amd-module)(\\\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\\\s*=\\\\s*(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))+\\\\s*/>\\\\s*$)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.comment.ts\"}},\"end\":\"(?=$)\",\"name\":\"comment.line.triple-slash.directive.ts\",\"patterns\":[{\"begin\":\"(<)(reference|amd-dependency|amd-module)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.tag.directive.ts\"},\"2\":{\"name\":\"entity.name.tag.directive.ts\"}},\"end\":\"/>\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.tag.directive.ts\"}},\"name\":\"meta.tag.ts\",\"patterns\":[{\"match\":\"path|types|no-default-lib|lib|name|resolution-mode\",\"name\":\"entity.other.attribute-name.directive.ts\"},{\"match\":\"=\",\"name\":\"keyword.operator.assignment.ts\"},{\"include\":\"#string\"}]}]},\"docblock\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"constant.language.access-type.jsdoc\"}},\"match\":\"((@)a(?:ccess|pi))\\\\s+(p(?:rivate|rotected|ublic))\\\\b\"},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"entity.name.type.instance.jsdoc\"},\"4\":{\"name\":\"punctuation.definition.bracket.angle.begin.jsdoc\"},\"5\":{\"name\":\"constant.other.email.link.underline.jsdoc\"},\"6\":{\"name\":\"punctuation.definition.bracket.angle.end.jsdoc\"}},\"match\":\"((@)author)\\\\s+([^*/<>@\\\\s](?:[^*/<>@]|\\\\*[^/])*)(?:\\\\s*(<)([^>\\\\s]+)(>))?\"},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"entity.name.type.instance.jsdoc\"},\"4\":{\"name\":\"keyword.operator.control.jsdoc\"},\"5\":{\"name\":\"entity.name.type.instance.jsdoc\"}},\"match\":\"((@)borrows)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)\\\\s+(as)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)\"},{\"begin\":\"((@)example)\\\\s+\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"}},\"end\":\"(?=@|\\\\*/)\",\"name\":\"meta.example.jsdoc\",\"patterns\":[{\"match\":\"^\\\\s\\\\*\\\\s+\"},{\"begin\":\"\\\\G(<)caption(>)\",\"beginCaptures\":{\"0\":{\"name\":\"entity.name.tag.inline.jsdoc\"},\"1\":{\"name\":\"punctuation.definition.bracket.angle.begin.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.bracket.angle.end.jsdoc\"}},\"contentName\":\"constant.other.description.jsdoc\",\"end\":\"(</)caption(>)|(?=\\\\*/)\",\"endCaptures\":{\"0\":{\"name\":\"entity.name.tag.inline.jsdoc\"},\"1\":{\"name\":\"punctuation.definition.bracket.angle.begin.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.bracket.angle.end.jsdoc\"}}},{\"captures\":{\"0\":{\"name\":\"source.embedded.ts\"}},\"match\":\"[^*@\\\\s](?:[^*]|\\\\*[^/])*\"}]},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"constant.language.symbol-type.jsdoc\"}},\"match\":\"((@)kind)\\\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\\\b\"},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"variable.other.link.underline.jsdoc\"},\"4\":{\"name\":\"entity.name.type.instance.jsdoc\"}},\"match\":\"((@)see)\\\\s+(?:((?=https?://)(?:[^*\\\\s]|\\\\*[^/])+)|((?!https?://|(?:\\\\[[^]\\\\[]*])?\\\\{@(?:link|linkcode|linkplain|tutorial)\\\\b)(?:[^*/@\\\\s]|\\\\*[^/])+))\"},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"variable.other.jsdoc\"}},\"match\":\"((@)template)\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*(?:\\\\s*,\\\\s*[$A-Z_a-z][]$.\\\\[\\\\w]*)*)\"},{\"begin\":\"((@)template)\\\\s+(?=\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"}},\"end\":\"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])\",\"patterns\":[{\"include\":\"#jsdoctype\"},{\"match\":\"([$A-Z_a-z][]$.\\\\[\\\\w]*)\",\"name\":\"variable.other.jsdoc\"}]},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"variable.other.jsdoc\"}},\"match\":\"((@)(?:arg|argument|const|constant|member|namespace|param|var))\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*)\"},{\"begin\":\"((@)typedef)\\\\s+(?=\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"}},\"end\":\"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])\",\"patterns\":[{\"include\":\"#jsdoctype\"},{\"match\":\"(?:[^*/@\\\\s]|\\\\*[^/])+\",\"name\":\"entity.name.type.instance.jsdoc\"}]},{\"begin\":\"((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\\\s+(?=\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"}},\"end\":\"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])\",\"patterns\":[{\"include\":\"#jsdoctype\"},{\"match\":\"([$A-Z_a-z][]$.\\\\[\\\\w]*)\",\"name\":\"variable.other.jsdoc\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.optional-value.begin.bracket.square.jsdoc\"},\"2\":{\"name\":\"keyword.operator.assignment.jsdoc\"},\"3\":{\"name\":\"source.embedded.ts\"},\"4\":{\"name\":\"punctuation.definition.optional-value.end.bracket.square.jsdoc\"},\"5\":{\"name\":\"invalid.illegal.syntax.jsdoc\"}},\"match\":\"(\\\\[)\\\\s*[$\\\\w]+(?:(?:\\\\[])?\\\\.[$\\\\w]+)*(?:\\\\s*(=)\\\\s*((?>\\\"(?:\\\\*(?!/)|\\\\\\\\(?!\\\")|[^*\\\\\\\\])*?\\\"|'(?:\\\\*(?!/)|\\\\\\\\(?!')|[^*\\\\\\\\])*?'|\\\\[(?:\\\\*(?!/)|[^*])*?]|(?:\\\\*(?!/)|\\\\s(?!\\\\s*])|\\\\[.*?(?:]|(?=\\\\*/))|[^]*\\\\[\\\\s])*)*))?\\\\s*(?:(])((?:[^*\\\\s]|\\\\*[^/\\\\s])+)?|(?=\\\\*/))\",\"name\":\"variable.other.jsdoc\"}]},{\"begin\":\"((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\\\s+(?=\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"}},\"end\":\"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])\",\"patterns\":[{\"include\":\"#jsdoctype\"}]},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"entity.name.type.instance.jsdoc\"}},\"match\":\"((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\\\s+((?:[^*@{}\\\\s]|\\\\*[^/])+)\"},{\"begin\":\"((@)(?:default(?:value)?|license|version))\\\\s+(([\\\"']))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"variable.other.jsdoc\"},\"4\":{\"name\":\"punctuation.definition.string.begin.jsdoc\"}},\"contentName\":\"variable.other.jsdoc\",\"end\":\"(\\\\3)|(?=$|\\\\*/)\",\"endCaptures\":{\"0\":{\"name\":\"variable.other.jsdoc\"},\"1\":{\"name\":\"punctuation.definition.string.end.jsdoc\"}}},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"},\"3\":{\"name\":\"variable.other.jsdoc\"}},\"match\":\"((@)(?:default(?:value)?|license|tutorial|variation|version))\\\\s+([^*\\\\s]+)\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"}},\"match\":\"(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\\\b\",\"name\":\"storage.type.class.jsdoc\"},{\"include\":\"#inline-tags\"},{\"captures\":{\"1\":{\"name\":\"storage.type.class.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.block.tag.jsdoc\"}},\"match\":\"((@)[$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s+)\"}]},\"enum-declaration\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:\\\\b(const)\\\\s+)?\\\\b(enum)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.modifier.ts\"},\"4\":{\"name\":\"storage.type.enum.ts\"},\"5\":{\"name\":\"entity.name.type.enum.ts\"}},\"end\":\"(?<=})\",\"name\":\"meta.enum.declaration.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)\",\"beginCaptures\":{\"0\":{\"name\":\"variable.other.enummember.ts\"}},\"end\":\"(?=[,}]|$)\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#variable-initializer\"}]},{\"begin\":\"(?=(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+])))\",\"end\":\"(?=[,}]|$)\",\"patterns\":[{\"include\":\"#string\"},{\"include\":\"#array-literal\"},{\"include\":\"#comment\"},{\"include\":\"#variable-initializer\"}]},{\"include\":\"#punctuation-comma\"}]}]},\"export-declaration\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"keyword.control.as.ts\"},\"3\":{\"name\":\"storage.type.namespace.ts\"},\"4\":{\"name\":\"entity.name.type.module.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)\\\\s+(as)\\\\s+(namespace)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\"},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?(?:\\\\s*(=)|\\\\s+(default)(?=\\\\s+))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"keyword.control.type.ts\"},\"3\":{\"name\":\"keyword.operator.assignment.ts\"},\"4\":{\"name\":\"keyword.control.default.ts\"}},\"end\":\"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"name\":\"meta.export.default.ts\",\"patterns\":[{\"include\":\"#interface-declaration\"},{\"include\":\"#expression\"}]},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?\\\\b(?!(\\\\$)|(\\\\s*:))((?=\\\\s*[*{])|((?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*([,\\\\s]))(?!\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"keyword.control.type.ts\"}},\"end\":\"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"name\":\"meta.export.ts\",\"patterns\":[{\"include\":\"#import-export-declaration\"}]}]},\"expression\":{\"patterns\":[{\"include\":\"#expressionWithoutIdentifiers\"},{\"include\":\"#identifiers\"},{\"include\":\"#expressionPunctuations\"}]},\"expression-inside-possibly-arrow-parens\":{\"patterns\":[{\"include\":\"#expressionWithoutIdentifiers\"},{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"include\":\"#decorator\"},{\"include\":\"#destructuring-parameter\"},{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)\"},{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"keyword.operator.rest.ts\"},\"3\":{\"name\":\"entity.name.function.ts variable.language.this.ts\"},\"4\":{\"name\":\"entity.name.function.ts\"},\"5\":{\"name\":\"keyword.operator.optional.ts\"}},\"match\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))\"},{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"keyword.operator.rest.ts\"},\"3\":{\"name\":\"variable.parameter.ts variable.language.this.ts\"},\"4\":{\"name\":\"variable.parameter.ts\"},\"5\":{\"name\":\"keyword.operator.optional.ts\"}},\"match\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*[,:]|$)\"},{\"include\":\"#type-annotation\"},{\"include\":\"#variable-initializer\"},{\"match\":\",\",\"name\":\"punctuation.separator.parameter.ts\"},{\"include\":\"#identifiers\"},{\"include\":\"#expressionPunctuations\"}]},\"expression-operators\":{\"patterns\":[{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(await)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.control.flow.ts\"},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?=\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*\\\\*)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.flow.ts\"}},\"end\":\"\\\\*\",\"endCaptures\":{\"0\":{\"name\":\"keyword.generator.asterisk.ts\"}},\"patterns\":[{\"include\":\"#comment\"}]},{\"captures\":{\"1\":{\"name\":\"keyword.control.flow.ts\"},\"2\":{\"name\":\"keyword.generator.asterisk.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s*(\\\\*))?\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))delete(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.operator.expression.delete.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))in(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()\",\"name\":\"keyword.operator.expression.in.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))of(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()\",\"name\":\"keyword.operator.expression.of.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.operator.expression.instanceof.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.operator.new.ts\"},{\"include\":\"#typeof-operator\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))void(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.operator.expression.void.ts\"},{\"captures\":{\"1\":{\"name\":\"keyword.control.as.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*($|[]),:;}]))\"},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.as.ts\"},\"2\":{\"name\":\"keyword.control.satisfies.ts\"}},\"end\":\"(?=^|[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisfies)\\\\s+)|(\\\\s+<))\",\"patterns\":[{\"include\":\"#type\"}]},{\"match\":\"\\\\.\\\\.\\\\.\",\"name\":\"keyword.operator.spread.ts\"},{\"match\":\"(?:\\\\*|(?<!\\\\()/|[-%+])=\",\"name\":\"keyword.operator.assignment.compound.ts\"},{\"match\":\"(?:[\\\\&^]|<<|>>>??|\\\\|)=\",\"name\":\"keyword.operator.assignment.compound.bitwise.ts\"},{\"match\":\"<<|>>>?\",\"name\":\"keyword.operator.bitwise.shift.ts\"},{\"match\":\"[!=]==?\",\"name\":\"keyword.operator.comparison.ts\"},{\"match\":\"<=|>=|<>|[<>]\",\"name\":\"keyword.operator.relational.ts\"},{\"captures\":{\"1\":{\"name\":\"keyword.operator.logical.ts\"},\"2\":{\"name\":\"keyword.operator.assignment.compound.ts\"},\"3\":{\"name\":\"keyword.operator.arithmetic.ts\"}},\"match\":\"(?<=[$_[:alnum:]])(!)\\\\s*(?:(/=)|(/)(?![*/]))\"},{\"match\":\"!|&&|\\\\|\\\\||\\\\?\\\\?\",\"name\":\"keyword.operator.logical.ts\"},{\"match\":\"[\\\\&^|~]\",\"name\":\"keyword.operator.bitwise.ts\"},{\"match\":\"=\",\"name\":\"keyword.operator.assignment.ts\"},{\"match\":\"--\",\"name\":\"keyword.operator.decrement.ts\"},{\"match\":\"\\\\+\\\\+\",\"name\":\"keyword.operator.increment.ts\"},{\"match\":\"[-%*+/]\",\"name\":\"keyword.operator.arithmetic.ts\"},{\"begin\":\"(?<=[]$)_[:alnum:]])\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)+(?:(/=)|(/)(?![*/])))\",\"end\":\"(/=)|(/)(?!\\\\*([^*]|(\\\\*[^/]))*\\\\*/)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.operator.assignment.compound.ts\"},\"2\":{\"name\":\"keyword.operator.arithmetic.ts\"}},\"patterns\":[{\"include\":\"#comment\"}]},{\"captures\":{\"1\":{\"name\":\"keyword.operator.assignment.compound.ts\"},\"2\":{\"name\":\"keyword.operator.arithmetic.ts\"}},\"match\":\"(?<=[]$)_[:alnum:]])\\\\s*(?:(/=)|(/)(?![*/]))\"}]},\"expressionPunctuations\":{\"patterns\":[{\"include\":\"#punctuation-comma\"},{\"include\":\"#punctuation-accessor\"}]},\"expressionWithoutIdentifiers\":{\"patterns\":[{\"include\":\"#string\"},{\"include\":\"#regex\"},{\"include\":\"#comment\"},{\"include\":\"#function-expression\"},{\"include\":\"#class-expression\"},{\"include\":\"#arrow-function\"},{\"include\":\"#paren-expression-possibly-arrow\"},{\"include\":\"#cast\"},{\"include\":\"#ternary-expression\"},{\"include\":\"#new-expr\"},{\"include\":\"#instanceof-expr\"},{\"include\":\"#object-literal\"},{\"include\":\"#expression-operators\"},{\"include\":\"#function-call\"},{\"include\":\"#literal\"},{\"include\":\"#support-objects\"},{\"include\":\"#paren-expression\"}]},\"field-declaration\":{\"begin\":\"(?<!\\\\()(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s+)?(?=\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=}]|$))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"}},\"end\":\"(?=[,;}]|$|^((?!\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=]|$))))|(?<=})\",\"name\":\"meta.field.declaration.ts\",\"patterns\":[{\"include\":\"#variable-initializer\"},{\"include\":\"#type-annotation\"},{\"include\":\"#string\"},{\"include\":\"#array-literal\"},{\"include\":\"#numeric-literal\"},{\"include\":\"#comment\"},{\"captures\":{\"1\":{\"name\":\"meta.definition.property.ts entity.name.function.ts\"},\"2\":{\"name\":\"keyword.operator.optional.ts\"},\"3\":{\"name\":\"keyword.operator.definiteassignment.ts\"}},\"match\":\"(#?[$_[:alpha:]][$_[:alnum:]]*)(?:(\\\\?)|(!))?(?=\\\\s*\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))\"},{\"match\":\"#?[$_[:alpha:]][$_[:alnum:]]*\",\"name\":\"meta.definition.property.ts variable.object.property.ts\"},{\"match\":\"\\\\?\",\"name\":\"keyword.operator.optional.ts\"},{\"match\":\"!\",\"name\":\"keyword.operator.definiteassignment.ts\"}]},\"for-loop\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))for(?=((\\\\s+|(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*))await)?\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)?(\\\\())\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.control.loop.ts\"}},\"end\":\"(?<=\\\\))\",\"patterns\":[{\"include\":\"#comment\"},{\"match\":\"await\",\"name\":\"keyword.control.loop.ts\"},{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"patterns\":[{\"include\":\"#var-expr\"},{\"include\":\"#expression\"},{\"include\":\"#punctuation-semicolon\"}]}]},\"function-body\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#type-parameters\"},{\"include\":\"#function-parameters\"},{\"include\":\"#return-type\"},{\"include\":\"#type-function-return-type\"},{\"include\":\"#decl-block\"},{\"match\":\"\\\\*\",\"name\":\"keyword.generator.asterisk.ts\"}]},\"function-call\":{\"patterns\":[{\"begin\":\"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())\",\"end\":\"(?<=\\\\))(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())\",\"patterns\":[{\"begin\":\"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))\",\"end\":\"(?=\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())\",\"name\":\"meta.function-call.ts\",\"patterns\":[{\"include\":\"#function-call-target\"}]},{\"include\":\"#comment\"},{\"include\":\"#function-call-optionals\"},{\"include\":\"#type-arguments\"},{\"include\":\"#paren-expression\"}]},{\"begin\":\"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)\",\"end\":\"(?<=>)(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)\",\"patterns\":[{\"begin\":\"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))\",\"end\":\"(?=(<\\\\s*[(\\\\[{]\\\\s*)$)\",\"name\":\"meta.function-call.ts\",\"patterns\":[{\"include\":\"#function-call-target\"}]},{\"include\":\"#comment\"},{\"include\":\"#function-call-optionals\"},{\"include\":\"#type-arguments\"}]}]},\"function-call-optionals\":{\"patterns\":[{\"match\":\"\\\\?\\\\.\",\"name\":\"meta.function-call.ts punctuation.accessor.optional.ts\"},{\"match\":\"!\",\"name\":\"meta.function-call.ts keyword.operator.definiteassignment.ts\"}]},\"function-call-target\":{\"patterns\":[{\"include\":\"#support-function-call-identifiers\"},{\"match\":\"(#?[$_[:alpha:]][$_[:alnum:]]*)\",\"name\":\"entity.name.function.ts\"}]},\"function-declaration\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.modifier.async.ts\"},\"4\":{\"name\":\"storage.type.function.ts\"},\"5\":{\"name\":\"keyword.generator.asterisk.ts\"},\"6\":{\"name\":\"meta.definition.function.ts entity.name.function.ts\"}},\"end\":\"(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|(?<=})\",\"name\":\"meta.function.ts\",\"patterns\":[{\"include\":\"#function-name\"},{\"include\":\"#function-body\"}]},\"function-expression\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"},\"2\":{\"name\":\"storage.type.function.ts\"},\"3\":{\"name\":\"keyword.generator.asterisk.ts\"},\"4\":{\"name\":\"meta.definition.function.ts entity.name.function.ts\"}},\"end\":\"(?=;)|(?<=})\",\"name\":\"meta.function.expression.ts\",\"patterns\":[{\"include\":\"#function-name\"},{\"include\":\"#single-line-comment-consuming-line-ending\"},{\"include\":\"#function-body\"}]},\"function-name\":{\"match\":\"[$_[:alpha:]][$_[:alnum:]]*\",\"name\":\"meta.definition.function.ts entity.name.function.ts\"},\"function-parameters\":{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.parameters.begin.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.parameters.end.ts\"}},\"name\":\"meta.parameters.ts\",\"patterns\":[{\"include\":\"#function-parameters-body\"}]},\"function-parameters-body\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"include\":\"#decorator\"},{\"include\":\"#destructuring-parameter\"},{\"include\":\"#parameter-name\"},{\"include\":\"#parameter-type-annotation\"},{\"include\":\"#variable-initializer\"},{\"match\":\",\",\"name\":\"punctuation.separator.parameter.ts\"}]},\"identifiers\":{\"patterns\":[{\"include\":\"#object-identifiers\"},{\"captures\":{\"1\":{\"name\":\"punctuation.accessor.ts\"},\"2\":{\"name\":\"punctuation.accessor.optional.ts\"},\"3\":{\"name\":\"entity.name.function.ts\"}},\"match\":\"(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))\"},{\"captures\":{\"1\":{\"name\":\"punctuation.accessor.ts\"},\"2\":{\"name\":\"punctuation.accessor.optional.ts\"},\"3\":{\"name\":\"variable.other.constant.property.ts\"}},\"match\":\"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])\"},{\"captures\":{\"1\":{\"name\":\"punctuation.accessor.ts\"},\"2\":{\"name\":\"punctuation.accessor.optional.ts\"},\"3\":{\"name\":\"variable.other.property.ts\"}},\"match\":\"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*)\"},{\"match\":\"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])\",\"name\":\"variable.other.constant.ts\"},{\"match\":\"[$_[:alpha:]][$_[:alnum:]]*\",\"name\":\"variable.other.readwrite.ts\"}]},\"if-statement\":{\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bif\\\\s*(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))\\\\s*(?!\\\\{))\",\"end\":\"(?=;|$|})\",\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(if)\\\\s*(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.conditional.ts\"},\"2\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"patterns\":[{\"include\":\"#expression\"}]},{\"begin\":\"(?<=\\\\))\\\\s*/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.ts\"}},\"end\":\"(/)([dgimsuvy]*)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.string.end.ts\"},\"2\":{\"name\":\"keyword.other.ts\"}},\"name\":\"string.regexp.ts\",\"patterns\":[{\"include\":\"#regexp\"}]},{\"include\":\"#statements\"}]}]},\"import-declaration\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type)(?!\\\\s+from))?(?!\\\\s*[(:])(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"keyword.control.import.ts\"},\"4\":{\"name\":\"keyword.control.type.ts\"}},\"end\":\"(?<!(?:^|[^$._[:alnum:]])import)(?=;|$|^)\",\"name\":\"meta.import.ts\",\"patterns\":[{\"include\":\"#single-line-comment-consuming-line-ending\"},{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"begin\":\"(?<=(?:^|[^$._[:alnum:]])import)(?!\\\\s*[\\\"'])\",\"end\":\"\\\\bfrom\\\\b\",\"endCaptures\":{\"0\":{\"name\":\"keyword.control.from.ts\"}},\"patterns\":[{\"include\":\"#import-export-declaration\"}]},{\"include\":\"#import-export-declaration\"}]},\"import-equals-declaration\":{\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(require)\\\\s*(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"keyword.control.import.ts\"},\"4\":{\"name\":\"keyword.control.type.ts\"},\"5\":{\"name\":\"variable.other.readwrite.alias.ts\"},\"6\":{\"name\":\"keyword.operator.assignment.ts\"},\"7\":{\"name\":\"keyword.control.require.ts\"},\"8\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"name\":\"meta.import-equals.external.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"}]},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(?!require\\\\b)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"keyword.control.import.ts\"},\"4\":{\"name\":\"keyword.control.type.ts\"},\"5\":{\"name\":\"variable.other.readwrite.alias.ts\"},\"6\":{\"name\":\"keyword.operator.assignment.ts\"}},\"end\":\"(?=;|$|^)\",\"name\":\"meta.import-equals.internal.ts\",\"patterns\":[{\"include\":\"#single-line-comment-consuming-line-ending\"},{\"include\":\"#comment\"},{\"captures\":{\"1\":{\"name\":\"entity.name.type.module.ts\"},\"2\":{\"name\":\"punctuation.accessor.ts\"},\"3\":{\"name\":\"punctuation.accessor.optional.ts\"}},\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\"},{\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\",\"name\":\"variable.other.readwrite.ts\"}]}]},\"import-export-assert-clause\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(with)|(assert))\\\\s*(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.with.ts\"},\"2\":{\"name\":\"keyword.control.assert.ts\"},\"3\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"match\":\"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)\",\"name\":\"meta.object-literal.key.ts\"},{\"match\":\":\",\"name\":\"punctuation.separator.key-value.ts\"}]},\"import-export-block\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"name\":\"meta.block.ts\",\"patterns\":[{\"include\":\"#import-export-clause\"}]},\"import-export-clause\":{\"patterns\":[{\"include\":\"#comment\"},{\"captures\":{\"1\":{\"name\":\"keyword.control.type.ts\"},\"2\":{\"name\":\"keyword.control.default.ts\"},\"3\":{\"name\":\"constant.language.import-export-all.ts\"},\"4\":{\"name\":\"variable.other.readwrite.ts\"},\"5\":{\"name\":\"string.quoted.alias.ts\"},\"12\":{\"name\":\"keyword.control.as.ts\"},\"13\":{\"name\":\"keyword.control.default.ts\"},\"14\":{\"name\":\"variable.other.readwrite.alias.ts\"},\"15\":{\"name\":\"string.quoted.alias.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(type)\\\\s+)?(?:\\\\b(default)|(\\\\*)|\\\\b([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))\\\\s+(as)\\\\s+(?:(default(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))\"},{\"include\":\"#punctuation-comma\"},{\"match\":\"\\\\*\",\"name\":\"constant.language.import-export-all.ts\"},{\"match\":\"\\\\b(default)\\\\b\",\"name\":\"keyword.control.default.ts\"},{\"captures\":{\"1\":{\"name\":\"keyword.control.type.ts\"},\"2\":{\"name\":\"variable.other.readwrite.alias.ts\"},\"3\":{\"name\":\"string.quoted.alias.ts\"}},\"match\":\"(?:\\\\b(type)\\\\s+)?(?:([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))\"}]},\"import-export-declaration\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"include\":\"#import-export-block\"},{\"match\":\"\\\\bfrom\\\\b\",\"name\":\"keyword.control.from.ts\"},{\"include\":\"#import-export-assert-clause\"},{\"include\":\"#import-export-clause\"}]},\"indexer-declaration\":{\"begin\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=:)\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"meta.brace.square.ts\"},\"3\":{\"name\":\"variable.parameter.ts\"}},\"end\":\"(])\\\\s*(\\\\?\\\\s*)?|$\",\"endCaptures\":{\"1\":{\"name\":\"meta.brace.square.ts\"},\"2\":{\"name\":\"keyword.operator.optional.ts\"}},\"name\":\"meta.indexer.declaration.ts\",\"patterns\":[{\"include\":\"#type-annotation\"}]},\"indexer-mapped-type-declaration\":{\"begin\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([-+])?(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s+(in)\\\\s+\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.type.modifier.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"meta.brace.square.ts\"},\"4\":{\"name\":\"entity.name.type.ts\"},\"5\":{\"name\":\"keyword.operator.expression.in.ts\"}},\"end\":\"(])([-+])?\\\\s*(\\\\?\\\\s*)?|$\",\"endCaptures\":{\"1\":{\"name\":\"meta.brace.square.ts\"},\"2\":{\"name\":\"keyword.operator.type.modifier.ts\"},\"3\":{\"name\":\"keyword.operator.optional.ts\"}},\"name\":\"meta.indexer.mappedtype.declaration.ts\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"keyword.control.as.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+\"},{\"include\":\"#type\"}]},\"inline-tags\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"punctuation.definition.bracket.square.begin.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.bracket.square.end.jsdoc\"}},\"match\":\"(\\\\[)[^]]+(])(?=\\\\{@(?:link|linkcode|linkplain|tutorial))\",\"name\":\"constant.other.description.jsdoc\"},{\"begin\":\"(\\\\{)((@)(?:link(?:code|plain)?|tutorial))\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.bracket.curly.begin.jsdoc\"},\"2\":{\"name\":\"storage.type.class.jsdoc\"},\"3\":{\"name\":\"punctuation.definition.inline.tag.jsdoc\"}},\"end\":\"}|(?=\\\\*/)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.bracket.curly.end.jsdoc\"}},\"name\":\"entity.name.type.instance.jsdoc\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"variable.other.link.underline.jsdoc\"},\"2\":{\"name\":\"punctuation.separator.pipe.jsdoc\"}},\"match\":\"\\\\G((?=https?://)(?:[^*|}\\\\s]|\\\\*/)+)(\\\\|)?\"},{\"captures\":{\"1\":{\"name\":\"variable.other.description.jsdoc\"},\"2\":{\"name\":\"punctuation.separator.pipe.jsdoc\"}},\"match\":\"\\\\G((?:[^*@{|}\\\\s]|\\\\*[^/])+)(\\\\|)?\"}]}]},\"instanceof-expr\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(instanceof)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.expression.instanceof.ts\"}},\"end\":\"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|([!=]==?)|(([\\\\&^|~]\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s+instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))\",\"patterns\":[{\"include\":\"#type\"}]},\"interface-declaration\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(interface)\\\\b(?=\\\\s+|/[*/])\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.modifier.ts\"},\"4\":{\"name\":\"storage.type.interface.ts\"}},\"end\":\"(?<=})\",\"name\":\"meta.interface.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#class-or-interface-heritage\"},{\"captures\":{\"0\":{\"name\":\"entity.name.type.interface.ts\"}},\"match\":\"[$_[:alpha:]][$_[:alnum:]]*\"},{\"include\":\"#type-parameters\"},{\"include\":\"#class-or-interface-body\"}]},\"jsdoctype\":{\"patterns\":[{\"begin\":\"\\\\G(\\\\{)\",\"beginCaptures\":{\"0\":{\"name\":\"entity.name.type.instance.jsdoc\"},\"1\":{\"name\":\"punctuation.definition.bracket.curly.begin.jsdoc\"}},\"contentName\":\"entity.name.type.instance.jsdoc\",\"end\":\"((}))\\\\s*|(?=\\\\*/)\",\"endCaptures\":{\"1\":{\"name\":\"entity.name.type.instance.jsdoc\"},\"2\":{\"name\":\"punctuation.definition.bracket.curly.end.jsdoc\"}},\"patterns\":[{\"include\":\"#brackets\"}]}]},\"label\":{\"patterns\":[{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)(?=\\\\s*\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.label.ts\"},\"2\":{\"name\":\"punctuation.separator.label.ts\"}},\"end\":\"(?<=})\",\"patterns\":[{\"include\":\"#decl-block\"}]},{\"captures\":{\"1\":{\"name\":\"entity.name.label.ts\"},\"2\":{\"name\":\"punctuation.separator.label.ts\"}},\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)\"}]},\"literal\":{\"patterns\":[{\"include\":\"#numeric-literal\"},{\"include\":\"#boolean-literal\"},{\"include\":\"#null-literal\"},{\"include\":\"#undefined-literal\"},{\"include\":\"#numericConstant-literal\"},{\"include\":\"#array-literal\"},{\"include\":\"#this-literal\"},{\"include\":\"#super-literal\"}]},\"method-declaration\":{\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?\\\\s*\\\\b(constructor)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.modifier.ts\"},\"4\":{\"name\":\"storage.modifier.async.ts\"},\"5\":{\"name\":\"storage.type.ts\"}},\"end\":\"(?=[,;}]|$)|(?<=})\",\"name\":\"meta.method.declaration.ts\",\"patterns\":[{\"include\":\"#method-declaration-name\"},{\"include\":\"#function-body\"}]},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\s*\\\\b(new)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))|(?:(\\\\*)\\\\s*)?)(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.modifier.ts\"},\"4\":{\"name\":\"storage.modifier.async.ts\"},\"5\":{\"name\":\"keyword.operator.new.ts\"},\"6\":{\"name\":\"keyword.generator.asterisk.ts\"}},\"end\":\"(?=[,;}]|$)|(?<=})\",\"name\":\"meta.method.declaration.ts\",\"patterns\":[{\"include\":\"#method-declaration-name\"},{\"include\":\"#function-body\"}]},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.modifier.ts\"},\"4\":{\"name\":\"storage.modifier.async.ts\"},\"5\":{\"name\":\"storage.type.property.ts\"},\"6\":{\"name\":\"keyword.generator.asterisk.ts\"}},\"end\":\"(?=[,;}]|$)|(?<=})\",\"name\":\"meta.method.declaration.ts\",\"patterns\":[{\"include\":\"#method-declaration-name\"},{\"include\":\"#function-body\"}]}]},\"method-declaration-name\":{\"begin\":\"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??)\\\\s*[(<])\",\"end\":\"(?=[(<])\",\"patterns\":[{\"include\":\"#string\"},{\"include\":\"#array-literal\"},{\"include\":\"#numeric-literal\"},{\"match\":\"[$_[:alpha:]][$_[:alnum:]]*\",\"name\":\"meta.definition.method.ts entity.name.function.ts\"},{\"match\":\"\\\\?\",\"name\":\"keyword.operator.optional.ts\"}]},\"namespace-declaration\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(namespace|module)\\\\s+(?=[\\\"$'_`[:alpha:]])\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.type.namespace.ts\"}},\"end\":\"(?<=})|(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"name\":\"meta.namespace.declaration.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\",\"name\":\"entity.name.type.module.ts\"},{\"include\":\"#punctuation-accessor\"},{\"include\":\"#decl-block\"}]},\"new-expr\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.new.ts\"}},\"end\":\"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))\",\"name\":\"new.expr.ts\",\"patterns\":[{\"include\":\"#expression\"}]},\"null-literal\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))null(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"constant.language.null.ts\"},\"numeric-literal\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"storage.type.numeric.bigint.ts\"}},\"match\":\"\\\\b(?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$)\",\"name\":\"constant.numeric.hex.ts\"},{\"captures\":{\"1\":{\"name\":\"storage.type.numeric.bigint.ts\"}},\"match\":\"\\\\b(?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$)\",\"name\":\"constant.numeric.binary.ts\"},{\"captures\":{\"1\":{\"name\":\"storage.type.numeric.bigint.ts\"}},\"match\":\"\\\\b(?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$)\",\"name\":\"constant.numeric.octal.ts\"},{\"captures\":{\"0\":{\"name\":\"constant.numeric.decimal.ts\"},\"1\":{\"name\":\"meta.delimiter.decimal.period.ts\"},\"2\":{\"name\":\"storage.type.numeric.bigint.ts\"},\"3\":{\"name\":\"meta.delimiter.decimal.period.ts\"},\"4\":{\"name\":\"storage.type.numeric.bigint.ts\"},\"5\":{\"name\":\"meta.delimiter.decimal.period.ts\"},\"6\":{\"name\":\"storage.type.numeric.bigint.ts\"},\"7\":{\"name\":\"storage.type.numeric.bigint.ts\"},\"8\":{\"name\":\"meta.delimiter.decimal.period.ts\"},\"9\":{\"name\":\"storage.type.numeric.bigint.ts\"},\"10\":{\"name\":\"meta.delimiter.decimal.period.ts\"},\"11\":{\"name\":\"storage.type.numeric.bigint.ts\"},\"12\":{\"name\":\"meta.delimiter.decimal.period.ts\"},\"13\":{\"name\":\"storage.type.numeric.bigint.ts\"},\"14\":{\"name\":\"storage.type.numeric.bigint.ts\"}},\"match\":\"(?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)\"}]},\"numericConstant-literal\":{\"patterns\":[{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))NaN(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"constant.language.nan.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Infinity(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"constant.language.infinity.ts\"}]},\"object-binding-element\":{\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))\",\"end\":\"(?=[,}])\",\"patterns\":[{\"include\":\"#object-binding-element-propertyName\"},{\"include\":\"#binding-element\"}]},{\"include\":\"#object-binding-pattern\"},{\"include\":\"#destructuring-variable-rest\"},{\"include\":\"#variable-initializer\"},{\"include\":\"#punctuation-comma\"}]},\"object-binding-element-const\":{\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))\",\"end\":\"(?=[,}])\",\"patterns\":[{\"include\":\"#object-binding-element-propertyName\"},{\"include\":\"#binding-element-const\"}]},{\"include\":\"#object-binding-pattern-const\"},{\"include\":\"#destructuring-variable-rest-const\"},{\"include\":\"#variable-initializer\"},{\"include\":\"#punctuation-comma\"}]},\"object-binding-element-propertyName\":{\"begin\":\"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))\",\"end\":\"(:)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.destructuring.ts\"}},\"patterns\":[{\"include\":\"#string\"},{\"include\":\"#array-literal\"},{\"include\":\"#numeric-literal\"},{\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\",\"name\":\"variable.object.property.ts\"}]},\"object-binding-pattern\":{\"begin\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"punctuation.definition.binding-pattern.object.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.binding-pattern.object.ts\"}},\"patterns\":[{\"include\":\"#object-binding-element\"}]},\"object-binding-pattern-const\":{\"begin\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"punctuation.definition.binding-pattern.object.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.binding-pattern.object.ts\"}},\"patterns\":[{\"include\":\"#object-binding-element-const\"}]},\"object-identifiers\":{\"patterns\":[{\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*\\\\??\\\\.\\\\s*prototype\\\\b(?!\\\\$))\",\"name\":\"support.class.ts\"},{\"captures\":{\"1\":{\"name\":\"punctuation.accessor.ts\"},\"2\":{\"name\":\"punctuation.accessor.optional.ts\"},\"3\":{\"name\":\"variable.other.constant.object.property.ts\"},\"4\":{\"name\":\"variable.other.object.property.ts\"}},\"match\":\"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(#?\\\\p{upper}[$_\\\\d[:upper:]]*)|(#?[$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)\"},{\"captures\":{\"1\":{\"name\":\"variable.other.constant.object.ts\"},\"2\":{\"name\":\"variable.other.object.ts\"}},\"match\":\"(?:(\\\\p{upper}[$_\\\\d[:upper:]]*)|([$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)\"}]},\"object-literal\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"name\":\"meta.objectliteral.ts\",\"patterns\":[{\"include\":\"#object-member\"}]},\"object-literal-method-declaration\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"},\"2\":{\"name\":\"storage.type.property.ts\"},\"3\":{\"name\":\"keyword.generator.asterisk.ts\"}},\"end\":\"(?=[,;}])|(?<=})\",\"name\":\"meta.method.declaration.ts\",\"patterns\":[{\"include\":\"#method-declaration-name\"},{\"include\":\"#function-body\"},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"},\"2\":{\"name\":\"storage.type.property.ts\"},\"3\":{\"name\":\"keyword.generator.asterisk.ts\"}},\"end\":\"(?=[(<])\",\"patterns\":[{\"include\":\"#method-declaration-name\"}]}]},\"object-member\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#object-literal-method-declaration\"},{\"begin\":\"(?=\\\\[)\",\"end\":\"(?=:)|((?<=])(?=\\\\s*[(<]))\",\"name\":\"meta.object.member.ts meta.object-literal.key.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#array-literal\"}]},{\"begin\":\"(?=[\\\"'`])\",\"end\":\"(?=:)|((?<=[\\\"'`])(?=((\\\\s*[(,<}])|(\\\\s+(as|satisifies)\\\\s+))))\",\"name\":\"meta.object.member.ts meta.object-literal.key.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"}]},{\"begin\":\"(?=\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)))\",\"end\":\"(?=:)|(?=\\\\s*([(,<}])|(\\\\s+as|satisifies\\\\s+))\",\"name\":\"meta.object.member.ts meta.object-literal.key.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#numeric-literal\"}]},{\"begin\":\"(?<=[]\\\"'`])(?=\\\\s*[(<])\",\"end\":\"(?=[,;}])|(?<=})\",\"name\":\"meta.method.declaration.ts\",\"patterns\":[{\"include\":\"#function-body\"}]},{\"captures\":{\"0\":{\"name\":\"meta.object-literal.key.ts\"},\"1\":{\"name\":\"constant.numeric.decimal.ts\"}},\"match\":\"(?![$_[:alpha:]])(\\\\d+)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)\",\"name\":\"meta.object.member.ts\"},{\"captures\":{\"0\":{\"name\":\"meta.object-literal.key.ts\"},\"1\":{\"name\":\"entity.name.function.ts\"}},\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/)*\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))\",\"name\":\"meta.object.member.ts\"},{\"captures\":{\"0\":{\"name\":\"meta.object-literal.key.ts\"}},\"match\":\"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)\",\"name\":\"meta.object.member.ts\"},{\"begin\":\"\\\\.\\\\.\\\\.\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.operator.spread.ts\"}},\"end\":\"(?=[,}])\",\"name\":\"meta.object.member.ts\",\"patterns\":[{\"include\":\"#expression\"}]},{\"captures\":{\"1\":{\"name\":\"variable.other.readwrite.ts\"}},\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=[,}]|$|//|/\\\\*)\",\"name\":\"meta.object.member.ts\"},{\"captures\":{\"1\":{\"name\":\"keyword.control.as.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*([,}]|$))\",\"name\":\"meta.object.member.ts\"},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.as.ts\"},\"2\":{\"name\":\"keyword.control.satisfies.ts\"}},\"end\":\"(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|^|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisifies)\\\\s+))\",\"name\":\"meta.object.member.ts\",\"patterns\":[{\"include\":\"#type\"}]},{\"begin\":\"(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*=)\",\"end\":\"(?=[,}]|$|//|/\\\\*)\",\"name\":\"meta.object.member.ts\",\"patterns\":[{\"include\":\"#expression\"}]},{\"begin\":\":\",\"beginCaptures\":{\"0\":{\"name\":\"meta.object-literal.key.ts punctuation.separator.key-value.ts\"}},\"end\":\"(?=[,}])\",\"name\":\"meta.object.member.ts\",\"patterns\":[{\"begin\":\"(?<=:)\\\\s*(async)?(?=\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"}},\"end\":\"(?<=\\\\))\",\"patterns\":[{\"include\":\"#type-parameters\"},{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"patterns\":[{\"include\":\"#expression-inside-possibly-arrow-parens\"}]}]},{\"begin\":\"(?<=:)\\\\s*(async)?\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"},\"2\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"patterns\":[{\"include\":\"#expression-inside-possibly-arrow-parens\"}]},{\"begin\":\"(?<=:)\\\\s*(async)?\\\\s*(?=<\\\\s*$)\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"}},\"end\":\"(?<=>)\",\"patterns\":[{\"include\":\"#type-parameters\"}]},{\"begin\":\"(?<=>)\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))\",\"beginCaptures\":{\"1\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"patterns\":[{\"include\":\"#expression-inside-possibly-arrow-parens\"}]},{\"include\":\"#possibly-arrow-return-type\"},{\"include\":\"#expression\"}]},{\"include\":\"#punctuation-comma\"},{\"include\":\"#decl-block\"}]},\"parameter-array-binding-pattern\":{\"begin\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"punctuation.definition.binding-pattern.array.ts\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.binding-pattern.array.ts\"}},\"patterns\":[{\"include\":\"#parameter-binding-element\"},{\"include\":\"#punctuation-comma\"}]},\"parameter-binding-element\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"include\":\"#numeric-literal\"},{\"include\":\"#regex\"},{\"include\":\"#parameter-object-binding-pattern\"},{\"include\":\"#parameter-array-binding-pattern\"},{\"include\":\"#destructuring-parameter-rest\"},{\"include\":\"#variable-initializer\"}]},\"parameter-name\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)\"},{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"keyword.operator.rest.ts\"},\"3\":{\"name\":\"entity.name.function.ts variable.language.this.ts\"},\"4\":{\"name\":\"entity.name.function.ts\"},\"5\":{\"name\":\"keyword.operator.optional.ts\"}},\"match\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))\"},{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"keyword.operator.rest.ts\"},\"3\":{\"name\":\"variable.parameter.ts variable.language.this.ts\"},\"4\":{\"name\":\"variable.parameter.ts\"},\"5\":{\"name\":\"keyword.operator.optional.ts\"}},\"match\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)\"}]},\"parameter-object-binding-element\":{\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))\",\"end\":\"(?=[,}])\",\"patterns\":[{\"include\":\"#object-binding-element-propertyName\"},{\"include\":\"#parameter-binding-element\"},{\"include\":\"#paren-expression\"}]},{\"include\":\"#parameter-object-binding-pattern\"},{\"include\":\"#destructuring-parameter-rest\"},{\"include\":\"#variable-initializer\"},{\"include\":\"#punctuation-comma\"}]},\"parameter-object-binding-pattern\":{\"begin\":\"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.rest.ts\"},\"2\":{\"name\":\"punctuation.definition.binding-pattern.object.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.binding-pattern.object.ts\"}},\"patterns\":[{\"include\":\"#parameter-object-binding-element\"}]},\"parameter-type-annotation\":{\"patterns\":[{\"begin\":\"(:)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.type.annotation.ts\"}},\"end\":\"(?=[),])|(?==[^>])\",\"name\":\"meta.type.annotation.ts\",\"patterns\":[{\"include\":\"#type\"}]}]},\"paren-expression\":{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"patterns\":[{\"include\":\"#expression\"}]},\"paren-expression-possibly-arrow\":{\"patterns\":[{\"begin\":\"(?<=[(,=])\\\\s*(async)?(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"}},\"end\":\"(?<=\\\\))\",\"patterns\":[{\"include\":\"#paren-expression-possibly-arrow-with-typeparameters\"}]},{\"begin\":\"(?<=[(,=]|=>|^return|[^$._[:alnum:]]return)\\\\s*(async)?(?=\\\\s*((((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()|(<)|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)))\\\\s*$)\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.async.ts\"}},\"end\":\"(?<=\\\\))\",\"patterns\":[{\"include\":\"#paren-expression-possibly-arrow-with-typeparameters\"}]},{\"include\":\"#possibly-arrow-return-type\"}]},\"paren-expression-possibly-arrow-with-typeparameters\":{\"patterns\":[{\"include\":\"#type-parameters\"},{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"patterns\":[{\"include\":\"#expression-inside-possibly-arrow-parens\"}]}]},\"possibly-arrow-return-type\":{\"begin\":\"(?<=\\\\)|^)\\\\s*(:)(?=\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*=>)\",\"beginCaptures\":{\"1\":{\"name\":\"meta.arrow.ts meta.return.type.arrow.ts keyword.operator.type.annotation.ts\"}},\"contentName\":\"meta.arrow.ts meta.return.type.arrow.ts\",\"end\":\"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))\",\"patterns\":[{\"include\":\"#arrow-return-type-body\"}]},\"property-accessor\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(accessor|get|set)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"storage.type.property.ts\"},\"punctuation-accessor\":{\"captures\":{\"1\":{\"name\":\"punctuation.accessor.ts\"},\"2\":{\"name\":\"punctuation.accessor.optional.ts\"}},\"match\":\"(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d))\"},\"punctuation-comma\":{\"match\":\",\",\"name\":\"punctuation.separator.comma.ts\"},\"punctuation-semicolon\":{\"match\":\";\",\"name\":\"punctuation.terminator.statement.ts\"},\"qstring-double\":{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.ts\"}},\"end\":\"(\\\")|([^\\\\n\\\\\\\\])$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.string.end.ts\"},\"2\":{\"name\":\"invalid.illegal.newline.ts\"}},\"name\":\"string.quoted.double.ts\",\"patterns\":[{\"include\":\"#string-character-escape\"}]},\"qstring-single\":{\"begin\":\"'\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.ts\"}},\"end\":\"(')|([^\\\\n\\\\\\\\])$\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.string.end.ts\"},\"2\":{\"name\":\"invalid.illegal.newline.ts\"}},\"name\":\"string.quoted.single.ts\",\"patterns\":[{\"include\":\"#string-character-escape\"}]},\"regex\":{\"patterns\":[{\"begin\":\"(?<!\\\\+\\\\+|--|})(?<=[!(+,:=?\\\\[]|^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case|=>|&&|\\\\|\\\\||\\\\*/)\\\\s*(/)(?![*/])(?=(?:[^()/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)+]|\\\\(([^)\\\\\\\\]|\\\\\\\\.)+\\\\))+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.string.begin.ts\"}},\"end\":\"(/)([dgimsuvy]*)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.string.end.ts\"},\"2\":{\"name\":\"keyword.other.ts\"}},\"name\":\"string.regexp.ts\",\"patterns\":[{\"include\":\"#regexp\"}]},{\"begin\":\"((?<![]$)_[:alnum:]]|\\\\+\\\\+|--|}|\\\\*/)|((?<=^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case))\\\\s*)/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.ts\"}},\"end\":\"(/)([dgimsuvy]*)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.string.end.ts\"},\"2\":{\"name\":\"keyword.other.ts\"}},\"name\":\"string.regexp.ts\",\"patterns\":[{\"include\":\"#regexp\"}]}]},\"regex-character-class\":{\"patterns\":[{\"match\":\"\\\\\\\\[DSWdfnrstvw]|\\\\.\",\"name\":\"constant.other.character-class.regexp\"},{\"match\":\"\\\\\\\\([0-7]{3}|x\\\\h{2}|u\\\\h{4})\",\"name\":\"constant.character.numeric.regexp\"},{\"match\":\"\\\\\\\\c[A-Z]\",\"name\":\"constant.character.control.regexp\"},{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.backslash.regexp\"}]},\"regexp\":{\"patterns\":[{\"match\":\"\\\\\\\\[Bb]|[$^]\",\"name\":\"keyword.control.anchor.regexp\"},{\"captures\":{\"0\":{\"name\":\"keyword.other.back-reference.regexp\"},\"1\":{\"name\":\"variable.other.regexp\"}},\"match\":\"\\\\\\\\(?:[1-9]\\\\d*|k<([$A-Z_a-z][$\\\\w]*)>)\"},{\"match\":\"[*+?]|\\\\{(\\\\d+,\\\\d+|\\\\d+,|,\\\\d+|\\\\d+)}\\\\??\",\"name\":\"keyword.operator.quantifier.regexp\"},{\"match\":\"\\\\|\",\"name\":\"keyword.operator.or.regexp\"},{\"begin\":\"(\\\\()((\\\\?=)|(\\\\?!)|(\\\\?<=)|(\\\\?<!))\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.group.regexp\"},\"2\":{\"name\":\"punctuation.definition.group.assertion.regexp\"},\"3\":{\"name\":\"meta.assertion.look-ahead.regexp\"},\"4\":{\"name\":\"meta.assertion.negative-look-ahead.regexp\"},\"5\":{\"name\":\"meta.assertion.look-behind.regexp\"},\"6\":{\"name\":\"meta.assertion.negative-look-behind.regexp\"}},\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.group.regexp\"}},\"name\":\"meta.group.assertion.regexp\",\"patterns\":[{\"include\":\"#regexp\"}]},{\"begin\":\"\\\\((?:(\\\\?:)|\\\\?<([$A-Z_a-z][$\\\\w]*)>)?\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.regexp\"},\"1\":{\"name\":\"punctuation.definition.group.no-capture.regexp\"},\"2\":{\"name\":\"variable.other.regexp\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.regexp\"}},\"name\":\"meta.group.regexp\",\"patterns\":[{\"include\":\"#regexp\"}]},{\"begin\":\"(\\\\[)(\\\\^)?\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.character-class.regexp\"},\"2\":{\"name\":\"keyword.operator.negation.regexp\"}},\"end\":\"(])\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.character-class.regexp\"}},\"name\":\"constant.other.character-class.set.regexp\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"constant.character.numeric.regexp\"},\"2\":{\"name\":\"constant.character.control.regexp\"},\"3\":{\"name\":\"constant.character.escape.backslash.regexp\"},\"4\":{\"name\":\"constant.character.numeric.regexp\"},\"5\":{\"name\":\"constant.character.control.regexp\"},\"6\":{\"name\":\"constant.character.escape.backslash.regexp\"}},\"match\":\"(?:.|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))-(?:[^]\\\\\\\\]|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))\",\"name\":\"constant.other.character-class.range.regexp\"},{\"include\":\"#regex-character-class\"}]},{\"include\":\"#regex-character-class\"}]},\"return-type\":{\"patterns\":[{\"begin\":\"(?<=\\\\))\\\\s*(:)(?=\\\\s*\\\\S)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.type.annotation.ts\"}},\"end\":\"(?<![\\\\&:|])(?=$|^|[,;{}]|//)\",\"name\":\"meta.return.type.ts\",\"patterns\":[{\"include\":\"#return-type-core\"}]},{\"begin\":\"(?<=\\\\))\\\\s*(:)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.type.annotation.ts\"}},\"end\":\"(?<![\\\\&:|])((?=[,;{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))\",\"name\":\"meta.return.type.ts\",\"patterns\":[{\"include\":\"#return-type-core\"}]}]},\"return-type-core\":{\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"(?<=[\\\\&:|])(?=\\\\s*\\\\{)\",\"end\":\"(?<=})\",\"patterns\":[{\"include\":\"#type-object\"}]},{\"include\":\"#type-predicate-operator\"},{\"include\":\"#type\"}]},\"shebang\":{\"captures\":{\"1\":{\"name\":\"punctuation.definition.comment.ts\"}},\"match\":\"\\\\A(#!).*(?=$)\",\"name\":\"comment.line.shebang.ts\"},\"single-line-comment-consuming-line-ending\":{\"begin\":\"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.whitespace.comment.leading.ts\"},\"2\":{\"name\":\"comment.line.double-slash.ts\"},\"3\":{\"name\":\"punctuation.definition.comment.ts\"},\"4\":{\"name\":\"storage.type.internaldeclaration.ts\"},\"5\":{\"name\":\"punctuation.decorator.internaldeclaration.ts\"}},\"contentName\":\"comment.line.double-slash.ts\",\"end\":\"(?=^)\"},\"statements\":{\"patterns\":[{\"include\":\"#declaration\"},{\"include\":\"#control-statement\"},{\"include\":\"#after-operator-block-as-object-literal\"},{\"include\":\"#decl-block\"},{\"include\":\"#label\"},{\"include\":\"#expression\"},{\"include\":\"#punctuation-semicolon\"},{\"include\":\"#string\"},{\"include\":\"#comment\"}]},\"string\":{\"patterns\":[{\"include\":\"#qstring-single\"},{\"include\":\"#qstring-double\"},{\"include\":\"#template\"}]},\"string-character-escape\":{\"match\":\"\\\\\\\\(x\\\\h{2}|u\\\\h{4}|u\\\\{\\\\h+}|[012][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)\",\"name\":\"constant.character.escape.ts\"},\"super-literal\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))super\\\\b(?!\\\\$)\",\"name\":\"variable.language.super.ts\"},\"support-function-call-identifiers\":{\"patterns\":[{\"include\":\"#literal\"},{\"include\":\"#support-objects\"},{\"include\":\"#object-identifiers\"},{\"include\":\"#punctuation-accessor\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\(\\\\s*[\\\"'`])\",\"name\":\"keyword.operator.expression.import.ts\"}]},\"support-objects\":{\"patterns\":[{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(arguments)\\\\b(?!\\\\$)\",\"name\":\"variable.language.arguments.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(Promise)\\\\b(?!\\\\$)\",\"name\":\"support.class.promise.ts\"},{\"captures\":{\"1\":{\"name\":\"keyword.control.import.ts\"},\"2\":{\"name\":\"punctuation.accessor.ts\"},\"3\":{\"name\":\"punctuation.accessor.optional.ts\"},\"4\":{\"name\":\"support.variable.property.importmeta.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(import)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(meta)\\\\b(?!\\\\$)\"},{\"captures\":{\"1\":{\"name\":\"keyword.operator.new.ts\"},\"2\":{\"name\":\"punctuation.accessor.ts\"},\"3\":{\"name\":\"punctuation.accessor.optional.ts\"},\"4\":{\"name\":\"support.variable.property.target.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(target)\\\\b(?!\\\\$)\"},{\"captures\":{\"1\":{\"name\":\"punctuation.accessor.ts\"},\"2\":{\"name\":\"punctuation.accessor.optional.ts\"},\"3\":{\"name\":\"support.variable.property.ts\"},\"4\":{\"name\":\"support.constant.ts\"}},\"match\":\"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(constructor|length|prototype|__proto__)\\\\b(?!\\\\$|\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\()|(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\\\b(?!\\\\$))\"},{\"captures\":{\"1\":{\"name\":\"support.type.object.module.ts\"},\"2\":{\"name\":\"support.type.object.module.ts\"},\"3\":{\"name\":\"punctuation.accessor.ts\"},\"4\":{\"name\":\"punctuation.accessor.optional.ts\"},\"5\":{\"name\":\"support.type.object.module.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(exports)|(module)(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(exports|id|filename|loaded|parent|children))?)\\\\b(?!\\\\$)\"}]},\"switch-statement\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bswitch\\\\s*\\\\()\",\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"name\":\"switch-statement.expr.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(switch)\\\\s*(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.switch.ts\"},\"2\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"name\":\"switch-expression.expr.ts\",\"patterns\":[{\"include\":\"#expression\"}]},{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"(?=})\",\"name\":\"switch-block.expr.ts\",\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default(?=:))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.switch.ts\"}},\"end\":\"(?=:)\",\"name\":\"case-clause.expr.ts\",\"patterns\":[{\"include\":\"#expression\"}]},{\"begin\":\"(:)\\\\s*(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"case-clause.expr.ts punctuation.definition.section.case-statement.ts\"},\"2\":{\"name\":\"meta.block.ts punctuation.definition.block.ts\"}},\"contentName\":\"meta.block.ts\",\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"meta.block.ts punctuation.definition.block.ts\"}},\"patterns\":[{\"include\":\"#statements\"}]},{\"captures\":{\"0\":{\"name\":\"case-clause.expr.ts punctuation.definition.section.case-statement.ts\"}},\"match\":\"(:)\"},{\"include\":\"#statements\"}]}]},\"template\":{\"patterns\":[{\"include\":\"#template-call\"},{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)?(`)\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.tagged-template.ts\"},\"2\":{\"name\":\"string.template.ts punctuation.definition.string.template.begin.ts\"}},\"contentName\":\"string.template.ts\",\"end\":\"`\",\"endCaptures\":{\"0\":{\"name\":\"string.template.ts punctuation.definition.string.template.end.ts\"}},\"patterns\":[{\"include\":\"#template-substitution-element\"},{\"include\":\"#string-character-escape\"}]}]},\"template-call\":{\"patterns\":[{\"begin\":\"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*)(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?`)\",\"end\":\"(?=`)\",\"patterns\":[{\"begin\":\"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*))\",\"end\":\"(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?`)\",\"patterns\":[{\"include\":\"#support-function-call-identifiers\"},{\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\",\"name\":\"entity.name.function.tagged-template.ts\"}]},{\"include\":\"#type-arguments\"}]},{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)?\\\\s*(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)`)\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.tagged-template.ts\"}},\"end\":\"(?=`)\",\"patterns\":[{\"include\":\"#type-arguments\"}]}]},\"template-substitution-element\":{\"begin\":\"\\\\$\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.template-expression.begin.ts\"}},\"contentName\":\"meta.embedded.line.ts\",\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.template-expression.end.ts\"}},\"name\":\"meta.template.expression.ts\",\"patterns\":[{\"include\":\"#expression\"}]},\"template-type\":{\"patterns\":[{\"include\":\"#template-call\"},{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)?(`)\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.tagged-template.ts\"},\"2\":{\"name\":\"string.template.ts punctuation.definition.string.template.begin.ts\"}},\"contentName\":\"string.template.ts\",\"end\":\"`\",\"endCaptures\":{\"0\":{\"name\":\"string.template.ts punctuation.definition.string.template.end.ts\"}},\"patterns\":[{\"include\":\"#template-type-substitution-element\"},{\"include\":\"#string-character-escape\"}]}]},\"template-type-substitution-element\":{\"begin\":\"\\\\$\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.template-expression.begin.ts\"}},\"contentName\":\"meta.embedded.line.ts\",\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.template-expression.end.ts\"}},\"name\":\"meta.template.expression.ts\",\"patterns\":[{\"include\":\"#type\"}]},\"ternary-expression\":{\"begin\":\"(?!\\\\?\\\\.\\\\s*\\\\D)(\\\\?)(?!\\\\?)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.ternary.ts\"}},\"end\":\"\\\\s*(:)\",\"endCaptures\":{\"1\":{\"name\":\"keyword.operator.ternary.ts\"}},\"patterns\":[{\"include\":\"#expression\"}]},\"this-literal\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))this\\\\b(?!\\\\$)\",\"name\":\"variable.language.this.ts\"},\"type\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#type-string\"},{\"include\":\"#numeric-literal\"},{\"include\":\"#type-primitive\"},{\"include\":\"#type-builtin-literals\"},{\"include\":\"#type-parameters\"},{\"include\":\"#type-tuple\"},{\"include\":\"#type-object\"},{\"include\":\"#type-operators\"},{\"include\":\"#type-conditional\"},{\"include\":\"#type-fn-type-parameters\"},{\"include\":\"#type-paren-or-function-parameters\"},{\"include\":\"#type-function-return-type\"},{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*\"},{\"include\":\"#type-name\"}]},\"type-alias-declaration\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(type)\\\\b\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.type.type.ts\"},\"4\":{\"name\":\"entity.name.type.alias.ts\"}},\"end\":\"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"name\":\"meta.type.declaration.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#type-parameters\"},{\"begin\":\"(=)\\\\s*(intrinsic)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.assignment.ts\"},\"2\":{\"name\":\"keyword.control.intrinsic.ts\"}},\"end\":\"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"patterns\":[{\"include\":\"#type\"}]},{\"begin\":\"(=)\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.assignment.ts\"}},\"end\":\"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"patterns\":[{\"include\":\"#type\"}]}]},\"type-annotation\":{\"patterns\":[{\"begin\":\"(:)(?=\\\\s*\\\\S)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.type.annotation.ts\"}},\"end\":\"(?<![\\\\&:|])(?!\\\\s*[\\\\&|]\\\\s+)((?=^|[]),;}]|//)|(?==[^>])|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))\",\"name\":\"meta.type.annotation.ts\",\"patterns\":[{\"include\":\"#type\"}]},{\"begin\":\"(:)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.type.annotation.ts\"}},\"end\":\"(?<![\\\\&:|])((?=[]),;}]|//)|(?==[^>])|(?=^\\\\s*$)|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))\",\"name\":\"meta.type.annotation.ts\",\"patterns\":[{\"include\":\"#type\"}]}]},\"type-arguments\":{\"begin\":\"<\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.typeparameters.begin.ts\"}},\"end\":\">\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.typeparameters.end.ts\"}},\"name\":\"meta.type.parameters.ts\",\"patterns\":[{\"include\":\"#type-arguments-body\"}]},\"type-arguments-body\":{\"patterns\":[{\"captures\":{\"0\":{\"name\":\"keyword.operator.type.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(_)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\"},{\"include\":\"#type\"},{\"include\":\"#punctuation-comma\"}]},\"type-builtin-literals\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(this|true|false|undefined|null|object)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"support.type.builtin.ts\"},\"type-conditional\":{\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends)\\\\s+\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"}},\"end\":\"(?<=:)\",\"patterns\":[{\"begin\":\"\\\\?\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.operator.ternary.ts\"}},\"end\":\":\",\"endCaptures\":{\"0\":{\"name\":\"keyword.operator.ternary.ts\"}},\"patterns\":[{\"include\":\"#type\"}]},{\"include\":\"#type\"}]}]},\"type-fn-type-parameters\":{\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b(?=\\\\s*<)\",\"beginCaptures\":{\"1\":{\"name\":\"meta.type.constructor.ts storage.modifier.ts\"},\"2\":{\"name\":\"meta.type.constructor.ts keyword.control.new.ts\"}},\"end\":\"(?<=>)\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#type-parameters\"}]},{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b\\\\s*(?=\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"keyword.control.new.ts\"}},\"end\":\"(?<=\\\\))\",\"name\":\"meta.type.constructor.ts\",\"patterns\":[{\"include\":\"#function-parameters\"}]},{\"begin\":\"((?=\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>))))))\",\"end\":\"(?<=\\\\))\",\"name\":\"meta.type.function.ts\",\"patterns\":[{\"include\":\"#function-parameters\"}]}]},\"type-function-return-type\":{\"patterns\":[{\"begin\":\"(=>)(?=\\\\s*\\\\S)\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.function.arrow.ts\"}},\"end\":\"(?<!=>)(?<![\\\\&|])(?=[]),:;=>?{}]|//|$)\",\"name\":\"meta.type.function.return.ts\",\"patterns\":[{\"include\":\"#type-function-return-type-core\"}]},{\"begin\":\"=>\",\"beginCaptures\":{\"0\":{\"name\":\"storage.type.function.arrow.ts\"}},\"end\":\"(?<!=>)(?<![\\\\&|])((?=[]),:;=>?{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))\",\"name\":\"meta.type.function.return.ts\",\"patterns\":[{\"include\":\"#type-function-return-type-core\"}]}]},\"type-function-return-type-core\":{\"patterns\":[{\"include\":\"#comment\"},{\"begin\":\"(?<==>)(?=\\\\s*\\\\{)\",\"end\":\"(?<=})\",\"patterns\":[{\"include\":\"#type-object\"}]},{\"include\":\"#type-predicate-operator\"},{\"include\":\"#type\"}]},\"type-infer\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"keyword.operator.expression.infer.ts\"},\"2\":{\"name\":\"entity.name.type.ts\"},\"3\":{\"name\":\"keyword.operator.expression.extends.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(infer)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s+(extends)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))?\",\"name\":\"meta.type.infer.ts\"}]},\"type-name\":{\"patterns\":[{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(<)\",\"captures\":{\"1\":{\"name\":\"entity.name.type.module.ts\"},\"2\":{\"name\":\"punctuation.accessor.ts\"},\"3\":{\"name\":\"punctuation.accessor.optional.ts\"},\"4\":{\"name\":\"meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts\"}},\"contentName\":\"meta.type.parameters.ts\",\"end\":\"(>)\",\"endCaptures\":{\"1\":{\"name\":\"meta.type.parameters.ts punctuation.definition.typeparameters.end.ts\"}},\"patterns\":[{\"include\":\"#type-arguments-body\"}]},{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(<)\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.type.ts\"},\"2\":{\"name\":\"meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts\"}},\"contentName\":\"meta.type.parameters.ts\",\"end\":\"(>)\",\"endCaptures\":{\"1\":{\"name\":\"meta.type.parameters.ts punctuation.definition.typeparameters.end.ts\"}},\"patterns\":[{\"include\":\"#type-arguments-body\"}]},{\"captures\":{\"1\":{\"name\":\"entity.name.type.module.ts\"},\"2\":{\"name\":\"punctuation.accessor.ts\"},\"3\":{\"name\":\"punctuation.accessor.optional.ts\"}},\"match\":\"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\"},{\"match\":\"[$_[:alpha:]][$_[:alnum:]]*\",\"name\":\"entity.name.type.ts\"}]},\"type-object\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.block.ts\"}},\"name\":\"meta.object.type.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#method-declaration\"},{\"include\":\"#indexer-declaration\"},{\"include\":\"#indexer-mapped-type-declaration\"},{\"include\":\"#field-declaration\"},{\"include\":\"#type-annotation\"},{\"begin\":\"\\\\.\\\\.\\\\.\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.operator.spread.ts\"}},\"end\":\"(?=[,;}]|$)|(?<=})\",\"patterns\":[{\"include\":\"#type\"}]},{\"include\":\"#punctuation-comma\"},{\"include\":\"#punctuation-semicolon\"},{\"include\":\"#type\"}]},\"type-operators\":{\"patterns\":[{\"include\":\"#typeof-operator\"},{\"include\":\"#type-infer\"},{\"begin\":\"([\\\\&|])(?=\\\\s*\\\\{)\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.operator.type.ts\"}},\"end\":\"(?<=})\",\"patterns\":[{\"include\":\"#type-object\"}]},{\"begin\":\"[\\\\&|]\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.operator.type.ts\"}},\"end\":\"(?=\\\\S)\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))keyof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.operator.expression.keyof.ts\"},{\"match\":\"([:?])\",\"name\":\"keyword.operator.ternary.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\()\",\"name\":\"keyword.operator.expression.import.ts\"}]},\"type-parameters\":{\"begin\":\"(<)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.typeparameters.begin.ts\"}},\"end\":\"(>)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.typeparameters.end.ts\"}},\"name\":\"meta.type.parameters.ts\",\"patterns\":[{\"include\":\"#comment\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends|in|out|const)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"storage.modifier.ts\"},{\"include\":\"#type\"},{\"include\":\"#punctuation-comma\"},{\"match\":\"(=)(?!>)\",\"name\":\"keyword.operator.assignment.ts\"}]},\"type-paren-or-function-parameters\":{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.round.ts\"}},\"name\":\"meta.type.paren.cover.ts\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"keyword.operator.rest.ts\"},\"3\":{\"name\":\"entity.name.function.ts variable.language.this.ts\"},\"4\":{\"name\":\"entity.name.function.ts\"},\"5\":{\"name\":\"keyword.operator.optional.ts\"}},\"match\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=\\\\s*(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))))\"},{\"captures\":{\"1\":{\"name\":\"storage.modifier.ts\"},\"2\":{\"name\":\"keyword.operator.rest.ts\"},\"3\":{\"name\":\"variable.parameter.ts variable.language.this.ts\"},\"4\":{\"name\":\"variable.parameter.ts\"},\"5\":{\"name\":\"keyword.operator.optional.ts\"}},\"match\":\"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=:)\"},{\"include\":\"#type-annotation\"},{\"match\":\",\",\"name\":\"punctuation.separator.parameter.ts\"},{\"include\":\"#type\"}]},\"type-predicate-operator\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"keyword.operator.type.asserts.ts\"},\"2\":{\"name\":\"variable.parameter.ts variable.language.this.ts\"},\"3\":{\"name\":\"variable.parameter.ts\"},\"4\":{\"name\":\"keyword.operator.expression.is.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(asserts)\\\\s+)?(?!asserts)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s(is)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\"},{\"captures\":{\"1\":{\"name\":\"keyword.operator.type.asserts.ts\"},\"2\":{\"name\":\"variable.parameter.ts variable.language.this.ts\"},\"3\":{\"name\":\"variable.parameter.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(asserts)\\\\s+(?!is)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))asserts(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.operator.type.asserts.ts\"},{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))is(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"keyword.operator.expression.is.ts\"}]},\"type-primitive\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"support.type.primitive.ts\"},\"type-string\":{\"patterns\":[{\"include\":\"#qstring-single\"},{\"include\":\"#qstring-double\"},{\"include\":\"#template-type\"}]},\"type-tuple\":{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"meta.brace.square.ts\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"meta.brace.square.ts\"}},\"name\":\"meta.type.tuple.ts\",\"patterns\":[{\"match\":\"\\\\.\\\\.\\\\.\",\"name\":\"keyword.operator.rest.ts\"},{\"captures\":{\"1\":{\"name\":\"entity.name.label.ts\"},\"2\":{\"name\":\"keyword.operator.optional.ts\"},\"3\":{\"name\":\"punctuation.separator.label.ts\"}},\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(\\\\?)?\\\\s*(:)\"},{\"include\":\"#type\"},{\"include\":\"#punctuation-comma\"}]},\"typeof-operator\":{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))typeof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.operator.expression.typeof.ts\"}},\"end\":\"(?=[]\\\\&),:;=>?{|}]|(extends\\\\s+)|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)\",\"patterns\":[{\"include\":\"#type-arguments\"},{\"include\":\"#expression\"}]},\"undefined-literal\":{\"match\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))undefined(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\",\"name\":\"constant.language.undefined.ts\"},\"var-expr\":{\"patterns\":[{\"begin\":\"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))\",\"end\":\"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!^let|[^$._[:alnum:]]let|^var|[^$._[:alnum:]]var)(?=\\\\s*$)))\",\"name\":\"meta.var.expr.ts\",\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.type.ts\"}},\"end\":\"(?=\\\\S)\"},{\"include\":\"#destructuring-variable\"},{\"include\":\"#var-single-variable\"},{\"include\":\"#variable-initializer\"},{\"include\":\"#comment\"},{\"begin\":\"(,)\\\\s*(?=$|//)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.separator.comma.ts\"}},\"end\":\"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))\",\"patterns\":[{\"include\":\"#single-line-comment-consuming-line-ending\"},{\"include\":\"#comment\"},{\"include\":\"#destructuring-variable\"},{\"include\":\"#var-single-variable\"},{\"include\":\"#punctuation-comma\"}]},{\"include\":\"#punctuation-comma\"}]},{\"begin\":\"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.type.ts\"}},\"end\":\"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]])const)(?=\\\\s*$)))\",\"name\":\"meta.var.expr.ts\",\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.type.ts\"}},\"end\":\"(?=\\\\S)\"},{\"include\":\"#destructuring-const\"},{\"include\":\"#var-single-const\"},{\"include\":\"#variable-initializer\"},{\"include\":\"#comment\"},{\"begin\":\"(,)\\\\s*(?=$|//)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.separator.comma.ts\"}},\"end\":\"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))\",\"patterns\":[{\"include\":\"#single-line-comment-consuming-line-ending\"},{\"include\":\"#comment\"},{\"include\":\"#destructuring-const\"},{\"include\":\"#var-single-const\"},{\"include\":\"#punctuation-comma\"}]},{\"include\":\"#punctuation-comma\"}]},{\"begin\":\"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.type.ts\"}},\"end\":\"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]]|^await\\\\s+|[^$._[:alnum:]]await\\\\s+)using)(?=\\\\s*$)))\",\"name\":\"meta.var.expr.ts\",\"patterns\":[{\"begin\":\"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.export.ts\"},\"2\":{\"name\":\"storage.modifier.ts\"},\"3\":{\"name\":\"storage.type.ts\"}},\"end\":\"(?=\\\\S)\"},{\"include\":\"#var-single-const\"},{\"include\":\"#variable-initializer\"},{\"include\":\"#comment\"},{\"begin\":\"(,)\\\\s*((?!\\\\S)|(?=//))\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.separator.comma.ts\"}},\"end\":\"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))\",\"patterns\":[{\"include\":\"#single-line-comment-consuming-line-ending\"},{\"include\":\"#comment\"},{\"include\":\"#var-single-const\"},{\"include\":\"#punctuation-comma\"}]},{\"include\":\"#punctuation-comma\"}]}]},\"var-single-const\":{\"patterns\":[{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))\",\"beginCaptures\":{\"1\":{\"name\":\"meta.definition.variable.ts variable.other.constant.ts entity.name.function.ts\"}},\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))\",\"name\":\"meta.var-single-variable.expr.ts\",\"patterns\":[{\"include\":\"#var-single-variable-type-annotation\"}]},{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)\",\"beginCaptures\":{\"1\":{\"name\":\"meta.definition.variable.ts variable.other.constant.ts\"}},\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))\",\"name\":\"meta.var-single-variable.expr.ts\",\"patterns\":[{\"include\":\"#var-single-variable-type-annotation\"}]}]},\"var-single-variable\":{\"patterns\":[{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)(!)?(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\\"'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))\",\"beginCaptures\":{\"1\":{\"name\":\"meta.definition.variable.ts entity.name.function.ts\"},\"2\":{\"name\":\"keyword.operator.definiteassignment.ts\"}},\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))\",\"name\":\"meta.var-single-variable.expr.ts\",\"patterns\":[{\"include\":\"#var-single-variable-type-annotation\"}]},{\"begin\":\"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])(!)?\",\"beginCaptures\":{\"1\":{\"name\":\"meta.definition.variable.ts variable.other.constant.ts\"},\"2\":{\"name\":\"keyword.operator.definiteassignment.ts\"}},\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))\",\"name\":\"meta.var-single-variable.expr.ts\",\"patterns\":[{\"include\":\"#var-single-variable-type-annotation\"}]},{\"begin\":\"([$_[:alpha:]][$_[:alnum:]]*)(!)?\",\"beginCaptures\":{\"1\":{\"name\":\"meta.definition.variable.ts variable.other.readwrite.ts\"},\"2\":{\"name\":\"keyword.operator.definiteassignment.ts\"}},\"end\":\"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))\",\"name\":\"meta.var-single-variable.expr.ts\",\"patterns\":[{\"include\":\"#var-single-variable-type-annotation\"}]}]},\"var-single-variable-type-annotation\":{\"patterns\":[{\"include\":\"#type-annotation\"},{\"include\":\"#string\"},{\"include\":\"#comment\"}]},\"variable-initializer\":{\"patterns\":[{\"begin\":\"(?<![!=])(=)(?!=)(?=\\\\s*\\\\S)(?!\\\\s*.*=>\\\\s*$)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.assignment.ts\"}},\"end\":\"(?=$|^|[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))\",\"patterns\":[{\"include\":\"#expression\"}]},{\"begin\":\"(?<![!=])(=)(?!=)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.assignment.ts\"}},\"end\":\"(?=[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))|(?=^\\\\s*$)|(?<![-\\\\&*+/|])(?<=\\\\S)(?<!=)(?=\\\\s*$)\",\"patterns\":[{\"include\":\"#expression\"}]}]}},\"scopeName\":\"source.ts\",\"aliases\":[\"ts\",\"cts\",\"mts\"]}"))],
			[Object.freeze(JSON.parse("{\"displayName\":\"Shell\",\"name\":\"shellscript\",\"patterns\":[{\"include\":\"#initial_context\"}],\"repository\":{\"alias_statement\":{\"begin\":\"[\\\\t ]*+(alias)[\\\\t ]*+((?:((?<!\\\\w)-\\\\w+)\\\\b[\\\\t ]*+)*)[\\\\t ]*+((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(?:(\\\\[)((?:(?:\\\\$?(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)|@)|\\\\*)|(-?\\\\d+))(]))?(?:(?:(=)|(\\\\+=))|(-=))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.alias.shell\"},\"2\":{\"patterns\":[{\"match\":\"(?<!\\\\w)-\\\\w+\\\\b\",\"name\":\"string.unquoted.argument.shell constant.other.option.shell\"}]},\"3\":{\"name\":\"string.unquoted.argument.shell constant.other.option.shell\"},\"4\":{\"name\":\"variable.other.assignment.shell\"},\"5\":{\"name\":\"punctuation.definition.array.access.shell\"},\"6\":{\"name\":\"variable.other.assignment.shell\"},\"7\":{\"name\":\"constant.numeric.shell constant.numeric.integer.shell\"},\"8\":{\"name\":\"punctuation.definition.array.access.shell\"},\"9\":{\"name\":\"keyword.operator.assignment.shell\"},\"10\":{\"name\":\"keyword.operator.assignment.compound.shell\"},\"11\":{\"name\":\"keyword.operator.assignment.compound.shell\"}},\"end\":\"(?=[\\\\t ]|$)|(?:(?:(?:(;)|(&&))|(\\\\|\\\\|))|(&))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.terminator.statement.semicolon.shell\"},\"2\":{\"name\":\"punctuation.separator.statement.and.shell\"},\"3\":{\"name\":\"punctuation.separator.statement.or.shell\"},\"4\":{\"name\":\"punctuation.separator.statement.background.shell\"}},\"name\":\"meta.expression.assignment.alias.shell\",\"patterns\":[{\"include\":\"#normal_context\"}]},\"argument\":{\"begin\":\"[\\\\t ]++(?![\\\\n#\\\\&(\\\\[|]|$|;)\",\"beginCaptures\":{},\"end\":\"(?=[\\\\t \\\\&;|]|$|[\\\\n)`])\",\"endCaptures\":{},\"name\":\"meta.argument.shell\",\"patterns\":[{\"include\":\"#argument_context\"},{\"include\":\"#line_continuation\"}]},\"argument_context\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"string.unquoted.argument.shell\",\"patterns\":[{\"match\":\"\\\\*\",\"name\":\"variable.language.special.wildcard.shell\"},{\"include\":\"#variable\"},{\"include\":\"#numeric_literal\"},{\"captures\":{\"1\":{\"name\":\"constant.language.$1.shell\"}},\"match\":\"(?<!\\\\w)\\\\b(true|false)\\\\b(?!\\\\w)\"}]}},\"match\":\"[\\\\t ]*+([^\\\\t\\\\n \\\"$\\\\&-);<>\\\\\\\\`|]+(?!>))\"},{\"include\":\"#normal_context\"}]},\"arithmetic_double\":{\"patterns\":[{\"begin\":\"\\\\(\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.arithmetic.double.shell\"}},\"end\":\"\\\\)\\\\s*\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.arithmetic.double.shell\"}},\"name\":\"meta.arithmetic.shell\",\"patterns\":[{\"include\":\"#math\"},{\"include\":\"#string\"}]}]},\"arithmetic_no_dollar\":{\"patterns\":[{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.arithmetic.single.shell\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.arithmetic.single.shell\"}},\"name\":\"meta.arithmetic.shell\",\"patterns\":[{\"include\":\"#math\"},{\"include\":\"#string\"}]}]},\"array_access_inline\":{\"captures\":{\"1\":{\"name\":\"punctuation.section.array.shell\"},\"2\":{\"patterns\":[{\"include\":\"#special_expansion\"},{\"include\":\"#string\"},{\"include\":\"#variable\"}]},\"3\":{\"name\":\"punctuation.section.array.shell\"}},\"match\":\"(\\\\[)([^]\\\\[]+)(])\"},\"array_value\":{\"begin\":\"[\\\\t ]*+((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(?:(\\\\[)((?:(?:\\\\$?(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)|@)|\\\\*)|(-?\\\\d+))(]))?(?:(?:(=)|(\\\\+=))|(-=))[\\\\t ]*+(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"variable.other.assignment.shell\"},\"2\":{\"name\":\"punctuation.definition.array.access.shell\"},\"3\":{\"name\":\"variable.other.assignment.shell\"},\"4\":{\"name\":\"constant.numeric.shell constant.numeric.integer.shell\"},\"5\":{\"name\":\"punctuation.definition.array.access.shell\"},\"6\":{\"name\":\"keyword.operator.assignment.shell\"},\"7\":{\"name\":\"keyword.operator.assignment.compound.shell\"},\"8\":{\"name\":\"keyword.operator.assignment.compound.shell\"},\"9\":{\"name\":\"punctuation.definition.array.shell\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.shell\"}},\"patterns\":[{\"include\":\"#comment\"},{\"captures\":{\"1\":{\"name\":\"variable.other.assignment.array.shell entity.other.attribute-name.shell\"},\"2\":{\"name\":\"keyword.operator.assignment.shell punctuation.definition.assignment.shell\"}},\"match\":\"((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(=)\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.bracket.named-array.shell\"},\"2\":{\"name\":\"string.unquoted.shell entity.other.attribute-name.bracket.shell\"},\"3\":{\"name\":\"punctuation.definition.bracket.named-array.shell\"},\"4\":{\"name\":\"punctuation.definition.assignment.shell\"}},\"match\":\"(\\\\[)(.+?)(])(=)\"},{\"include\":\"#normal_context\"},{\"include\":\"#simple_unquoted\"}]},\"assignment_statement\":{\"patterns\":[{\"include\":\"#array_value\"},{\"include\":\"#modified_assignment_statement\"},{\"include\":\"#normal_assignment_statement\"}]},\"basic_command_name\":{\"captures\":{\"1\":{\"name\":\"storage.modifier.$1.shell\"},\"2\":{\"name\":\"entity.name.function.call.shell entity.name.command.shell\",\"patterns\":[{\"match\":\"(?<!\\\\w)(?:continue|return|break)(?!\\\\w)\",\"name\":\"keyword.control.$0.shell\"},{\"match\":\"(?<!\\\\w)(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|[.:])(?!/)(?!\\\\w)(?!-)\",\"name\":\"support.function.builtin.shell\"},{\"include\":\"#variable\"}]}},\"match\":\"(?![\\\\n!#\\\\&()<>\\\\[{|]|$|[\\\\t ;])(?!nocorrect |nocorrect\\\\t|nocorrect$|readonly |readonly\\\\t|readonly$|function |function\\\\t|function$|foreach |foreach\\\\t|foreach$|coproc |coproc\\\\t|coproc$|logout |logout\\\\t|logout$|export |export\\\\t|export$|select |select\\\\t|select$|repeat |repeat\\\\t|repeat$|pushd |pushd\\\\t|pushd$|until |until\\\\t|until$|while |while\\\\t|while$|local |local\\\\t|local$|case |case\\\\t|case$|done |done\\\\t|done$|elif |elif\\\\t|elif$|else |else\\\\t|else$|esac |esac\\\\t|esac$|popd |popd\\\\t|popd$|then |then\\\\t|then$|time |time\\\\t|time$|for |for\\\\t|for$|end |end\\\\t|end$|fi |fi\\\\t|fi$|do |do\\\\t|do$|in |in\\\\t|in$|if |if\\\\t|if$)(?:((?<=^|[\\\\t \\\\&;])(?:readonly|declare|typeset|export|local)(?=[\\\\t \\\\&;]|$))|((?![\\\"']|\\\\\\\\\\\\n?$)[^\\\\t\\\\n\\\\r !\\\"'<>]+?))(?:(?=[\\\\t ])|(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\))\",\"name\":\"meta.statement.command.name.basic.shell\"},\"block_comment\":{\"begin\":\"\\\\s*+(/\\\\*)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.comment.begin.shell\"}},\"end\":\"\\\\*/\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.end.shell\"}},\"name\":\"comment.block.shell\"},\"boolean\":{\"match\":\"\\\\b(?:true|false)\\\\b\",\"name\":\"constant.language.$0.shell\"},\"case_statement\":{\"begin\":\"\\\\b(case)\\\\b[\\\\t ]*+(.+?)[\\\\t ]*+\\\\b(in)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.case.shell\"},\"2\":{\"patterns\":[{\"include\":\"#initial_context\"}]},\"3\":{\"name\":\"keyword.control.in.shell\"}},\"end\":\"\\\\besac\\\\b\",\"endCaptures\":{\"0\":{\"name\":\"keyword.control.esac.shell\"}},\"name\":\"meta.case.shell\",\"patterns\":[{\"include\":\"#comment\"},{\"captures\":{\"1\":{\"name\":\"keyword.operator.pattern.case.default.shell\"}},\"match\":\"[\\\\t ]*+(\\\\* *\\\\))\"},{\"begin\":\"(?<!\\\\))(?![\\\\t ]*+(?:esac\\\\b|$))\",\"beginCaptures\":{},\"end\":\"(?=\\\\besac\\\\b)|(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"keyword.operator.pattern.case.shell\"}},\"name\":\"meta.case.entry.pattern.shell\",\"patterns\":[{\"include\":\"#case_statement_context\"}]},{\"begin\":\"(?<=\\\\))\",\"beginCaptures\":{},\"end\":\"(;;)|(?=\\\\besac\\\\b)\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.terminator.statement.case.shell\"}},\"name\":\"meta.case.entry.body.shell\",\"patterns\":[{\"include\":\"#typical_statements\"},{\"include\":\"#initial_context\"}]}]},\"case_statement_context\":{\"patterns\":[{\"match\":\"\\\\*\",\"name\":\"variable.language.special.quantifier.star.shell keyword.operator.quantifier.star.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell\"},{\"match\":\"\\\\+\",\"name\":\"variable.language.special.quantifier.plus.shell keyword.operator.quantifier.plus.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell\"},{\"match\":\"\\\\?\",\"name\":\"variable.language.special.quantifier.question.shell keyword.operator.quantifier.question.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell\"},{\"match\":\"@\",\"name\":\"variable.language.special.at.shell keyword.operator.at.shell punctuation.definition.regex.at.shell\"},{\"match\":\"\\\\|\",\"name\":\"keyword.operator.orvariable.language.special.or.shell keyword.operator.alternation.ruby.shell punctuation.definition.regex.alternation.shell punctuation.separator.regex.alternation.shell\"},{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.shell\"},{\"match\":\"(?<=\\\\tin| in|[\\\\t ]|;;)\\\\(\",\"name\":\"keyword.operator.pattern.case.shell\"},{\"begin\":\"(?<=\\\\S)(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.group.shell punctuation.definition.regex.group.shell\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.shell punctuation.definition.regex.group.shell\"}},\"name\":\"meta.parenthese.shell\",\"patterns\":[{\"include\":\"#case_statement_context\"}]},{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.character-class.shell\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.character-class.shell\"}},\"name\":\"string.regexp.character-class.shell\",\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.shell\"}]},{\"include\":\"#string\"},{\"match\":\"[^\\\\t\\\\n )*?@\\\\[|]\",\"name\":\"string.unquoted.pattern.shell string.regexp.unquoted.shell\"}]},\"command_name_range\":{\"begin\":\"\\\\G\",\"beginCaptures\":{},\"end\":\"(?=[\\\\t \\\\&;|]|$|[\\\\n)`])|(?=<)\",\"endCaptures\":{},\"name\":\"meta.statement.command.name.shell\",\"patterns\":[{\"match\":\"(?<!\\\\w)(?:continue|return|break)(?!\\\\w)\",\"name\":\"entity.name.function.call.shell entity.name.command.shell keyword.control.$0.shell\"},{\"match\":\"(?<!\\\\w)(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|[.:])(?!/)(?!\\\\w)(?!-)\",\"name\":\"entity.name.function.call.shell entity.name.command.shell support.function.builtin.shell\"},{\"include\":\"#variable\"},{\"captures\":{\"1\":{\"name\":\"entity.name.function.call.shell entity.name.command.shell\"}},\"match\":\"(?<!\\\\w)(?<=\\\\G|[\\\"')}])([^\\\\t\\\\n\\\\r \\\"\\\\&');->`{|]+)\"},{\"begin\":\"(?:\\\\G|(?<![\\\\t\\\\n #\\\\&;{|]))(\\\\$?)((\\\")|('))\",\"beginCaptures\":{\"1\":{\"name\":\"meta.statement.command.name.quoted.shell punctuation.definition.string.shell entity.name.function.call.shell entity.name.command.shell\"},\"2\":{},\"3\":{\"name\":\"meta.statement.command.name.quoted.shell string.quoted.double.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell\"},\"4\":{\"name\":\"meta.statement.command.name.quoted.shell string.quoted.single.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell\"}},\"end\":\"(?<!\\\\G)(?<=\\\\2)\",\"endCaptures\":{},\"patterns\":[{\"include\":\"#continuation_of_single_quoted_command_name\"},{\"include\":\"#continuation_of_double_quoted_command_name\"}]},{\"include\":\"#line_continuation\"},{\"include\":\"#simple_unquoted\"}]},\"command_statement\":{\"begin\":\"[\\\\t ]*+(?![\\\\n!#\\\\&()<>\\\\[{|]|$|[\\\\t ;])(?!nocorrect |nocorrect\\\\t|nocorrect$|readonly |readonly\\\\t|readonly$|function |function\\\\t|function$|foreach |foreach\\\\t|foreach$|coproc |coproc\\\\t|coproc$|logout |logout\\\\t|logout$|export |export\\\\t|export$|select |select\\\\t|select$|repeat |repeat\\\\t|repeat$|pushd |pushd\\\\t|pushd$|until |until\\\\t|until$|while |while\\\\t|while$|local |local\\\\t|local$|case |case\\\\t|case$|done |done\\\\t|done$|elif |elif\\\\t|elif$|else |else\\\\t|else$|esac |esac\\\\t|esac$|popd |popd\\\\t|popd$|then |then\\\\t|then$|time |time\\\\t|time$|for |for\\\\t|for$|end |end\\\\t|end$|fi |fi\\\\t|fi$|do |do\\\\t|do$|in |in\\\\t|in$|if |if\\\\t|if$)(?!\\\\\\\\\\\\n?$)\",\"beginCaptures\":{},\"end\":\"(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"name\":\"meta.statement.command.shell\",\"patterns\":[{\"include\":\"#command_name_range\"},{\"include\":\"#line_continuation\"},{\"include\":\"#option\"},{\"include\":\"#argument\"},{\"include\":\"#string\"},{\"include\":\"#heredoc\"}]},\"comment\":{\"captures\":{\"1\":{\"name\":\"comment.line.number-sign.shell meta.shebang.shell\"},\"2\":{\"name\":\"punctuation.definition.comment.shebang.shell\"},\"3\":{\"name\":\"comment.line.number-sign.shell\"},\"4\":{\"name\":\"punctuation.definition.comment.shell\"}},\"match\":\"(?:^|[\\\\t ]++)(?:((#!).*)|((#).*))\"},\"comments\":{\"patterns\":[{\"include\":\"#block_comment\"},{\"include\":\"#line_comment\"}]},\"compound-command\":{\"patterns\":[{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.logical-expression.shell\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.logical-expression.shell\"}},\"name\":\"meta.scope.logical-expression.shell\",\"patterns\":[{\"include\":\"#logical-expression\"},{\"include\":\"#initial_context\"}]},{\"begin\":\"(?<=\\\\s|^)\\\\{(?=\\\\s|$)\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.shell\"}},\"end\":\"(?<=^|;)\\\\s*(})\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.group.shell\"}},\"name\":\"meta.scope.group.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]}]},\"continuation_of_double_quoted_command_name\":{\"begin\":\"\\\\G(?<=\\\")\",\"beginCaptures\":{},\"contentName\":\"meta.statement.command.name.continuation string.quoted.double entity.name.function.call entity.name.command\",\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"string.quoted.double.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell\"}},\"patterns\":[{\"match\":\"\\\\\\\\[\\\\n\\\"$\\\\\\\\`]\",\"name\":\"constant.character.escape.shell\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"}]},\"continuation_of_single_quoted_command_name\":{\"begin\":\"\\\\G(?<=')\",\"beginCaptures\":{},\"contentName\":\"meta.statement.command.name.continuation string.quoted.single entity.name.function.call entity.name.command\",\"end\":\"'\",\"endCaptures\":{\"0\":{\"name\":\"string.quoted.single.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell\"}}},\"custom_command_names\":{\"patterns\":[]},\"custom_commands\":{\"patterns\":[]},\"double_quote_context\":{\"patterns\":[{\"match\":\"\\\\\\\\[\\\\n\\\"$\\\\\\\\`]\",\"name\":\"constant.character.escape.shell\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"}]},\"double_quote_escape_char\":{\"match\":\"\\\\\\\\[\\\\n\\\"$\\\\\\\\`]\",\"name\":\"constant.character.escape.shell\"},\"floating_keyword\":{\"patterns\":[{\"match\":\"(?<=^|[\\\\t \\\\&;])(?:then|elif|else|done|end|do|if|fi)(?=[\\\\t \\\\&;]|$)\",\"name\":\"keyword.control.$0.shell\"}]},\"for_statement\":{\"patterns\":[{\"begin\":\"\\\\b(for)\\\\b[\\\\t ]*+((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))[\\\\t ]*+\\\\b(in)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.for.shell\"},\"2\":{\"name\":\"variable.other.for.shell\"},\"3\":{\"name\":\"keyword.control.in.shell\"}},\"end\":\"(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"name\":\"meta.for.in.shell\",\"patterns\":[{\"include\":\"#string\"},{\"include\":\"#simple_unquoted\"},{\"include\":\"#normal_context\"}]},{\"begin\":\"\\\\b(for)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.for.shell\"}},\"end\":\"(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"name\":\"meta.for.shell\",\"patterns\":[{\"include\":\"#arithmetic_double\"},{\"include\":\"#normal_context\"}]}]},\"function_definition\":{\"applyEndPatternLast\":1,\"begin\":\"[\\\\t ]*+(?:\\\\b(function)\\\\b[\\\\t ]*+([^\\\\t\\\\n\\\\r \\\"'()=]+)(?:(\\\\()[\\\\t ]*+(\\\\)))?|([^\\\\t\\\\n\\\\r \\\"'()=]+)[\\\\t ]*+(\\\\()[\\\\t ]*+(\\\\)))\",\"beginCaptures\":{\"1\":{\"name\":\"storage.type.function.shell\"},\"2\":{\"name\":\"entity.name.function.shell\"},\"3\":{\"name\":\"punctuation.definition.arguments.shell\"},\"4\":{\"name\":\"punctuation.definition.arguments.shell\"},\"5\":{\"name\":\"entity.name.function.shell\"},\"6\":{\"name\":\"punctuation.definition.arguments.shell\"},\"7\":{\"name\":\"punctuation.definition.arguments.shell\"}},\"end\":\"(?<=[)}])\",\"endCaptures\":{},\"name\":\"meta.function.shell\",\"patterns\":[{\"match\":\"\\\\G[\\\\t\\\\n ]\"},{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.shell punctuation.section.function.definition.shell\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.shell punctuation.section.function.definition.shell\"}},\"name\":\"meta.function.body.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]},{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.shell punctuation.section.function.definition.shell\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.shell punctuation.section.function.definition.shell\"}},\"name\":\"meta.function.body.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]},{\"include\":\"#initial_context\"}]},\"heredoc\":{\"patterns\":[{\"begin\":\"((?<!<)<<-)[\\\\t ]*+([\\\"'])[\\\\t ]*+([^\\\"']+?)(?=[\\\"\\\\&';<\\\\s])(\\\\2)(.*)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.heredoc.shell\"},\"2\":{\"name\":\"punctuation.definition.string.heredoc.quote.shell\"},\"3\":{\"name\":\"punctuation.definition.string.heredoc.delimiter.shell\"},\"4\":{\"name\":\"punctuation.definition.string.heredoc.quote.shell\"},\"5\":{\"patterns\":[{\"include\":\"#redirect_fix\"},{\"include\":\"#typical_statements\"}]}},\"contentName\":\"string.quoted.heredoc.indent.$3\",\"end\":\"^\\\\t*\\\\3(?=[\\\\&;\\\\s]|$)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.heredoc.$0.shell\"}},\"patterns\":[]},{\"begin\":\"((?<!<)<<(?!<))[\\\\t ]*+([\\\"'])[\\\\t ]*+([^\\\"']+?)(?=[\\\"\\\\&';<\\\\s])(\\\\2)(.*)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.heredoc.shell\"},\"2\":{\"name\":\"punctuation.definition.string.heredoc.quote.shell\"},\"3\":{\"name\":\"punctuation.definition.string.heredoc.delimiter.shell\"},\"4\":{\"name\":\"punctuation.definition.string.heredoc.quote.shell\"},\"5\":{\"patterns\":[{\"include\":\"#redirect_fix\"},{\"include\":\"#typical_statements\"}]}},\"contentName\":\"string.quoted.heredoc.no-indent.$3\",\"end\":\"^\\\\3(?=[\\\\&;\\\\s]|$)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.heredoc.delimiter.shell\"}},\"patterns\":[]},{\"begin\":\"((?<!<)<<-)[\\\\t ]*+([^\\\\t \\\"']+)(?=[\\\"\\\\&';<\\\\s])(.*)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.heredoc.shell\"},\"2\":{\"name\":\"punctuation.definition.string.heredoc.delimiter.shell\"},\"3\":{\"patterns\":[{\"include\":\"#redirect_fix\"},{\"include\":\"#typical_statements\"}]}},\"contentName\":\"string.unquoted.heredoc.indent.$2\",\"end\":\"^\\\\t*\\\\2(?=[\\\\&;\\\\s]|$)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.heredoc.delimiter.shell\"}},\"patterns\":[{\"include\":\"#double_quote_escape_char\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"}]},{\"begin\":\"((?<!<)<<(?!<))[\\\\t ]*+([^\\\\t \\\"']+)(?=[\\\"\\\\&';<\\\\s])(.*)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.heredoc.shell\"},\"2\":{\"name\":\"punctuation.definition.string.heredoc.delimiter.shell\"},\"3\":{\"patterns\":[{\"include\":\"#redirect_fix\"},{\"include\":\"#typical_statements\"}]}},\"contentName\":\"string.unquoted.heredoc.no-indent.$2\",\"end\":\"^\\\\2(?=[\\\\&;\\\\s]|$)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.heredoc.delimiter.shell\"}},\"patterns\":[{\"include\":\"#double_quote_escape_char\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"}]}]},\"herestring\":{\"patterns\":[{\"begin\":\"(<<<)\\\\s*(('))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.herestring.shell\"},\"2\":{\"name\":\"string.quoted.single.shell\"},\"3\":{\"name\":\"punctuation.definition.string.begin.shell\"}},\"contentName\":\"string.quoted.single.shell\",\"end\":\"(')\",\"endCaptures\":{\"0\":{\"name\":\"string.quoted.single.shell\"},\"1\":{\"name\":\"punctuation.definition.string.end.shell\"}},\"name\":\"meta.herestring.shell\"},{\"begin\":\"(<<<)\\\\s*((\\\"))\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.herestring.shell\"},\"2\":{\"name\":\"string.quoted.double.shell\"},\"3\":{\"name\":\"punctuation.definition.string.begin.shell\"}},\"contentName\":\"string.quoted.double.shell\",\"end\":\"(\\\")\",\"endCaptures\":{\"0\":{\"name\":\"string.quoted.double.shell\"},\"1\":{\"name\":\"punctuation.definition.string.end.shell\"}},\"name\":\"meta.herestring.shell\",\"patterns\":[{\"include\":\"#double_quote_context\"}]},{\"captures\":{\"1\":{\"name\":\"keyword.operator.herestring.shell\"},\"2\":{\"name\":\"string.unquoted.herestring.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]}},\"match\":\"(<<<)\\\\s*(([^)\\\\\\\\\\\\s]|\\\\\\\\.)+)\",\"name\":\"meta.herestring.shell\"}]},\"initial_context\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#pipeline\"},{\"include\":\"#normal_statement_seperator\"},{\"include\":\"#logical_expression_double\"},{\"include\":\"#logical_expression_single\"},{\"include\":\"#assignment_statement\"},{\"include\":\"#case_statement\"},{\"include\":\"#for_statement\"},{\"include\":\"#loop\"},{\"include\":\"#function_definition\"},{\"include\":\"#line_continuation\"},{\"include\":\"#arithmetic_double\"},{\"include\":\"#misc_ranges\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"},{\"include\":\"#heredoc\"},{\"include\":\"#herestring\"},{\"include\":\"#redirection\"},{\"include\":\"#pathname\"},{\"include\":\"#floating_keyword\"},{\"include\":\"#alias_statement\"},{\"include\":\"#normal_statement\"},{\"include\":\"#string\"},{\"include\":\"#support\"}]},\"inline_comment\":{\"captures\":{\"1\":{\"name\":\"comment.block.shell punctuation.definition.comment.begin.shell\"},\"2\":{\"name\":\"comment.block.shell\"},\"3\":{\"patterns\":[{\"match\":\"\\\\*/\",\"name\":\"comment.block.shell punctuation.definition.comment.end.shell\"},{\"match\":\"\\\\*\",\"name\":\"comment.block.shell\"}]}},\"match\":\"(/\\\\*)((?:[^*]|\\\\*++[^/])*+(\\\\*++/))\"},\"interpolation\":{\"patterns\":[{\"include\":\"#arithmetic_dollar\"},{\"include\":\"#subshell_dollar\"},{\"begin\":\"`\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.evaluation.backticks.shell\"}},\"end\":\"`\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.evaluation.backticks.shell\"}},\"name\":\"string.interpolated.backtick.shell\",\"patterns\":[{\"match\":\"\\\\\\\\[$\\\\\\\\`]\",\"name\":\"constant.character.escape.shell\"},{\"begin\":\"(?<=\\\\W)(?=#)(?!#\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.whitespace.comment.leading.shell\"}},\"end\":\"(?!\\\\G)\",\"patterns\":[{\"begin\":\"#\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.comment.shell\"}},\"end\":\"(?=`)\",\"name\":\"comment.line.number-sign.shell\"}]},{\"include\":\"#initial_context\"}]}]},\"keyword\":{\"patterns\":[{\"match\":\"(?<=^|[\\\\&;\\\\s])(then|else|elif|fi|for|in|do|done|select|continue|esac|while|until|return)(?=[\\\\&;\\\\s]|$)\",\"name\":\"keyword.control.shell\"},{\"match\":\"(?<=^|[\\\\&;\\\\s])(?:export|declare|typeset|local|readonly)(?=[\\\\&;\\\\s]|$)\",\"name\":\"storage.modifier.shell\"}]},\"line_comment\":{\"begin\":\"\\\\s*+(//)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.comment.shell\"}},\"end\":\"(?<=\\\\n)(?<!\\\\\\\\\\\\n)\",\"endCaptures\":{},\"name\":\"comment.line.double-slash.shell\",\"patterns\":[{\"include\":\"#line_continuation_character\"}]},\"line_continuation\":{\"match\":\"\\\\\\\\(?=\\\\n)\",\"name\":\"constant.character.escape.line-continuation.shell\"},\"logical-expression\":{\"patterns\":[{\"include\":\"#arithmetic_no_dollar\"},{\"match\":\"=[=~]?|!=?|[<>]|&&|\\\\|\\\\|\",\"name\":\"keyword.operator.logical.shell\"},{\"match\":\"(?<!\\\\S)-(nt|ot|ef|eq|ne|l[et]|g[et]|[GLNOSa-hknopr-uwxz])\\\\b\",\"name\":\"keyword.operator.logical.shell\"}]},\"logical_expression_context\":{\"patterns\":[{\"include\":\"#regex_comparison\"},{\"include\":\"#arithmetic_no_dollar\"},{\"include\":\"#logical-expression\"},{\"include\":\"#logical_expression_single\"},{\"include\":\"#logical_expression_double\"},{\"include\":\"#comment\"},{\"include\":\"#boolean\"},{\"include\":\"#redirect_number\"},{\"include\":\"#numeric_literal\"},{\"include\":\"#pipeline\"},{\"include\":\"#normal_statement_seperator\"},{\"include\":\"#string\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"},{\"include\":\"#heredoc\"},{\"include\":\"#herestring\"},{\"include\":\"#pathname\"},{\"include\":\"#floating_keyword\"},{\"include\":\"#support\"}]},\"logical_expression_double\":{\"begin\":\"\\\\[\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.logical-expression.shell\"}},\"end\":\"]]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.logical-expression.shell\"}},\"name\":\"meta.scope.logical-expression.shell\",\"patterns\":[{\"include\":\"#logical_expression_context\"}]},\"logical_expression_single\":{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.logical-expression.shell\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.logical-expression.shell\"}},\"name\":\"meta.scope.logical-expression.shell\",\"patterns\":[{\"include\":\"#logical_expression_context\"}]},\"loop\":{\"patterns\":[{\"begin\":\"(?<=^|[\\\\&;\\\\s])(for)\\\\s+(.+?)\\\\s+(in)(?=[\\\\&;\\\\s]|$)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.shell\"},\"2\":{\"name\":\"variable.other.loop.shell\",\"patterns\":[{\"include\":\"#string\"}]},\"3\":{\"name\":\"keyword.control.shell\"}},\"end\":\"(?<=^|[\\\\&;\\\\s])done(?=[\\\\&;\\\\s]|$|\\\\))\",\"endCaptures\":{\"0\":{\"name\":\"keyword.control.shell\"}},\"name\":\"meta.scope.for-in-loop.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]},{\"begin\":\"(?<=^|[\\\\&;\\\\s])(while|until)(?=[\\\\&;\\\\s]|$)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.shell\"}},\"end\":\"(?<=^|[\\\\&;\\\\s])done(?=[\\\\&;\\\\s]|$|\\\\))\",\"endCaptures\":{\"0\":{\"name\":\"keyword.control.shell\"}},\"name\":\"meta.scope.while-loop.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]},{\"begin\":\"(?<=^|[\\\\&;\\\\s])(select)\\\\s+((?:[^\\\\\\\\\\\\s]|\\\\\\\\.)+)(?=[\\\\&;\\\\s]|$)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.shell\"},\"2\":{\"name\":\"variable.other.loop.shell\"}},\"end\":\"(?<=^|[\\\\&;\\\\s])(done)(?=[\\\\&;\\\\s]|$|\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"keyword.control.shell\"}},\"name\":\"meta.scope.select-block.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]},{\"begin\":\"(?<=^|[\\\\&;\\\\s])if(?=[\\\\&;\\\\s]|$)\",\"beginCaptures\":{\"0\":{\"name\":\"keyword.control.if.shell\"}},\"end\":\"(?<=^|[\\\\&;\\\\s])fi(?=[\\\\&;\\\\s]|$)\",\"endCaptures\":{\"0\":{\"name\":\"keyword.control.fi.shell\"}},\"name\":\"meta.scope.if-block.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]}]},\"math\":{\"patterns\":[{\"include\":\"#variable\"},{\"match\":\"\\\\+{1,2}|-{1,2}|[!~]|\\\\*{1,2}|[%/]|<[<=]?|>[=>]?|==|!=|^|\\\\|{1,2}|&{1,2}|[,:=?]|[-%\\\\&*+/^|]=|<<=|>>=\",\"name\":\"keyword.operator.arithmetic.shell\"},{\"match\":\"0[Xx]\\\\h+\",\"name\":\"constant.numeric.hex.shell\"},{\"match\":\";\",\"name\":\"punctuation.separator.semicolon.range\"},{\"match\":\"0\\\\d+\",\"name\":\"constant.numeric.octal.shell\"},{\"match\":\"\\\\d{1,2}#[0-9@-Z_a-z]+\",\"name\":\"constant.numeric.other.shell\"},{\"match\":\"\\\\d+\",\"name\":\"constant.numeric.integer.shell\"},{\"match\":\"(?<!\\\\w)[0-9A-Z_a-z]+(?!\\\\w)\",\"name\":\"variable.other.normal.shell\"}]},\"math_operators\":{\"patterns\":[{\"match\":\"\\\\+{1,2}|-{1,2}|[!~]|\\\\*{1,2}|[%/]|<[<=]?|>[=>]?|==|!=|^|\\\\|{1,2}|&{1,2}|[,:=?]|[-%\\\\&*+/^|]=|<<=|>>=\",\"name\":\"keyword.operator.arithmetic.shell\"},{\"match\":\"0[Xx]\\\\h+\",\"name\":\"constant.numeric.hex.shell\"},{\"match\":\"0\\\\d+\",\"name\":\"constant.numeric.octal.shell\"},{\"match\":\"\\\\d{1,2}#[0-9@-Z_a-z]+\",\"name\":\"constant.numeric.other.shell\"},{\"match\":\"\\\\d+\",\"name\":\"constant.numeric.integer.shell\"}]},\"misc_ranges\":{\"patterns\":[{\"include\":\"#logical_expression_single\"},{\"include\":\"#logical_expression_double\"},{\"include\":\"#subshell_dollar\"},{\"begin\":\"(?<![^\\\\t ])(\\\\{)(?![$\\\\w])\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.group.shell\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.group.shell\"}},\"name\":\"meta.scope.group.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]}]},\"modified_assignment_statement\":{\"begin\":\"(?<=^|[\\\\t \\\\&;])(?:readonly|declare|typeset|export|local)(?=[\\\\t \\\\&;]|$)\",\"beginCaptures\":{\"0\":{\"name\":\"storage.modifier.$0.shell\"}},\"end\":\"(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"name\":\"meta.statement.shell meta.expression.assignment.modified.shell\",\"patterns\":[{\"match\":\"(?<!\\\\w)-\\\\w+\\\\b\",\"name\":\"string.unquoted.argument.shell constant.other.option.shell\"},{\"include\":\"#array_value\"},{\"captures\":{\"1\":{\"name\":\"variable.other.assignment.shell\"},\"2\":{\"name\":\"punctuation.definition.array.access.shell\"},\"3\":{\"name\":\"variable.other.assignment.shell\"},\"4\":{\"name\":\"constant.numeric.shell constant.numeric.integer.shell\"},\"5\":{\"name\":\"punctuation.definition.array.access.shell\"},\"6\":{\"name\":\"keyword.operator.assignment.shell\"},\"7\":{\"name\":\"keyword.operator.assignment.compound.shell\"},\"8\":{\"name\":\"keyword.operator.assignment.compound.shell\"},\"9\":{\"name\":\"constant.numeric.shell constant.numeric.hex.shell\"},\"10\":{\"name\":\"constant.numeric.shell constant.numeric.octal.shell\"},\"11\":{\"name\":\"constant.numeric.shell constant.numeric.other.shell\"},\"12\":{\"name\":\"constant.numeric.shell constant.numeric.decimal.shell\"},\"13\":{\"name\":\"constant.numeric.shell constant.numeric.version.shell\"},\"14\":{\"name\":\"constant.numeric.shell constant.numeric.integer.shell\"}},\"match\":\"((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(?:(\\\\[)((?:(?:\\\\$?(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)|@)|\\\\*)|(-?\\\\d+))(]))?(?:(?:(=)|(\\\\+=))|(-=))?(?:(?<=[\\\\t =]|^|[(\\\\[{])(?:(?:(?:(?:(?:(0[Xx]\\\\h+)|(0\\\\d+))|(\\\\d{1,2}#[0-9@-Z_a-z]+))|(-?\\\\d+\\\\.\\\\d+))|(-?\\\\d+(?:\\\\.\\\\d+)+))|(-?\\\\d+))(?=[\\\\t ]|$|[);}]))?\"},{\"include\":\"#normal_context\"}]},\"modifiers\":{\"match\":\"(?<=^|[\\\\t \\\\&;])(?:readonly|declare|typeset|export|local)(?=[\\\\t \\\\&;]|$)\",\"name\":\"storage.modifier.$0.shell\"},\"normal_assignment_statement\":{\"begin\":\"[\\\\t ]*+((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(?:(\\\\[)((?:(?:\\\\$?(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)|@)|\\\\*)|(-?\\\\d+))(]))?(?:(?:(=)|(\\\\+=))|(-=))\",\"beginCaptures\":{\"1\":{\"name\":\"variable.other.assignment.shell\"},\"2\":{\"name\":\"punctuation.definition.array.access.shell\"},\"3\":{\"name\":\"variable.other.assignment.shell\"},\"4\":{\"name\":\"constant.numeric.shell constant.numeric.integer.shell\"},\"5\":{\"name\":\"punctuation.definition.array.access.shell\"},\"6\":{\"name\":\"keyword.operator.assignment.shell\"},\"7\":{\"name\":\"keyword.operator.assignment.compound.shell\"},\"8\":{\"name\":\"keyword.operator.assignment.compound.shell\"}},\"end\":\"(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"name\":\"meta.expression.assignment.shell\",\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#string\"},{\"include\":\"#normal_assignment_statement\"},{\"begin\":\"(?<=[\\\\t ])(?![\\\\t ]|\\\\w+=)\",\"beginCaptures\":{},\"end\":\"(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"name\":\"meta.statement.command.env.shell\",\"patterns\":[{\"include\":\"#command_name_range\"},{\"include\":\"#line_continuation\"},{\"include\":\"#option\"},{\"include\":\"#argument\"},{\"include\":\"#string\"}]},{\"include\":\"#simple_unquoted\"},{\"include\":\"#normal_context\"}]},\"normal_context\":{\"patterns\":[{\"include\":\"#comment\"},{\"include\":\"#pipeline\"},{\"include\":\"#normal_statement_seperator\"},{\"include\":\"#misc_ranges\"},{\"include\":\"#boolean\"},{\"include\":\"#redirect_number\"},{\"include\":\"#numeric_literal\"},{\"include\":\"#string\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"},{\"include\":\"#heredoc\"},{\"include\":\"#herestring\"},{\"include\":\"#redirection\"},{\"include\":\"#pathname\"},{\"include\":\"#floating_keyword\"},{\"include\":\"#support\"},{\"include\":\"#parenthese\"}]},\"normal_statement\":{\"begin\":\"(?!^[\\\\t ]*+$)(?:(?<=(?:^until| until|\\\\tuntil|^while| while|\\\\twhile|^elif| elif|\\\\telif|^else| else|\\\\telse|^then| then|\\\\tthen|^do| do|\\\\tdo|^if| if|\\\\tif) )|(?<=^|[!\\\\&(;`{|]))[\\\\t ]*+(?!nocorrect\\\\W|nocorrect\\\\$|function\\\\W|function\\\\$|foreach\\\\W|foreach\\\\$|repeat\\\\W|repeat\\\\$|logout\\\\W|logout\\\\$|coproc\\\\W|coproc\\\\$|select\\\\W|select\\\\$|while\\\\W|while\\\\$|pushd\\\\W|pushd\\\\$|until\\\\W|until\\\\$|case\\\\W|case\\\\$|done\\\\W|done\\\\$|elif\\\\W|elif\\\\$|else\\\\W|else\\\\$|esac\\\\W|esac\\\\$|popd\\\\W|popd\\\\$|then\\\\W|then\\\\$|time\\\\W|time\\\\$|for\\\\W|for\\\\$|end\\\\W|end\\\\$|fi\\\\W|fi\\\\$|do\\\\W|do\\\\$|in\\\\W|in\\\\$|if\\\\W|if\\\\$)\",\"beginCaptures\":{},\"end\":\"(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"name\":\"meta.statement.shell\",\"patterns\":[{\"include\":\"#typical_statements\"}]},\"normal_statement_seperator\":{\"captures\":{\"1\":{\"name\":\"punctuation.terminator.statement.semicolon.shell\"},\"2\":{\"name\":\"punctuation.separator.statement.and.shell\"},\"3\":{\"name\":\"punctuation.separator.statement.or.shell\"},\"4\":{\"name\":\"punctuation.separator.statement.background.shell\"}},\"match\":\"(?:(?:(;)|(&&))|(\\\\|\\\\|))|(&)\"},\"numeric_literal\":{\"captures\":{\"1\":{\"name\":\"constant.numeric.shell constant.numeric.hex.shell\"},\"2\":{\"name\":\"constant.numeric.shell constant.numeric.octal.shell\"},\"3\":{\"name\":\"constant.numeric.shell constant.numeric.other.shell\"},\"4\":{\"name\":\"constant.numeric.shell constant.numeric.decimal.shell\"},\"5\":{\"name\":\"constant.numeric.shell constant.numeric.version.shell\"},\"6\":{\"name\":\"constant.numeric.shell constant.numeric.integer.shell\"}},\"match\":\"(?<=[\\\\t =]|^|[(\\\\[{])(?:(?:(?:(?:(?:(0[Xx]\\\\h+)|(0\\\\d+))|(\\\\d{1,2}#[0-9@-Z_a-z]+))|(-?\\\\d+\\\\.\\\\d+))|(-?\\\\d+(?:\\\\.\\\\d+)+))|(-?\\\\d+))(?=[\\\\t ]|$|[);}])\"},\"option\":{\"begin\":\"[\\\\t ]++(-)((?![\\\\n!#\\\\&()<>\\\\[{|]|$|[\\\\t ;]))\",\"beginCaptures\":{\"1\":{\"name\":\"string.unquoted.argument.shell constant.other.option.dash.shell\"},\"2\":{\"name\":\"string.unquoted.argument.shell constant.other.option.shell\"}},\"contentName\":\"string.unquoted.argument constant.other.option\",\"end\":\"(?=[\\\\t ])|(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"patterns\":[{\"include\":\"#option_context\"}]},\"option_context\":{\"patterns\":[{\"include\":\"#misc_ranges\"},{\"include\":\"#string\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"},{\"include\":\"#heredoc\"},{\"include\":\"#herestring\"},{\"include\":\"#redirection\"},{\"include\":\"#pathname\"},{\"include\":\"#floating_keyword\"},{\"include\":\"#support\"}]},\"parenthese\":{\"patterns\":[{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.section.parenthese.shell\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.parenthese.shell\"}},\"name\":\"meta.parenthese.group.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]}]},\"pathname\":{\"patterns\":[{\"match\":\"(?<=[:=\\\\s]|^)~\",\"name\":\"keyword.operator.tilde.shell\"},{\"match\":\"[*?]\",\"name\":\"keyword.operator.glob.shell\"},{\"begin\":\"([!*+?@])(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.extglob.shell\"},\"2\":{\"name\":\"punctuation.definition.extglob.shell\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.extglob.shell\"}},\"name\":\"meta.structure.extglob.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]}]},\"pipeline\":{\"patterns\":[{\"match\":\"(?<=^|[\\\\&;\\\\s])(time)(?=[\\\\&;\\\\s]|$)\",\"name\":\"keyword.other.shell\"},{\"match\":\"[!|]\",\"name\":\"keyword.operator.pipe.shell\"}]},\"redirect_fix\":{\"captures\":{\"1\":{\"name\":\"keyword.operator.redirect.shell\"},\"2\":{\"name\":\"string.unquoted.argument.shell\"}},\"match\":\"(>>?)[\\\\t ]*+([^\\\\t\\\\n \\\"$\\\\&-);<>\\\\\\\\`|]+)\"},\"redirect_number\":{\"captures\":{\"1\":{\"name\":\"keyword.operator.redirect.stdout.shell\"},\"2\":{\"name\":\"keyword.operator.redirect.stderr.shell\"},\"3\":{\"name\":\"keyword.operator.redirect.$3.shell\"}},\"match\":\"(?<=[\\\\t ])(?:(1)|(2)|(\\\\d+))(?=>)\"},\"redirection\":{\"patterns\":[{\"begin\":\"[<>]\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.shell\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.shell\"}},\"name\":\"string.interpolated.process-substitution.shell\",\"patterns\":[{\"include\":\"#initial_context\"}]},{\"match\":\"(?<![<>])(&>|\\\\d*>&\\\\d*|\\\\d*(>>|[<>])|\\\\d*<&|\\\\d*<>)(?![<>])\",\"name\":\"keyword.operator.redirect.shell\"}]},\"regex_comparison\":{\"match\":\"=~\",\"name\":\"keyword.operator.logical.regex.shell\"},\"regexp\":{\"patterns\":[{\"match\":\".+\"}]},\"simple_options\":{\"captures\":{\"0\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"string.unquoted.argument.shell constant.other.option.dash.shell\"},\"2\":{\"name\":\"string.unquoted.argument.shell constant.other.option.shell\"}},\"match\":\"[\\\\t ]++(-)(\\\\w+)\"}]}},\"match\":\"(?:[\\\\t ]++-\\\\w+)*\"},\"simple_unquoted\":{\"match\":\"[^\\\\t\\\\n \\\"$\\\\&-);<>\\\\\\\\`|]\",\"name\":\"string.unquoted.shell\"},\"special_expansion\":{\"match\":\"!|:[-=?]?|[*@]|##?|%%|[%/]\",\"name\":\"keyword.operator.expansion.shell\"},\"start_of_command\":{\"match\":\"[\\\\t ]*+(?![\\\\n!#\\\\&()<>\\\\[{|]|$|[\\\\t ;])(?!nocorrect |nocorrect\\\\t|nocorrect$|readonly |readonly\\\\t|readonly$|function |function\\\\t|function$|foreach |foreach\\\\t|foreach$|coproc |coproc\\\\t|coproc$|logout |logout\\\\t|logout$|export |export\\\\t|export$|select |select\\\\t|select$|repeat |repeat\\\\t|repeat$|pushd |pushd\\\\t|pushd$|until |until\\\\t|until$|while |while\\\\t|while$|local |local\\\\t|local$|case |case\\\\t|case$|done |done\\\\t|done$|elif |elif\\\\t|elif$|else |else\\\\t|else$|esac |esac\\\\t|esac$|popd |popd\\\\t|popd$|then |then\\\\t|then$|time |time\\\\t|time$|for |for\\\\t|for$|end |end\\\\t|end$|fi |fi\\\\t|fi$|do |do\\\\t|do$|in |in\\\\t|in$|if |if\\\\t|if$)(?!\\\\\\\\\\\\n?$)\"},\"string\":{\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.shell\"},{\"begin\":\"'\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.shell\"}},\"end\":\"'\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.shell\"}},\"name\":\"string.quoted.single.shell\"},{\"begin\":\"\\\\$?\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.shell\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.shell\"}},\"name\":\"string.quoted.double.shell\",\"patterns\":[{\"match\":\"\\\\\\\\[\\\\n\\\"$\\\\\\\\`]\",\"name\":\"constant.character.escape.shell\"},{\"include\":\"#variable\"},{\"include\":\"#interpolation\"}]},{\"begin\":\"\\\\$'\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.shell\"}},\"end\":\"'\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.shell\"}},\"name\":\"string.quoted.single.dollar.shell\",\"patterns\":[{\"match\":\"\\\\\\\\['\\\\\\\\abefnrtv]\",\"name\":\"constant.character.escape.ansi-c.shell\"},{\"match\":\"\\\\\\\\[0-9]{3}\\\"\",\"name\":\"constant.character.escape.octal.shell\"},{\"match\":\"\\\\\\\\x\\\\h{2}\\\"\",\"name\":\"constant.character.escape.hex.shell\"},{\"match\":\"\\\\\\\\c.\\\"\",\"name\":\"constant.character.escape.control-char.shell\"}]}]},\"subshell_dollar\":{\"patterns\":[{\"begin\":\"\\\\$\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.subshell.single.shell\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.subshell.single.shell\"}},\"name\":\"meta.scope.subshell\",\"patterns\":[{\"include\":\"#parenthese\"},{\"include\":\"#initial_context\"}]}]},\"support\":{\"patterns\":[{\"match\":\"(?<=^|[\\\\&;\\\\s])[.:](?=[\\\\&;\\\\s]|$)\",\"name\":\"support.function.builtin.shell\"}]},\"typical_statements\":{\"patterns\":[{\"include\":\"#assignment_statement\"},{\"include\":\"#case_statement\"},{\"include\":\"#for_statement\"},{\"include\":\"#while_statement\"},{\"include\":\"#function_definition\"},{\"include\":\"#command_statement\"},{\"include\":\"#line_continuation\"},{\"include\":\"#arithmetic_double\"},{\"include\":\"#normal_context\"}]},\"variable\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"punctuation.definition.variable.shell variable.parameter.positional.all.shell\"},\"2\":{\"name\":\"variable.parameter.positional.all.shell\"}},\"match\":\"(\\\\$)(@(?!\\\\w))\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.variable.shell variable.parameter.positional.shell\"},\"2\":{\"name\":\"variable.parameter.positional.shell\"}},\"match\":\"(\\\\$)([0-9](?!\\\\w))\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.variable.shell variable.language.special.shell\"},\"2\":{\"name\":\"variable.language.special.shell\"}},\"match\":\"(\\\\$)([-!#$*0?_](?!\\\\w))\"},{\"begin\":\"(\\\\$)(\\\\{)[\\\\t ]*+(?=\\\\d)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.variable.shell variable.parameter.positional.shell\"},\"2\":{\"name\":\"punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell variable.parameter.positional.shell\"}},\"contentName\":\"meta.parameter-expansion\",\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell variable.parameter.positional.shell\"}},\"patterns\":[{\"include\":\"#special_expansion\"},{\"include\":\"#array_access_inline\"},{\"match\":\"[0-9]+\",\"name\":\"variable.parameter.positional.shell\"},{\"match\":\"(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)\",\"name\":\"variable.other.normal.shell\"},{\"include\":\"#variable\"},{\"include\":\"#string\"}]},{\"begin\":\"(\\\\$)(\\\\{)\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.variable.shell\"},\"2\":{\"name\":\"punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell\"}},\"contentName\":\"meta.parameter-expansion\",\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell\"}},\"patterns\":[{\"include\":\"#special_expansion\"},{\"include\":\"#array_access_inline\"},{\"match\":\"(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)\",\"name\":\"variable.other.normal.shell\"},{\"include\":\"#variable\"},{\"include\":\"#string\"}]},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.variable.shell variable.other.normal.shell\"},\"2\":{\"name\":\"variable.other.normal.shell\"}},\"match\":\"(\\\\$)(\\\\w+(?!\\\\w))\"}]},\"while_statement\":{\"patterns\":[{\"begin\":\"\\\\b(while)\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.while.shell\"}},\"end\":\"(?=[\\\\n\\\\&);`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)\",\"endCaptures\":{},\"name\":\"meta.while.shell\",\"patterns\":[{\"include\":\"#line_continuation\"},{\"include\":\"#math_operators\"},{\"include\":\"#option\"},{\"include\":\"#simple_unquoted\"},{\"include\":\"#normal_context\"},{\"include\":\"#string\"}]}]}},\"scopeName\":\"source.shell\",\"aliases\":[\"bash\",\"sh\",\"shell\",\"zsh\"]}"))],
			[Object.freeze(JSON.parse("{\"displayName\":\"JSON\",\"name\":\"json\",\"patterns\":[{\"include\":\"#value\"}],\"repository\":{\"array\":{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.begin.json\"}},\"end\":\"]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.array.end.json\"}},\"name\":\"meta.structure.array.json\",\"patterns\":[{\"include\":\"#value\"},{\"match\":\",\",\"name\":\"punctuation.separator.array.json\"},{\"match\":\"[^]\\\\s]\",\"name\":\"invalid.illegal.expected-array-separator.json\"}]},\"comments\":{\"patterns\":[{\"begin\":\"/\\\\*\\\\*(?!/)\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.json\"}},\"end\":\"\\\\*/\",\"name\":\"comment.block.documentation.json\"},{\"begin\":\"/\\\\*\",\"captures\":{\"0\":{\"name\":\"punctuation.definition.comment.json\"}},\"end\":\"\\\\*/\",\"name\":\"comment.block.json\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.comment.json\"}},\"match\":\"(//).*$\\\\n?\",\"name\":\"comment.line.double-slash.js\"}]},\"constant\":{\"match\":\"\\\\b(?:true|false|null)\\\\b\",\"name\":\"constant.language.json\"},\"number\":{\"match\":\"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[Ee][-+]?\\\\d+)?)?\",\"name\":\"constant.numeric.json\"},\"object\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.dictionary.begin.json\"}},\"end\":\"}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.dictionary.end.json\"}},\"name\":\"meta.structure.dictionary.json\",\"patterns\":[{\"include\":\"#objectkey\"},{\"include\":\"#comments\"},{\"begin\":\":\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.separator.dictionary.key-value.json\"}},\"end\":\"(,)|(?=})\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.separator.dictionary.pair.json\"}},\"name\":\"meta.structure.dictionary.value.json\",\"patterns\":[{\"include\":\"#value\"},{\"match\":\"[^,\\\\s]\",\"name\":\"invalid.illegal.expected-dictionary-separator.json\"}]},{\"match\":\"[^}\\\\s]\",\"name\":\"invalid.illegal.expected-dictionary-separator.json\"}]},\"objectkey\":{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.support.type.property-name.begin.json\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.support.type.property-name.end.json\"}},\"name\":\"string.json support.type.property-name.json\",\"patterns\":[{\"include\":\"#stringcontent\"}]},\"string\":{\"begin\":\"\\\"\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.begin.json\"}},\"end\":\"\\\"\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.string.end.json\"}},\"name\":\"string.quoted.double.json\",\"patterns\":[{\"include\":\"#stringcontent\"}]},\"stringcontent\":{\"patterns\":[{\"match\":\"\\\\\\\\(?:[\\\"/\\\\\\\\bfnrt]|u\\\\h{4})\",\"name\":\"constant.character.escape.json\"},{\"match\":\"\\\\\\\\.\",\"name\":\"invalid.illegal.unrecognized-string-escape.json\"}]},\"value\":{\"patterns\":[{\"include\":\"#constant\"},{\"include\":\"#number\"},{\"include\":\"#string\"},{\"include\":\"#array\"},{\"include\":\"#object\"},{\"include\":\"#comments\"}]}},\"scopeName\":\"source.json\"}"))]
		];
		/**
		* Language ids (and aliases) the highlighter accepts; everything else renders
		* plain. A Map, not an object: fence info strings are assistant-authored, so
		* a label like `constructor` or `__proto__` must miss instead of resolving an
		* inherited property and crashing the renderer inside shiki. The JS family
		* maps to the TypeScript grammar (it tokenizes plain TS/JS exactly, JSX/TSX
		* approximately — one JS-family grammar keeps the boot set small).
		*/
		const LANG_ALIASES = /* @__PURE__ */ new Map([
			["typescript", "typescript"],
			["ts", "typescript"],
			["tsx", "typescript"],
			["javascript", "typescript"],
			["js", "typescript"],
			["jsx", "typescript"],
			["shellscript", "shellscript"],
			["bash", "shellscript"],
			["sh", "shellscript"],
			["shell", "shellscript"],
			["zsh", "shellscript"],
			["json", "json"],
			["jsonc", "json"]
		]);
		/** All token colors resolve through `--shiki-*` custom properties (host theme sheets). */
		const cssVariablesTheme = createCssVariablesTheme({
			name: "css-variables",
			variablePrefix: "--shiki-",
			fontStyle: true
		});
		/**
		* The client regex engine compiles each TextMate pattern when its scanner is
		* created. Shiki otherwise defers patterns longer than 3,000 characters until
		* their first match; that compilation counts against Shiki's 500 ms per-line
		* budget and can return a partial token stream under host contention. Eager
		* compilation leaves the same budget in place for scanning user content.
		*/
		const regexEngine = createJavaScriptRegexEngine({
			forgiving: true,
			regexConstructor: (pattern) => defaultJavaScriptRegexConstructor(pattern, { lazyCompileLength: Number.POSITIVE_INFINITY })
		});
		let singleton;
		/** Representative paths through every boot grammar, compiled before user content is timed. */
		const BOOT_GRAMMAR_WARMUPS = [
			{
				lang: "typescript",
				code: "const answer: number = 42"
			},
			{
				lang: "shellscript",
				code: "printf '%s\\n' \"$HOME\""
			},
			{
				lang: "json",
				code: "{\"ready\":true}"
			}
		];
		/** Construct and pre-tokenize the boot grammars outside the user-content scan budget. */
		function createHighlighter() {
			const instance = createHighlighterCoreSync({
				themes: [cssVariablesTheme],
				langs: LANGS,
				engine: regexEngine
			});
			for (const sample of BOOT_GRAMMAR_WARMUPS) instance.codeToTokens(sample.code, {
				lang: sample.lang,
				theme: "css-variables",
				tokenizeTimeLimit: 0
			});
			return instance;
		}
		/** The synchronous highlighter (one instance per document); pre-warmed below, lazy as the fallback. */
		function highlighter() {
			singleton ??= createHighlighter();
			return singleton;
		}
		/** Subscribers re-rendered after a grammar registers (kept for API parity; no lazy grammars). */
		const listeners = /* @__PURE__ */ new Set();
		/** Bumped on each grammar load (kept for API parity; no lazy grammars). */
		let loadCount = 0;
		/**
		* Subscribe to lazy-grammar load completions; kept for useSyncExternalStore
		* parity with the harness API, though this plugin has no lazy grammars.
		* @param listener - change callback.
		* @returns an unsubscribe function.
		*/
		function subscribeGrammarLoaded(listener) {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		}
		/**
		* The lazy-grammar load counter (useSyncExternalStore snapshot).
		* @returns the current load count.
		*/
		function grammarLoadCount() {
			return loadCount;
		}
		setTimeout(() => {
			highlighter();
		}, 0).unref?.();
		/**
		* Tokenize `code` into per-line highlighted runs when `lang` maps to a
		* registered grammar; `undefined` means the caller renders its plain fallback.
		* The trailing newline shiki appends as a final empty line is dropped so the
		* run count matches the caller's own line array.
		* @param code - the source text.
		* @param lang - the language hint (a file-extension-derived language id).
		* @returns one entry per source line (each an array of runs), or `undefined` for unknown languages.
		*/
		function highlightLines(code, lang) {
			const resolved = lang === void 0 ? void 0 : LANG_ALIASES.get(lang.toLowerCase());
			if (resolved === void 0) return void 0;
			const { tokens } = highlighter().codeToTokens(code, {
				lang: resolved,
				theme: "css-variables"
			});
			const last = tokens[tokens.length - 1];
			return (tokens.length > 1 && last !== void 0 && last.length === 0 ? tokens.slice(0, -1) : tokens).map((line) => line.map((token) => ({
				text: token.content,
				style: { color: token.color }
			})));
		}
		//#endregion
		//#region src/client/clipboard.ts
		/**
		* Host clipboard write, self-contained so the plugin never depends on a
		* ui-primitives value export (the pinned build harness does not export the
		* helper, and rc.6 keeps only this one — replicating it keeps the copy button
		* identical across every dsh version). Success feedback stays with the caller;
		* this helper only reports whether the host accepted a write.
		*
		* @param text - the exact text to place on the clipboard.
		* @returns true only when the host accepted the write.
		*/
		async function writeClipboard(text) {
			if (navigator.clipboard?.writeText) try {
				await navigator.clipboard.writeText(text);
				return true;
			} catch {
				return false;
			}
			const exec = typeof document.execCommand === "function" ? document.execCommand.bind(document) : void 0;
			if (exec === void 0) return false;
			const el = document.createElement("textarea");
			el.value = text;
			el.setAttribute("readonly", "");
			el.style.position = "fixed";
			el.style.left = "-9999px";
			document.body.appendChild(el);
			el.select();
			try {
				return exec("copy");
			} catch {
				return false;
			} finally {
				el.remove();
			}
		}
		//#endregion
		//#region \0dsh-css:E:\dev\dsh-diff-viewer\src\client\DiffViewer.module.css.mjs
		const css = ".DiffViewer-module_block{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-markdown-code-block);border-radius:12px;position:relative}.DiffViewer-module_copyButton{z-index:1;color:var(--dsw-alias-label-secondary);cursor:pointer;font:var(--dsw-font-xs-13);background-color:#0000;border:none;margin:0;padding:0;position:absolute;top:8px;right:12px}.DiffViewer-module_footer{font:var(--dsw-font-markdown-code-block);color:var(--dsw-alias-label-tertiary);padding:0 14px 12px}.DiffViewer-module_file+.DiffViewer-module_file{border-top:1px solid var(--dsw-alias-border-l2)}.DiffViewer-module_fileHeader{color:var(--dsw-alias-label-primary);font:var(--dsw-font-markdown-code-block);padding:10px 14px 4px;font-weight:600}.DiffViewer-module_body{font:var(--dsw-font-markdown-code-block);line-height:22px}.DiffViewer-module_viewport{--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);overflow:hidden auto}.DiffViewer-module_hbar{z-index:2;background:var(--dsw-alias-markdown-code-block);height:8px;position:sticky;bottom:0;overflow:auto hidden}.DiffViewer-module_content,.DiffViewer-module_hbar{scrollbar-width:thin;scrollbar-color:transparent transparent}.DiffViewer-module_content:hover,.DiffViewer-module_content:focus-within,.DiffViewer-module_hbar:hover,.DiffViewer-module_hbar:focus-within{scrollbar-color:var(--dsh-scrollbar-thumb) transparent}.DiffViewer-module_content::-webkit-scrollbar-thumb,.DiffViewer-module_hbar::-webkit-scrollbar-thumb{background:0 0}.DiffViewer-module_content:hover::-webkit-scrollbar-thumb,.DiffViewer-module_content:focus-within::-webkit-scrollbar-thumb,.DiffViewer-module_hbar:hover::-webkit-scrollbar-thumb,.DiffViewer-module_hbar:focus-within::-webkit-scrollbar-thumb{background:var(--dsh-scrollbar-thumb)}.DiffViewer-module_spacer{position:relative}.DiffViewer-module_window{position:absolute;top:0;left:0;right:0}.DiffViewer-module_splitRow{display:flex}.DiffViewer-module_panel{flex:1 1 0;min-width:0;display:flex}.DiffViewer-module_panel+.DiffViewer-module_panel{border-left:1px solid var(--dsw-alias-border-l1)}.DiffViewer-module_unifiedRow{display:flex}.DiffViewer-module_gutter{flex-direction:column;flex-shrink:0;display:flex;overflow:visible}.DiffViewer-module_content{flex:1 1 0;min-width:0;overflow-x:auto}.DiffViewer-module_rows{width:max-content;min-width:100%;display:block}.DiffViewer-module_gutterRow{white-space:pre;align-items:stretch;height:22px;display:flex}.DiffViewer-module_contentRow{box-sizing:border-box;white-space:pre;width:100%;height:22px;padding-right:12px}.DiffViewer-module_lineNumber{box-sizing:border-box;text-align:right;user-select:none;flex-shrink:0;padding:0 12px 0 16px;line-height:22px}.DiffViewer-module_lineNumberChanged{color:var(--dsw-alias-label-secondary)}.DiffViewer-module_lineNumberContext{color:var(--dsw-alias-label-tertiary)}.DiffViewer-module_barAdd{background:var(--dsw-alias-state-success-primary);flex:none;width:4px}.DiffViewer-module_barDelete{background-image:linear-gradient(0deg, color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent) 50%, var(--dsw-alias-state-error-primary) 50%);background-repeat:repeat;background-size:2px 2px;flex:none;width:4px}.DiffViewer-module_barNone{flex:none;width:4px}.DiffViewer-module_rowAdd{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 12%, transparent)}.DiffViewer-module_rowDelete{background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent)}.DiffViewer-module_rowContext{background:0 0}.DiffViewer-module_rowEmpty{background-color:color-mix(in srgb, var(--dsw-alias-bg-layer-2) 18%, transparent);background-size:8px 8px;background-origin:border-box;background-image:repeating-linear-gradient(-45deg, transparent, transparent calc(3px * 1.414), color-mix(in srgb, var(--dsw-alias-border-l2) 48%, transparent) calc(3px * 1.414), color-mix(in srgb, var(--dsw-alias-border-l2) 48%, transparent) calc(4px * 1.414))}.DiffViewer-module_wordAdd{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 28%, transparent)}.DiffViewer-module_wordDelete{background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 28%, transparent)}.DiffViewer-module_noChanges{color:var(--dsw-alias-label-tertiary);padding:12px 14px}.DiffViewer-module_separatorSurface{border-block:1px solid color-mix(in srgb, var(--dsw-alias-border-l2) 50%, transparent);background-color:color-mix(in srgb, var(--dsw-alias-bg-layer-2) 45%, transparent);min-width:0;color:var(--dsw-alias-label-tertiary);align-items:stretch;display:flex}.DiffViewer-module_separatorRelative{position:relative;overflow:visible}.DiffViewer-module_separatorButtonGroup{user-select:none;fill:currentColor;flex:none;align-items:stretch;height:100%;display:flex}.DiffViewer-module_separatorButton{border:0;border-right:2px solid var(--dsw-alias-markdown-code-block);width:32px;min-width:32px;height:100%;color:var(--dsw-alias-label-tertiary);cursor:pointer;box-sizing:border-box;background-color:#0000;flex:0 0 32px;justify-content:center;align-items:center;padding:0;line-height:0;display:flex}.DiffViewer-module_separatorButton:hover{color:var(--dsw-alias-label-primary)}.DiffViewer-module_expandIcon{transform-origin:50%;flex:0 0 16px;width:16px;height:16px;display:block}.DiffViewer-module_expandIconUp{transform:scaleY(-1)}.DiffViewer-module_separatorLabelOverlay{z-index:2;align-items:stretch;height:100%;display:flex;position:absolute;top:0;right:-100vw}.DiffViewer-module_separatorLabel{flex:auto;align-items:center;min-width:0;padding:0 1ch;display:flex;overflow:hidden}.DiffViewer-module_separatorTextButton{min-width:0;max-width:100%;color:var(--dsw-alias-label-tertiary);font:inherit;line-height:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;background-color:#0000;border:0;padding:0;overflow:hidden}.DiffViewer-module_separatorTextButton:hover{color:var(--dsw-alias-label-primary);text-decoration:underline}";
		const tagId = "@dsh-external/dsh-diff-viewer/DiffViewer.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@dsh-external/dsh-diff-viewer";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var DiffViewer_module_css_default = {
			"barAdd": "DiffViewer-module_barAdd",
			"barDelete": "DiffViewer-module_barDelete",
			"barNone": "DiffViewer-module_barNone",
			"block": "DiffViewer-module_block",
			"body": "DiffViewer-module_body",
			"content": "DiffViewer-module_content",
			"contentRow": "DiffViewer-module_contentRow",
			"copyButton": "DiffViewer-module_copyButton",
			"expandIcon": "DiffViewer-module_expandIcon",
			"expandIconUp": "DiffViewer-module_expandIconUp",
			"file": "DiffViewer-module_file",
			"fileHeader": "DiffViewer-module_fileHeader",
			"footer": "DiffViewer-module_footer",
			"gutter": "DiffViewer-module_gutter",
			"gutterRow": "DiffViewer-module_gutterRow",
			"hbar": "DiffViewer-module_hbar",
			"lineNumber": "DiffViewer-module_lineNumber",
			"lineNumberChanged": "DiffViewer-module_lineNumberChanged",
			"lineNumberContext": "DiffViewer-module_lineNumberContext",
			"noChanges": "DiffViewer-module_noChanges",
			"panel": "DiffViewer-module_panel",
			"rowAdd": "DiffViewer-module_rowAdd",
			"rowContext": "DiffViewer-module_rowContext",
			"rowDelete": "DiffViewer-module_rowDelete",
			"rowEmpty": "DiffViewer-module_rowEmpty",
			"rows": "DiffViewer-module_rows",
			"separatorButton": "DiffViewer-module_separatorButton",
			"separatorButtonGroup": "DiffViewer-module_separatorButtonGroup",
			"separatorLabel": "DiffViewer-module_separatorLabel",
			"separatorLabelOverlay": "DiffViewer-module_separatorLabelOverlay",
			"separatorRelative": "DiffViewer-module_separatorRelative",
			"separatorSurface": "DiffViewer-module_separatorSurface",
			"separatorTextButton": "DiffViewer-module_separatorTextButton",
			"spacer": "DiffViewer-module_spacer",
			"splitRow": "DiffViewer-module_splitRow",
			"unifiedRow": "DiffViewer-module_unifiedRow",
			"viewport": "DiffViewer-module_viewport",
			"window": "DiffViewer-module_window",
			"wordAdd": "DiffViewer-module_wordAdd",
			"wordDelete": "DiffViewer-module_wordDelete"
		};
		/** Rows rendered above and below the viewport so fast scrolling does not flash blank space. */
		const OVERSCAN = 5;
		/** Unchanged context lines kept around each change before the rest collapses. */
		const CONTEXT_LINES = 3;
		/** A collapsed context separator expands in chunks of this many lines. */
		const EXPANSION_LINE_COUNT = 100;
		/** How long the `copied` flag stays true after a successful write, in ms. */
		const COPIED_FEEDBACK_MS = 1e3;
		/**
		* Copy text with one-second success feedback, reimplemented on `writeClipboard`
		* — the only clipboard export ui-primitives keeps across rc.5 and rc.6 (the
		* rc.5 `useCopyFeedback` hook was retracted alongside the shiki path).
		*/
		function useCopyFeedback(text) {
			const [copied, setCopied] = (0, react.useState)(false);
			return {
				copied,
				onCopy: (0, react.useCallback)(() => {
					if (copied) return;
					writeClipboard(text).then((ok) => {
						if (!ok) return;
						setCopied(true);
						window.setTimeout(() => {
							setCopied(false);
						}, COPIED_FEEDBACK_MS);
					});
				}, [copied, text])
			};
		}
		/**
		* Resolve the row layout from the container width (PiUI's responsive rule,
		* adapted to dsh's column widths): the stock 748px message column stays
		* unified, a wide-mode 1080px column flips to split. Pure so it can be
		* tested directly and shared by the observer and initial render.
		* @param width - the diff container's client width in px.
		* @returns the layout for that width.
		*/
		function resolveDiffViewMode(width) {
			return width < 800 ? "unified" : "split";
		}
		const DEFAULT_LABELS = {
			noChanges: "无变更",
			unchangedLines: (count) => `${count} 行未变更`,
			expandUp: "向上展开",
			expandDown: "向下展开",
			expandBoth: "展开隐藏行"
		};
		/**
		* Pair the two sides line by line: equal runs become context pairs, an added
		* run pairs each new line against an empty left slot, and a removed run
		* preceded by an added run pairs the two sides positionally so their
		* intra-line differences can be marked. The `diff` package's `diffLines`
		* output drives the walk; line numbers are the sides' own 1-based numbers.
		* @param before - the prior content.
		* @param after - the content after the change.
		* @returns one pair per rendered row, in file order.
		*/
		function computePairedLines(before, after) {
			const changes = diffLines(before, after);
			const result = [];
			const beforeLines = before.split("\n");
			const afterLines = after.split("\n");
			let oldIdx = 0;
			let newIdx = 0;
			let i = 0;
			while (i < changes.length) {
				const change = changes[i];
				/* v8 ignore next -- diff@8 always sets `count` on emitted changes; the
				fallback only satisfies the package's optional type. */
				const count = change.count || 0;
				if (change.removed) {
					const next = changes[i + 1];
					if (next?.added) {
						/* v8 ignore next -- same contract: `count` is always set on emitted changes. */
						const addCount = next.count || 0;
						const maxCount = Math.max(count, addCount);
						for (let j = 0; j < maxCount; j++) {
							const oldLine = j < count ? beforeLines[oldIdx + j] : void 0;
							const newLine = j < addCount ? afterLines[newIdx + j] : void 0;
							let leftSegments;
							let rightSegments;
							if (oldLine !== void 0 && newLine !== void 0) {
								const wordDiff = computeWordDiff(oldLine, newLine);
								if (!isTooFragmented(wordDiff.changes)) {
									leftSegments = wordDiff.left;
									rightSegments = wordDiff.right;
								}
							}
							result.push({
								left: oldLine !== void 0 ? {
									type: "delete",
									content: oldLine,
									lineNo: oldIdx + j + 1,
									...leftSegments && { wordDiffSegments: leftSegments }
								} : {
									type: "empty",
									content: ""
								},
								right: newLine !== void 0 ? {
									type: "add",
									content: newLine,
									lineNo: newIdx + j + 1,
									...rightSegments && { wordDiffSegments: rightSegments }
								} : {
									type: "empty",
									content: ""
								}
							});
						}
						oldIdx += count;
						newIdx += addCount;
						i += 2;
						continue;
					}
					for (let j = 0; j < count; j++) result.push({
						left: {
							type: "delete",
							content: beforeLines[oldIdx + j] || "",
							lineNo: oldIdx + j + 1
						},
						right: {
							type: "empty",
							content: ""
						}
					});
					oldIdx += count;
				} else if (change.added) {
					for (let j = 0; j < count; j++) result.push({
						left: {
							type: "empty",
							content: ""
						},
						right: {
							type: "add",
							content: afterLines[newIdx + j] || "",
							lineNo: newIdx + j + 1
						}
					});
					newIdx += count;
				} else {
					for (let j = 0; j < count; j++) result.push({
						left: {
							type: "context",
							content: beforeLines[oldIdx + j] || "",
							lineNo: oldIdx + j + 1
						},
						right: {
							type: "context",
							content: afterLines[newIdx + j] || "",
							lineNo: newIdx + j + 1
						}
					});
					oldIdx += count;
					newIdx += count;
				}
				i++;
			}
			return result;
		}
		/**
		* Flatten the two sides into one vertical stream (unified mode): removed
		* lines carry only their old number, added lines only their new number, and
		* context lines carry both. A removed run followed by an added run pairs the
		* two sides positionally and marks the intra-line difference on both, so the
		* unified column shows the same word-level detail the side-by-side view does.
		* The `diff` package's `diffLines` output drives the walk exactly as
		* {@link computePairedLines} does.
		* @param before - the prior content.
		* @param after - the content after the change.
		* @returns one line per rendered row, in file order.
		*/
		function computeUnifiedLines(before, after) {
			const changes = diffLines(before, after);
			const result = [];
			const beforeLines = before.split("\n");
			const afterLines = after.split("\n");
			let oldIdx = 0;
			let newIdx = 0;
			for (let i = 0; i < changes.length; i++) {
				const change = changes[i];
				/* v8 ignore next -- diff@8 always sets `count` on emitted changes; the
				fallback only satisfies the package's optional type. */
				const count = change.count || 0;
				if (change.removed) {
					const next = changes[i + 1];
					if (next?.added) {
						/* v8 ignore next -- same contract: `count` is always set on emitted changes. */
						const addCount = next.count || 0;
						for (let j = 0; j < count; j++) {
							const oldLine = beforeLines[oldIdx + j] || "";
							const newLine = j < addCount ? afterLines[newIdx + j] : void 0;
							let segments;
							if (newLine !== void 0) {
								const wordDiff = computeWordDiff(oldLine, newLine);
								if (!isTooFragmented(wordDiff.changes)) segments = wordDiff.left;
							}
							result.push({
								type: "delete",
								content: oldLine,
								oldLineNo: oldIdx + j + 1,
								...segments !== void 0 && { wordDiffSegments: segments }
							});
						}
						for (let j = 0; j < addCount; j++) {
							const newLine = afterLines[newIdx + j] || "";
							const oldLine = j < count ? beforeLines[oldIdx + j] : void 0;
							let segments;
							if (oldLine !== void 0) {
								const wordDiff = computeWordDiff(oldLine, newLine);
								if (!isTooFragmented(wordDiff.changes)) segments = wordDiff.right;
							}
							result.push({
								type: "add",
								content: newLine,
								newLineNo: newIdx + j + 1,
								...segments !== void 0 && { wordDiffSegments: segments }
							});
						}
						oldIdx += count;
						newIdx += addCount;
						i += 1;
					} else {
						for (let j = 0; j < count; j++) result.push({
							type: "delete",
							content: beforeLines[oldIdx + j] || "",
							oldLineNo: oldIdx + j + 1
						});
						oldIdx += count;
					}
				} else if (change.added) {
					for (let j = 0; j < count; j++) result.push({
						type: "add",
						content: afterLines[newIdx + j] || "",
						newLineNo: newIdx + j + 1
					});
					newIdx += count;
				} else {
					for (let j = 0; j < count; j++) result.push({
						type: "context",
						content: afterLines[newIdx + j] || "",
						oldLineNo: oldIdx + j + 1,
						newLineNo: newIdx + j + 1
					});
					oldIdx += count;
					newIdx += count;
				}
			}
			return result;
		}
		/**
		* The intra-line difference of one changed pair, aligned into left/right
		* segment lists (a shared run appears in both). `diff@8`'s `diffWordsWithSpace`
		* already merges adjacent same-direction runs (and the whitespace between
		* them), so the alignment is a straight walk over its change stream.
		* @param oldLine - the removed side's text.
		* @param newLine - the added side's text.
		* @returns the aligned segments plus the raw merged changes (for the fragmentation guard).
		*/
		function computeWordDiff(oldLine, newLine) {
			const changes = diffWordsWithSpace(oldLine, newLine);
			const left = [];
			const right = [];
			for (const change of changes) if (change.removed) left.push({
				text: change.value,
				diffType: "delete"
			});
			else if (change.added) right.push({
				text: change.value,
				diffType: "add"
			});
			else {
				left.push({ text: change.value });
				right.push({ text: change.value });
			}
			return {
				left,
				right,
				changes
			};
		}
		/**
		* Whether an intra-line diff is too fragmented to mark: fewer than 40% of the
		* characters are shared between the sides. Such a line reads as a rewrite, and
		* marking its fragments would paint the whole line; the tinted row background
		* already carries the change.
		* @param changes - the merged word-diff runs.
		* @returns whether the line's word marks should be dropped.
		*/
		function isTooFragmented(changes) {
			let commonLength = 0;
			let totalLength = 0;
			for (const change of changes) {
				totalLength += change.value.length;
				if (!change.added && !change.removed) commonLength += change.value.length;
			}
			return totalLength > 10 && commonLength / totalLength < .4;
		}
		function isCollapsed(row) {
			return "collapsed" in row;
		}
		/**
		* Grow one collapsed region's expansion budget: expanding upward adds to
		* `fromStart`, downward to `fromEnd` (one {@link EXPANSION_LINE_COUNT} chunk
		* per click, or all of it for a single 'both' click on an unchunked region).
		* @param prev - the current expansion map.
		* @param id - the region's start index in the raw line array.
		* @param direction - which side(s) to expand.
		* @returns the next expansion map.
		*/
		function expandRegion(prev, id, direction) {
			const next = new Map(prev);
			const current = next.get(id) ?? {
				fromStart: 0,
				fromEnd: 0
			};
			if (direction === "up" || direction === "both") current.fromStart += EXPANSION_LINE_COUNT;
			if (direction === "down" || direction === "both") current.fromEnd += EXPANSION_LINE_COUNT;
			next.set(id, current);
			return next;
		}
		/**
		* Fold long runs of unchanged context into single separator rows, keeping
		* {@link CONTEXT_LINES} of context around each change. An expanded region
		* un-folds from its separator by the budget recorded in the expansion map.
		* @param lines - the raw paired lines.
		* @param expanded - the expansion budgets per region start index.
		* @returns the display rows (context lines, separators, and change lines).
		*/
		function collapseContextPaired(lines, expanded) {
			if (lines.length === 0) return [];
			const result = [];
			let contextStart = -1;
			for (let i = 0; i <= lines.length; i++) if (i < lines.length && lines[i].left.type === "context" && lines[i].right.type === "context") {
				if (contextStart === -1) contextStart = i;
			} else {
				if (contextStart !== -1) {
					const ctxLen = i - contextStart;
					if (ctxLen > 8) {
						const isFirst = contextStart === 0;
						const isLast = i === lines.length;
						const keepBefore = isFirst ? 0 : CONTEXT_LINES;
						const keepAfter = isLast ? 0 : CONTEXT_LINES;
						const region = expanded?.get(contextStart) ?? {
							fromStart: 0,
							fromEnd: 0
						};
						const prefixCount = Math.min(ctxLen, keepBefore + region.fromStart);
						const suffixStart = Math.max(prefixCount, ctxLen - keepAfter - region.fromEnd);
						for (let j = contextStart; j < contextStart + prefixCount; j++) result.push(lines[j]);
						if (suffixStart > prefixCount) {
							const count = suffixStart - prefixCount;
							result.push({
								collapsed: true,
								count,
								id: contextStart,
								isFirst,
								isLast,
								chunked: count > EXPANSION_LINE_COUNT
							});
						}
						for (let j = contextStart + suffixStart; j < i; j++) result.push(lines[j]);
					} else for (let j = contextStart; j < i; j++) result.push(lines[j]);
					contextStart = -1;
				}
				if (i < lines.length) result.push(lines[i]);
			}
			return result;
		}
		/** {@link collapseContextPaired} for the unified line stream. */
		function collapseContextUnified(lines, expanded) {
			if (lines.length === 0) return [];
			const result = [];
			let contextStart = -1;
			for (let i = 0; i <= lines.length; i++) if (i < lines.length && lines[i].type === "context") {
				if (contextStart === -1) contextStart = i;
			} else {
				if (contextStart !== -1) {
					const ctxLen = i - contextStart;
					if (ctxLen > 8) {
						const isFirst = contextStart === 0;
						const isLast = i === lines.length;
						const keepBefore = isFirst ? 0 : CONTEXT_LINES;
						const keepAfter = isLast ? 0 : CONTEXT_LINES;
						const region = expanded?.get(contextStart) ?? {
							fromStart: 0,
							fromEnd: 0
						};
						const prefixCount = Math.min(ctxLen, keepBefore + region.fromStart);
						const suffixStart = Math.max(prefixCount, ctxLen - keepAfter - region.fromEnd);
						for (let j = contextStart; j < contextStart + prefixCount; j++) result.push(lines[j]);
						if (suffixStart > prefixCount) {
							const count = suffixStart - prefixCount;
							result.push({
								collapsed: true,
								count,
								id: contextStart,
								isFirst,
								isLast,
								chunked: count > EXPANSION_LINE_COUNT
							});
						}
						for (let j = contextStart + suffixStart; j < i; j++) result.push(lines[j]);
					} else for (let j = contextStart; j < i; j++) result.push(lines[j]);
					contextStart = -1;
				}
				if (i < lines.length) result.push(lines[i]);
			}
			return result;
		}
		/**
		* The widest rendered line's character count across a display-row list
		* (collapsed separators carry no content). The rows container's `min-width`
		* uses it in `ch` units so every row's background spans the whole column —
		* short changed lines keep their tint to the same edge as the longest line,
		* even when the widest line is outside the windowed viewport.
		* @param rows - the display rows (paired or unified).
		* @returns the longest content length, or 0 for an all-separator list.
		*/
		function displayMaxChars(rows) {
			let max = 0;
			for (const row of rows) {
				if (isCollapsed(row)) continue;
				if ("left" in row) {
					if (row.left.content.length > max) max = row.left.content.length;
					if (row.right.content.length > max) max = row.right.content.length;
				} else if (row.content.length > max) max = row.content.length;
			}
			return max;
		}
		/** The line-number gutter width for the largest line number, with a readable floor. */
		function lineNumberColumnWidth(maxLineNo) {
			const digits = String(Math.max(1, maxLineNo)).length;
			return Math.max(44, digits * 8 + 28);
		}
		/**
		* File-extension → language-hint map for syntax highlighting, mirroring the
		* read tool's `langFromPath` (packages/fs/tool-fs) so a diff path and a read
		* path of the same file highlight with the same grammar. Values are the short
		* ids `highlight.ts`' `LANG_ALIASES` resolves; intentionally small, not an
		* exhaustive registry.
		*/
		const LANG_BY_EXTENSION = {
			ts: "ts",
			tsx: "tsx",
			mts: "ts",
			cts: "ts",
			js: "js",
			jsx: "jsx",
			mjs: "js",
			cjs: "js",
			json: "json",
			jsonc: "json",
			py: "py",
			rb: "rb",
			go: "go",
			rs: "rs",
			java: "java",
			c: "c",
			h: "c",
			cc: "cpp",
			cpp: "cpp",
			hpp: "cpp",
			cxx: "cpp",
			cs: "cs",
			kt: "kotlin",
			swift: "swift",
			php: "php",
			sh: "sh",
			bash: "sh",
			zsh: "sh",
			yaml: "yaml",
			yml: "yaml",
			toml: "toml",
			ini: "ini",
			md: "md",
			markdown: "md",
			mdx: "mdx",
			html: "html",
			htm: "html",
			css: "css",
			scss: "scss",
			less: "less",
			sql: "sql",
			xml: "xml",
			lua: "lua"
		};
		/**
		* Derive a syntax-highlighting language hint from a diff path's extension.
		* Pure and case-insensitive; a dotfile with no extension and an unknown
		* extension both yield `undefined` (plain monospace).
		* @param path - the hunk's model-facing path.
		* @returns the language hint, or `undefined` when the extension maps to none.
		*/
		function langFromPath(path) {
			const base = path.slice(Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\")) + 1);
			const dot = base.lastIndexOf(".");
			if (dot <= 0) return void 0;
			const ext = base.slice(dot + 1).toLowerCase();
			return Object.hasOwn(LANG_BY_EXTENSION, ext) ? LANG_BY_EXTENSION[ext] : void 0;
		}
		/**
		* Fixed-row-height windowing: render only the rows the viewport can show
		* (plus overscan), positioned inside a spacer of the full row count's height.
		* @param rowCount - the display row count.
		* @returns the container ref, the visible row slice, the vertical offset, and the scroll handler.
		*/
		function useWindowedRows(rowCount) {
			const containerRef = (0, react.useRef)(null);
			const [scrollTop, setScrollTop] = (0, react.useState)(0);
			const [viewportHeight, setViewportHeight] = (0, react.useState)(0);
			(0, react.useEffect)(() => {
				const container = containerRef.current;
				/* v8 ignore next 2 -- React populates the ref before effects run, so a
				mount effect never sees a null container. */
				if (!container) return;
				const update = () => setViewportHeight(container.clientHeight);
				update();
				if (typeof ResizeObserver === "undefined") return;
				const observer = new ResizeObserver(update);
				observer.observe(container);
				return () => observer.disconnect();
			}, []);
			const onScroll = (0, react.useCallback)((event) => {
				setScrollTop(event.currentTarget.scrollTop);
			}, []);
			const startIndex = Math.max(0, Math.floor(scrollTop / 22) - OVERSCAN);
			const visibleCount = Math.max(1, Math.ceil(viewportHeight / 22));
			return {
				containerRef,
				startIndex,
				endIndex: Math.min(rowCount, startIndex + visibleCount + 10),
				offsetY: startIndex * 22,
				onScroll
			};
		}
		/** The right-aligned line number cell; `undefined` draws an empty slot. */
		function LineNumberCell({ lineNo, width, tone }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: clsx(DiffViewer_module_css_default.lineNumber, tone === "changed" ? DiffViewer_module_css_default.lineNumberChanged : DiffViewer_module_css_default.lineNumberContext),
				style: { width },
				children: lineNo
			});
		}
		/** The 3px change bar: solid success for additions, striped error for deletions. */
		function ChangeBar({ type, rowTop }) {
			if (type === "add") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: DiffViewer_module_css_default.barAdd });
			if (type === "delete") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: DiffViewer_module_css_default.barDelete,
				style: { backgroundPositionY: `${-rowTop}px` }
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: DiffViewer_module_css_default.barNone });
		}
		/** One rendered line's content: syntax-colored runs, with word marks layered over them. */
		function LineContent({ line, tokens }) {
			if (line.wordDiffSegments !== void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MergedWordDiffLine, {
				segments: line.wordDiffSegments,
				tokens
			});
			if (tokens !== void 0 && tokens.length > 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: tokens.map((span, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				style: span.style,
				children: span.text
			}, index)) });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: line.content });
		}
		/**
		* Render a word-diff segment list with syntax colors: the token runs provide
		* the color, the segment boundary provides the add/delete background. The two
		* boundaries differ, so the walk slices tokens to segment lengths.
		* @param segments - the line's word-diff segments (aligned to the token stream).
		* @param tokens - the line's syntax runs, or undefined for a plain-text line.
		* @returns the merged children.
		*/
		function MergedWordDiffLine({ segments, tokens }) {
			if (tokens === void 0 || tokens.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: segments.map((segment, index) => segment.diffType !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: segment.diffType === "delete" ? DiffViewer_module_css_default.wordDelete : DiffViewer_module_css_default.wordAdd,
				children: segment.text
			}, index) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: segment.text }, index)) });
			const children = [];
			let tokenIndex = 0;
			let tokenOffset = 0;
			for (let si = 0; si < segments.length; si++) {
				const segment = segments[si];
				let remaining = segment.text.length;
				const runs = [];
				while (remaining > 0 && tokenIndex < tokens.length) {
					const token = tokens[tokenIndex];
					const available = token.text.length - tokenOffset;
					const take = Math.min(remaining, available);
					runs.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						style: token.style,
						children: token.text.slice(tokenOffset, tokenOffset + take)
					}, `${si}-${tokenIndex}-${tokenOffset}`));
					remaining -= take;
					tokenOffset += take;
					if (tokenOffset >= token.text.length) {
						tokenIndex++;
						tokenOffset = 0;
					}
				}
				/* v8 ignore next 3 -- the word segments and the line's token runs both
				cover the same line text, so the stream cannot exhaust mid-segment. */
				if (remaining > 0) {
					const extraStart = segment.text.length - remaining;
					runs.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: segment.text.slice(extraStart) }, `${si}-extra`));
				}
				if (segment.diffType !== void 0) children.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: segment.diffType === "delete" ? DiffViewer_module_css_default.wordDelete : DiffViewer_module_css_default.wordAdd,
					children: runs
				}, si));
				else children.push(...runs);
			}
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children });
		}
		/** The expand directions a separator offers: both when unchunked, up/down when chunked. */
		function separatorDirections({ isFirst, isLast, chunked }) {
			if (!chunked) return [!isFirst && !isLast ? "both" : isFirst ? "down" : "up"];
			const directions = [];
			if (!isFirst) directions.push("up");
			if (!isLast) directions.push("down");
			return directions;
		}
		/** The chevron glyph for one expand direction (up flips the down glyph). */
		function ExpandIcon({ direction }) {
			if (direction === "both") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				"aria-hidden": "true",
				className: DiffViewer_module_css_default.expandIcon,
				viewBox: "0 0 16 16",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M11.47 9.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L8 12.94zM7.526 1.418a.75.75 0 0 1 1.004.052l4 4a.75.75 0 1 1-1.06 1.06L8 3.06 4.53 6.53a.75.75 0 1 1-1.06-1.06l4-4z" })
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				"aria-hidden": "true",
				className: clsx(DiffViewer_module_css_default.expandIcon, direction === "up" && DiffViewer_module_css_default.expandIconUp),
				viewBox: "0 0 16 16",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06" })
			});
		}
		/** The expand buttons a separator shows in the gutter column. */
		function CollapsedExpandButton({ directions, onExpand, width, labels }) {
			/* v8 ignore next -- every call site passes a width, and separatorDirections
			always returns at least one direction, so the divider is always computed. */
			const buttonWidth = width !== void 0 && directions.length > 0 ? width / directions.length : void 0;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(
				"div",
				/* v8 ignore next 3 -- every call site passes a width, and
				separatorDirections always returns at least one direction. */
				{
					className: DiffViewer_module_css_default.separatorButtonGroup,
					style: width !== void 0 ? {
						width,
						flexBasis: width
					} : void 0,
					children: directions.map((direction) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: DiffViewer_module_css_default.separatorButton,
						/* v8 ignore next -- every call site passes a width, so buttonWidth is always a number. */
						style: buttonWidth !== void 0 ? {
							width: buttonWidth,
							minWidth: 0,
							flexBasis: buttonWidth
						} : void 0,
						title: direction === "up" ? labels.expandUp : direction === "down" ? labels.expandDown : labels.expandBoth,
						onClick: () => onExpand?.(direction),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ExpandIcon, { direction })
					}, direction))
				}
			);
		}
		/** The separator's label row, spanning from the gutter over the content column. */
		function CollapsedLabel({ count, labels, onExpand }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: DiffViewer_module_css_default.separatorLabel,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: DiffViewer_module_css_default.separatorTextButton,
					onClick: () => onExpand?.("both"),
					children: labels.unchangedLines(count)
				})
			});
		}
		/**
		* Render one file's change body. Highlights both sides once (whole-text
		* tokenization keeps grammar context across lines), picks the effective view
		* mode (add-only/delete-only always render unified), collapses long context
		* runs, and windows the display rows.
		* @param props - the two sides, language hint, mode request, and render site's cap.
		* @returns the diff body element.
		*/
		function DiffBody({ before, after, lang, viewMode, maxLines, labels, className }) {
			const loaded = (0, react.useSyncExternalStore)(subscribeGrammarLoaded, grammarLoadCount, grammarLoadCount);
			const tokens = (0, react.useMemo)(() => ({
				before: highlightLines(before, lang),
				after: highlightLines(after, lang)
			}), [
				before,
				after,
				lang,
				loaded
			]);
			const pairedLines = (0, react.useMemo)(() => computePairedLines(before, after), [before, after]);
			const unifiedLines = (0, react.useMemo)(() => computeUnifiedLines(before, after), [before, after]);
			const isAddOnly = before.trim() === "";
			const isDeleteOnly = after.trim() === "";
			const mode = isAddOnly || isDeleteOnly ? "unified" : viewMode;
			if (pairedLines.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: DiffViewer_module_css_default.noChanges,
				children: labels.noChanges
			});
			return mode === "split" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SplitDiffBody, {
				pairs: pairedLines,
				tokens,
				maxLines,
				labels,
				className
			}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(UnifiedDiffBody, {
				lines: unifiedLines,
				tokens,
				maxLines,
				labels,
				className
			});
		}
		/** The shared viewport chrome: vertical window, horizontal scroll, cap. */
		function Viewport({ rows, maxLines, children }) {
			const { containerRef, startIndex, endIndex, offsetY, onScroll } = useWindowedRows(rows);
			const contents = (0, react.useRef)(/* @__PURE__ */ new Set());
			const barRef = (0, react.useRef)(null);
			const syncing = (0, react.useRef)(false);
			const [contentWidth, setContentWidth] = (0, react.useState)(0);
			const [clientWidth, setClientWidth] = (0, react.useState)(0);
			const measure = (0, react.useCallback)(() => {
				let maxScroll = 0;
				let client = 0;
				for (const column of contents.current) {
					if (column.scrollWidth > maxScroll) maxScroll = column.scrollWidth;
					client = column.clientWidth;
				}
				setContentWidth(maxScroll);
				setClientWidth(client);
			}, []);
			const registerContent = (0, react.useCallback)((el) => {
				if (el === null) return;
				contents.current.add(el);
				measure();
			}, [measure]);
			(0, react.useEffect)(() => {
				measure();
				if (typeof ResizeObserver === "undefined") return;
				const observer = new ResizeObserver(measure);
				for (const column of contents.current) observer.observe(column);
				return () => observer.disconnect();
			}, [
				startIndex,
				endIndex,
				measure
			]);
			const onContentScroll = (0, react.useCallback)((event) => {
				if (syncing.current) return;
				syncing.current = true;
				const left = event.currentTarget.scrollLeft;
				for (const column of contents.current) if (column !== event.currentTarget) column.scrollLeft = left;
				if (barRef.current !== null) barRef.current.scrollLeft = left;
				requestAnimationFrame(() => {
					syncing.current = false;
				});
			}, []);
			const onBarScroll = (0, react.useCallback)((event) => {
				if (syncing.current) return;
				syncing.current = true;
				const left = event.currentTarget.scrollLeft;
				for (const column of contents.current) column.scrollLeft = left;
				requestAnimationFrame(() => {
					syncing.current = false;
				});
			}, []);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				ref: containerRef,
				className: DiffViewer_module_css_default.viewport,
				onScroll,
				style: maxLines !== void 0 ? { maxHeight: maxLines * 22 } : { overflow: "visible" },
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: DiffViewer_module_css_default.spacer,
					style: { height: rows * 22 },
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: DiffViewer_module_css_default.window,
						style: { transform: `translateY(${offsetY}px)` },
						children: children(startIndex, endIndex, registerContent, onContentScroll)
					})
				}), contentWidth > clientWidth && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					ref: barRef,
					className: DiffViewer_module_css_default.hbar,
					onScroll: onBarScroll,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: {
						width: contentWidth,
						height: 1
					} })
				})]
			});
		}
		/**
		* Side-by-side body: each row is a pair drawn in two panels — left gutter
		* (change bar + old line number) and left content over the removed/context
		* text, then the same for the added side. A collapsed separator renders its
		* buttons in the left gutter and overlays its label across both panels.
		*/
		function SplitDiffBody({ pairs, tokens, maxLines, labels, className }) {
			const [expanded, setExpanded] = (0, react.useState)(/* @__PURE__ */ new Map());
			const displayRows = (0, react.useMemo)(() => collapseContextPaired(pairs, expanded), [pairs, expanded]);
			const handleExpand = (0, react.useCallback)((id, direction) => {
				setExpanded((prev) => expandRegion(prev, id, direction));
			}, []);
			const maxChars = (0, react.useMemo)(() => displayMaxChars(displayRows), [displayRows]);
			const lineNumberWidth = (0, react.useMemo)(() => lineNumberColumnWidth(pairs.reduce((max, pair) => Math.max(max, pair.left.lineNo ?? 0, pair.right.lineNo ?? 0), 0)), [pairs]);
			const gutterWidth = lineNumberWidth + 4;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: clsx(DiffViewer_module_css_default.body, className),
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Viewport, {
					rows: displayRows.length,
					maxLines,
					children: (start, end, registerContent, onContentScroll) => {
						const leftGutter = [];
						const leftContent = [];
						const rightGutter = [];
						const rightContent = [];
						for (let i = start; i < end; i++) {
							const row = displayRows[i];
							const rowTop = i * 22;
							if (isCollapsed(row)) {
								const directions = separatorDirections(row);
								leftGutter.push(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: clsx(DiffViewer_module_css_default.separatorSurface, DiffViewer_module_css_default.separatorRelative),
									style: { height: 22 },
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CollapsedExpandButton, {
										directions,
										onExpand: (direction) => handleExpand(row.id, direction),
										width: lineNumberWidth,
										labels
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: DiffViewer_module_css_default.separatorLabelOverlay,
										style: { left: lineNumberWidth },
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CollapsedLabel, {
											count: row.count,
											labels,
											onExpand: (direction) => handleExpand(row.id, direction)
										})
									})]
								}, i));
								leftContent.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.separatorSurface,
									style: { height: 22 }
								}, i));
								rightGutter.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.separatorSurface,
									style: { height: 22 }
								}, i));
								rightContent.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.separatorSurface,
									style: { height: 22 }
								}, i));
								continue;
							}
							const pair = row;
							const left = pair.left;
							const right = pair.right;
							/* v8 ignore next 3 -- left rows are delete/context/empty only */
							leftGutter.push(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: clsx(DiffViewer_module_css_default.gutterRow, left.type === "add" ? DiffViewer_module_css_default.rowAdd : left.type === "delete" ? DiffViewer_module_css_default.rowDelete : left.type === "empty" ? DiffViewer_module_css_default.rowEmpty : DiffViewer_module_css_default.rowContext),
								style: left.type === "empty" ? {
									height: 22,
									backgroundPosition: `5px ${-rowTop}px`
								} : void 0,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChangeBar, {
									type: left.type,
									rowTop
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LineNumberCell, {
									lineNo: left.lineNo,
									width: lineNumberWidth,
									tone: left.type === "add" || left.type === "delete" ? "changed" : "context"
								})]
							}, i));
							/* v8 ignore next 2 -- left rows are delete/context/empty only */
							leftContent.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: clsx(DiffViewer_module_css_default.contentRow, left.type === "empty" ? DiffViewer_module_css_default.rowEmpty : left.type === "add" ? DiffViewer_module_css_default.rowAdd : left.type === "delete" ? DiffViewer_module_css_default.rowDelete : DiffViewer_module_css_default.rowContext),
								style: left.type === "empty" ? { backgroundPosition: `5px ${-rowTop}px` } : void 0,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LineContent, {
									line: left,
									tokens: left.lineNo !== void 0 ? tokens.before?.[left.lineNo - 1] : void 0
								})
							}, i));
							/* v8 ignore next -- right rows are add/context/empty only (deletions always land on the left). */
							rightGutter.push(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: clsx(DiffViewer_module_css_default.gutterRow, right.type === "add" ? DiffViewer_module_css_default.rowAdd : right.type === "delete" ? DiffViewer_module_css_default.rowDelete : right.type === "empty" ? DiffViewer_module_css_default.rowEmpty : DiffViewer_module_css_default.rowContext),
								style: right.type === "empty" ? {
									height: 22,
									backgroundPosition: `5px ${-rowTop}px`
								} : void 0,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChangeBar, {
									type: right.type,
									rowTop
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LineNumberCell, {
									lineNo: right.lineNo,
									width: lineNumberWidth,
									tone: right.type === "add" || right.type === "delete" ? "changed" : "context"
								})]
							}, i));
							/* v8 ignore next -- right rows are add/context/empty only (deletions always land on the left). */
							rightContent.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: clsx(DiffViewer_module_css_default.contentRow, right.type === "empty" ? DiffViewer_module_css_default.rowEmpty : right.type === "add" ? DiffViewer_module_css_default.rowAdd : right.type === "delete" ? DiffViewer_module_css_default.rowDelete : DiffViewer_module_css_default.rowContext),
								style: right.type === "empty" ? { backgroundPosition: `5px ${-rowTop}px` } : void 0,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LineContent, {
									line: right,
									tokens: right.lineNo !== void 0 ? tokens.after?.[right.lineNo - 1] : void 0
								})
							}, i));
						}
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: DiffViewer_module_css_default.splitRow,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: DiffViewer_module_css_default.panel,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.gutter,
									style: { width: gutterWidth },
									children: leftGutter
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.content,
									ref: registerContent,
									onScroll: onContentScroll,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: DiffViewer_module_css_default.rows,
										style: { minWidth: `max(100%, ${maxChars}ch)` },
										children: leftContent
									})
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: DiffViewer_module_css_default.panel,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.gutter,
									style: { width: gutterWidth },
									children: rightGutter
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.content,
									ref: registerContent,
									onScroll: onContentScroll,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: DiffViewer_module_css_default.rows,
										style: { minWidth: `max(100%, ${maxChars}ch)` },
										children: rightContent
									})
								})]
							})]
						});
					}
				})
			});
		}
		/**
		* Unified body: one column per row — gutter with the old and new line numbers
		* (a changed line shows the number of the side it belongs to), then the
		* content. Collapsed separators render their buttons over both number cells.
		*/
		function UnifiedDiffBody({ lines, tokens, maxLines, labels, className }) {
			const [expanded, setExpanded] = (0, react.useState)(/* @__PURE__ */ new Map());
			const displayRows = (0, react.useMemo)(() => collapseContextUnified(lines, expanded), [lines, expanded]);
			const handleExpand = (0, react.useCallback)((id, direction) => {
				setExpanded((prev) => expandRegion(prev, id, direction));
			}, []);
			const maxChars = (0, react.useMemo)(() => displayMaxChars(displayRows), [displayRows]);
			const lineNumberWidth = (0, react.useMemo)(() => lineNumberColumnWidth(lines.reduce((max, line) => Math.max(max, line.oldLineNo ?? 0, line.newLineNo ?? 0), 0)), [lines]);
			const gutterWidth = lineNumberWidth * 2 + 4;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: clsx(DiffViewer_module_css_default.body, className),
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Viewport, {
					rows: displayRows.length,
					maxLines,
					children: (start, end, registerContent, onContentScroll) => {
						const gutters = [];
						const contents = [];
						for (let i = start; i < end; i++) {
							const row = displayRows[i];
							const rowTop = i * 22;
							if (isCollapsed(row)) {
								const directions = separatorDirections(row);
								gutters.push(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: clsx(DiffViewer_module_css_default.separatorSurface, DiffViewer_module_css_default.separatorRelative),
									style: { height: 22 },
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CollapsedExpandButton, {
										directions,
										onExpand: (direction) => handleExpand(row.id, direction),
										width: lineNumberWidth * 2,
										labels
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: DiffViewer_module_css_default.separatorLabelOverlay,
										style: { left: lineNumberWidth * 2 },
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CollapsedLabel, {
											count: row.count,
											labels,
											onExpand: (direction) => handleExpand(row.id, direction)
										})
									})]
								}, i));
								contents.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.separatorSurface,
									style: { height: 22 }
								}, i));
								continue;
							}
							const line = row;
							const sideTokens = line.type === "delete" ? tokens.before : tokens.after;
							const lineNo = line.type === "delete" ? line.oldLineNo : line.newLineNo;
							const tone = line.type === "add" || line.type === "delete" ? "changed" : "context";
							gutters.push(/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: clsx(DiffViewer_module_css_default.gutterRow, line.type === "add" ? DiffViewer_module_css_default.rowAdd : line.type === "delete" ? DiffViewer_module_css_default.rowDelete : DiffViewer_module_css_default.rowContext),
								style: { height: 22 },
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChangeBar, {
										type: line.type,
										rowTop
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(LineNumberCell, {
										lineNo: line.oldLineNo,
										width: lineNumberWidth,
										tone
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(LineNumberCell, {
										lineNo: line.newLineNo,
										width: lineNumberWidth,
										tone
									})
								]
							}, i));
							/* v8 ignore next -- every unified line carries its side's number
							(delete → old, add/context → new), so the fallback never fires. */
							contents.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: clsx(DiffViewer_module_css_default.contentRow, line.type === "add" ? DiffViewer_module_css_default.rowAdd : line.type === "delete" ? DiffViewer_module_css_default.rowDelete : DiffViewer_module_css_default.rowContext),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LineContent, {
									line,
									tokens: lineNo !== void 0 ? sideTokens?.[lineNo - 1] : void 0
								})
							}, i));
						}
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: DiffViewer_module_css_default.unifiedRow,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: DiffViewer_module_css_default.gutter,
								style: { width: gutterWidth },
								children: gutters
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: DiffViewer_module_css_default.content,
								ref: registerContent,
								onScroll: onContentScroll,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: DiffViewer_module_css_default.rows,
									style: { minWidth: `max(100%, ${maxChars}ch)` },
									children: contents
								})
							})]
						});
					}
				})
			});
		}
		/**
		* The diff text a reader copies: each file's path header followed by its
		* `- `/`+ ` prefixed lines, exactly what the card shows. The headers keep a
		* multi-file copy attributable.
		* @param diffs - the hunks to serialize.
		* @returns the diff as plain text.
		*/
		function copyText(diffs) {
			const parts = [];
			for (const hunk of diffs) {
				parts.push(hunk.path);
				for (const line of contentLines(hunk.oldText ?? "")) parts.push(`- ${line}`);
				for (const line of contentLines(hunk.newText)) parts.push(`+ ${line}`);
			}
			return parts.join("\n");
		}
		/**
		* Split a side's text into its content lines. Empty text is zero lines (a full
		* deletion's `newText` or a create's absent `oldText` side draws nothing), and
		* a single trailing newline is a line terminator rather than an extra empty
		* line — the same terminator rule the other block primitives apply.
		* @param text - the removed or added side's text.
		* @returns the content lines, without the terminating newline.
		*/
		function contentLines(text) {
			if (text === "") return [];
			return (text.endsWith("\n") ? text.slice(0, -1) : text).split("\n");
		}
		/**
		* The footer counts across all hunks: added/removed line totals and the number
		* of DISTINCT paths (two hunks in one file read as `1 file`), matching the TUI
		* diff card's footer.
		* @param diffs - the hunks to count.
		* @returns the totals.
		*/
		function diffStats(diffs) {
			const paths = /* @__PURE__ */ new Set();
			let added = 0;
			let removed = 0;
			for (const hunk of diffs) {
				paths.add(hunk.path);
				removed += contentLines(hunk.oldText ?? "").length;
				added += contentLines(hunk.newText).length;
			}
			return {
				added,
				removed,
				files: paths.size
			};
		}
		/**
		* Render a file mutation as the visual diff surface. The row layout is
		* chosen by CONTAINER WIDTH, not by a caller flag: PiUI's responsive rule —
		* split side-by-side when the diff has room (>= 720px), unified otherwise —
		* is recreated here with a ResizeObserver on this component's own box, so a
		* widened feed (e.g. home-ui wide mode) automatically shows split diffs and
		* a narrow panel falls back to unified, with no special-casing of any
		* host mode. The `viewMode` prop seeds the first render (default unified);
		* the observer then owns the decision.
		* @param props - see {@link DiffViewerProps}.
		* @returns the diff viewer element.
		*/
		function DiffViewer({ diffs, viewMode = "unified", lang, maxLines, className, labels }) {
			const resolvedLabels = {
				...DEFAULT_LABELS,
				...labels
			};
			const stats = (0, react.useMemo)(() => diffStats(diffs), [diffs]);
			const { copied, onCopy } = useCopyFeedback((0, react.useMemo)(() => copyText(diffs), [diffs]));
			const containerRef = (0, react.useRef)(null);
			const [responsiveMode, setResponsiveMode] = (0, react.useState)(viewMode);
			(0, react.useEffect)(() => {
				const container = containerRef.current;
				if (container === null || typeof ResizeObserver === "undefined") return;
				const update = () => {
					if (container.clientWidth === 0) return;
					setResponsiveMode(resolveDiffViewMode(container.clientWidth));
				};
				update();
				const observer = new ResizeObserver(update);
				observer.observe(container);
				return () => observer.disconnect();
			}, []);
			if (diffs.length === 0) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				ref: containerRef,
				className: clsx(DiffViewer_module_css_default.block, className),
				"data-diff": "",
				"data-diff-viewer": "",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: DiffViewer_module_css_default.copyButton,
						onClick: onCopy,
						children: copied ? "复制成功" : "复制"
					}),
					diffs.map((hunk, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: DiffViewer_module_css_default.file,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("header", {
							className: DiffViewer_module_css_default.fileHeader,
							children: hunk.path
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DiffBody, {
							before: hunk.oldText ?? "",
							after: hunk.newText,
							lang: lang ?? langFromPath(hunk.path),
							viewMode: responsiveMode,
							maxLines,
							labels: resolvedLabels
						})]
					}, index)),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: DiffViewer_module_css_default.footer,
						children: [
							"└ +",
							stats.added,
							" -",
							stats.removed,
							" · ",
							stats.files,
							" file",
							stats.files === 1 ? "" : "s"
						]
					})
				]
			});
		}
		//#endregion
		//#region src/client/diffcard-contract.ts
		/** Narrow a wire `card:'diff'` view's `diffs` to well-formed hunks (same
		*  validation the stock diff-card model applies). */
		function narrowDiffs(diffs) {
			if (!Array.isArray(diffs) || diffs.length === 0) return null;
			for (const hunk of diffs) {
				if (hunk === null || typeof hunk !== "object") return null;
				const { path, oldText, newText } = hunk;
				if (typeof path !== "string" || oldText !== null && typeof oldText !== "string" || typeof newText !== "string") return null;
			}
			return diffs;
		}
		/** Parse a frozen `argsRaw` string to an object, or undefined for malformed JSON. */
		function parseArgs$1(argsRaw) {
			try {
				const parsed = JSON.parse(argsRaw);
				return typeof parsed === "object" && parsed !== null ? parsed : void 0;
			} catch {
				return;
			}
		}
		/** One string-typed argument of a parsed mutation-tool args object. */
		function stringArg(args, key) {
			const value = args[key];
			return typeof value === "string" ? value : void 0;
		}
		/** The call-time diff hunks the mutation tools' own `presentCall` derives from
		*  their arguments: an edit renders its literal old_string→new_string
		*  replacement, a write renders its full content as a create (`oldText: null`,
		*  which also represents an overwrite without prior content). Code Dispatch
		*  sub-calls never carry a wire view (the dispatch bridge logs no presentation
		*  metadata), so this args fallback is the only diff material those cards can
		*  render — mirroring what the stock row shows for the same call while running.
		* @param toolName - the wire Tool name ('edit' or 'write').
		* @param argsRaw - the frozen call arguments.
		* @returns the call-time hunks, or null when the tool or its args do not map.
		*/
		function callTimeDiffs(toolName, argsRaw) {
			const args = parseArgs$1(argsRaw);
			if (args === void 0) return null;
			if (toolName === "write") {
				const path = stringArg(args, "file_path");
				const content = stringArg(args, "content");
				if (path === void 0 || content === void 0) return null;
				return [{
					path,
					oldText: null,
					newText: content
				}];
			}
			if (toolName === "edit") {
				const path = stringArg(args, "file_path");
				const oldString = stringArg(args, "old_string");
				const newString = stringArg(args, "new_string");
				if (path === void 0 || oldString === void 0 || newString === void 0) return null;
				return [{
					path,
					oldText: oldString || null,
					newText: newString
				}];
			}
			return null;
		}
		/** The wire Tool name of a frozen call block, when the block still carries it. */
		function callToolName(block) {
			return "kind" in block ? block.call?.name ?? "" : block.name;
		}
		/** Derive the diff-card props for a tool call, or null when this call is not a
		*  diff card (running calls use the call-time diff; settled calls use the
		*  applied result hunks, which replace the call-time diff). */
		function diffCardModel(block) {
			const toolName = callToolName(block);
			if (!("kind" in block)) {
				const call = block.callView?.card === "diff" ? block.callView : null;
				const diffs = call === null ? null : narrowDiffs(call.diffs);
				if (diffs !== null) return { card: { diffs } };
				const fallback = callTimeDiffs(toolName, block.argsRaw);
				return fallback === null ? null : { card: { diffs: fallback } };
			}
			const result = block.resultView?.card === "diff" ? block.resultView : null;
			const diffs = result === null ? null : narrowDiffs(result.diffs);
			if (diffs !== null) return { card: { diffs } };
			if (block.isError) return null;
			const fallback = callTimeDiffs(toolName, block.call?.argsRaw ?? "");
			return fallback === null ? null : { card: { diffs: fallback } };
		}
		//#endregion
		//#region src/client/mutation-row.tsx
		/**
		* The taken-over mutation row: a faithful re-implementation of the stock
		* ui-tool FileMutationRow (which composes ToolRow), reusing the STOCK row's
		* own stylesheet and the platform DisclosureRow/StateDot/icon components, so
		* the row looks and behaves exactly like the shipped one — only the expanded
		* diff card renders through this plugin's DiffViewer instead of DiffBlock.
		*
		* The row model derivation (title/summary/path/output/error/state) mirrors
		* the stock tool-call model for the edit/write variants; the CSS classes come
		* from the ui-tool package's exported src subpath (inlined into this bundle).
		*/
		/** Flatten a settled result's content blocks to display text (stock resultText). */
		function resultText(node) {
			const parts = [];
			for (const block of node.content) if (block.type === "text") parts.push(block.text);
			else parts.push(JSON.stringify(block, null, 2));
			if (parts.length === 0 && node.error !== void 0) parts.push(`${node.error.name}: ${node.error.code}`);
			return parts.join("\n");
		}
		function firstLine(text) {
			const nl = text.indexOf("\n");
			return nl === -1 ? text : text.slice(0, nl);
		}
		function parseArgs(argsRaw) {
			try {
				const parsed = JSON.parse(argsRaw);
				return typeof parsed === "object" && parsed !== null ? parsed : void 0;
			} catch {
				return;
			}
		}
		/** Derive the row model for the edit/write variants (stock toolRowModel mirror). */
		function rowModel(toolName, block, cwd) {
			const variant = toolName === "edit" ? "edit" : "write";
			const done = "kind" in block;
			const argsRaw = (done ? block.call?.argsRaw : block.argsRaw) ?? "";
			const state = !done ? "running" : block.error?.code === "interrupted" ? "stopped" : block.isError ? "error" : "ok";
			const parsed = parseArgs(argsRaw);
			const path = parsed !== void 0 ? typeof parsed["file_path"] === "string" && parsed["file_path"] !== "" ? parsed["file_path"] : typeof parsed["path"] === "string" ? parsed["path"] : void 0 : void 0;
			const rel = (text) => {
				if (cwd === void 0 || cwd === "") return text;
				const root = cwd.replace(/[/\\]+$/, "");
				if (text.startsWith(`${root}/`) || text.startsWith(`${root}\\`)) return text.slice(root.length + 1);
				return text;
			};
			const summary = path !== void 0 ? rel(path) : firstLine(argsRaw === "" ? block.callId : argsRaw);
			const output = done ? resultText(block) || null : null;
			return {
				variant,
				title: variant === "edit" ? "Edit" : "Write",
				summary,
				filePath: path,
				body: argsRaw === "" ? null : parsed !== void 0 ? JSON.stringify(parsed, null, 2) : argsRaw,
				output,
				errorSummary: state === "error" && output !== null ? firstLine(output) : null,
				state
			};
		}
		/** Leading-slot state substitution (stock): icon yields to the state semantic. */
		function leadingFor(state, icon) {
			switch (state) {
				case "error": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "error" });
				case "stopped": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "warning" });
				default: return icon;
			}
		}
		/** Visually hidden run-state label (stock AT requirement). */
		function stateStatus(state) {
			switch (state) {
				case "running": return "Running";
				case "error": return "Failed";
				case "stopped": return "Stopped";
				default: return null;
			}
		}
		/**
		* Whether a row card opens by default: a settled, successful `edit` result
		* shows its replacement diff without a click — the issue-driven default
		* (「edit 的结果卡片默认展开」). Writes keep the stock collapsed default (a
		* whole-file diff is bulk), and running or errored rows stay collapsed so the
		* flow never auto-expands transient or error-only cards. Pure for direct
		* testing.
		* @param toolName - the wire Tool name.
		* @param block - the frozen running or settled call slice.
		* @returns whether the row's expanded body should start open.
		*/
		function defaultOpenFor(toolName, block) {
			return toolName === "edit" && "kind" in block && !block.isError;
		}
		/**
		* The mutation row: stock FileMutationRow chrome (DisclosureRow, state dot,
		* path link, error summary, IN/OUT card) with the expanded diff card rendered
		* through DiffViewer.
		* @param props - toolview owner currency.
		*/
		function MutationRow({ toolName, block, cwd, openFile, inspect }) {
			const [expanded, setExpanded] = (0, react.useState)(() => defaultOpenFor(toolName, block));
			const runningRef = (0, react.useRef)(!("kind" in block));
			(0, react.useEffect)(() => {
				const settled = "kind" in block;
				if (runningRef.current && settled && defaultOpenFor(toolName, block)) setExpanded(true);
				runningRef.current = !settled;
			}, [toolName, block]);
			const model = rowModel(toolName, block, cwd);
			const diffBody = diffCardModel(block) ?? null;
			const outputText = model.output;
			const expandable = model.body !== null || outputText !== null || diffBody !== null;
			const open = expanded && expandable;
			const status = stateStatus(model.state);
			const failureLine = model.state === "error" ? model.errorSummary ?? null : null;
			const summaryText = failureLine ?? model.summary;
			const fileLink = model.filePath !== void 0 && failureLine === null;
			const toggleExpand = () => {
				setExpanded((v) => !v);
			};
			const openFilePath = (event) => {
				event.stopPropagation();
				if (model.filePath !== void 0) openFile(model.filePath);
			};
			const fileLinkKeyDown = (event) => {
				if (event.key === "Enter" || event.key === " ") event.stopPropagation();
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: ToolRow_module_css_default.root,
				"data-variant": model.variant,
				"data-tool": toolName,
				"data-state": model.state,
				"data-diff-viewer-row": "",
				children: [status !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: ToolRow_module_css_default.visuallyHidden,
					children: status
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.DisclosureRow, {
					rowClassName: ToolRow_module_css_default.row,
					leadingClassName: ToolRow_module_css_default.leading,
					titleClassName: ToolRow_module_css_default.title,
					chevronClassName: ToolRow_module_css_default.chevron,
					icon: leadingFor(model.state, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutline16, { size: 14 })),
					title: model.title,
					open,
					expandable,
					expandOnRowClick: true,
					keepContentWhenOpen: true,
					onToggle: toggleExpand,
					collapsedContent: summaryText !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: ToolRow_module_css_default.sep,
						"aria-hidden": true
					}), fileLink ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: ToolRow_module_css_default.fileLink,
						onClick: openFilePath,
						onKeyDown: fileLinkKeyDown,
						children: summaryText
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: clsx(ToolRow_module_css_default.summary, failureLine !== null && ToolRow_module_css_default.errorSummary),
						children: summaryText
					})] }),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: ToolRow_module_css_default.bodyWrap,
						children: [diffBody !== null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DiffViewer, {
							diffs: diffBody.card.diffs,
							className: ToolRow_module_css_default.diffBody
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: (model.body !== null || outputText !== null) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: ToolRow_module_css_default.ioCard,
							children: [
								model.body !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: ToolRow_module_css_default.ioSection,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ToolRow_module_css_default.ioLabel,
										children: "IN"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ToolRow_module_css_default.ioText,
										children: model.body
									})]
								}),
								model.body !== null && outputText !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: ToolRow_module_css_default.ioDivider,
									"aria-hidden": true
								}),
								outputText !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: ToolRow_module_css_default.ioSection,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ToolRow_module_css_default.ioLabel,
										children: "OUT"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: ToolRow_module_css_default.ioText,
										"data-error": model.state === "error" || void 0,
										children: outputText
									})]
								})
							]
						}) }), inspect !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							className: ToolRow_module_css_default.inspectButton,
							onClick: inspect,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconInspectOutline12, {}), "Inspect"]
						})]
					})
				})]
			});
		}
		//#endregion
		//#region src/client/index.tsx
		/** Required service: the slot registry. */
		const inject = ["slots"];
		/** The tool keys this plugin takes over (the wire tools that emit diff cards). */
		const MUTATION_TOOLS = ["edit", "write"];
		/**
		* Mount the DiffViewer rows into the keyed atomic Tool view slot under the
		* mutation tool keys, shadowing the shipped rows at a lower priority.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			ctx.slots.inject("tool.call.toolview", function* () {
				for (const key of MUTATION_TOOLS) yield ctx.slots.register({
					name: "tool.call.toolview",
					key,
					priority: -1
				}, MutationRow);
			});
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
