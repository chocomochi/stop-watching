(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([
    [4024, 3631], {
        "1tEM": function(e, t, n) {
            "use strict"
            n.r(t)
            var i = n("VTBJ")
            var a = n("mX+G")
            var o = n.n(a)
            var s = n("ouhR")
            var r = n.n(s)
            var u = n("3O+N")
            var l = n.n(u)
            var _ = n("HGxv")
            var d = n("8WeW")
            Object(d["a"])(JSON.parse('{"ar":{"buttons":{"choose_a_file":"اختر ملفًا","delete_file":"حذف الملف %{name}"}},"ca":{"buttons":{"choose_a_file":"Tria un fitxer","delete_file":"Suprimeix el fitxer %{name}"}},"cy":{"buttons":{"choose_a_file":"Dewiswch Ffeil","delete_file":"Dileu ffeil %{name}"}},"da":{"buttons":{"choose_a_file":"Vælg en fil","delete_file":"Slet fil %{name}"}},"da-x-k12":{"buttons":{"choose_a_file":"Vælg en fil","delete_file":"Slet fil %{name}"}},"de":{"buttons":{"choose_a_file":"Eine Datei auswählen","delete_file":"Datei %{name} löschen"}},"el":{"buttons":{"choose_a_file":"Επιλέξτε αρχείο"}},"en-AU":{"buttons":{"choose_a_file":"Choose a File","delete_file":"Delete file %{name}"}},"en-AU-x-unimelb":{"buttons":{"choose_a_file":"Choose a File","delete_file":"Delete file %{name}"}},"en-CA":{"buttons":{"choose_a_file":"Choose a File","delete_file":"Delete file %{name}"}},"en-GB":{"buttons":{"choose_a_file":"Choose a file","delete_file":"Delete file %{name}"}},"en-GB-x-lbs":{"buttons":{"choose_a_file":"Choose a file","delete_file":"Delete file %{name}"}},"en-GB-x-ukhe":{"buttons":{"choose_a_file":"Choose a file","delete_file":"Delete file %{name}"}},"es":{"buttons":{"choose_a_file":"Elegir un archivo","delete_file":"Eliminar archivo %{name}"}},"es-ES":{"buttons":{"choose_a_file":"Elegir un archivo","delete_file":"Eliminar archivo %{name}"}},"fa":{"buttons":{"choose_a_file":"انتخاب یک فایل","delete_file":"حذف فایل %{name}"}},"fi":{"buttons":{"choose_a_file":"Valitse tiedosto","delete_file":"Poista tiedosto %{name}"}},"fr":{"buttons":{"choose_a_file":"Choisir un fichier","delete_file":"Supprimer le fichier %{name}"}},"fr-CA":{"buttons":{"choose_a_file":"Choisir un fichier","delete_file":"Supprimer le fichier %{name}"}},"he":{"buttons":{"choose_a_file":"בחירת קובץ","delete_file":"ביטול קובץ  %{name}"}},"ht":{"buttons":{"choose_a_file":"Chwazi yon Fichye","delete_file":"Efase fichye %{name}"}},"hu":{"buttons":{"choose_a_file":"Fájl kiválasztása","delete_file":"Ezen fájl törlése: %{name}"}},"hy":{"buttons":{"choose_a_file":"Ընտրել ֆայլը","delete_file":"Ջնջել %{name} ֆայլը "}},"is":{"buttons":{"choose_a_file":"Velja skrá","delete_file":"Eyða skránni %{name}"}},"it":{"buttons":{"choose_a_file":"Scegli un file","delete_file":"Elimina file %{name}"}},"ja":{"buttons":{"choose_a_file":"ファイルの選択","delete_file":"ファイル%{name}を削除"}},"ko":{"buttons":{"choose_a_file":"파일 선택"}},"mi":{"buttons":{"choose_a_file":"Kōwhiria he Kōnae","delete_file":"Mukua te kōnae %{name}"}},"nb":{"buttons":{"choose_a_file":"Velg en fil","delete_file":"Slett filen %{name}"}},"nb-x-k12":{"buttons":{"choose_a_file":"Velg en fil","delete_file":"Slett filen %{name}"}},"nl":{"buttons":{"choose_a_file":"Een bestand kiezen","delete_file":"%{name} bestand verwijderen"}},"nn":{"buttons":{"choose_a_file":"Vel ei fil","delete_file":"Slett fila %{name}"}},"pl":{"buttons":{"choose_a_file":"Wybierz plik","delete_file":"Usuń plik %{name}"}},"pt":{"buttons":{"choose_a_file":"Escolher um ficheiro","delete_file":"Eliminar ficheiro %{name}"}},"pt-BR":{"buttons":{"choose_a_file":"Escolher um arquivo","delete_file":"Excluir arquivo %{name}"}},"ru":{"buttons":{"choose_a_file":"Выбрать файл","delete_file":"Удалить файл %{name}"}},"sl":{"buttons":{"choose_a_file":"Izberi datoteko","delete_file":"Izbriši datoteko %{name}"}},"sv":{"buttons":{"choose_a_file":"Välj en fil","delete_file":"Radera filen %{name}"}},"sv-x-k12":{"buttons":{"choose_a_file":"Välj en fil","delete_file":"Radera filen %{name}"}},"th":{"buttons":{"choose_a_file":"เลือกไฟล์","delete_file":"ลบไฟล์ %{name}"}},"tr":{"buttons":{"choose_a_file":"Bir Dosya Seçin","delete_file":"%{name} dosyasını sil"}},"uk":{"buttons":{"choose_a_file":"Виберіть файл","delete_file":"Видалити файл %{name}"}},"zh-Hans":{"buttons":{"choose_a_file":"选择文件","delete_file":"删除文件 %{name}"}},"zh-Hant":{"buttons":{"choose_a_file":"選擇檔案","delete_file":"刪除文檔 %{name}"}}}'))
            n("jQeR")
            n("0sPK")
            _["default"].scoped("quizzes.file_upload_question_state")
            n("BGrI")
            var c = l.a.default
            var m = c.template,
                h = c.templates = c.templates || {}
            var f = "/work/canvas-deploy/generated/ui/features/take-quiz/jst/fileUploadQuestionState"
            h[f] = m((function(e, t, n, i, a) {
                this.compilerInfo = [4, ">= 1.0.0"]
                n = this.merge(n, e.helpers)
                a = a || {}
                var o, s = "",
                    r = "function",
                    u = this.escapeExpression,
                    l = n.helperMissing,
                    _ = this

                function d(e, t) {
                    var i, a, o, s = ""
                    s += "\n  "
                    if (a = n.display_name) i = a.call(e, {
                        hash: {},
                        data: t
                    })
                    else {
                        a = e && e.display_name
                        i = typeof a === r ? a.call(e, {
                            hash: {},
                            data: t
                        }) : a
                    }
                    s += u(i) + "<button role='button' class=\"pull-right delete-attachment\" aria-label='" + u((a = n.t || e && e.t, o = {
                        hash: {
                            name: e && e.display_name,
                            scope: "quizzes.file_upload_question_state"
                        },
                        data: t
                    }, a ? a.call(e, "#buttons.delete_file", "Delete file %{name}", o) : l.call(e, "t", "#buttons.delete_file", "Delete file %{name}", o))) + '\'><i class="icon-end"/></button>\n'
                    return s
                }

                function c(e, t) {
                    var i, a = ""
                    a += "\n  "
                    i = n["if"].call(e, e && e.isIE, {
                        hash: {},
                        inverse: _.program(6, h, t),
                        fn: _.program(4, m, t),
                        data: t
                    });
                    (i || 0 === i) && (a += i)
                    a += "\n"
                    return a
                }

                function m(e, t) {
                    return '\n    <input name=file class="file-upload" type=file />\n  '
                }

                function h(e, t) {
                    var i, a, o = ""
                    o += '\n    <button class="btn file-upload-btn">\n      ' + u((i = n.t || e && e.t, a = {
                        hash: {
                            scope: "quizzes.file_upload_question_state"
                        },
                        data: t
                    }, i ? i.call(e, "#buttons.choose_a_file", "Choose a File", a) : l.call(e, "t", "#buttons.choose_a_file", "Choose a File", a))) + "\n    </button>\n  "
                    return o
                }
                o = n["if"].call(t, t && t.display_name, {
                    hash: {},
                    inverse: _.program(3, c, a),
                    fn: _.program(1, d, a),
                    data: a
                });
                (o || 0 === o) && (s += o)
                s += "\n"
                return s
            }))
            var g = h[f]
            Object(d["a"])(JSON.parse('{"ar":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"تم تحميل الملف بنجاح.","files_removed":"تمت إزالة %{display_name}."}}}},"ca":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"El vostre fitxer s\'ha carregat correctament.","files_removed":"%{display_name} s\'ha suprimit."}}}},"cy":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Wedi llwyddo i lwytho eich ffeil i fyny.","files_removed":"%{display_name} wedi cael ei dynnu."}}}},"da":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Din fil er blevet uploadet","files_removed":"%{display_name} er blevet fjernet."}}}},"da-x-k12":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Din fil er blevet uploadet","files_removed":"%{display_name} er blevet fjernet."}}}},"de":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Ihre Datei wurde hochgeladen.","files_removed":"%{display_name} wurde entfernt."}}}},"el":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Το αρχείο σας μεταφορτώθηκε επιτυχώς.","files_removed":"Το %{display_name} έχει αφαιρεθεί."}}}},"en-AU":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Your file has been successfully uploaded.","files_removed":"%{display_name} has been removed."}}}},"en-AU-x-unimelb":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Your file has been successfully uploaded.","files_removed":"%{display_name} has been removed."}}}},"en-CA":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Your file has been successfully uploaded.","files_removed":"%{display_name} has been removed."}}}},"en-GB":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Your file has been successfully uploaded.","files_removed":"%{display_name} has been removed."}}}},"en-GB-x-lbs":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Your file has been successfully uploaded.","files_removed":"%{display_name} has been removed."}}}},"en-GB-x-ukhe":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Your file has been successfully uploaded.","files_removed":"%{display_name} has been removed."}}}},"es":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Su archivo se ha cargado correctamente.","files_removed":"Se ha eliminado %{display_name}."}}}},"es-ES":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Su archivo se ha cargado correctamente.","files_removed":"Se ha eliminado %{display_name}."}}}},"fa":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"فایل شما با موفقیت بارگذاری شده است.","files_removed":"%{display_name} حذف شده است."}}}},"fi":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Tiedostosi on ladattu onnistuneesti.","files_removed":"%{display_name} on poistettu."}}}},"fr":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Votre fichier a été chargé.","files_removed":"%{display_name} a été supprimé."}}}},"fr-CA":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Votre fichier a été chargé.","files_removed":"%{display_name} a été retiré."}}}},"he":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"הקובץ שלך עלה בהצלחה","files_removed":"%{display_name} הוסר."}}}},"ht":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Fichye ou a transfere kòrèkteman.","files_removed":"%{display_name} te elimine."}}}},"hu":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"A fájl feltöltése sikerült.","files_removed":"%{display_name} el lett távolítva."}}}},"hy":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Ձեր ֆայլը հաջողությամբ բեռնվել է:","files_removed":"%{display_name} հեռացվել է:"}}}},"is":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Skránni þinn var hlaðið upp.","files_removed":"%{display_name} var fjarlægt."}}}},"it":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Il tuo file è stato caricato correttamente.","files_removed":"%{display_name} è stato rimosso."}}}},"ja":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"ファイルがアップロードされました。","files_removed":"%{display_name} は削除されました。"}}}},"ko":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"파일을 성공적으로 업로드했습니다.","files_removed":"%{display_name}을(를) 제거했습니다."}}}},"mi":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Kua oti pai te tukuake tō kōnae.","files_removed":" %{display_name} kua tangohia."}}}},"nb":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Filen din ble lastet opp.","files_removed":"%{display_name} har blitt fjernet."}}}},"nb-x-k12":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Filen din ble lastet opp.","files_removed":"%{display_name} har blitt fjernet."}}}},"nl":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Je bestand is succesvol geüpload.","files_removed":"%{display_name} is verwijderd."}}}},"nn":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Fila er lasta opp.","files_removed":"%{display_name} er fjerna."}}}},"pl":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Plik został pomyślnie przekazany.","files_removed":"Plik %{display_name} został usunięty."}}}},"pt":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"O seu ficheiro foi carregado com sucesso.","files_removed":"%{display_name} foi removido."}}}},"pt-BR":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Seu arquivo foi enviado com sucesso.","files_removed":"%{display_name} foi removido."}}}},"ru":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Ваш файл был успешно загружен.","files_removed":"%{display_name} было удалено."}}}},"sl":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Datoteka je uspešno naložena.","files_removed":"%{display_name} je odstranjeno."}}}},"sv":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Din fil har laddats upp.","files_removed":"%{display_name} har tagits bort."}}}},"sv-x-k12":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Din fil har laddats upp.","files_removed":"%{display_name} har tagits bort."}}}},"th":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"อัพโหลดไฟล์ของคุณเสร็จสิ้น","files_removed":"ลบ %{display_name} แล้ว"}}}},"tr":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Dosyanız başarıyla yüklendi.","files_removed":"%{display_name} silindi."}}}},"uk":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"Ваш файл був успішно завантажений.","files_removed":"%{display_name}  був видалений."}}}},"zh-Hans":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"您的文件已成功上传。","files_removed":"%{display_name} 已删除。"}}}},"zh-Hant":{"quizzes":{"file_uploaded_or_removed":{"quizzes":{"file_successfully_uploaded":"您的文檔已成功上傳。","files_removed":"%{display_name} 已被刪除。"}}}}}'))
            _["default"].scoped("quizzes.file_uploaded_or_removed")
            var p = l.a.default
            var v = p.template,
                b = p.templates = p.templates || {}
            var y = "/work/canvas-deploy/generated/ui/features/take-quiz/jst/fileUploadedOrRemoved"
            b[y] = v((function(e, t, n, i, a) {
                this.compilerInfo = [4, ">= 1.0.0"]
                n = this.merge(n, e.helpers)
                a = a || {}
                var o, s = "",
                    r = n.helperMissing,
                    u = this.escapeExpression,
                    l = this

                function _(e, t) {
                    var i, a, o = ""
                    o += '\n\n  <div class="file-status file-uploaded">\n    <em role="alert" aria-live="assertive">\n    ' + u((i = n.t || e && e.t, a = {
                        hash: {
                            scope: "quizzes.file_uploaded_or_removed"
                        },
                        data: t
                    }, i ? i.call(e, "quizzes.file_successfully_uploaded", "Your file has been successfully uploaded.", a) : r.call(e, "t", "quizzes.file_successfully_uploaded", "Your file has been successfully uploaded.", a))) + "\n    </em>\n  </div>\n"
                    return o
                }

                function d(e, t) {
                    var i, a, o = ""
                    o += '\n  <div class="file-status file-removed">\n    <em role="alert" aria-live="assertive">\n      ' + u((i = n.t || e && e.t, a = {
                        hash: {
                            display_name: e && e.display_name,
                            scope: "quizzes.file_uploaded_or_removed"
                        },
                        data: t
                    }, i ? i.call(e, "quizzes.files_removed", "%{display_name} has been removed.", a) : r.call(e, "t", "quizzes.files_removed", "%{display_name} has been removed.", a))) + "\n    </em>\n  </div>\n"
                    return o
                }
                o = n["if"].call(t, t && t.fileUploaded, {
                    hash: {},
                    inverse: l.program(3, d, a),
                    fn: l.program(1, _, a),
                    data: a
                });
                (o || 0 === o) && (s += o)
                s += "\n"
                return s
            }))
            var k = b[y]
            n("Dhso")
            n("sXof")
            class w extends a["View"] {
                static initClass() {
                    this.prototype.els = {
                        ".file-upload": "$fileUpload",
                        ".file-upload-btn": "$fileDialogButton",
                        ".attachment-id": "$attachmentID",
                        ".file-upload-box": "$fileUploadBox",
                        "#fileupload_in_progress": "$fileUploadInprogress"
                    }
                    this.prototype.events = {
                        "change input[type=file]": "checkForFileChange",
                        "click .file-upload-btn": "openFileBrowser",
                        "click .delete-attachment": "deleteAttachment"
                    }
                }
                checkForFileChange(e) {
                    let t
                    e.preventDefault()
                    e.stopPropagation()
                    if (t = this.$fileUpload.val()) {
                        this.removeFileStatusMessage()
                        this.model.set("file", this.$fileUpload[0])
                        this.$fileUploadInprogress.val(true)
                        const e = this.model.save(null, {
                            success: this.processAttachment.bind(this)
                        })
                        return this.$fileUploadBox.disableWhileLoading(e)
                    }
                }
                openFileBrowser(e) {
                    e.preventDefault()
                    return this.$fileUpload.click()
                }
                render() {
                    super.render(...arguments)
                    const e = !!r.a.browser.msie
                    this.$fileUploadBox.html(g(Object(i["a"])(Object(i["a"])({}, this.model.present()), {}, {
                        isIE: e
                    })))
                    this.$fileUpload = this.$(".file-upload")
                    return this
                }
                removeFileStatusMessage() {
                    return this.$fileUploadBox.siblings(".file-status").remove()
                }
                processAttachment(e) {
                    this.$attachmentID.val(this.model.id).trigger("change")
                    this.$fileUploadInprogress.val(false)
                    this.$fileUploadBox.addClass("file-upload-box-with-file")
                    this.render()
                    this.$fileUploadBox.parent().append(k(Object(i["a"])(Object(i["a"])({}, this.model.present()), {}, {
                        fileUploaded: true
                    })))
                    return this.trigger("attachmentManipulationComplete")
                }
                deleteAttachment(e) {
                    e.preventDefault()
                    this.$attachmentID.val("").trigger("change")
                    this.$fileUploadBox.removeClass("file-upload-box-with-file")
                    this.$fileUpload.val(null)
                    const t = this.model.present()
                    this.model.clear()
                    this.removeFileStatusMessage()
                    this.render()
                    this.$fileUploadBox.parent().append(k(t))
                    return this.trigger("attachmentManipulationComplete")
                }
            }
            w.initClass()
            var z = n("C8i9")
            Object(d["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","login":"تسجيل الدخول"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"لا يمكنك العودة إلى هذا السؤال بعد الضغط على التالي. هل أنت متأكد أنك تريد تركه فارغًا؟","file_upload_in_progress":"تحميل الصورة قيد التقدم. قد تفقد إجابتك قبل أن تكتمل.","navigate_away":"أنت على وشك الخروج من هذه الصفحة.  هل تريد المتابعة على أية حال؟","unanswered_questions":{"one":"لم تقم بالإجابة على سؤال واحد (انظر الشريط الجانبي الأيمن للتفاصيل).  الإرسال على أية حال؟","other":"لم تقم بالإجابة على %{count} من الأسئلة (انظر الشريط الجانبي الأيمن للتفاصيل).  الإرسال على أية حال؟"},"unfinished_quiz":"أنت على وشك ترك الاختبار وهو غير منتهِ.  هل تريد المتابعة على أية حال؟","unseen_questions":{"one":"لا يزال هناك سؤال واحد لم تره. هل تريد الإرسال على أي حال؟","other":"لا يزال هناك %{count} من الأسئلة التي لم تراها. هل تريد الإرسال على أي حال؟"}},"days_count":{"one":"يوم واحد","other":"%{count} من الأيام"},"errors":{"connection_lost":"تم فقد الاتصال بـ %{host}.  يُرجى التأكد من اتصالك بالإنترنت قبل المتابعة.","only_numerical_values":"يتم فقط قبول القيم الرقمية"},"hide_time_link":"إخفاء الوقت","hours_count":{"one":"ساعة واحدة","other":"%{count} ساعة"},"labels":{"time_elapsed":"انقضى الوقت"},"login_failed":"فشل تسجيل الدخول.","login_successful":"تم تسجيل الدخول بنجاح.","minutes_count":{"one":"دقيقة واحدة","other":"%{count} دقيقة"},"months_count":{"one":"شهر واحد","other":"%{count} أشهر"},"notices":{"due_date_five_minutes_left":"تتبقى خمس دقائق قبل وضع علامة على الاختبار بأنه متأخر","due_date_one_minute_left":"تتبقى دقيقة واحدة قبل وضع علامة على الاختبار بأنه متأخر","due_date_thirty_minutes_left":"تتبقى ثلاثون دقيقة قبل وضع علامة على الاختبار بأنه متأخر","submission_five_minutes_left":"سيتم إرسال هذا الاختبار خلال 5 دقائق","submission_one_minute_left":"سيتم إرسال هذا الاختبار خلال دقيقة واحدة","submission_thirty_minutes_left":"سيتم إرسال هذا الاختبار خلال ثلاثين دقيقة"},"question_answered":"المجابة","question_unanswered":"لم تتم الإجابة بعد","saved_at":"تم الحفظ على %{t}","saving":"جارٍ الحفظ...","saving_not_needed":"لا توجد بيانات جديدة للحفظ. تم آخر فحص في %{t}","seconds_count":{"one":"ثانية واحدة","other":"%{count} ثوانٍ"},"show_time_link":"إظهار الوقت","titles":{"come_back_later":"قمت بوضع علامة على هذا السؤال للرجوع إليه لاحقًا","times_up":"انتهى الوقت!"},"years_count":{"one":"سنة واحدة","other":"%{count} من السنوات"}}},"saving_d55dd90e":"جارٍ الحفظ...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"لقد مُنحت وقتًا إضافيًا لهذه المحاولة","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"قد يكون اتصال المستعرض بطيئًا أو غير مستقر. بالرغم من عدم اتصال مؤقت المستعرض، فسيتم تسجيل إجاباتك لمدة 5 دقائق إضافية بعد حد الوقت الأصلي عند هذه المحاولة.","your_time_for_this_quiz_has_been_reduced_394652e9":"تم تقليل وقتك لهذا الاختبار."},"ca":{"buttons":{"cancel":"Cancel·la","login":"Inici de sessió"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Un cop premeu Següent, no podreu tornar a aquesta pregunta. Segur que voleu deixar-ho en blanc?","file_upload_in_progress":"La càrrega del fitxer està en curs. Pot ser que perdeu la resposta abans de completar-la.","navigate_away":"Esteu a punt de sortir de la pàgina.  Voleu continuar igualment?","unanswered_questions":{"one":"Teniu una pregunta sense resposta (vegeu els detalls a la barra lateral dreta).  Voleu entregar igualment?","other":"Teniu %{count} preguntes sense resposta (vegeu els detalls a la barra lateral dreta).  Voleu entregar igualment?"},"unfinished_quiz":"Esteu a punt de sortir del qüestionari sense finalitzar-lo.  Voleu continuar igualment?","unseen_questions":{"one":"Encara hi ha una pregunta que no heu vist.  Voleu entregar igualment?","other":"Encara hi ha %{count} preguntes que no heu vist.  Voleu entregar igualment?"}},"days_count":{"one":"1 dia","other":"%{count} dies"},"errors":{"connection_lost":"S\'ha perdut la connexió amb %{host}.  Assegureu-vos que teniu connexió a Internet abans de continuar.","only_numerical_values":"només s\'accepten valors numèrics"},"hide_time_link":"Amaga l’hora","hours_count":{"one":"1 hora","other":"%{count} hores"},"labels":{"time_elapsed":"Temps transcorregut"},"login_failed":"No s\'ha pogut iniciar la sessió.","login_successful":"S\'ha iniciat la sessió correctament.","minutes_count":{"one":"1 minut","other":"%{count} minuts"},"months_count":{"one":"1 mes","other":"%{count} mesos"},"notices":{"due_date_five_minutes_left":"D\'aquí cinc minuts el qüestionari es marcarà com a endarrerit","due_date_one_minute_left":"D\'aquí un minut el qüestionari es marcarà com a endarrerit","due_date_thirty_minutes_left":"D\'aquí trenta minuts el qüestionari es marcarà com a endarrerit","submission_five_minutes_left":"Aquest qüestionari s\'enviarà d\'aquí cinc minuts","submission_one_minute_left":"Aquest qüestionari s\'enviarà d\'aquí un minut","submission_thirty_minutes_left":"Aquest qüestionari s\'enviarà d\'aquí trenta minuts"},"question_answered":"Respost","question_unanswered":"Encara sense resposta","saved_at":"Qüestionari desat: %{t}","saving":"S\'està desant...","saving_not_needed":"No hi ha dades noves per desar. Última comprovació: %{t}","seconds_count":{"one":"Un segon","other":"%{count} segons"},"show_time_link":"Mostra l’hora","titles":{"come_back_later":"Heu marcat aquesta pregunta per tornar-hi més tard","times_up":"S\'ha acabat el temps!"},"years_count":{"one":"1 any","other":"%{count} anys"}}},"saving_d55dd90e":"S\'està desant...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Us han donat temps addicional per a aquest intent","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"La connectivitat del vostre navegador pot ser que sigui ser lenta o inestable. Encara que el temporitzador del vostre navegador es desconnecti, les vostres respostes s’enregistraran durant 5 minuts addicionals després del límit de temps original d’aquest intent.","your_time_for_this_quiz_has_been_reduced_394652e9":"El vostre temps per a aquest qüestionari s\'ha reduït."},"cy":{"buttons":{"cancel":"Canslo","login":"Mewngofnodi"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Does dim modd i chi ddod yn ôl i’r cwestiwn hwn ar ôl i chi daro nesaf. Ydych chi’n siŵr eich bod am ei adael yn wag?","file_upload_in_progress":"Wrthi’n llwytho ffeil i fyny Gallech chi golli eich ateb cyn iddo gael ei orffen.","navigate_away":"Rydych chi ar fin crwydro i ffwrdd o’r dudalen hon.  Bwrw ymlaen beth bynnag?","unanswered_questions":{"one":"Mae gennych chi 1 cwestiwn heb ei ateb (mae’r manylion yn y bar ochr ar y dde).  Cyflwyno beth bynnag?","other":"Mae gennych chi %{count} cwestiwn heb eu hateb (mae’r manylion yn y bar ochr ar y dde).  Cyflwyno beth bynnag?"},"unfinished_quiz":"Rydych chi ar fin gadael y cwis heb ei orffen.  Bwrw ymlaen beth bynnag?","unseen_questions":{"one":"Mae dal 1 cwestiwn dydych chi ddim wedi\'i weld eto.  Cyflwyno beth bynnag?","other":"Mae dal %{count} cwestiwn dydych chi ddim wedi\'u gweld eto.  Cyflwyno beth bynnag?"}},"days_count":{"one":"1 diwrnod","other":"%{count} Diwrnod"},"errors":{"connection_lost":"Wedi colli’r cysylltiad â %{host}.  Gwnewch yn siŵr eich bod wedi cysylltu â’r rhyngrwyd cyn bwrw ymlaen.","only_numerical_values":"dim ond gwerthoedd rhifol sy’n cael eu derbyn"},"hide_time_link":"Cuddio Amser","hours_count":{"one":"1 awr","other":"%{count} Awr"},"labels":{"time_elapsed":"Amser wedi mynd heibio"},"login_failed":"Wedi methu mewngofnodi.","login_successful":"Wedi llwyddo i fewngofnodi.","minutes_count":{"one":"1 munud","other":"%{count} Munud"},"months_count":{"one":"1 mis","other":"%{count} mis"},"notices":{"due_date_five_minutes_left":"Pum munud ar ôl nes bydd y cwis yn cael ei farcio fel un hwyr","due_date_one_minute_left":"Un munud ar ôl nes bydd y cwis yn cael ei farcio fel un hwyr","due_date_thirty_minutes_left":"Tri deg munud ar ôl nes bydd y cwis yn cael ei farcio fel un hwyr","submission_five_minutes_left":"Caiff y cwis hwn ei gyflwyno mewn pum munud","submission_one_minute_left":"Caiff y cwis hwn ei gyflwyno mewn un munud","submission_thirty_minutes_left":"Caiff y cwis hwn ei gyflwyno mewn tri deg munud"},"question_answered":"Wedi ateb","question_unanswered":"Heb ateb eto","saved_at":"Cwis wedi\'i gadw yn %{t}","saving":"Wrthi’n cadw...","saving_not_needed":"Dim data newydd i’w gadw. Wedi\'i wirio ddiwethaf ar %{t}","seconds_count":{"one":"1 eiliad","other":"%{count} Eiliad"},"show_time_link":"Dangos Amser","titles":{"come_back_later":"Rydych chi wedi marcio’r cwestiwn hwn fel un i ddod yn ôl ato wedyn","times_up":"Amser ar ben!"},"years_count":{"one":"1 flwyddyn","other":"%{count} Blwyddyn"}}},"saving_d55dd90e":"Wrthi’n cadw...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Rydych chi wedi cael mwy o amser ar gyfer yr ymgais hon","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Efallai y bydd cysylltiad eich porwr yn araf neu’n ansefydlog. Er gwaethaf y ffaith bod amserydd eich porwr wedi cael ei ddatgysylltu, bydd eich atebion yn cael eu cofnodi am 5 munud ychwanegol ar y terfyn amser gwreiddiol ar y cais hwn.","your_time_for_this_quiz_has_been_reduced_394652e9":"Mae’ch amser ar gyfer y cwis hwn wedi cael ei leihau."},"da":{"buttons":{"cancel":"Annullér","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Du kan ikke vende tilbage til spørgsmål, efter du klikker på næste. Er du sikker på, at du vil lade det stå tomt?","file_upload_in_progress":"Filupload er i gang. Du kan miste dit svar, før det er færdigt.","navigate_away":"Du er ved at navigere væk fra denne side. Fortsæt alligevel?","unanswered_questions":{"one":"Du har 1 ubesvaret spørgsmål (se det højre sidepanel for nærmere oplysninger). Aflever alligevel?","other":"Du har %{count} ubesvarede spørgsmål (se det højre sidepanel for nærmere oplysninger). Aflever alligevel?"},"unfinished_quiz":"Du er ved at forlade denne test uafsluttet. Fortsæt alligevel?","unseen_questions":{"one":"Der findes stadig 1 spørgsmål, som du endnu ikke har set. Aflever alligevel?","other":"Der findes stadig %{count} spørgsmål, som du endnu ikke har set. Aflever alligevel?"}},"days_count":{"one":"1 dag","other":"%{count} dage"},"errors":{"connection_lost":"Forbindelse med %{host} gik tabt. Sørg for, at du er koblet til nettet, inden du fortsætter.","only_numerical_values":"der accepteres kun numeriske værdier"},"hide_time_link":"Skjul tid","hours_count":{"one":"1 time","other":"%{count} timer"},"labels":{"time_elapsed":"Tid forløbet"},"login_failed":"Login mislykkede.","login_successful":"Login vellykket.","minutes_count":{"one":"1 minut","other":"%{count} minutter"},"months_count":{"one":"1 måned","other":"%{count} måneder"},"notices":{"due_date_five_minutes_left":"Fem minutter tilbage, inden testen markeres som sen","due_date_one_minute_left":"Et minut tilbage, inden testen markeres som sen","due_date_thirty_minutes_left":"Tredive minutter tilbage, inden testen markeres som sen","submission_five_minutes_left":"Denne test afleveres om fem minutter","submission_one_minute_left":"Denne test afleveres om et minut","submission_thirty_minutes_left":"Denne test afleveres om tredive minutter"},"question_answered":"Besvaret","question_unanswered":"Har ikke svaret endnu","saved_at":"Test gemt %{t}","saving":"Gemmer ...","saving_not_needed":"Ingen nye data til lagring. Sidst tjekket kl. %{t}","seconds_count":{"one":"1 sekund","other":"%{count} sekunder"},"show_time_link":"Vis tid","titles":{"come_back_later":"Du afmærkede dette spørgsmål for at vende tilbage senere","times_up":"Tiden er udløbet!"},"years_count":{"one":"1 år","other":"%{count} år"}}},"saving_d55dd90e":"Gemmer ...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Du er blevet givet ekstra tid til dette forsøg","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Din browserforbindelse kan være langsom eller ustabil. Selvom din browsers timer er afbrudt, registreres dine svar i yderligere 5 minutter ud over den oprindelige tidsgrænse for dette forsøg.","your_time_for_this_quiz_has_been_reduced_394652e9":"Din tid for denne test er blevet reduceret."},"da-x-k12":{"buttons":{"cancel":"Annullér","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Du kan ikke vende tilbage til spørgsmål, efter du klikker på næste. Er du sikker på, at du vil lade det stå tomt?","file_upload_in_progress":"Filupload er i gang. Du kan miste dit svar, før det er færdigt.","navigate_away":"Du er ved at navigere væk fra denne side. Fortsæt alligevel?","unanswered_questions":{"one":"Du har 1 ubesvaret spørgsmål (se det højre sidepanel for nærmere oplysninger). Aflever alligevel?","other":"Du har %{count} ubesvarede spørgsmål (se det højre sidepanel for nærmere oplysninger). Aflever alligevel?"},"unfinished_quiz":"Du er ved at forlade denne quiz uafsluttet. Fortsæt alligevel?","unseen_questions":{"one":"Der findes stadig 1 spørgsmål, som du endnu ikke har set. Aflever alligevel?","other":"Der findes stadig %{count} spørgsmål, som du endnu ikke har set. Aflever alligevel?"}},"days_count":{"one":"1 dag","other":"%{count} dage"},"errors":{"connection_lost":"Forbindelse med %{host} gik tabt. Sørg for, at du er koblet til nettet, inden du fortsætter.","only_numerical_values":"der accepteres kun numeriske værdier"},"hide_time_link":"Skjul tid","hours_count":{"one":"1 time","other":"%{count} timer"},"labels":{"time_elapsed":"Tid forløbet"},"login_failed":"Login mislykkede.","login_successful":"Login vellykket.","minutes_count":{"one":"1 minut","other":"%{count} minutter"},"months_count":{"one":"1 måned","other":"%{count} måneder"},"notices":{"due_date_five_minutes_left":"Fem minutter tilbage, inden quizzen markeres som sen","due_date_one_minute_left":"Et minut tilbage, inden quizzen markeres som sen","due_date_thirty_minutes_left":"Tredive minutter tilbage, inden quizzen markeres som sen","submission_five_minutes_left":"Denne quiz afleveres om fem minutter","submission_one_minute_left":"Denne quiz afleveres om et minut","submission_thirty_minutes_left":"Denne quiz afleveres om tredive minutter"},"question_answered":"Besvaret","question_unanswered":"Har ikke svaret endnu","saved_at":"Quiz gemt %{t}","saving":"Gemmer ...","saving_not_needed":"Ingen nye data til lagring. Sidst tjekket kl. %{t}","seconds_count":{"one":"1 sekund","other":"%{count} sekunder"},"show_time_link":"Vis tid","titles":{"come_back_later":"Du afmærkede dette spørgsmål for at vende tilbage senere","times_up":"Tiden er udløbet!"},"years_count":{"one":"1 år","other":"%{count} år"}}},"saving_d55dd90e":"Gemmer ...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Du er blevet givet ekstra tid til dette forsøg","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Din browserforbindelse kan være langsom eller ustabil. Selvom din browsers timer er afbrudt, registreres dine svar i yderligere 5 minutter ud over den oprindelige tidsgrænse for dette forsøg.","your_time_for_this_quiz_has_been_reduced_394652e9":"Din tid for denne quiz er blevet reduceret."},"de":{"buttons":{"cancel":"Abbrechen","login":"Anmelden"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Wenn Sie auf „Weiter“ klicken, können Sie nicht mehr zu dieser Frage zurückkehren. Möchten Sie die Frage wirklich unbeantwortet lassen?","file_upload_in_progress":"Datei wird hochgeladen Sie könnten Ihre Antwort verlieren, bevor sie vollständig ist.","navigate_away":"Sie sind dabei, diese Seite zu verlassen. Möchten Sie trotzdem fortfahren?","unanswered_questions":{"one":"Sie haben 1 unbeantwortete Frage (siehe rechte Seitenleiste für Details). Trotzdem abgeben?","other":"Sie haben %{count} unbeantwortete Fragen (siehe rechte Seitenleiste für Details). Trotzdem abgeben?"},"unfinished_quiz":"Sie sind dabei, das nicht abgeschlossene Quiz zu verlassen. Möchten Sie trotzdem fortfahren?","unseen_questions":{"one":"Es ist noch 1 Frage vorhanden, die Sie noch nicht gesehen haben. Trotzdem absenden?","other":"Es sind noch %{count} Fragen vorhanden, die Sie noch nicht gesehen haben. Trotzdem abgeben?"}},"days_count":{"one":"1 Tag","other":"%{count} Tage"},"errors":{"connection_lost":"Die Verbindung mit %{host} ist abgebrochen. Bevor Sie fortfahren, vergewissern Sie sich, dass Ihre Internetverbindung korrekt funktioniert.","only_numerical_values":"nur numerische Werte sind zulässig"},"hide_time_link":"Ausblendezeit","hours_count":{"one":"1 Stunde","other":"%{count} Stunden"},"labels":{"time_elapsed":"Verstrichene Zeit"},"login_failed":"Anmeldung fehlgeschlagen","login_successful":"Anmeldung erfolgreich","minutes_count":{"one":"1 Minute","other":"%{count} Minuten"},"months_count":{"one":"1 Monat","other":"%{count} Monate"},"notices":{"due_date_five_minutes_left":"Es bleiben fünf Minuten, bevor dass Quiz als verspätet markiert wird.","due_date_one_minute_left":"Es bleibt eine Minute, bevor das Quiz als verspätet markiert wird.","due_date_thirty_minutes_left":"Es bleiben dreißig Minuten, bevor das Quiz als verspätet markiert wird.","submission_five_minutes_left":"Dieses Quiz wird in fünf Minuten abgegeben.","submission_one_minute_left":"Dieses Quiz wird in einer Minute abgegeben.","submission_thirty_minutes_left":"Dieses Quiz wird in dreißig Minuten abgegeben."},"question_answered":"Beantwortet","question_unanswered":"Haben noch nicht geantwortet","saved_at":"Quiz gespeichert um %{t}","saving":"Speichervorgang läuft ...","saving_not_needed":"Kein neues Datum zum Speichern. Letzte Überprüfung am %{t}","seconds_count":{"one":"1 Sekunde","other":"%{count} Sekunden"},"show_time_link":"Anzeigezeit","titles":{"come_back_later":"Sie haben diese Frage für späteres Bearbeiten markiert.","times_up":"Die Zeit ist um!"},"years_count":{"one":"1 Jahr","other":"%{count} Jahre"}}},"saving_d55dd90e":"Wird gespeichert ...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Ihr Zeitlimit für diesen Versuch wurde erweitert.","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Die Konnektivität Ihres Browsers kann langsam oder instabil sein. Trotz der Trenndauer Ihres Browsers werden Ihre Antworten bei diesem Versuch für zusätzliche 5 Minuten über die ursprüngliche Frist hinaus aufgezeichnet.","your_time_for_this_quiz_has_been_reduced_394652e9":"Ihre Zeit für dieses Quiz wurde reduziert."},"el":{"buttons":{"cancel":"Ακύρωση","login":"Είσοδος"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"\\u003cmrk mid=\\"6575\\" mtype=\\"seg\\"\\u003eΔεν μπορείτε να επιστρέψετε σε αυτή την ερώτηση εφόσον πατήσετε επόμενο.\\u003c/mrk\\u003e \\u003cmrk mid=\\"6576\\" mtype=\\"seg\\"\\u003eΕίστε σίγουρος/η ότι θέλετε να το αφήσετε κενό;\\u003c/mrk\\u003e","navigate_away":"\\u003cmrk mid=\\"2649\\" mtype=\\"seg\\"\\u003eΠρόκειται να απομακρυνθείτε από αυτή τη σελίδα.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"2650\\" mtype=\\"seg\\"\\u003eΘέλετε, παρόλα αυτά, να συνεχίσετε;\\u003c/mrk\\u003e","unanswered_questions":{"one":"\\u003cmrk mid=\\"8145\\" mtype=\\"seg\\"\\u003eΔεν έχετε απαντήσει σε 1 ερώτηση (βλ. την πλευρική μπάρα δεξιά για λεπτομέρειες).\\u003c/mrk\\u003e  \\u003cmrk mid=\\"8146\\" mtype=\\"seg\\"\\u003eΘέλετε, παρόλα αυτά, να κάνετε υποβολή;\\u003c/mrk\\u003e","other":"\\u003cmrk mid=\\"8147\\" mtype=\\"seg\\"\\u003eΔεν έχετε απαντήσει σε %{count} ερωτήσεις (βλ. την πλευρική μπάρα δεξιά για λεπτομέρειες).\\u003c/mrk\\u003e  \\u003cmrk mid=\\"8148\\" mtype=\\"seg\\"\\u003eΘέλετε, παρόλα αυτά, να κάνετε υποβολή;\\u003c/mrk\\u003e"},"unfinished_quiz":"\\u003cmrk mid=\\"2651\\" mtype=\\"seg\\"\\u003eΠρόκειται να αφήσετε ανολοκλήρωτο αυτό το κουίζ.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"2652\\" mtype=\\"seg\\"\\u003eΘέλετε, παρόλα αυτά, να συνεχίσετε;\\u003c/mrk\\u003e","unseen_questions":{"one":"\\u003cmrk mid=\\"8291\\" mtype=\\"seg\\"\\u003eΥπάρχει ακόμη 1 ερώτηση που δεν έχετε δει ακόμη.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"8292\\" mtype=\\"seg\\"\\u003eΘέλετε, παρόλα αυτά, να κάνετε υποβολή;\\u003c/mrk\\u003e","other":"\\u003cmrk mid=\\"8293\\" mtype=\\"seg\\"\\u003eΥπάρχουν ακόμη %{count} ερωτήσεις που δεν έχετε δει ακόμη.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"8294\\" mtype=\\"seg\\"\\u003eΘέλετε, παρόλα αυτά, να κάνετε υποβολή;\\u003c/mrk\\u003e"}},"days_count":{"one":"1 Ημέρα","other":"%{count} Ημέρες"},"errors":{"connection_lost":"\\u003cmrk mid=\\"2653\\" mtype=\\"seg\\"\\u003eΗ σύνδεση προς τον %{host} διακόπηκε.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"2654\\" mtype=\\"seg\\"\\u003eΠαρακαλώ βεβαιωθείτε πως είστε συνδεδεμένος/η στο ίντερνετ πριν συνεχίσετε.\\u003c/mrk\\u003e","only_numerical_values":"μόνο αριθμητικές τιμές είναι αποδεκτές"},"hide_time_link":"Απόκρυψη","hours_count":{"one":"1 Ώρα","other":"%{count} Ώρες"},"labels":{"time_elapsed":"Χρόνος που Πέρασε"},"login_failed":"Η σύνδεση απέτυχε.","login_successful":"Επιτυχής σύνδεση.","minutes_count":{"one":"1 Λεπτό","other":"%{count} Λεπτά"},"months_count":{"one":"1 Μήνας","other":"%{count} Μήνες"},"notices":{"due_date_five_minutes_left":"Απομένουν Πέντε Λεπτά Πριν Το Κουίζ Επισημανθεί Ως Εκπρόθεσμο","due_date_one_minute_left":"Απομένει Ένα Λεπτό Πριν Το Κουίζ Επισημανθεί Ως Εκπρόθεσμο","due_date_thirty_minutes_left":"Απομένουν Τριάντα Λεπτά Πριν Το Κουίζ Επισημανθεί Ως Εκπρόθεσμο","submission_five_minutes_left":"Αυτό Το Κουίζ Θα Υποβληθεί Σε Πέντε Λεπτά","submission_one_minute_left":"Αυτό Το Κουίζ Θα Υποβληθεί Σε Ένα Λεπτό","submission_thirty_minutes_left":"Αυτό Το Κουίζ Θα Υποβληθεί Σε Τριάντα Λεπτά"},"question_answered":"Απαντήθηκε/αν","question_unanswered":"Δεν έχει Απαντηθεί Ακόμη","saved_at":"Το κουίζ αποθηκεύτηκε στις %{t}","saving":"Αποθήκευση...","saving_not_needed":"\\u003cmrk mid=\\"2821\\" mtype=\\"seg\\"\\u003eΔεν υπάρχουν νέα δεδομένα για αποθήκευση.\\u003c/mrk\\u003e \\u003cmrk mid=\\"2822\\" mtype=\\"seg\\"\\u003eΤελευταίος έλεγχος στις %{t}\\u003c/mrk\\u003e","seconds_count":{"one":"1 Δευτερόλεπτο","other":"%{count} Δευτερόλεπτα"},"show_time_link":"Προβολή","titles":{"come_back_later":"Προσθέσατε επισήμανση σε αυτή την ερώτηση για να επιστρέψετε σε αυτήν αργότερα","times_up":"Τέλος Χρόνου!"},"years_count":{"one":"1 Έτος","other":"%{count} Έτη"}}},"saving_d55dd90e":"Αποθήκευση...","your_time_for_this_quiz_has_been_reduced_394652e9":"Ο χρόνος σας για αυτό το κουίζ έχει μειωθεί."},"en-AU":{"buttons":{"cancel":"Cancel","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"You can\'t come back to this question once you click next. Are you sure you want to leave it blank?","file_upload_in_progress":"File upload is in progress. You may lose your answer before it is complete.","navigate_away":"You\'re about to navigate away from this page.  Continue anyway?","unanswered_questions":{"one":"You have 1 unanswered question (see the right sidebar for details).  Submit anyway?","other":"You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"},"unfinished_quiz":"You\'re about to leave the quiz unfinished.  Continue anyway?","unseen_questions":{"one":"There is still 1 question you haven\'t seen yet.  Submit anyway?","other":"There are still %{count} questions you haven\'t seen yet.  Submit anyway?"}},"days_count":{"one":"1 Day","other":"%{count} Days"},"errors":{"connection_lost":"Connection to %{host} was lost.  Please make sure you\'re connected to the Internet before continuing.","only_numerical_values":"only numerical values are accepted"},"hide_time_link":"Hide Time","hours_count":{"one":"1 Hour","other":"%{count} Hours"},"labels":{"time_elapsed":"Time Elapsed"},"login_failed":"Login failed.","login_successful":"Login successful.","minutes_count":{"one":"1 Minute","other":"%{count} Minutes"},"months_count":{"one":"1 Month","other":"%{count} Months"},"notices":{"due_date_five_minutes_left":"Five Minutes Left Before Quiz Will Be Marked Late","due_date_one_minute_left":"One Minute Left Before Quiz Will Be Marked Late","due_date_thirty_minutes_left":"Thirty Minutes Left Before Quiz Will Be Marked Late","submission_five_minutes_left":"This Quiz Will Be Submitted In Five Minutes","submission_one_minute_left":"This Quiz Will Be Submitted In One Minute","submission_thirty_minutes_left":"This Quiz Will Be Submitted In Thirty Minutes"},"question_answered":"Answered","question_unanswered":"Haven\'t Answered Yet","saved_at":"Saved at %{t}","saving":"Saving...","saving_not_needed":"No new data to save. Last checked at %{t}","seconds_count":{"one":"1 Second","other":"%{count} Seconds"},"show_time_link":"Show Time","titles":{"come_back_later":"You marked this question to come back to later","times_up":"Time\'s Up!"},"years_count":{"one":"1 Year","other":"%{count} Years"}}},"saving_d55dd90e":"Saving...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"You have been given extra time on this attempt.","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Your browser connectivity may be slow or unstable. In spite of your browser\'s timer being disconnected, your answers will be recorded for an additional 5 minutes beyond the original time limit on this attempt.","your_time_for_this_quiz_has_been_reduced_394652e9":"Your time for this quiz has been reduced."},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"You can\'t come back to this question once you click next. Are you sure you want to leave it blank?","file_upload_in_progress":"File upload is in progress. You may lose your answer before it is complete.","navigate_away":"You\'re about to navigate away from this page.  Continue anyway?","unanswered_questions":{"one":"You have 1 unanswered question (see the right sidebar for details).  Submit anyway?","other":"You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"},"unfinished_quiz":"You\'re about to leave the quiz unfinished.  Continue anyway?","unseen_questions":{"one":"There is still 1 question you haven\'t seen yet.  Submit anyway?","other":"There are still %{count} questions you haven\'t seen yet.  Submit anyway?"}},"days_count":{"one":"1 Day","other":"%{count} Days"},"errors":{"connection_lost":"Connection to %{host} was lost.  Please make sure you\'re connected to the Internet before continuing.","only_numerical_values":"only numerical values are accepted"},"hide_time_link":"Hide Time","hours_count":{"one":"1 Hour","other":"%{count} Hours"},"labels":{"time_elapsed":"Time Elapsed"},"login_failed":"Login failed.","login_successful":"Login successful.","minutes_count":{"one":"1 Minute","other":"%{count} Minutes"},"months_count":{"one":"1 Month","other":"%{count} Months"},"notices":{"due_date_five_minutes_left":"Five Minutes Left Before Quiz Will Be Marked Late","due_date_one_minute_left":"One Minute Left Before Quiz Will Be Marked Late","due_date_thirty_minutes_left":"Thirty Minutes Left Before Quiz Will Be Marked Late","submission_five_minutes_left":"This Quiz Will Be Submitted In Five Minutes","submission_one_minute_left":"This Quiz Will Be Submitted In One Minute","submission_thirty_minutes_left":"This Quiz Will Be Submitted In Thirty Minutes"},"question_answered":"Answered","question_unanswered":"Haven\'t Answered Yet","saved_at":"Saved at %{t}","saving":"Saving...","saving_not_needed":"No new data to save. Last checked at %{t}","seconds_count":{"one":"1 Second","other":"%{count} Seconds"},"show_time_link":"Show Time","titles":{"come_back_later":"You marked this question to come back to later","times_up":"Time\'s Up!"},"years_count":{"one":"1 Year","other":"%{count} Years"}}},"saving_d55dd90e":"Saving...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"You have been given extra time on this attempt.","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Your browser connectivity may be slow or unstable. In spite of your browser\'s timer being disconnected, your answers will be recorded for an additional 5 minutes beyond the original time limit on this attempt.","your_time_for_this_quiz_has_been_reduced_394652e9":"Your time for this quiz has been reduced."},"en-CA":{"buttons":{"cancel":"Cancel","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"You can\'t come back to this question once you hit next. Are you sure you want to leave it blank?","file_upload_in_progress":"File upload is in progress. You may lose your answer before it is complete.","navigate_away":"You\'re about to navigate away from this page.  Continue anyway?","unanswered_questions":{"one":"You have 1 unanswered question (see the right sidebar for details).  Submit anyway?","other":"You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"},"unfinished_quiz":"You\'re about to leave the quiz unfinished.  Continue anyway?","unseen_questions":{"one":"There is still 1 question you haven\'t seen yet.  Submit anyway?","other":"There are still %{count} questions you haven\'t seen yet.  Submit anyway?"}},"days_count":{"one":"1 Day","other":"%{count} Days"},"errors":{"connection_lost":"Connection to %{host} was lost.  Please make sure you\'re connected to the Internet before continuing.","only_numerical_values":"only numerical values are accepted"},"hide_time_link":"Hide Time","hours_count":{"one":"1 Hour","other":"%{count} Hours"},"labels":{"time_elapsed":"Time Elapsed"},"login_failed":"Login failed.","login_successful":"Login successful.","minutes_count":{"one":"1 Minute","other":"%{count} Minutes"},"months_count":{"one":"1 Month","other":"%{count} Months"},"notices":{"due_date_five_minutes_left":"Five Minutes Left Before Quiz Will Be Marked Late","due_date_one_minute_left":"One Minute Left Before Quiz Will Be Marked Late","due_date_thirty_minutes_left":"Thirty Minutes Left Before Quiz Will Be Marked Late","submission_five_minutes_left":"This Quiz Will Be Submitted In Five Minutes","submission_one_minute_left":"This Quiz Will Be Submitted In One Minute","submission_thirty_minutes_left":"This Quiz Will Be Submitted In Thirty Minutes"},"question_answered":"Answered","question_unanswered":"Haven\'t Answered Yet","saved_at":"Quiz saved at %{t}","saving":"Saving...","saving_not_needed":"No new data to save. Last checked at %{t}","seconds_count":{"one":"1 Second","other":"%{count} Seconds"},"show_time_link":"Show Time","titles":{"come_back_later":"You marked this question to come back to later","times_up":"Time\'s Up!"},"years_count":{"one":"1 Year","other":"%{count} Years"}}},"saving_d55dd90e":"Saving...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"You have been given extra time on this attempt","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Your browser connectivity may be slow or unstable. In spite of your browser\'s timer being disconnected, your answers will be recorded for an additional 5 minutes beyond the original time limit on this attempt.","your_time_for_this_quiz_has_been_reduced_394652e9":"Your time for this quiz has been reduced."},"en-GB":{"buttons":{"cancel":"Cancel","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"You can\'t come back to this question once you hit next. Are you sure you want to leave it blank?","file_upload_in_progress":"File upload is in progress. You may lose your answer before it is complete.","navigate_away":"You\'re about to navigate away from this page.  Continue anyway?","unanswered_questions":{"one":"You have 1 unanswered question (see the right sidebar for details).  Submit anyway?","other":"You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"},"unfinished_quiz":"You\'re about to leave the quiz unfinished.  Continue anyway?","unseen_questions":{"one":"There is still 1 question you haven\'t seen yet.  Submit anyway?","other":"There are still %{count} questions you haven\'t seen yet.  Submit anyway?"}},"days_count":{"one":"1 day","other":"%{count} days"},"errors":{"connection_lost":"Connection to %{host} was lost.  Please make sure you\'re connected to the Internet before continuing.","only_numerical_values":"only numerical values are accepted"},"hide_time_link":"Hide Time","hours_count":{"one":"1 Hour","other":"%{count} Hours"},"labels":{"time_elapsed":"Time elapsed"},"login_failed":"Login failed.","login_successful":"Login successful.","minutes_count":{"one":"1 minute","other":"%{count} minutes"},"months_count":{"one":"1 month","other":"%{count} months"},"notices":{"due_date_five_minutes_left":"Five minutes left before quiz will be marked late","due_date_one_minute_left":"One minute left before quiz will be marked late","due_date_thirty_minutes_left":"Thirty minutes left before quiz will be marked late","submission_five_minutes_left":"This quiz will be submitted in five minutes","submission_one_minute_left":"This quiz will be submitted in one minute","submission_thirty_minutes_left":"This quiz will be submitted in thirty minutes"},"question_answered":"Answered","question_unanswered":"Haven\'t answered yet","saved_at":"Saved at %{t}","saving":"Saving...","saving_not_needed":"No new data to save. Last checked at %{t}","seconds_count":{"one":"1 Second","other":"%{count} Seconds"},"show_time_link":"Show Time","titles":{"come_back_later":"You marked this question to come back to later","times_up":"Time\'s up!"},"years_count":{"one":"1 year","other":"%{count} years"}}},"saving_d55dd90e":"Saving...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"You have been given extra time on this try","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Your browser connectivity may be slow or unstable. In spite of your browser\'s timer being disconnected, your answers will be recorded for an additional 5 minutes beyond the original time limit on this attempt.","your_time_for_this_quiz_has_been_reduced_394652e9":"Your time for this quiz has been reduced."},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"You can\'t come back to this question once you hit next. Are you sure you want to leave it blank?","navigate_away":"You\'re about to navigate away from this page.  Continue anyway?","unanswered_questions":{"one":"You have 1 unanswered question (see the right sidebar for details).  Submit anyway?","other":"You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"},"unfinished_quiz":"You\'re about to leave the survey unfinished.  Continue anyway?","unseen_questions":{"one":"There is still 1 question you haven\'t seen yet.  Submit anyway?","other":"There are still %{count} questions you haven\'t seen yet.  Submit anyway?"}},"days_count":{"one":"1 day","other":"%{count} days"},"errors":{"connection_lost":"Connection to %{host} was lost.  Please make sure you\'re connected to the Internet before continuing.","only_numerical_values":"only numerical values are accepted"},"hide_time_link":"Hide","hours_count":{"one":"1 Hour","other":"%{count} Hours"},"labels":{"time_elapsed":"Time elapsed"},"login_failed":"Login failed.","login_successful":"Login successful.","minutes_count":{"one":"1 Minute","other":"%{count} Minutes"},"months_count":{"one":"1 month","other":"%{count} months"},"notices":{"due_date_five_minutes_left":"Five minutes left before survey will be marked late","due_date_one_minute_left":"One minute left before survey will be marked late","due_date_thirty_minutes_left":"Thirty minutes left before survey will be marked late","submission_five_minutes_left":"This survey will be submitted in five minutes","submission_one_minute_left":"This survey will be submitted in one minute","submission_thirty_minutes_left":"This survey will be submitted in thirty minutes"},"question_answered":"Answered","question_unanswered":"Haven\'t answered yet","saved_at":"Saved at %{t}","saving":"Saving...","saving_not_needed":"No new data to save. Last checked at %{t}","seconds_count":{"one":"1 Second","other":"%{count} Seconds"},"show_time_link":"Show","titles":{"come_back_later":"You marked this question to come back to later","times_up":"Time\'s up!"},"years_count":{"one":"1 year","other":"%{count} years"}}},"saving_d55dd90e":"Saving...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"You have been given extra time on this try","your_time_for_this_quiz_has_been_reduced_394652e9":"Your time for this survey has been reduced."},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"You can\'t come back to this question once you hit next. Are you sure you want to leave it blank?","file_upload_in_progress":"File upload is in progress. You may lose your answer before it is complete.","navigate_away":"You\'re about to navigate away from this page.  Continue anyway?","unanswered_questions":{"one":"You have 1 unanswered question (see the right sidebar for details).  Submit anyway?","other":"You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"},"unfinished_quiz":"You\'re about to leave the quiz unfinished.  Continue anyway?","unseen_questions":{"one":"There is still 1 question you haven\'t seen yet.  Submit anyway?","other":"There are still %{count} questions you haven\'t seen yet.  Submit anyway?"}},"days_count":{"one":"1 day","other":"%{count} days"},"errors":{"connection_lost":"Connection to %{host} was lost.  Please make sure you\'re connected to the Internet before continuing.","only_numerical_values":"only numerical values are accepted"},"hide_time_link":"Hide Time","hours_count":{"one":"1 Hour","other":"%{count} Hours"},"labels":{"time_elapsed":"Time elapsed"},"login_failed":"Login failed.","login_successful":"Login successful.","minutes_count":{"one":"1 minute","other":"%{count} minutes"},"months_count":{"one":"1 month","other":"%{count} months"},"notices":{"due_date_five_minutes_left":"Five minutes left before quiz will be marked late","due_date_one_minute_left":"One minute left before quiz will be marked late","due_date_thirty_minutes_left":"Thirty minutes left before quiz will be marked late","submission_five_minutes_left":"This quiz will be submitted in five minutes","submission_one_minute_left":"This quiz will be submitted in one minute","submission_thirty_minutes_left":"This quiz will be submitted in thirty minutes"},"question_answered":"Answered","question_unanswered":"Haven\'t answered yet","saved_at":"Saved at %{t}","saving":"Saving...","saving_not_needed":"No new data to save. Last checked at %{t}","seconds_count":{"one":"1 Second","other":"%{count} Seconds"},"show_time_link":"Show Time","titles":{"come_back_later":"You marked this question to come back to later","times_up":"Time\'s up!"},"years_count":{"one":"1 year","other":"%{count} years"}}},"saving_d55dd90e":"Saving...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"You have been given extra time on this try","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Your browser connectivity may be slow or unstable. In spite of your browser\'s timer being disconnected, your answers will be recorded for an additional 5 minutes beyond the original time limit on this attempt.","your_time_for_this_quiz_has_been_reduced_394652e9":"Your time for this quiz has been reduced."},"es":{"buttons":{"cancel":"Cancelar","login":"Iniciar sesión"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"No puede volver a esta pregunta una vez que haga clic en siguiente. ¿Está seguro de que desea dejarla en blanco?","file_upload_in_progress":"La carga del archivo está en proceso. Es posible que pierda la respuesta antes de que esté completa.","navigate_away":"Está a punto de navegar hacia otra página.  ¿Continuar de todas formas?","unanswered_questions":{"one":"Tiene 1 pregunta sin contestar (vea la barra a la derecha para los detalles).  ¿Entregar de todos modos?","other":"Tiene %{count} preguntas sin contestar (vea la barra a la derecha para los detalles).  ¿Entregar de todos modos?"},"unfinished_quiz":"Está a punto de dejar el examen incompleto.  ¿Continuar de todas formas?","unseen_questions":{"one":"Todavía hay 1 pregunta que no ha visto.  ¿Entregar de todos modos?","other":"Todavía hay %{count} preguntas que no ha visto.  ¿Entregar de todos modos?"}},"days_count":{"one":"1 día","other":"%{count} días"},"errors":{"connection_lost":"Se perdió la conexión a %{host}.  Asegúrese que está conectado a internet antes de continuar.","only_numerical_values":"Solo se aceptan valores numéricos"},"hide_time_link":"Ocultar hora","hours_count":{"one":"1 hora","other":"%{count} horas"},"labels":{"time_elapsed":"Tiempo transcurrido"},"login_failed":"Se produjo un fallo al iniciar sesión.","login_successful":"Inicio de sesión correcto.","minutes_count":{"one":"1 minuto","other":"%{count} minutos"},"months_count":{"one":"1 mes","other":"%{count} meses"},"notices":{"due_date_five_minutes_left":"Quedan cinco minutos para que el examen se marque como retrasado","due_date_one_minute_left":"Queda un minuto para que el examen se marque como retrasado","due_date_thirty_minutes_left":"Quedan treinta minutos para que el examen se marque como retrasado","submission_five_minutes_left":"Este examen se presentará en cinco minutos","submission_one_minute_left":"Este examen se presentará en un minuto","submission_thirty_minutes_left":"Este examen se presentará en treinta minutos"},"question_answered":"Contestado","question_unanswered":"No han respondido todavía","saved_at":"Examen guardado en %{t}","saving":"Guardando...","saving_not_needed":"No hay datos nuevos para guardar. Última comprobación a las %{t}","seconds_count":{"one":"1 segundo","other":"%{count} segundos"},"show_time_link":"Mostrar hora","titles":{"come_back_later":"Marcó esta pregunta para regresar a ella","times_up":"¡Se acabó el tiempo!"},"years_count":{"one":"1 año","other":"%{count} años"}}},"saving_d55dd90e":"Guardando...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Ha recibido tiempo extra en este intento","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"La conectividad de su navegador podría ser lenta o inestable. A pesar de que se haya desconectado el reloj de su navegador, sus respuestas quedarán grabadas durante otros cinco minutos luego del límite de tiempo original en este intento.","your_time_for_this_quiz_has_been_reduced_394652e9":"El tiempo para este examen se ha reducido."},"es-ES":{"buttons":{"cancel":"Cancelar","login":"Iniciar sesión"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"No puede volver a esta pregunta una vez que haga clic en siguiente. ¿Está seguro de que desea dejarla en blanco?","file_upload_in_progress":"La carga del archivo está en proceso. Es posible que pierda la respuesta antes de que esté completa.","navigate_away":"Está a punto de navegar hacia otra página.  ¿Continuar de todas formas?","unanswered_questions":{"one":"Tiene 1 pregunta sin contestar (vea la barra a la derecha para los detalles).  ¿Entregar de todos modos?","other":"Tiene %{count} preguntas sin contestar (vea la barra a la derecha para los detalles).  ¿Entregar de todos modos?"},"unfinished_quiz":"Está a punto de dejar el examen incompleto.  ¿Continuar de todas formas?","unseen_questions":{"one":"Todavía hay 1 pregunta que no ha visto.  ¿Entregar de todos modos?","other":"Todavía hay %{count} preguntas que no ha visto.  ¿Entregar de todos modos?"}},"days_count":{"one":"1 día","other":"%{count} días"},"errors":{"connection_lost":"Se ha perdido la conexión a %{host}.  Asegúrese que está conectado a Internet antes de continuar.","only_numerical_values":"Solo se aceptan valores numéricos"},"hide_time_link":"Ocultar hora","hours_count":{"one":"1 hora","other":"%{count} horas"},"labels":{"time_elapsed":"Tiempo transcurrido"},"login_failed":"Ha habido un fallo al iniciar sesión.","login_successful":"Inicio de sesión correcto.","minutes_count":{"one":"1 minuto","other":"%{count} minutos"},"months_count":{"one":"1 mes","other":"%{count} meses"},"notices":{"due_date_five_minutes_left":"Quedan cinco minutos para que el examen se marque como retrasado","due_date_one_minute_left":"Queda un minuto para que el examen se marque como retrasado","due_date_thirty_minutes_left":"Quedan treinta minutos para que el examen se marque como retrasado","submission_five_minutes_left":"Este examen se entregará en cinco minutos","submission_one_minute_left":"Este examen se entregará en un minuto","submission_thirty_minutes_left":"Este examen se entregará en treinta minutos"},"question_answered":"Contestado","question_unanswered":"Todavía no ha respondido","saved_at":"Examen guardado en %{t}","saving":"Guardando...","saving_not_needed":"No hay datos nuevos para guardar. Última comprobación a las %{t}","seconds_count":{"one":"1 segundo","other":"%{count} segundos"},"show_time_link":"Mostrar hora","titles":{"come_back_later":"Ha marcado esta pregunta para volver después","times_up":"¡Se acabó el tiempo!"},"years_count":{"one":"1 año","other":"%{count} años"}}},"saving_d55dd90e":"Guardando...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Ha recibido tiempo adicional en este intento","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"La conectividad de su navegador podría ser lenta o inestable. A pesar de que se haya desconectado el reloj de su navegador, sus respuestas quedarán grabadas durante otros cinco minutos tras el límite de tiempo original en este intento.","your_time_for_this_quiz_has_been_reduced_394652e9":"El tiempo para esta evaluación se ha reducido."},"fa":{"buttons":{"cancel":"لغو","login":"ورود"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"بعد از اینکه روی بعدی بزنید، نمی توانید به این پرسش برگردید. مطمئنید که می خواهید آن را خالی بگذارید؟","navigate_away":"در حال خروج از این صفحه هستید. با این وجود، ادامه می دهید؟","unanswered_questions":{"one":"%{count}} پرسش بی پاسخ دارید (برای کسب اطلاعات بیشتر، به نوار کناری سمت راست مراجعه کنید) . به هر حال ارسال می کنید؟","other":"%{count}} پرسش بی پاسخ دارید (برای کسب اطلاعات بیشتر، به نوار کناری سمت راست مراجعه کنید) . به هر حال ارسال می کنید؟"},"unfinished_quiz":"در حال خروج از آزمون ناتمام هستید. با این وجود، ادامه می دهید؟","unseen_questions":{"one":"هنوز %{count} پرسش هست که ندیده اید. با این وجود ارسال شود؟","other":"هنوز %{count} پرسش هست که ندیده اید. با این وجود ارسال شود؟"}},"days_count":{"one":"%{count} روز","other":"%{count} روز"},"errors":{"connection_lost":"اتصال به %{host} انجام نشد. لطفا مطمئن شوید که قبل از ادامه به اینترنت وصل شده اید.","only_numerical_values":"فقط مقادیر عددی قابل قبول است"},"hide_time_link":"مخفی کردن","hours_count":{"one":"%{count} ساعت","other":"%{count} ساعت"},"labels":{"time_elapsed":"زمان سپری شده"},"login_failed":"ورود انجام نشد.","login_successful":"ورود موفقیت آمیز.","minutes_count":{"one":"%{count} دقیقه","other":"%{count} دقیقه"},"months_count":{"one":"%{count} ماه","other":"%{count} ماه"},"notices":{"due_date_five_minutes_left":"پنج دقیقه تا اینکه آزمون با برچسب تأخیر مشخص شود، باقیمانده است","due_date_one_minute_left":"یک دقیقه تا اینکه آزمون با برچسب دارای تأخیر مشخص شود، باقیمانده است","due_date_thirty_minutes_left":"سی دقیقه تا اینکه آزمون با برچسب دارای تأخیر مشخص شود، باقیمانده است","submission_five_minutes_left":"این آزمون ظرف پنج دقیقه ارسال خواهد شد","submission_one_minute_left":"این آزمون ظرف یک دقیقه ارسال خواهد شد","submission_thirty_minutes_left":"این آزمون ظرف سی دقیقه ارسال خواهد شد"},"question_answered":"پاسخ داده شده","question_unanswered":"هنوز پاسخ نداده شده است","saved_at":"آزمون در %{t} ذخیره شد","saving":"در حال ذخیره سازی...","saving_not_needed":"داده جدید برای ذخیره سازی موجود نیست. آخرین بار در %{t} بازبینی شد","seconds_count":{"one":"%{count} ثانیه","other":"%{count} ثانیه"},"show_time_link":"نمایش","titles":{"come_back_later":"شما این پرسش را علامت زده اید تا دوباره به آن بازگردید","times_up":"وقت تمام شد!"},"years_count":{"one":"%{count} سال","other":"%{count} سال"}}},"saving_d55dd90e":"در حال ذخیره سازی...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"برای این اقدام، وقت اضافی به شما داده شده است","your_time_for_this_quiz_has_been_reduced_394652e9":"زمان شما برای این آزمون کاهش یافته است."},"fi":{"buttons":{"cancel":"Peruuta","login":"Sisäänkirjautuminen"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Et voi palata takaisin tähän kysymykseen, jos siirryt eteenpäin kohdasta Seuraava. Haluatko varmasti jättää tämän tyhjäksi?","file_upload_in_progress":"Tiedoston lataus on käynnissä. Voit menettää vastauksesi, ennen kuin se on valmis.","navigate_away":"Olet siirtymässä pois tältä sivulta.  Jatketaanko joka tapauksessa?","unanswered_questions":{"one":"Sinulla on 1 vastaamaton kysymys (katso tiedot oikeasta sivupalkista).  Lähetetäänkö joka tapauksessa?","other":"Sinulla on %{count} vastaamatonta kysymystä (katso tiedot oikeasta sivupalkista).  Lähetetäänkö joka tapauksessa?"},"unfinished_quiz":"Olet poistumassa keskeneräisestä testistä.  Jatketaanko joka tapauksessa?","unseen_questions":{"one":"On vielä 1 kysymys, jota et ole nähnyt.  Lähetetäänkö joka tapauksessa?","other":"On vielä %{count} kysymystä, joita et ole nähnyt.  Lähetetäänkö joka tapauksessa?"}},"days_count":{"one":"1 päivä","other":"%{count} päivää"},"errors":{"connection_lost":"Yhteys kohteeseen %{host} menetettiin.  Varmista, että olet yhteydessä Internetiin ennen kuin jatkat.","only_numerical_values":"vain numeeriset arvot hyväksytään"},"hide_time_link":"Piilota aika","hours_count":{"one":"1 tunti","other":"%{count} tuntia"},"labels":{"time_elapsed":"Kulunut aika"},"login_failed":"Sisäänkirjautuminen epäonnistui.","login_successful":"Sisäänkirjautuminen onnistui.","minutes_count":{"one":"1 minuutti","other":"%{count} minuuttia"},"months_count":{"one":"1 kuukausi","other":"%{count} kuukautta"},"notices":{"due_date_five_minutes_left":"Viisi minuuttia jäljellä ennen kuin testi merkitään myöhässä palautetuksi","due_date_one_minute_left":"Yksi minuutti jäljellä ennen kuin testi merkitään myöhässä palautetuksi","due_date_thirty_minutes_left":"30 minuuttia jäljellä ennen kuin testi merkitään myöhässä palautetuksi","submission_five_minutes_left":"Tämä testi lähetetään viiden minuutin kuluttua","submission_one_minute_left":"Tämä testi lähetetään minuutin kuluttua","submission_thirty_minutes_left":"Tämä testi lähetetään 30 minuutin kuluttua"},"question_answered":"Vastattu","question_unanswered":"Ei vielä vastattu","saved_at":"Testi tallennettu %{t}","saving":"Tallennetaan...","saving_not_needed":"Ei uusia tallennettavia tietoja. Tarkistettu viimeksi %{t}","seconds_count":{"one":"1 sekunti","other":"%{count} sekuntia"},"show_time_link":"Näytä aika","titles":{"come_back_later":"Merkitsit tämän kysymyksen sellaiseksi, johon palaat takaisin myöhemmin","times_up":"Aika on loppu!"},"years_count":{"one":"1 vuosi","other":"%{count} vuotta"}}},"saving_d55dd90e":"Tallennetaan...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Sinulle on annettu lisäaikaa tähän yritykseen","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Selaimesi yhdistettävyys saattaa olla hidas tai epävakaa. Huolimatta siitä, että selaimesi ajastin on kytketty pois vastauksesi tallennetaan ylimääräiset 5 minuuttia alkuperäisen aikarajan ylitse tällä kertaa.","your_time_for_this_quiz_has_been_reduced_394652e9":"Vastausaikaasi tässä testissä on lyhennetty."},"fr":{"buttons":{"cancel":"Annuler","login":"S’identifier"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Vous ne pouvez pas revenir à cette question avant d’avoir cliqué sur Suivant. Voulez-vous vraiment laisser le champ vide ?","file_upload_in_progress":"Le téléchargement du fichier est en cours. Vous pouvez perdre votre réponse avant qu\'elle ne soit complète.","navigate_away":"Vous êtes sur le point de quitter cette page. Voulez-vous continuer ?","unanswered_questions":{"one":"Vous n’avez pas répondu à 1 question (voir la barre latérale à droite pour plus d’informations). Voulez-vous envoyer quand même le questionnaire ?","other":"Vous n’avez pas répondu à %{count} questions (voir la barre latérale à droite pour plus d’informations). Voulez-vous envoyer quand même le questionnaire ?"},"unfinished_quiz":"Vous êtes sur le point de quitter le questionnaire sans l’avoir terminé. Voulez-vous continuer ?","unseen_questions":{"one":"Vous n’avez pas répondu à 1 question.  Voulez-vous envoyer quand même le questionnaire ?","other":"Vous n’avez pas répondu à %{count} questions. Voulez-vous envoyer quand même le questionnaire ?"}},"days_count":{"one":"1 jour","other":"%{count} jours"},"errors":{"connection_lost":"La connexion à %{host} a été perdue. Veuillez vérifier que vous êtes connecté à Internet avant de continuer.","only_numerical_values":"seules les valeurs numériques sont acceptées"},"hide_time_link":"Masquer l’heure","hours_count":{"one":"1 heure","other":"%{count} heures"},"labels":{"time_elapsed":"Temps écoulé"},"login_failed":"Échec de la connexion.","login_successful":"Connexion réussie","minutes_count":{"one":"1 minute","other":"%{count} minutes"},"months_count":{"one":"1 mois","other":"%{count} mois"},"notices":{"due_date_five_minutes_left":"Cinq minutes avant que le questionnaire soit en retard","due_date_one_minute_left":"Une minute avant que le questionnaire soit en retard","due_date_thirty_minutes_left":"Trente minutes avant que le questionnaire soit en retard","submission_five_minutes_left":"Ce questionnaire sera envoyé dans cinq minutes","submission_one_minute_left":"Ce questionnaire sera envoyé dans une minute","submission_thirty_minutes_left":"Ce questionnaire sera envoyé dans trente minutes"},"question_answered":"Réponse donnée","question_unanswered":"Pas encore de réponse","saved_at":"Questionnaire enregistré à %{t}","saving":"Enregistrement...","saving_not_needed":"Pas de nouvelle donnée à enregistrer. Dernière vérification à %{t}","seconds_count":{"one":"1 seconde","other":"%{count} secondes"},"show_time_link":"Afficher l’heure","titles":{"come_back_later":"Vous avez marqué cette question pour y revenir ultérieurement","times_up":"Terminé !"},"years_count":{"one":"1 an","other":"%{count} années"}}},"saving_d55dd90e":"Enregistrement...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Vous avez obtenu du temps supplémentaire pour cette tentative","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"La connexion de votre navigateur semble lente ou instable. Malgré la déconnexion de la minuterie de votre navigateur, vos réponses seront enregistrées pendant 5 minutes supplémentaires par rapport à la limite de temps originale pour cette tentative.","your_time_for_this_quiz_has_been_reduced_394652e9":"Votre temps de réponse à ce questionnaire a été réduit."},"fr-CA":{"buttons":{"cancel":"Annuler","login":"Connexion"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Vous ne pouvez pas revenir à cette question avant d’avoir cliqué sur Suivant. Voulez-vous vraiment laisser le champ vide?","file_upload_in_progress":"Téléversement de fichier en cours. Vous pouvez perdre votre réponse avant que ce soit terminé.","navigate_away":"Vous êtes sur le point de quitter cette page. Voulez-vous continuer?","unanswered_questions":{"one":"Vous n’avez pas répondu à 1 question (voir la barre latérale à droite pour plus d’informations). Voulez-vous envoyer quand même le questionnaire?","other":"Vous n’avez pas répondu à %{count} questions (voir la barre latérale à droite pour plus d’informations). Voulez-vous envoyer quand même le questionnaire?"},"unfinished_quiz":"Vous êtes sur le point de quitter le questionnaire sans l’avoir terminé. Voulez-vous continuer?","unseen_questions":{"one":"Vous n’avez pas répondu à 1 question.  Voulez-vous envoyer quand même le questionnaire?","other":"Vous n’avez pas répondu à %{count} questions. Voulez-vous envoyer quand même le questionnaire?"}},"days_count":{"one":"1 jour","other":"%{count} jours"},"errors":{"connection_lost":"La connexion à %{host} a été perdue. Veuillez vérifier que vous êtes connecté à Internet avant de continuer.","only_numerical_values":"seules les valeurs numériques sont acceptées"},"hide_time_link":"Masquer le temps","hours_count":{"one":"1 heure","other":"%{count} heures"},"labels":{"time_elapsed":"Temps écoulé"},"login_failed":"Échec de la connexion.","login_successful":"Connexion réussie","minutes_count":{"one":"1 minute","other":"%{count} minutes"},"months_count":{"one":"1 mois","other":"%{count} mois"},"notices":{"due_date_five_minutes_left":"Cinq minutes avant que le questionnaire soit en retard","due_date_one_minute_left":"Une minute avant que le questionnaire soit en retard","due_date_thirty_minutes_left":"Trente minutes avant que le questionnaire soit en retard","submission_five_minutes_left":"Ce questionnaire sera envoyé dans cinq minutes","submission_one_minute_left":"Ce questionnaire sera envoyé dans une minute","submission_thirty_minutes_left":"Ce questionnaire sera envoyé dans trente minutes"},"question_answered":"Réponse donnée","question_unanswered":"Pas encore de réponse","saved_at":"Questionnaire enregistré à %{t}","saving":"Enregistrement...","saving_not_needed":"Pas de nouvelle donnée à enregistrer. Dernière vérification à %{t}","seconds_count":{"one":"1 seconde","other":"%{count} secondes"},"show_time_link":"Afficher l’heure","titles":{"come_back_later":"Vous avez marqué cette question pour y revenir ultérieurement","times_up":"Terminé!"},"years_count":{"one":"1 an","other":"%{count} années"}}},"saving_d55dd90e":"Enregistrement...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Vous avez obtenu du temps supplémentaire pour cette tentative","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"La connexion de votre navigateur peut être lente ou instable. Malgré la déconnexion de la minuterie de votre navigateur, vos réponses seront enregistrées pendant 5 minutes supplémentaires au-delà de la limite de temps initiale de cette tentative.","your_time_for_this_quiz_has_been_reduced_394652e9":"Votre temps de réponse à ce questionnaire a été réduit."},"he":{"buttons":{"cancel":"ביטול","login":"התחברות"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"אין אפשרות לחזור לשאלה זו לא הקשה על \\"הבא\\". בטוח/ה שרוצה לעזוב אותה ריקה?","navigate_away":"יציאה מהדף. האם להמשיך בכל זאת?","unanswered_questions":{"one":"יש לך שאלה אחת שטרם נענתה  (פירוט בסרגל הצידי).  לשלוח בכל מקרה?","other":"יש לך %{count} שאלות שטרם נענו  (פירוט בסרגל הצידי).  לשלוח בכל מקרה?"},"unfinished_quiz":"את/ת עומד/ת לעזוב את הבוחן לפני סיומו. להמשיך בכל זאת?","unseen_questions":{"one":"ישנה עדיין שאלה שטרם עיינת בה.  האם לשלוח בכל מקרה?","other":"יש עוד %{count} שאלות שלא ראית.  האם לשלוח בכל זאת"}},"days_count":{"one":"יום אחד","other":"%{count} ימים"},"errors":{"connection_lost":"התקשורת %{host} השתבשה. נא לבדוק את החיבור לאינטרנט ואז להמשיך.","only_numerical_values":"רק ערכים מספריים מתקבלים"},"hide_time_link":"הסתרה","hours_count":{"one":"שעה אחת","other":"%{count} שעות"},"labels":{"time_elapsed":"הזמן שחלף "},"login_failed":"התחברות נכשלה","login_successful":"התחברות הצליחה","minutes_count":{"one":"דקה אחת","other":"%{count} דקות"},"months_count":{"one":"חודש אחד","other":"%{count} חודשים"},"notices":{"due_date_five_minutes_left":"חמש דקות נותרו עד סימון הבוחן כ\\"מאוחר\\"","due_date_one_minute_left":"דקה אחת נותרה לפני שהבוחן יסומן כ\\"מאוחר\\"","due_date_thirty_minutes_left":"שלשים דקות נותרו לפני שהבוחן יסומן כ\\"מאוחר\\"","submission_five_minutes_left":"הבוחן הזה יוגש בעוד חמש דקות","submission_one_minute_left":"הבוחן הזה יוגש בעוד דקה","submission_thirty_minutes_left":"הבוחן הזה יוגש בעוד 30 דקות"},"question_answered":"ניתנה תשובה","question_unanswered":"טרם נתקבלה תשובה","saved_at":"הבוחן נשמר ב %{t}","saving":"שומר...","saving_not_needed":"אין נתונים חדשים לשמירה. נבדק לאחרונה ב %{t}","seconds_count":{"one":"שניה אחת","other":"%{count} שניות"},"show_time_link":"הצגה","titles":{"come_back_later":"סימנת שאלה זו כדי לחזור אליה מאוחר יותר","times_up":"הזמן נגמר!"},"years_count":{"one":"שנה אחת","other":"%{count} שנים"}}},"saving_d55dd90e":"שומר...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"קיבלת זמן נוסף לניסיון הגשה זה.","your_time_for_this_quiz_has_been_reduced_394652e9":"הזמן שהוקצה לך למשימה זו הופחת."},"ht":{"buttons":{"cancel":"Anile","login":"Koneksyon"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Ou paka retounen nan kesyon sa a depi te gentan klike pwochen. Ou kwè vrèman ou vle kite l vid?","file_upload_in_progress":"Transfè fichye an pwosesis. Ou kapab pèdi repons ou an anvan li fini.","navigate_away":"W ap soti nan paj sa a. Kontinye kanmenm?","unanswered_questions":{"one":"Ou gen 1 kesyon sa repons (gade ba lateral adwat la pou detay). Soumèt li kanmenm?","other":"Ou gen %{count} kesyon sa repons (gade ba lateral adwat la pou detay). Soumèt li kanmenm?"},"unfinished_quiz":"W ap kite quiz la san fini. Kontinye kanmenm?","unseen_questions":{"one":"Gen yon kesyon ou potko wè toujou. Soumèt li kanmenm?","other":"Gen %{count} kesyon ou potko wè toujou. Soumèt li kanmenm?"}},"days_count":{"one":"1 Jou","other":"%{count} Jou"},"errors":{"connection_lost":"Koneksyon a %{host} te pèdi. Tanpri asire w ke ou konekte sou entènèt anvan w kontinye.","only_numerical_values":"sèlman valè nimerik ki akseptab"},"hide_time_link":"Maske Lè","hours_count":{"one":"1 Èdtan","other":"%{count} Èdtan"},"labels":{"time_elapsed":"Tan ki Pase"},"login_failed":"Koneksyon echwe.","login_successful":"Koneksyon reyisi.","minutes_count":{"one":"1 Minit","other":"%{count} Minit"},"months_count":{"one":"1 Mwa","other":"%{count} Mwa"},"notices":{"due_date_five_minutes_left":"Manke Senk Minit Pou yo Make Quiz la An Reta","due_date_one_minute_left":"Manke Yon Minit Pou yo Make Quiz la An Reta","due_date_thirty_minutes_left":"Manke Trant Minit Pou yo Make Quiz la An Reta","submission_five_minutes_left":"Quiz Sa a Ap Soumèt Nan Senk Minit","submission_one_minute_left":"Quiz Sa a Ap Soumèt Nan Yon Minit","submission_thirty_minutes_left":"Quiz Sa a Ap Soumèt Nan Trant Minit"},"question_answered":"Reponn","question_unanswered":"Poko Reponn","saved_at":"Quiz Anrejistre a %{t}","saving":"Anrejistreman...","saving_not_needed":"Pa gen nouvo dat pou anrejistre. Dènye verifikasyon a %{t}","seconds_count":{"one":"1 Segond","other":"%{count} Segond"},"show_time_link":"Afiche Lè","titles":{"come_back_later":"Ou make kesyon sa a pou li retounen aprè","times_up":"Lè a Rive!"},"years_count":{"one":"1 Ane","other":"%{count} Ane"}}},"saving_d55dd90e":"Anrejistreman...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Yo ba ou tan adisyonèl pou tantativ sa a","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Konektivite navigatè w la gendwa lan oswa li pa estab. Menm si tanporizasyon navigatè w la la dekonekte, repons ou yo ap rete anrejistre pandan 5 minit anplis de tan yo te prevwa a pou tantativ sa a.","your_time_for_this_quiz_has_been_reduced_394652e9":"Tan ou gen pou quiz sa a diminye."},"hu":{"buttons":{"cancel":"Mégse","login":"Belépés"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Nem térhet vissza ehhez a kérdéshez, ha a következőre lép. Biztos benne, hogy üresen hagyja?","navigate_away":"Az oldal elhagyására készül. Biztos, hogy ezt akarja?","unanswered_questions":{"one":"Van még 1 megválaszolatlan kérdés (jobb oldalon látja a részleteket). Mégis beküldi?","other":"Van még %{count} megválaszolatlan kérdés (jobb oldalon látja a részleteket). Mégis beküldi?"},"unfinished_quiz":"Ön a kvíz elhagyására készül, anélkül, hogy beadná. Biztos benne?","unseen_questions":{"one":"Van még 1 kérdés, amit nem látott még. Mégis beküldi?","other":"Van még %{count} kérdés, amit nem látott még. Mégis beküldi?"}},"days_count":{"one":"1 nap","other":"%{count} nap"},"errors":{"connection_lost":"A kapcsolat a %{host} géppel megszakadt. Mielőtt továbblép, kérjük, ellenőrizze, hogy az internetkapcsolata rendben működik.","only_numerical_values":"csak számok fogadhatóak el"},"hide_time_link":"Elrejt","hours_count":{"one":"1 óra","other":"%{count} óra"},"labels":{"time_elapsed":"Eltelt idő"},"login_failed":"A bejelentkezés sikertelen.","login_successful":"Sikeres bejelentkezés.","minutes_count":{"one":"1 perc","other":"%{count} perc"},"months_count":{"one":"1 hónap","other":"%{count} hónap"},"notices":{"due_date_five_minutes_left":"Öt perc maradt, mielőtt a kvíz késedelmesként lesz megjelölve. ","due_date_one_minute_left":"Egy perc maradt, mielőtt a kvíz késedelmesként lesz megjelölve. ","due_date_thirty_minutes_left":"Harminc perc maradt, mielőtt a kvíz késedelmesként lesz megjelölve. ","submission_five_minutes_left":"Ez a kvíz öt perc múlva be lesz adva","submission_one_minute_left":"Ez a kvíz egy perc múlva be lesz adva","submission_thirty_minutes_left":"Ez a kvíz harminc perc múlva be lesz adva"},"question_answered":"Megválaszolt","question_unanswered":"Még nincs megválaszolva","saved_at":"Kvíz mentve ekkor: %{t}","saving":"Mentés...","saving_not_needed":"Nincs menthető új adat. Utolsó ellenőrzés ekkor: %{t}","seconds_count":{"one":"1 másodperc","other":"%{count} másodperc"},"show_time_link":"Megjelenítés","titles":{"come_back_later":"Ön ezt a kérdést úgy jelölte meg, hogy később visszatér rá","times_up":"Lejárt az idő! "},"years_count":{"one":"1 év","other":"%{count} év"}}},"saving_d55dd90e":"Mentés...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Ön több időt kapott ehhez a próbálkozáshoz ","your_time_for_this_quiz_has_been_reduced_394652e9":"Az Ön ideje a kvíz kitöltésére csökkent."},"hy":{"buttons":{"cancel":"Չեղյալ համարել","login":"Մուտք համակարգ"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Դուք չեք կարող վերադառնալ այս հարցին, եթե սեղմեք \\"Հաջորդը\\": Դուք իսկապե՞ս ցանկանում եք սա դատարկ թողնել:","navigate_away":"Դուք պատրաստվում եք լքել այս էջը: Շարունակե՞լ:","unanswered_questions":{"one":"Դուք 1  անպատասխան հարց ունեք (մանրամասները տես աջ մասի կողային վահանակը): Ուղարկե՞լ ամեն դեպքում:","other":"Դուք %{count}  անպատասխան հարց ունեք (մանրամասները տես աջ մասի կողային վահանակը): Ուղարկե՞լ ամեն դեպքում:"},"unfinished_quiz":"Դուք պատրաստվում եք անավարտ թողնել այս թեստը: Շարունակե՞լ:","unseen_questions":{"one":"1 հարց կա, որ դուք դեռ չեք տեսել: Ուղարկե՞լ ամեն դեպքում:","other":"%{count} հարց կա, որ դուք դեռ չեք տեսել: Ուղարկե՞լ ամեն դեպքում:"}},"days_count":{"one":"1 օր","other":"%{count} օր"},"errors":{"connection_lost":"%{host}-ի հետ կապը կտրվել է: Շարունակելուց առաջ ստուգեք, արդյոք միացած եք Համացանցին: ","only_numerical_values":"ընդունվում են միայն թվային արժեքներ "},"hide_time_link":"Թաքցնել","hours_count":{"one":"1 ժամ","other":"%{count} ժամ"},"labels":{"time_elapsed":"Ժամանակը անցել է"},"login_failed":"Մուտք գործելը համակարգ ձախողվեց","login_successful":"Հաջող մուտք համակարգ","minutes_count":{"one":"1 րոպե","other":"%{count} րոպե"},"months_count":{"one":"1 ամիս","other":"%{count} ամիս"},"notices":{"due_date_five_minutes_left":"Հինգ րոպե է մնացել, նախքան թեստը կնշվի որպես ուշացված","due_date_one_minute_left":"Մեկ րոպե է մնացել, նախքան թեստը կնշվի որպես ուշացված","due_date_thirty_minutes_left":"Երեսուն րոպե  է մնացել, նախքան թեստը կնշվի որպես ուշացված","submission_five_minutes_left":"Այս թեստը կուղարկվի հինգ րոպեից:","submission_one_minute_left":"Այս թեստը կուղարկվի մեկ րոպեից:","submission_thirty_minutes_left":"Այս թեստը կուղարկվի երեսուն րոպեից:"},"question_answered":"Պատասխան է տրվել","question_unanswered":"Դեռևս պատասխան չի տրվել","saved_at":"Թեստը պահպանվել է ժամը %{t}","saving":"Պահպանվում է...","saving_not_needed":"Պահպանելու համար նոր տվյալներ չկան: Վերջին անգամ ստուգվել է ժամը %{t} ","seconds_count":{"one":"1 վայրկյան","other":"%{count} վայրկյան"},"show_time_link":"Ցույց տալ","titles":{"come_back_later":"Դուք այս հարցը նշել եք, որպեսզի վերադառնաք դրան ավելի ուշ ","times_up":"Ժամանակը սպառվել է:"},"years_count":{"one":"1 տարի","other":"%{count} տարի"}}},"saving_d55dd90e":"Պահպանվում է..."},"is":{"buttons":{"cancel":"Hætta við","login":"Innskráning"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Þú getur ekki farið aftur í þessa spurningu eftir að hafa ýtt á „Næst“. Viltu skilja hana eftir auða?","file_upload_in_progress":"Upphleðsla á skrá í gangi. Þú gætir tapað svarinu áður en því er lokið.","navigate_away":"Þú ert á leið af síðunni. Viltu halda áfram?","unanswered_questions":{"one":"Þú átt eftir að svara 1 spurningu (sjá nánar í hægri hliðarslá). Viltu samt skila?","other":"Þú átt eftir að svara %{count} spurningum (sjá nánar í hægri hliðarslá). Viltu samt skila?"},"unfinished_quiz":"Þú ert að hætta í ókláruðu prófi. Viltu samt halda áfram?","unseen_questions":{"one":"Þú átt eftir að sjá 1 spurningu. Viltu samt skila?","other":"Þú átt eftir að sjá %{count} spurningar. Viltu samt skila?"}},"days_count":{"one":"1 dagur","other":"%{count} dagar"},"errors":{"connection_lost":"Tenging við %{host} rofnaði. Gættu þess að hafa nettengingu áður en þú heldur áfram.","only_numerical_values":"aðeins tölugildi eru samþykkt"},"hide_time_link":"Fela tíma","hours_count":{"one":"1 klukkustund","other":"%{count} klukkustundir"},"labels":{"time_elapsed":"Liðinn tími"},"login_failed":"Innskráning tókst ekki.","login_successful":"Innskráning tókst.","minutes_count":{"one":"1 mínúta","other":"%{count} mínútur"},"months_count":{"one":"1 mánuður","other":"%{count} mánuðir"},"notices":{"due_date_five_minutes_left":"Fimm mínútur eftir áður en prófið verður merkt seint","due_date_one_minute_left":"Ein mínúta eftir áður en prófið verður merkt seint","due_date_thirty_minutes_left":"30 mínútur eftir áður en prófið verður merkt seint","submission_five_minutes_left":"Prófið verður lagt fram eftir fimm mínútur","submission_one_minute_left":"Prófið verður lagt fram eftir eina mínútu","submission_thirty_minutes_left":"Prófið verður lagt fram eftir 30 mínútur"},"question_answered":"Svarað","question_unanswered":"Hefur enn ekki svarað","saved_at":"Próf vistað í %{t}","saving":"Vista...","saving_not_needed":"Engin ný gögn að vista. Síðast athugað %{t}","seconds_count":{"one":"1 sekúnda","other":"%{count} sekúndur"},"show_time_link":"Sýna tíma","titles":{"come_back_later":"Þú merktir þessa spurningu til að líta á hana síðar","times_up":"Tíminn búinn!"},"years_count":{"one":"1 ár","other":"%{count} ár"}}},"saving_d55dd90e":"Vista...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Þú hefur fengið aukatíma fyrir þessa tilraun","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Tengigeta vafrans þíns gæti verið hæg eða óstöðug. Þó tímamælir vafrans þíns aftengist verða svörin þín tekin upp í fimm mínútur til viðbótar við upprunaleg tímamörk í þessari tilraun.","your_time_for_this_quiz_has_been_reduced_394652e9":"Tími þinn fyrir prófið hefur verið styttur."},"it":{"buttons":{"cancel":"Annulla","login":"Accedi"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Non puoi tornare a questa domanda una volta passato a quella successiva. Vuoi lasciarla vuota?","file_upload_in_progress":"Caricamento file in corso. Potresti perdere la tua risposta prima di completarla.","navigate_away":"Stai per uscire da questa pagina.  Continuare comunque?","unanswered_questions":{"one":"Hai 1 domanda senza risposta (vedi la barra laterale a destra per maggiori dettagli).  Inviare comunque?","other":"Hai %{count} domande senza risposta (vedi la barra laterale a destra per maggiori dettagli).  Inviare comunque?"},"unfinished_quiz":"Stai per uscire dal quiz non completato.  Continuare comunque?","unseen_questions":{"one":"È presente 1 domanda che non hai ancora visto.  Inviare comunque?","other":"Sono presenti %{count} domande che non hai ancora visto.  Inviare comunque?"}},"days_count":{"one":"1 giorno","other":"%{count} Giorni"},"errors":{"connection_lost":"Connessione a %{host} persa.  Assicurati di essere connesso a Internet prima di continuare.","only_numerical_values":"sono accettati solo valori numerici"},"hide_time_link":"Nascondi ora","hours_count":{"one":"1 ora","other":"%{count} Ore"},"labels":{"time_elapsed":"Tempo trascorso"},"login_failed":"Accesso non riuscito.","login_successful":"Accesso riuscito.","minutes_count":{"one":"1 minuto","other":"%{count} Minuti"},"months_count":{"one":"1 mese","other":"%{count} Mesi"},"notices":{"due_date_five_minutes_left":"Restano cinque minuti prima che il quiz venga contrassegnato come in ritardo","due_date_one_minute_left":"Resta un minuto prima che il quiz venga contrassegnato come in ritardo","due_date_thirty_minutes_left":"Restano trenta minuti prima che il quiz venga contrassegnato come in ritardo","submission_five_minutes_left":"Questo quiz verrà inviato tra cinque minuti","submission_one_minute_left":"Questo quiz verrà inviato tra un minuto","submission_thirty_minutes_left":"Questo quiz verrà inviato tra trenta minuti"},"question_answered":"Con risposta","question_unanswered":"Ancora nessuna risposta","saved_at":"Quiz salvato in %{t}","saving":"Salvataggio in corso...","saving_not_needed":"Nessun nuovo dato da salvare. Ultimo controllo: %{t}","seconds_count":{"one":"1 secondo","other":"%{count} Secondi"},"show_time_link":"Mostra ora","titles":{"come_back_later":"Hai contrassegnato questa domanda per tornarci in seguito","times_up":"Tempo terminato."},"years_count":{"one":"1 anno","other":"%{count} Anni"}}},"saving_d55dd90e":"Salvataggio in corso...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Ti è stato concesso tempo extra per questo tentativo","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"La connettività del tuo browser potrebbe essere lenta o instabile. Nonostante la disconnessione del timer del tuo browser, le tue risposte saranno registrate per altri 5 minuti oltre il limite di tempo originale con questo tentativo.","your_time_for_this_quiz_has_been_reduced_394652e9":"Il tempo a tua disposizione per questo quiz è stato ridotto."},"ja":{"buttons":{"cancel":"キャンセル","login":"ログイン"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"次に移動した後は、この問題に戻れません。空白のままにしてもよろしいですか?","file_upload_in_progress":"ファイルのアップロードが進行中。完了する前にあなたの回答は失われるかもしれません。","navigate_away":"別のページに移動しようとしています。続行しますか?","unanswered_questions":{"one":"解答していない問題が %{count} 個あります (詳細については右のサイドバーを参照)。提出してもよろしいですか?","other":"解答していない問題が %{count} 個あります (詳細については右のサイドバーを参照)。提出してもよろしいですか?"},"unfinished_quiz":"クイズを完了せずに終了しようとしています。続行しますか?","unseen_questions":{"one":"表示していない問題がまだ %{count} 個あります。提出してもよろしいですか?","other":"表示していない問題がまだ %{count} 個あります。提出してもよろしいですか?"}},"days_count":{"one":"%{count} 日","other":"%{count} 日"},"errors":{"connection_lost":"%{host} への接続が失われました。続行する前に、インターネットに接続していることを確認してください。","only_numerical_values":"数値のみで入力してください"},"hide_time_link":"時間を非表示にする","hours_count":{"one":"%{count} 時間","other":"%{count} 時間"},"labels":{"time_elapsed":"経過時間"},"login_failed":"ログインに失敗しました。","login_successful":"ログインが成功しました。","minutes_count":{"one":"%{count} 分","other":"%{count} 分"},"months_count":{"one":"%{count} か月","other":"%{count} か月"},"notices":{"due_date_five_minutes_left":"あと 5 分経過するとクイズが遅延としてマークされます","due_date_one_minute_left":"あと 1 分経過するとクイズが遅延としてマークされます","due_date_thirty_minutes_left":"あと 30 分経過するとクイズが遅延としてマークされます","submission_five_minutes_left":"このクイズは、5 分後に提出されます","submission_one_minute_left":"このクイズは、1 分後に提出されます","submission_thirty_minutes_left":"このクイズは、30 分後に提出されます"},"question_answered":"解答済み","question_unanswered":"まだ解答していない","saved_at":"クイズの保存場所: %{t}","saving":"保存しています...","saving_not_needed":"保存する新しいデータはありません。最終確認時刻: %{t}","seconds_count":{"one":"%{count} 秒","other":"%{count} 秒"},"show_time_link":"時間を表示する","titles":{"come_back_later":"この問題に、後で戻ってくるためのマークを付けました","times_up":"制限時間になりました!"},"years_count":{"one":"%{count} 年","other":"%{count} 年"}}},"saving_d55dd90e":"保存しています...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"この試行には、延長時間が与えられています","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"ブラウザの接続が遅いか、不安定な状態かもしれません。ブラウザのタイマーが切断されていますが、この試みでは、元の制限時間を超えてさらに5分間、回答が記録されます。","your_time_for_this_quiz_has_been_reduced_394652e9":"このクイズの回答時間が少なくなっています。"},"ko":{"buttons":{"cancel":"취소","login":"로그인"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"다음을 클릭하면 이 문제로 돌아올 수 없습니다. 공란으로 두시겠습니까?","navigate_away":"이 페이지에서 나가려고 합니다. 계속 진행하시겠습니까?","unanswered_questions":{"one":"답변하지 않은 문제가 %{count}개 있습니다(세부 정보는 오른쪽 사이드바 참고). 제출하시겠습니까?","other":"답변하지 않은 문제가 %{count}개 있습니다(세부 정보는 오른쪽 사이드바 참고). 제출하시겠습니까?"},"unfinished_quiz":"퀴즈를 마치지 않은 채로 나가려고 합니다. 계속 진행하시겠습니까?","unseen_questions":{"one":"아직 문제 %{count}개를 보지 않았습니다.  제출하시겠습니까?","other":"아직 문제 %{count}개를 보지 않았습니다.  제출하시겠습니까?"}},"days_count":{"one":"%{count}일","other":"%{count}일"},"errors":{"connection_lost":"%{host}와의 연결이 끊어졌습니다. 계속 진행하기 전에 인터넷에 연결되어 있는지 확인하시기 바랍니다.","only_numerical_values":"숫자 값만 허용됨"},"hide_time_link":"숨기기","hours_count":{"one":"%{count}시간","other":"%{count}시간"},"labels":{"time_elapsed":"지난 시간"},"minutes_count":{"one":"%{count}분","other":"%{count}분"},"months_count":{"one":"%{count}개월","other":"%{count}개월"},"question_answered":"답변함","question_unanswered":"아직 답변하지 않음","saved_at":"%{t}에 저장됨","saving":"저장 중...","saving_not_needed":"저장할 새 자료가 없습니다. %{t}에 마지막으로 확인했습니다.","seconds_count":{"one":"%{count}초","other":"%{count}초"},"show_time_link":"표시","titles":{"come_back_later":"나중에 돌아오기 위해 이 문제를 표시","times_up":"시간 종료!"},"years_count":{"one":"%{count}년","other":"%{count}년"}}},"saving_d55dd90e":"저장 중..."},"mi":{"buttons":{"cancel":"Whakakore","login":"Takiuru"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"E kore e taea e koe te hoki mai ki tēnei pātai kotahi patua koe te muri. E tino hiahia ana koe ki te waiho kia pātea?","file_upload_in_progress":"E mahi ana te kōnae tukuake. Ka ngaro pea tō whakautu i mua i te otinga.","navigate_away":"Kei te whakatere atu koe i tēnei whārangi. Haere tonu?","unanswered_questions":{"one":" 1 pātai kaore i whakautua e koe (titiro ki te pūketetaha tika mō ngā taipitopito). Tuku tonu?","other":"Kei ia koe %{count} ngā pātai kaore i whakautua (titiro ki te pūketetaha tika mō ngā taipitopito). Tuku tonu?"},"unfinished_quiz":"Kei te wehe atu koe i te quiz kaore anō i oti. Haere tonu?","unseen_questions":{"one":"1 pātai kaore i anō koe i kite. Tuku tonu?","other":"Kei reira tonu %{count} ngā pātai kaore anō koe i kite. Tuku tonu?"}},"days_count":{"one":"1 Ra","other":"%{count} Ngā Ra"},"errors":{"connection_lost":"I ngaro hononga ki %{host}. Tēnā koa kia tūhono koe ki te Ipurangi i mua i tonu.","only_numerical_values":"E whakāetia anake ngā uara tau"},"hide_time_link":"Wā Huna","hours_count":{"one":"1 Haora","other":"%{count} Ngā Haora"},"labels":{"time_elapsed":"Wā Kua Pau"},"login_failed":"I hapa te takiurutanga.","login_successful":"I whakāetia te takiurutanga.","minutes_count":{"one":"1 meneti","other":"%{count} meneti"},"months_count":{"one":"1 marama","other":"%{count} marama"},"notices":{"due_date_five_minutes_left":"E rima meneti e toe ana i mua Quiz Ka tohua Tūreiti","due_date_one_minute_left":"Kotahi Meneti e toe ana mua Quiz Ka tohua Tūreiti","due_date_thirty_minutes_left":"E toru tekau meneti e toe ana i mua Quiz Ka tohua Tūreiti","submission_five_minutes_left":"tēnei Quiz ka tukuna I roto i te rima meneti","submission_one_minute_left":"tēnei Quiz ka tukuna I roto i te meneti kotahi","submission_thirty_minutes_left":"tēnei Quiz ka tukuna I roto i te toru tekau meneti"},"question_answered":"whakautua","question_unanswered":"kaore i Whakautua anō","saved_at":"Quiz tiakina i %{t}","saving":"Kei te tiakina","saving_not_needed":"Koare he raraunga hou ki te tiakina. Āta titirohia whakamutunga i %{t}","seconds_count":{"one":"1 hēkona","other":"%{count} ngā hēkona"},"show_time_link":"Wā Kite","titles":{"come_back_later":"Tohua e koe tēnei pātai ki te hoki mai a muri iho","times_up":"Kua mutu te wā!"},"years_count":{"one":"1 tau","other":"%{count} ngā tau"}}},"saving_d55dd90e":"Kei te tiakina","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Kua homai e koe te wa anō i runga i tēnei nganatanga","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Tō kaitirotiro hononga ka āhua tōroa ara kaore e tau rānei. Ahakoa te wā o tō kaitirotiro ka whakakoretia ō whakautu ka t`hoputia mo te wā o te 5 meneti nui atu i te wā o te wā i whakaritea i runga i tēnei whakamātauranga.","your_time_for_this_quiz_has_been_reduced_394652e9":"Kua whakaiti tō wa mo tēnei quiz."},"nb":{"buttons":{"cancel":"Avbryt","login":"Innlogging"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Du kan ikke komme tilbake til dette spørsmålet etter at du har gått videre. Er du sikker på at du vil la det være tomt?","file_upload_in_progress":"Opplasting av fil pågår. Du kan miste svaret ditt før det er fullført.","navigate_away":"Du er i ferd med å navigere vekk fra denne siden. Vil du fortsette?","unanswered_questions":{"one":"Du har 1 ubesvart spørsmål (se til høyre for detaljer).  Lever likevel?","other":"Du har %{count} ubesvarte spørsmål (se på høyre side for detaljer).  Lever likevel?"},"unfinished_quiz":"Du er i ferd med å forlate testen uten å fullføre. Vil du fortsette uansett?","unseen_questions":{"one":"Det er fortsatt 1 spørsmål du ikke har sett. Levere likevel?","other":"Det er fortsatt %{count} spørsmål du ikke har sett. Levere likevel?"}},"days_count":{"one":"1 dag","other":"%{count} dager"},"errors":{"connection_lost":"Tilkoblingen til %{host} forsvant. Sjekk at du har internettilkobling før du fortsetter.","only_numerical_values":"kun numeriske verdier godtas"},"hide_time_link":"Skjul tid","hours_count":{"one":"1 time","other":"%{count} timer"},"labels":{"time_elapsed":"Tid som har gått"},"login_failed":"logg inn feilet.","login_successful":"Vellykket logg inn.","minutes_count":{"one":"1 minutt","other":"%{count} minutter"},"months_count":{"one":"1 måned","other":"%{count} måneder"},"notices":{"due_date_five_minutes_left":"Fem minutter igjen før testen vil bli markert som sen","due_date_one_minute_left":"Ett minutt igjen før testen vil bli markert som sen","due_date_thirty_minutes_left":"Tretti minutter igjen før testen vil bli markert som sen","submission_five_minutes_left":"Denne test skal leveres om fem minutter","submission_one_minute_left":"Denne test skal leveres om ett minutt","submission_thirty_minutes_left":"Denne test skal leveres om tretti minutter"},"question_answered":"Besvart","question_unanswered":"Ikke besvart ennå","saved_at":"Test lagret %{t}","saving":"Lagrer…","saving_not_needed":"Ingen nye data å lagre. Sist sjekket %{t}","seconds_count":{"one":"1 sekund","other":"%{count} sekunder"},"show_time_link":"Vis tid","titles":{"come_back_later":"Du indikerte at du ville komme tilbake til dette spørsmålet","times_up":"Tiden er ute!"},"years_count":{"one":"1 år","other":"%{count} år"}}},"saving_d55dd90e":"Lagrer…","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Du har fått ekstra tid på dette forsøket","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Tilkoblingen til nettleseren din kan være treg eller ustabil. Til tross for at nettleserens timer kobles fra, blir svarene dine registrert i fem minutter utover den opprinnelige tidsgrensen for dette forsøket.","your_time_for_this_quiz_has_been_reduced_394652e9":"Tiden din for denne testen er redusert."},"nb-x-k12":{"buttons":{"cancel":"Avbryt","login":"Innlogging"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Du kan ikke komme tilbake til dette spørsmålet etter at du har gått videre. Er du sikker på at du vil la det være tomt?","file_upload_in_progress":"Opplasting av fil pågår. Du kan miste svaret ditt før det er fullført.","navigate_away":"Du er i ferd med å navigere vekk fra denne siden. Vil du fortsette?","unanswered_questions":{"one":"Du har 1 ubesvart spørsmål (se til høyre for detaljer).  Lever likevel?","other":"Du har %{count} ubesvarte spørsmål (se på høyre side for detaljer).  Lever likevel?"},"unfinished_quiz":"Du er i ferd med å forlate testen uten å fullføre. Vil du fortsette uansett?","unseen_questions":{"one":"Det er fortsatt 1 spørsmål du ikke har sett. Levere likevel?","other":"Det er fortsatt %{count} spørsmål du ikke har sett. Levere likevel?"}},"days_count":{"one":"1 dag","other":"%{count} dager"},"errors":{"connection_lost":"Tilkoblingen til %{host} forsvant. Sjekk at du har internettilkobling før du fortsetter.","only_numerical_values":"kun numeriske verdier godtas"},"hide_time_link":"Skjul tid","hours_count":{"one":"1 time","other":"%{count} timer"},"labels":{"time_elapsed":"Tid som har gått"},"login_failed":"logg inn feilet.","login_successful":"Vellykket logg inn.","minutes_count":{"one":"1 minutt","other":"%{count} minutter"},"months_count":{"one":"1 måned","other":"%{count} måneder"},"notices":{"due_date_five_minutes_left":"Fem minutter igjen før testen vil bli markert som sen","due_date_one_minute_left":"Ett minutt igjen før testen vil bli markert som sen","due_date_thirty_minutes_left":"Tretti minutter igjen før testen vil bli markert som sen","submission_five_minutes_left":"Denne test skal leveres om fem minutter","submission_one_minute_left":"Denne test skal leveres om ett minutt","submission_thirty_minutes_left":"Denne test skal leveres om tretti minutter"},"question_answered":"Besvart","question_unanswered":"Ikke besvart ennå","saved_at":"Test lagret %{t}","saving":"Lagrer…","saving_not_needed":"Ingen nye data å lagre. Sist sjekket %{t}","seconds_count":{"one":"1 sekund","other":"%{count} sekunder"},"show_time_link":"Vis tid","titles":{"come_back_later":"Du indikerte at du ville komme tilbake til dette spørsmålet","times_up":"Tiden er ute!"},"years_count":{"one":"1 år","other":"%{count} år"}}},"saving_d55dd90e":"Lagrer…","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Du har fått ekstra tid på dette forsøket","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Tilkoblingen til nettleseren din kan være treg eller ustabil. Til tross for at nettleserens timer kobles fra, blir svarene dine registrert i fem minutter utover den opprinnelige tidsgrensen for dette forsøket.","your_time_for_this_quiz_has_been_reduced_394652e9":"Tiden din for denne testen er redusert."},"nl":{"buttons":{"cancel":"Annuleren","login":"Aanmelden"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Je kunt niet teruggaan naar deze vraag eens je op volgende klikt. Weet je zeker dat je het veld leeg wilt laten?","file_upload_in_progress":"Bestand wordt geüpload. Je kunt je antwoord verliezen voordat het is voltooid.","navigate_away":"Je probeert deze pagina te verlaten. Toch Doorgaan?","unanswered_questions":{"one":"Je hebt 1 niet beantwoorde vraag (zie de rechterzijbalk voor details). Toch inleveren?","other":"Je hebt %{count} niet beantwoorde vragen (zie de rechterzijbalk voor details). Toch inleveren?"},"unfinished_quiz":"Je staat op het punt om de toets onvoltooid te verlaten. Toch doorgaan?","unseen_questions":{"one":"Je hebt 1 vraag nog niet bekeken. Toch inleveren?","other":"Je hebt %{count} vragen nog niet bekeken. Toch inleveren?"}},"days_count":{"one":"1 dag","other":"%{count} dagen"},"errors":{"connection_lost":"Verbinding met %{host} is verbroken. Zorg ervoor dat je met internet verbonden bent voordat je doorgaat.","only_numerical_values":"alleen numerieke waarden worden geaccepteerd"},"hide_time_link":"Tijd verbergen","hours_count":{"one":"1 uur","other":"%{count} uren"},"labels":{"time_elapsed":"Tijd verstreken"},"login_failed":"Aanmelden mislukt.","login_successful":"Aanmelden succesvol.","minutes_count":{"one":"1 minuut","other":"%{count} minuten"},"months_count":{"one":"1 maand","other":"%{count} maanden"},"notices":{"due_date_five_minutes_left":"Je hebt nog vijf minuten voor toets als te laat wordt aangemerkt","due_date_one_minute_left":"Je hebt nog één minuut voor toets als te laat wordt aangemerkt","due_date_thirty_minutes_left":"Je hebt nog dertig minuten voor toets als te laat wordt aangemerkt","submission_five_minutes_left":"Deze toets zal binnen vijf minuten ingezonden worden","submission_one_minute_left":"Deze toets zal binnen één minuten ingezonden worden","submission_thirty_minutes_left":"Deze toets zal binnen dertig minuten ingezonden worden"},"question_answered":"Beantwoord","question_unanswered":"Nog niet beantwoord","saved_at":"Toets opgeslagen op %{t}","saving":"Bezig met opslaan...","saving_not_needed":"Geen nieuwe gegevens om op te slaan. Laatst gecontroleerd om %{t}","seconds_count":{"one":"1 seconde","other":"%{count} seconden"},"show_time_link":"Tijd tonen","titles":{"come_back_later":"Je hebt deze vraag gemarkeerd om later nogmaals weer te geven","times_up":"Tijd is om!"},"years_count":{"one":"1 jaar","other":"%{count} jaren"}}},"saving_d55dd90e":"Bezig met opslaan...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Je hebt extra tijd voor deze poging gekregen","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"De connectiviteit van je browser kan langzaam of onstabiel zijn. Hoewel de timer van je browser niet meer verbonden is, worden je antwoorden voor een aanvullende 5 minuten opgenomen na de oorspronkelijke tijdslimiet voor deze poging.","your_time_for_this_quiz_has_been_reduced_394652e9":"De tijd die je voor deze toets hebt, is verminderd."},"nn":{"buttons":{"cancel":"Avbryt","login":"Pålogging"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Du kan ikkje gå tilbake til dette spørsmålet når du har gått til det neste. Er du sikker på at du ikkje vil svare?","navigate_away":"Du er i ferd med å navigere bort frå frå denne sida.  Vil du halde fram likevel ?","unanswered_questions":{"one":"Du har 1 spørsmål du ikkje har svart på (sjå detaljar i høgre sidestolpe).  Vil du levere likevel?","other":"Du har %{count} spørsmål du ikkje har svart på (sjå detaljar i høgre sidestolpe).  Vil du levere likevel?"},"unfinished_quiz":"Du er i ferd med å gå bort frå spørsmålet utan å ha svart.  Vil du halde fram likevel ?","unseen_questions":{"one":"Det er framleis 1 spørsmål du ikkje har sett.  Vil du levere likevel?","other":"Det er framleis %{count} spørsmål du ikkje har sett.  Vil du levere likevel?"}},"days_count":{"one":"1 dag","other":"%{count} dagar"},"errors":{"connection_lost":"Tilkopling til %{host} er tapt.  Kontroller om du er tilkopla Internett før du held fram.","only_numerical_values":"berre numeriske verdiar er godkjende"},"hide_time_link":"Skjul","hours_count":{"one":"1 time","other":"%{count} timar"},"labels":{"time_elapsed":"Tid som har gått"},"login_failed":"Pålogging mislukkast.","login_successful":"Pålogga.","minutes_count":{"one":"1 minutt","other":"%{count} minutt"},"months_count":{"one":"1 månad","other":"%{count} månader"},"notices":{"due_date_five_minutes_left":"Fem minutt igjen før quizen blir merka som For sein","due_date_one_minute_left":"Eit minutt igjen før quizen vil bli merka som For sein","due_date_thirty_minutes_left":"Tretti minutt igjen før quizen vil bli merka som For sein","submission_five_minutes_left":"Quizen skal leverast om fem minutt","submission_one_minute_left":"Quizen skal leverast om eit minutt","submission_thirty_minutes_left":"Quizen skal leverast om tretti minutt"},"question_answered":"Svart på","question_unanswered":"Har ikkje svart enno","saved_at":"Quizen er lagra på %{t}","saving":"Lagrar...","saving_not_needed":"Ingen nye data å lagre. Sist sjekka på %{t}","seconds_count":{"one":"1 sekund","other":"%{count} sekund"},"show_time_link":"Vis","titles":{"come_back_later":"Du merka spørsmålet for å kome attende til det seinare","times_up":"Tida er ute."},"years_count":{"one":"1 år","other":"%{count} år"}}},"saving_d55dd90e":"Lagrar...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Du er tildelt ekstra tid for dette forsøket","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":" Nettilkoblinga di kan være treig eller ustabil. Svara dine vil bli lagra i 5minutt ekstra utover den originale tidsfristen på dette forsøket, sjølv om nettlesaren din sin timer vart frakopla.","your_time_for_this_quiz_has_been_reduced_394652e9":"Tida di for denne quizen er redusert."},"pl":{"buttons":{"cancel":"Anuluj","login":"Zaloguj"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Nie można powrócić do tego pytania po przejściu do następnego. Czy na pewno chcesz je pozostawić nieuzupełnione?","file_upload_in_progress":"Trwa przesyłanie pliku. Możesz utracić odpowiedź, zanim zostanie ukończona.","navigate_away":"Za chwilę opuścisz tę stronę.  Kontynuować mimo to?","unanswered_questions":{"one":"Nie odpowiedziano na 1 pytanie (szczegóły sprawdż w panelu po prawej). Czy na pewno wysłać?","other":"Nie odpowiedziano na %{count} pytań (szczegóły sprawdź w panelu po prawej). Czy na pewno wysłać?"},"unfinished_quiz":"Opuścisz ten test bez ukończenia.  Kontynuować mimo to?","unseen_questions":{"one":"Wciąż jest 1 pytanie, którego jeszcze nie widziałeś. Przesłać mimo to?","other":"Wciąż jest %{count} pytań, których jeszcze nie widziałeś/aś. Przesłać mimo to?"}},"days_count":{"one":"1 Dzień","other":"%{count} Dni"},"errors":{"connection_lost":"Utracono połączenie z %{host}.  Przed podjęciem dalszych czynności upewnij się, że masz połączenie z Internetem.","only_numerical_values":"dozwolone są tylko wartości numeryczne"},"hide_time_link":"Ukryj godzinę","hours_count":{"one":"1 Godzina","other":"%{count} Godzin"},"labels":{"time_elapsed":"Czas, który upłynął"},"login_failed":"Logowanie nie powiodło się.","login_successful":"Logowanie zakończone pomyślnie.","minutes_count":{"one":"1 Minuta","other":"%{count} Minut"},"months_count":{"one":"1 Miesiąc","other":"%{count} Miesięcy"},"notices":{"due_date_five_minutes_left":"Pozostało pięć minut — później test zostanie oceniony jako „po czasie”","due_date_one_minute_left":"Pozostała jedna minuta — później test zostanie oceniony jako „po czasie”","due_date_thirty_minutes_left":"Pozostało trzydzieści minut — później test zostanie oceniony jako „po czasie”","submission_five_minutes_left":"Test zostanie przesłany za pięć minut","submission_one_minute_left":"Test zostanie przesłany za jedną minutę","submission_thirty_minutes_left":"Test zostanie przesłany za trzydzieści minut"},"question_answered":"Z udzieloną odpowiedzią","question_unanswered":"Nie udzielono jeszcze odpowiedzi","saved_at":"Test zapisano o godz. %{t}","saving":"Trwa zapisywanie...","saving_not_needed":"Brak nowych danych do zapisania. Termin ostatniego sprawdzenia: %{t}","seconds_count":{"one":"1 Sekunda","other":" %{count} Sekund"},"show_time_link":"Pokaż godzinę","titles":{"come_back_later":"Użytkownik oznaczył pytanie, aby można było do niego wrócić później","times_up":"Czas minął!"},"years_count":{"one":"1 Rok","other":"%{count}  lat"}}},"saving_d55dd90e":"Trwa zapisywanie...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Użytkownik otrzymał dodatkowy czas w tej próbie","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Połączenie Twojej przeglądarki może być wolne lub niestabilne. Pomimo odłączenia zegara przeglądarki Twoje odpowiedzi zostaną zapisane na pięć dodatkowych minut ponad pierwotny limit czasu dla tej próby.","your_time_for_this_quiz_has_been_reduced_394652e9":"Twój czas w tym teście został ograniczony."},"pt":{"buttons":{"cancel":"Cancelar","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Não pode voltar a esta pergunta depois de clicar em Seguinte. Tem a certeza de que pretende deixá-la em branco?","file_upload_in_progress":"O carregamento de ficheiros está em curso. Poderá perder a sua resposta antes de estar completa.","navigate_away":"Está prestes a sair desta página.  Continuar mesmo assim?","unanswered_questions":{"one":"Não respondeu a 1 pergunta (veja os detalhes na barra lateral à direita).  Enviar mesmo assim?","other":"Não respondeu a %{count} perguntas (veja os detalhes na barra lateral à direita).  Enviar mesmo assim?"},"unfinished_quiz":"Está prestes a deixar este teste incompleto.  Continuar mesmo assim?","unseen_questions":{"one":"Há 1 pergunta que ainda não viu.  Enviar à mesma?","other":"Há %{count} perguntas que ainda não viu.  Enviar à mesma?"}},"days_count":{"one":"1 dia","other":"%{count} dias"},"errors":{"connection_lost":"A ligação a %{host} foi perdida.  Verifique se está ligado à Internet antes de prosseguir.","only_numerical_values":"são aceitos somente valores numéricos"},"hide_time_link":"Ocultar Hora","hours_count":{"one":"1 hora","other":"%{count} horas"},"labels":{"time_elapsed":"Tempo decorrido"},"login_failed":"Falha no início de sessão.","login_successful":"Início de sessão efetuado com sucesso.","minutes_count":{"one":"1 minuto","other":"%{count} Minutos"},"months_count":{"one":"1 mês","other":"%{count} meses"},"notices":{"due_date_five_minutes_left":"Cinco minutos restantes antes de se considerar o teste atrasado","due_date_one_minute_left":"Um minuto restante antes de se considerar o teste atrasado","due_date_thirty_minutes_left":"Trinta minutos restantes antes de se considerar o teste atrasado","submission_five_minutes_left":"Este teste será enviado dentro de cinco minutos","submission_one_minute_left":"Este teste será enviado dentro de um minuto","submission_thirty_minutes_left":"Este teste será enviado dentro de trinta minutos"},"question_answered":"Respondida","question_unanswered":"Ainda não responderam","saved_at":"Teste guardado em %{t}","saving":"A guardar...","saving_not_needed":"Não existem dados novos para guardar. Última verificação: %{t}","seconds_count":{"one":"1 segundo","other":"%{count} segundos"},"show_time_link":"Hora do espectáculo","titles":{"come_back_later":"Marcou esta pergunta para voltar mais tarde","times_up":"O tempo acabou!"},"years_count":{"one":"1 ano","other":"%{count} anos"}}},"saving_d55dd90e":"A guardar...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Recebeu um tempo extra nesta tentativa","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"A conectividade do seu navegador pode ser lenta ou instável. Apesar do temporizador do seu navegador estar desligado, as suas respostas serão registadas por mais 5 minutos para além do limite de tempo original nesta tentativa.","your_time_for_this_quiz_has_been_reduced_394652e9":"O tempo disponível para este teste foi diminuído."},"pt-BR":{"buttons":{"cancel":"Cancelar","login":"Login"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Você não pode voltar para esta pergunta depois que passar para a outra. Tem certeza deseja deixá-la em branco?","file_upload_in_progress":"O upload do arquivo está em andamento. Você pode perder sua resposta antes que ela seja concluída.","navigate_away":"Você está prestes a sair desta página.  Continuar de qualquer forma?","unanswered_questions":{"one":"Você não respondeu 1 pergunta (veja os detalhes na barra lateral à direita).  Enviar mesmo assim?","other":"Você não respondeu %{count} perguntas (veja os detalhes na barra lateral à direita).  Enviar mesmo assim?"},"unfinished_quiz":"Você está prestes a deixar este teste incompleto.  Continuar de qualquer forma?","unseen_questions":{"one":"Ainda há 1 pergunta que você não viu.  Enviar mesmo assim?","other":"Ainda há %{count} perguntas que você não viu.  Enviar mesmo assim?"}},"days_count":{"one":"1 dia","other":"%{count} Dias"},"errors":{"connection_lost":"A conexão com %{host} foi perdida.  Verifique se você está conectado à Internet antes de prosseguir.","only_numerical_values":"são aceitos somente valores numéricos"},"hide_time_link":"Ocultar hora","hours_count":{"one":"1 Hora","other":"%{count} Horas"},"labels":{"time_elapsed":"Tempo transcorrido"},"login_failed":"Falha ao conectar.","login_successful":"Login realizado com sucesso.","minutes_count":{"one":"1 Minuto","other":"%{count} Minutos"},"months_count":{"one":"1 mês","other":"%{count} meses"},"notices":{"due_date_five_minutes_left":"Faltam cinco minutos para o teste ser marcado como atrasado","due_date_one_minute_left":"Falta um minuto para o teste ser marcado como atrasado","due_date_thirty_minutes_left":"Faltam trinta minutos para o teste ser marcado como atrasado","submission_five_minutes_left":"Esse teste será enviado em cinco minutos","submission_one_minute_left":"Esse teste será enviado em um minuto","submission_thirty_minutes_left":"Esse teste será enviado em trinta minutos"},"question_answered":"Respondida","question_unanswered":"Não foram respondidas ainda","saved_at":"Salvo em %{t}","saving":"Salvando...","saving_not_needed":"Nenhum dado novo para salvar. Última verificação às %{t}","seconds_count":{"one":"1 segundo","other":"%{count} Segundos"},"show_time_link":"Mostrar hora","titles":{"come_back_later":"Você marcou esta pergunta para voltar mais tarde","times_up":"O tempo acabou!"},"years_count":{"one":"1 ano","other":"%{count} anos"}}},"saving_d55dd90e":"Salvando...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Você recebeu um tempo extra nesta tentativa","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"A conectividade do seu navegador pode ser lenta ou instável. Apesar de o cronômetro do seu navegador estar desconectado, suas respostas serão gravadas por mais 5 minutos além do limite de tempo original nesta tentativa.","your_time_for_this_quiz_has_been_reduced_394652e9":"Seu tempo para este teste foi reduzido."},"ru":{"buttons":{"cancel":"Отменить","login":"Вход в систему"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Вы не сможете вернуться к этому вопросу, если вы нажмете \'\'далее\'\'. Вы уверены, что хотите оставить его незаполненным?","file_upload_in_progress":"Идет выгрузка файла. Вы можете потерять ответ до его завершения.","navigate_away":"Вы собираетесь покинуть эту страницу.  Продолжить?","unanswered_questions":{"one":"У вас есть 1 вопрос без ответа (см. правую боковую панель для подробностей). Все равно отправить?","other":"У вас есть %{count} вопроса(ов) без ответа (см. правую боковую панель для подробностей). Все равно отправить?"},"unfinished_quiz":"Вы собираетесь оставить эту контрольную работу незавершенной.  Продолжить?","unseen_questions":{"one":"Вы все еще не просмотрели 1 вопрос.  Все равно отправить?","other":"Вы все еще не просмотрели %{count} вопросов.  Все равно отправить?"}},"days_count":{"one":" 1 день","other":"%{count} дня(дней)"},"errors":{"connection_lost":"Подключение к %{host} было потеряно.  Перед продолжением убедитесь, что вы подключены к Интернету.","only_numerical_values":"принимаются только числовые значения"},"hide_time_link":"Скрыть время","hours_count":{"one":"1 час","other":"%{count} часа(ов)"},"labels":{"time_elapsed":"Прошло времени"},"login_failed":"Ошибка входа в систему.","login_successful":"Вход в систему успешно выполнен.","minutes_count":{"one":"1 минута","other":"%{count} минут(ы)"},"months_count":{"one":"1 месяц","other":"%{count} месяца(ев)"},"notices":{"due_date_five_minutes_left":"Пять минут остается до момента, когда контрольный опрос будет иметь маркировку Поздно","due_date_one_minute_left":"Одна минута остается до момента, когда контрольный опрос будет иметь маркировку Поздно","due_date_thirty_minutes_left":"Тридцать минут остается до момента, когда контрольный опрос будет иметь маркировку Поздно","submission_five_minutes_left":"Этот контрольный опрос будет отправлен через пять минут","submission_one_minute_left":"Этот контрольный опрос будет отправлен через одну минуту","submission_thirty_minutes_left":"Этот контрольный опрос будет отправлен через тридцать минут"},"question_answered":"Получен ответ","question_unanswered":"Еще не отвечено","saved_at":"Тестирование сохранено в %{t}","saving":"Сохранение...","saving_not_needed":"Нет новых данных для сохранения. Последняя проверка была %{t}","seconds_count":{"one":"1 секунда","other":"%{count} секунд(ы)"},"show_time_link":"Показать время","titles":{"come_back_later":"Вы отметили этот вопрос, чтобы вернуться к нему позднее","times_up":"Время истекло!"},"years_count":{"one":"1 год","other":"%{count} года(лет)"}}},"saving_d55dd90e":"Сохранение...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Вам предоставлено дополнительное время на эту попытку","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Подключение вашего браузера может быть медленным или нестабильным. Несмотря на то, что таймер вашего браузера отключен, ваши ответы будут записываться еще в течение 5 минут после первоначальной продолжительности данной попытки.","your_time_for_this_quiz_has_been_reduced_394652e9":"Ваше время на этот тест было уменьшено."},"sl":{"buttons":{"cancel":"Prekliči","login":"Prijava"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Ko pritisnete Naprej, se ne morete več vrniti na to vprašanje. Ali ste prepričani, da želite pustiti prazno?","file_upload_in_progress":"Poteka nalaganje datoteke. Odgovor lahko izgubite, še preden bo zaključen.","navigate_away":"Zapustili boste to stran.  Ali vseeno želite nadaljevati?","unanswered_questions":{"one":"Imate eno neodgovorjeno vprašanje (za rezultate glejte desno stransko vrstico).  Ali želite vseeno poslati?","other":"Imate %{count} neodgovorjenih vprašanj (za rezultate glejte desno stransko vrstico).  Ali želite vseeno poslati?"},"unfinished_quiz":"Zapustili boste nedokončan kviz.  Ali vseeno želite nadaljevati?","unseen_questions":{"one":"Obstaja še eno vprašanje, ki ga še niste videli.  Ali želite vseeno poslati?","other":"Obstaja še %{count} vprašanj, ki jih še niste videli.  Ali želite vseeno poslati?"}},"days_count":{"one":"1 dan","other":"%{count} Dnevi"},"errors":{"connection_lost":"Povezava z gostiteljem %{host} je bila izgubljena.  Pred nadaljevanjem se prepričajte, da ste povezani z internetom.","only_numerical_values":"sprejemljive so samo numerične vrednosti"},"hide_time_link":"Skrij čas","hours_count":{"one":"1 ura","other":"%{count} ur"},"labels":{"time_elapsed":"Čas je potekel."},"login_failed":"Prijava ni uspela.","login_successful":"Prijava je uspela.","minutes_count":{"one":"1 minuta","other":"%{count} minut"},"months_count":{"one":"1 mesec","other":"%{count} mesecev"},"notices":{"due_date_five_minutes_left":"Preostalo je pet minut do označevanja kviza z zamujenim.","due_date_one_minute_left":"Preostala je ena minuta do označevanja kviza z zamujenim.","due_date_thirty_minutes_left":"Preostalo je trideset minut do označevanja kviza z zamujenim.","submission_five_minutes_left":"Ta kviz bo poslan čez pet minut.","submission_one_minute_left":"Ta kviz bo poslan čez eno minuto.","submission_thirty_minutes_left":"Ta kviz bo poslan čez trideset minut."},"question_answered":"Odgovorjeno","question_unanswered":"Odgovora še ni.","saved_at":"Kviz je bil shranjen ob %{t}","saving":"Shranjevanje ...","saving_not_needed":"Ni novih podatkov za shranjevanje. Nazadnje preverjeno ob %{t}","seconds_count":{"one":"1 sekunda","other":"%{count} sekund"},"show_time_link":"Prikaži čas","titles":{"come_back_later":"To vprašanje ste označili, da se boste pozneje vrnili.","times_up":"Čas je potekel."},"years_count":{"one":"1 leto","other":"%{count} let"}}},"saving_d55dd90e":"Shranjevanje ...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Podeljen vam je bil dodatni čas za ta poskus.","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Povezava brskalnika je morda počasna ali nestabilna. Kljub odklopu časovnika brskalnika bodo vaši odgovori zabeleženi še dodatnih 5 minut po prvotni časovni omejitvi za ta poskus.","your_time_for_this_quiz_has_been_reduced_394652e9":"Vaš čas za opravljanje tega kviza je skrajšan."},"sv":{"buttons":{"cancel":"Avbryt","login":"Logga in"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Du kan inte gå tillbaka till frågan efter att du tryckt på nästa. Vill du verkligen lämna den blank?","file_upload_in_progress":"Filuppladdning pågår. Du kan förlora svaret innan det är komplett.","navigate_away":"Du är på väg att lämna sidan.  Vill du fortsätta ändå?","unanswered_questions":{"one":"Du har 1 obesvarad fråga (se menyn till höger för detaljer).  Lämna in ändå?","other":"Du har %{count} obesvarade frågor (se menyn till höger för detaljer).  Lämna in ändå?"},"unfinished_quiz":"Du är på väg att lämna en ofärdig quiz.  Vill du fortsätta ändå?","unseen_questions":{"one":"Det finns 1 fråga du inte har sett än.  Lämna in ändå?","other":"Det finns %{count} frågor som du inte har sett än.  Lämna in ändå?"}},"days_count":{"one":"1 dag","other":"%{count} dagar"},"errors":{"connection_lost":"Anslutning till %{host} förlorades.  Se till att du är ansluten till Internet innan du fortsätter.","only_numerical_values":"endast numeriska värden accepteras"},"hide_time_link":"Dölj tid","hours_count":{"one":"1 timme","other":"%{count}  timmar"},"labels":{"time_elapsed":"Tid som gått"},"login_failed":"Inloggning misslyckades.","login_successful":"Loggades in.","minutes_count":{"one":"1 minut","other":"%{count} minuter"},"months_count":{"one":"1 månad","other":"%{count} månader"},"notices":{"due_date_five_minutes_left":"Fem minuter kvar innan Quiz markeras som försenad","due_date_one_minute_left":"En minut kvar innan Quiz markeras som försenad","due_date_thirty_minutes_left":"Trettio minuter kvar innan Quiz markeras som försenad","submission_five_minutes_left":"Detta Quiz kommer lämnas in om fem minuter","submission_one_minute_left":"Detta Quiz kommer lämnas in om en minut","submission_thirty_minutes_left":"Detta Quiz kommer lämnas in om trettio minuter"},"question_answered":"Besvarad","question_unanswered":"Har inte svarat än","saved_at":"Quiz sparad kl. %{t}","saving":"Sparar ...","saving_not_needed":"Ingen ny data att spara. Senast kontrollerad kl. %{t}","seconds_count":{"one":"1 sekund","other":"%{count} sekunder"},"show_time_link":"Visa tid","titles":{"come_back_later":"Du har markerat den här frågan för att komma tillbaka senare","times_up":"Tiden är slut!"},"years_count":{"one":"1 år","other":"%{count} år"}}},"saving_d55dd90e":"Sparar ...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Du har fått extra tid för det här försöket","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Din webbläsaranslutning kan vara långsam eller instabil. Trots att din webbläsares timer är frånkopplad kommer dina svar att registreras i ytterligare 5 minuter utöver den ursprungliga tidsgränsen för det här försöket.","your_time_for_this_quiz_has_been_reduced_394652e9":"Din tid för det här quizzet har minskats."},"sv-x-k12":{"buttons":{"cancel":"Avbryt","login":"Logga in"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Du kan inte gå tillbaka till frågan efter att du tryckt på nästa. Vill du verkligen lämna den blank?","file_upload_in_progress":"Filuppladdning pågår. Du kan förlora svaret innan det är komplett.","navigate_away":"Du är på väg att lämna sidan.  Vill du fortsätta ändå?","unanswered_questions":{"one":"Du har 1 obesvarad fråga (se menyn till höger för detaljer).  Lämna in ändå?","other":"Du har %{count} obesvarade frågor (se menyn till höger för detaljer).  Lämna in ändå?"},"unfinished_quiz":"Du är på väg att lämna en ofärdig quiz.  Vill du fortsätta ändå?","unseen_questions":{"one":"Det finns 1 fråga du inte har sett än.  Lämna in ändå?","other":"Det finns %{count} frågor som du inte har sett än.  Lämna in ändå?"}},"days_count":{"one":"1 dag","other":"%{count} dagar"},"errors":{"connection_lost":"Anslutning till %{host} förlorades.  Se till att du är ansluten till Internet innan du fortsätter.","only_numerical_values":"endast numeriska värden accepteras"},"hide_time_link":"Dölj tid","hours_count":{"one":"1 timme","other":"%{count}  timmar"},"labels":{"time_elapsed":"Tid som gått"},"login_failed":"Inloggning misslyckades.","login_successful":"Loggades in.","minutes_count":{"one":"1 minut","other":"%{count} minuter"},"months_count":{"one":"1 månad","other":"%{count} månader"},"notices":{"due_date_five_minutes_left":"Fem minuter kvar innan Quiz markeras som försenad","due_date_one_minute_left":"En minut kvar innan Quiz markeras som försenad","due_date_thirty_minutes_left":"Trettio minuter kvar innan Quiz markeras som försenad","submission_five_minutes_left":"Detta Quiz kommer lämnas in om fem minuter","submission_one_minute_left":"Detta Quiz kommer lämnas in om en minut","submission_thirty_minutes_left":"Detta Quiz kommer lämnas in om trettio minuter"},"question_answered":"Besvarad","question_unanswered":"Har inte svarat än","saved_at":"Quiz sparad kl. %{t}","saving":"Sparar ...","saving_not_needed":"Ingen ny data att spara. Senast kontrollerad kl. %{t}","seconds_count":{"one":"1 sekund","other":"%{count} sekunder"},"show_time_link":"Visa tid","titles":{"come_back_later":"Du har markerat den här frågan för att komma tillbaka senare","times_up":"Tiden är slut!"},"years_count":{"one":"1 år","other":"%{count} år"}}},"saving_d55dd90e":"Sparar ...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Du har fått extra tid för det här försöket","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"Din webbläsaranslutning kan vara långsam eller instabil. Trots att din webbläsares timer är frånkopplad kommer dina svar att registreras i ytterligare 5 minuter utöver den ursprungliga tidsgränsen för det här försöket.","your_time_for_this_quiz_has_been_reduced_394652e9":"Din tid för det här quizzet har minskats."},"th":{"buttons":{"cancel":"ยกเลิก","login":"ล็อกอิน"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"คุณไม่สามารถกลับมาที่คำถามนี้หลังจากกดถัดไปแล้วได้ แน่ใจว่าต้องการปล่อยว่างไว้หรือไม่","file_upload_in_progress":"กำลังอัพโหลดไฟล์ คำตอบของคุณอาจหายไปก่อนเสร็จสิ้น","navigate_away":"คุณกำลังจะออกจากเพจนี้  ดำเนินการต่อไปหรือไม่","unanswered_questions":{"one":"คุณมีคำถาม 1 ข้อที่ไม่ได้ตอบ (ดูรายละเอียดจากแถบข้อมูลด้านขวา)  ส่งต่อไปหรือไม่","other":"คุณมีคำถาม %{count} ข้อที่ไม่ได้ตอบ (ดูรายละเอียดจากแถบข้อมูลด้านขวา)  ส่งต่อไปหรือไม่"},"unfinished_quiz":"คุณกลำงจากออกจากแบบทดสอบทั้งที่ยังไม่เสร็จสิ้น  ดำเนินการต่อไปหรือไม่","unseen_questions":{"one":"ยังมีอีก 1 คำถามที่คุณยังไม่ได้ดู  ส่งต่อไปหรือไม่","other":"ยังมีอีก %{count} คำถามที่คุณยังไม่ได้ดู  ส่งต่อไปหรือไม่"}},"days_count":{"one":"1 วัน","other":"%{count} วัน"},"errors":{"connection_lost":"การเชื่อมต่อกับ %{host} ขาดหาย  กรุณาตรวจสอบว่าคุณเชื่อมต่ออินเทอร์เน็ตอยู่ก่อนดำเนินการต่อ","only_numerical_values":"ยอมรับเฉพาะค่าตัวเลข"},"hide_time_link":"ซ่อนเวลา","hours_count":{"one":"1 ชั่วโมง","other":"%{count} ชั่วโมง"},"labels":{"time_elapsed":"เวลาที่ผ่านไป"},"login_failed":"ล็อกอินล้มเหลว","login_successful":"ล็อกอินเสร็จสิ้น","minutes_count":{"one":"1 นาที","other":"%{count} นาที"},"months_count":{"one":"1 เดือน","other":"%{count} เดือน"},"notices":{"due_date_five_minutes_left":"เหลืออีกห้านาทีก่อนกำกับแบบทดสอบว่าล่าช้า","due_date_one_minute_left":"เหลืออีกหนึ่งนาทีก่อนกำกับแบบทดสอบว่าล่าช้า","due_date_thirty_minutes_left":"เหลืออีกสามสิบนาทีก่อนกำกับแบบทดสอบว่าล่าช้า","submission_five_minutes_left":"แบบทดสอบจะถูกจัดส่งภายในห้านาที","submission_one_minute_left":"แบบทดสอบจะถูกจัดส่งภายในหนึ่งนาที","submission_thirty_minutes_left":"แบบทดสอบจะถูกจัดส่งภายในสามสิบนาที"},"question_answered":"ตอบแล้ว","question_unanswered":"ยังไม่ได้ตอบ","saved_at":"บันทึกแบบทดสอบไว้ที่ %{t}","saving":"กำลังบันทึก...","saving_not_needed":"ไม่มีข้อมูลใหม่ที่จะบันทึก ตรวจสอบล่าสุดเมื่อ %{t}","seconds_count":{"one":"1 วินาที","other":"%{count} วินาที"},"show_time_link":"แสดงเวลา","titles":{"come_back_later":"คุณกำกับคำถามนี้ไว้เพื่อกลับมาในภายหลัง","times_up":"หมดเวลา!"},"years_count":{"one":"1 ปี","other":"%{count} ปี"}}},"saving_d55dd90e":"กำลังบันทึก...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"คุณได้รับเวลาเพิ่มสำหรับการดำเนินการนี้","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"การเชื่อมต่อเบราเซอร์ของคุณอาจช้าหรือไม่เสถียร แม้ว่าระบบจับเวลาของเบราเซอร์จะไม่ได้เชื่อมต่ออยู่ แต่คำตอบของคุณจะถูกบันทึกไว้เพิ่มอีก 5 นาทีจากจำกัดเวลาเดิมสำหรับการดำเนินการนี้","your_time_for_this_quiz_has_been_reduced_394652e9":"เวลาสำหรับแบบทดสอบนี้ถูกปรับลด"},"tr":{"buttons":{"cancel":"İptal","login":"Oturum Aç"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Bu soruda geri gidemezsiniz, öncelikle ileriyi tıklamalısınız. Boş bırakmak istediğinize emin misiniz?","navigate_away":"Sayfadan ayrılmak üzeresiniz. Devam etmek istiyormusunuz?","unanswered_questions":{"one":"Cevaplanmamış 1 soru bulunmaktadır. (Sağ taraftan ayrıntılara ulaşabilirsiniz) Buna rağmen göndermek istiyormusunuz?","other":"Cevaplanmamış %{count} soru bulunmaktadır. (Sağ taraftan ayrıntılara ulaşabilirsiniz) Buna rağmen göndermek istiyormusunuz?"},"unfinished_quiz":"Kısa sınavı tamamlamadan ayrılıyorsunuz. Devam etmek istiyormusunuz?","unseen_questions":{"one":"1 soruyu henüz görmediniz. Göndermek istediğinize emin misiniz?","other":"%{count} soruyu henüz görmediniz. Göndermek istediğinize emin misiniz?"}},"days_count":{"one":"1 gün","other":"%{count} gün"},"errors":{"connection_lost":"%{host} sunucusuna bağlantı kayboldu. Internet\'e bağlı olduğunuzdan emin olun ve tekrar deneyin.","only_numerical_values":"sadece sayısal değerler kabul edilir"},"hide_time_link":"Gizle","hours_count":{"one":"1 Saat","other":"%{count} Saat"},"labels":{"time_elapsed":"Geçen Zaman"},"login_failed":"Oturum açma başarısız.","login_successful":"Oturum açma başarılı","minutes_count":{"one":"1 Dakika","other":"%{count} Dakika"},"months_count":{"one":"1 Ay","other":"%{count} Ay"},"notices":{"due_date_five_minutes_left":"Kısa Sınavın Geç Kalındı Olarak İşaretlenmesine Beş Dakika Kaldı","due_date_one_minute_left":"Kısa Sınavın Geç Kalındı Olarak İşaretlenmesine Bir Dakika Kaldı","due_date_thirty_minutes_left":"Kısa Sınavın Geç Kalındı Olarak İşaretlenmesine Otuz Dakika Kaldı","submission_five_minutes_left":"Bu Kısa Sınav Beş Dakika İçinde Gönderilecek","submission_one_minute_left":"Bu Kısa Sınav Bir Dakika İçinde Gönderilecek","submission_thirty_minutes_left":"Bu Kısa Sınav Otuz Dakika İçinde Gönderilecek"},"question_answered":"Cevaplandı","question_unanswered":"Henüz Cevaplanmadı","saved_at":"%{t} saatinde kısa sınavınız kaydedildi","saving":"Kaydediliyor...","saving_not_needed":"Yeni veri kaydedilmedi. En son temas %{t}","seconds_count":{"one":"1 Saniye","other":"%{count} Saniye"},"show_time_link":"Göster","titles":{"come_back_later":"Daha sonra bu soruya geri dönmeniz için işaretlediniz","times_up":"Süre Bitti!"},"years_count":{"one":"1 Yıl","other":"%{count} Yıl"}}},"saving_d55dd90e":"Kaydediliyor...","your_time_for_this_quiz_has_been_reduced_394652e9":"Bu sınav için zamanınız azaltıldı."},"uk":{"buttons":{"cancel":"Скасувати","login":"Вхід"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"Ви не зможете повернутися до цього питання, як тільки ви натиснете наступний. Ви впевнені, що хочете залишити це порожнім?","navigate_away":"Ви збираєтеся перейти з цієї сторінки. Продовжити все одно?","unanswered_questions":{"one":"Ви маєте 1 питання без відповіді (подробиці перегляньте на бічній панелі праворуч).  Продовжити надсилання?","other":"Ви маєте %{count} питань без відповіді (подробиці перегляньте на бічній панелі праворуч).  Продовжити надсилання?"},"unfinished_quiz":"Ви збираєтеся залишити контрольну роботу незакінченою. Продовжити все одно?","unseen_questions":{"one":"Залишилося 1 питання, яке ви ще не переглянули.  Продовжити надсилання?","other":"Залишилося  %{count} питань, які ви ще не переглянули.  Продовжити надсилання?"}},"days_count":{"one":"1 День","other":"%{count}Днів"},"errors":{"connection_lost":"Підключення до %{host}було втрачено. Перш ніж продовжити, переконайтеся, що ви підключені до Інтернету.","only_numerical_values":"Приймаються лише числові значення"},"hide_time_link":"Приховати","hours_count":{"one":"1 Година","other":"%{count} Годин"},"labels":{"time_elapsed":"Час минув"},"login_failed":"Помилка входу.","login_successful":"Успішний вхід.","minutes_count":{"one":"1 Хвилина","other":"%{count}Хвилин"},"months_count":{"one":"1 Місяць","other":"%{count}Місяців"},"notices":{"due_date_five_minutes_left":"Контрольна робота буде прострочена через п\'ять хвилин","due_date_one_minute_left":"Контрольна робота буде прострочена через одну хвилину","due_date_thirty_minutes_left":"Контрольна робота буде прострочена через тридцять хвилин","submission_five_minutes_left":"Контрольну роботу буде відправлено через п\'ять хвилин","submission_one_minute_left":"Контрольну роботу буде відправлено через одну хвилину","submission_thirty_minutes_left":"Контрольну роботу буде відправлено через тридцять хвилин"},"question_answered":"Відповідь надана","question_unanswered":"Ще не відповів","saved_at":"Контрольну роботу збережено о %{t}","saving":"Збереження...","saving_not_needed":"Немає нових даних для збереження. Востаннє перевірено о%{t}","seconds_count":{"one":"1 Секунда","other":"%{count} Секунд"},"show_time_link":"Показати","titles":{"come_back_later":"Ви позначили це питання, щоб повернутися до нього пізніше","times_up":"Час вийшов!"},"years_count":{"one":"1 Рік","other":"%{count}Років"}}},"saving_d55dd90e":"Збереження...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"Вам надається додатковий час на цю спробу","your_time_for_this_quiz_has_been_reduced_394652e9":"Ваш час для цієї контрольної роботи було скорочено."},"zh-Hans":{"buttons":{"cancel":"取消","login":"登录"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"您单击”下一个“后，就不能返回此问题。是否确定要留空?","file_upload_in_progress":"正在上传文件。在完成之前，您的回答可能会丢失。","navigate_away":"您将要导航离开此页面。是否仍要继续?","unanswered_questions":{"one":"您有 %{count} 个问题未回答（参见右侧边栏了解详细信息）。是否仍要提交？","other":"您有 %{count} 个问题未回答（参见右侧边栏了解详细信息）。是否仍要提交？"},"unfinished_quiz":"您将要离开未完成的测验。是否仍要继续?","unseen_questions":{"one":"您还有 %{count} 个问题没有看到。是否提交？","other":"您还有 %{count} 个问题没有看到。是否提交？"}},"days_count":{"one":"%{count} 天","other":"%{count} 天"},"errors":{"connection_lost":"到 %{host} 的连接丢失。请确保已连接到 Internet，然后继续。","only_numerical_values":"只接受数值"},"hide_time_link":"隐藏时间","hours_count":{"one":"%{count} 小时","other":"%{count} 小时"},"labels":{"time_elapsed":"经过时间"},"login_failed":"登录失败。","login_successful":"登录成功。","minutes_count":{"one":"%{count} 分钟","other":"%{count} 分钟"},"months_count":{"one":"%{count} 个月","other":"%{count} 个月"},"notices":{"due_date_five_minutes_left":"五分钟后测验将被标记为“延迟”","due_date_one_minute_left":"一分钟后测验将被标记为“延迟”","due_date_thirty_minutes_left":"三十分钟后测验将被标记为“延迟”","submission_five_minutes_left":"此测验将在五分钟内提交","submission_one_minute_left":"此测验将在一分钟内提交","submission_thirty_minutes_left":"此测验将在三十分钟内提交"},"question_answered":"已回答","question_unanswered":"尚未回答","saved_at":"在 %{t} 保存测验","saving":"正在保存...","saving_not_needed":"没有要保存的新数据。最后检查时间是 %{t}","seconds_count":{"one":"%{count} 秒","other":"%{count} 秒"},"show_time_link":"显示时间","titles":{"come_back_later":"您已标记此问题以稍后返回","times_up":"时间到！"},"years_count":{"one":"%{count} 年","other":"%{count} 年"}}},"saving_d55dd90e":"正在保存...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"在此次尝试，您已被给予额外的时间","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"您的浏览器连接可能较慢或不稳定。尽管浏览器计时器暂时断开连接，但您的回答在记录中保留的时间将在此次尝试的原始时限后额外延长 5 分钟。","your_time_for_this_quiz_has_been_reduced_394652e9":"您在此次测验的时间已被减少。"},"zh-Hant":{"buttons":{"cancel":"取消","login":"登入"},"quizzes":{"take_quiz":{"confirms":{"cant_go_back_blank":"按一下『下一步』之後，就無法返回此問題。是否確定要將其留空？","file_upload_in_progress":"檔案上傳進行中。您可能在完成回答前失去它。","navigate_away":"您即將離開此頁面。仍然繼續？","unanswered_questions":{"one":"您有 %{count} 個未回答的問題(見右側邊欄的詳細資料)。仍然提交？","other":"您有 %{count} 個未回答的問題（參考右側邊欄以獲得詳細資料）。仍然提交？"},"unfinished_quiz":"您即將離開，而測驗並未完成。仍然繼續？","unseen_questions":{"one":"目前仍有 %{count} 個問題您尚未看到。仍然提交？","other":"您目前還有 %{count} 個問題尚未檢閱。仍然提交？"}},"days_count":{"one":"%{count} 天","other":"%{count} 天"},"errors":{"connection_lost":"至 %{host} 的連接丟失。請確保在繼續之前已連接到 Internet。","only_numerical_values":"僅接受數值"},"hide_time_link":"隱藏時間","hours_count":{"one":"%{count} 小時","other":"%{count} 小時"},"labels":{"time_elapsed":"已用時間"},"login_failed":"登入失敗。","login_successful":"登入成功。","minutes_count":{"one":"%{count} 分鐘","other":"%{count} 分鐘"},"months_count":{"one":"%{count} 個月","other":"%{count} 個月"},"notices":{"due_date_five_minutes_left":"還剩五分鐘，測試就會被標設為遲到","due_date_one_minute_left":"還剩一分鐘，測試就會被標設為遲到","due_date_thirty_minutes_left":"還剩三十分鐘，測試就會被標設為遲到","submission_five_minutes_left":"測驗將在五分鐘後提交","submission_one_minute_left":"測驗將在一分鐘後提交","submission_thirty_minutes_left":"測驗將在三十分鐘後提交"},"question_answered":"已回答","question_unanswered":"还没有回答","saved_at":"測驗保存於 %{t}","saving":"正在保存...","saving_not_needed":"沒有要保存的新數據。上次檢查於 %{t}","seconds_count":{"one":"%{count} 秒","other":"%{count} 秒"},"show_time_link":"顯示時間","titles":{"come_back_later":"您標記了此問題，以在隨後再返回","times_up":"时间已到！"},"years_count":{"one":"%{count} 年","other":"%{count} 年"}}},"saving_d55dd90e":"正在保存...","you_have_been_given_extra_time_on_this_attempt_9d8bff6c":"您已獲得關於此嘗試的額外時間","your_browser_connectivity_may_be_slow_or_unstable__97c1f4c5":"您的瀏覽器連線可能過慢或不穩定。儘管您的瀏覽器計時器曾斷線，您將可以在此遞交機會原有的時限以外額外獲得 5 分鐘時間以供提交答案。","your_time_for_this_quiz_has_been_reduced_394652e9":"您的用於此測驗的時間已減少。"}}'))
            var q = _["default"].scoped("quizzes.take_quiz")
            var T = n("FdVj")
            let x = false
            let S = false
            var E = function(e = true) {
                x = e
                if (S) return
                S = true
                r()(window).bind({
                    blur(e) {
                        x && document.activeElement && window === e.target && r()(document.activeElement).filter(":input").change().triggerHandler("blur")
                    },
                    focus(e) {
                        x && document.activeElement && window === e.target && r()(document.activeElement).filter(":input").triggerHandler("focus")
                    }
                })
            }
            var j = n("Y/W1")
            var D = n.n(j)
            Object(d["a"])(JSON.parse('{"ar":{"quizzes":{"ldb_login_popup":{"email":"البريد الإلكتروني","log_in":"تسجيل الدخول","logged_out_of_canvas":"*لقد قمت بتسجيل الخروج من canvas.* للمتابعة يرجى تسجيل الدخول.","password":"كلمة المرور","titles":{"log_in":"الرجاء تسجيل الدخول"}}}},"ca":{"quizzes":{"ldb_login_popup":{"email":"Adreça electrònica","log_in":"Inicia la sessió","logged_out_of_canvas":"*S\'ha tancat la vostra sessió del Canvas.* Per continuar, inicieu la sessió.","password":"Contrasenya","titles":{"log_in":"Inicieu la sessió"}}}},"cy":{"quizzes":{"ldb_login_popup":{"email":"E-bost","log_in":"Mewngofnodi","logged_out_of_canvas":"*Rydych chi wedi cael eich allgofnodi o Canvas.* I fwrw ymlaen, mewngofnodwch.","password":"Cyfrinair","titles":{"log_in":"Mewngofnodwch"}}}},"da":{"quizzes":{"ldb_login_popup":{"email":"E-mail","log_in":"Log på","logged_out_of_canvas":"*Du er blevet logget ud af Canvas.* Log på for at forsætte.","password":"Adgangskode","titles":{"log_in":"Log på"}}}},"da-x-k12":{"quizzes":{"ldb_login_popup":{"email":"E-mail","log_in":"Log på","logged_out_of_canvas":"*Du er blevet logget ud af Canvas.* Log på for at forsætte.","password":"Adgangskode","titles":{"log_in":"Log på"}}}},"de":{"quizzes":{"ldb_login_popup":{"email":"E-Mail","log_in":"Anmeldung","logged_out_of_canvas":"*Sie wurden bei Canvas abgemeldet.* Melden Sie sich an, um fortzufahren.","password":"Kennwort","titles":{"log_in":"Bitte anmelden"}}}},"el":{"quizzes":{"ldb_login_popup":{"email":"Ηλεκτρονική Διεύθυνση","log_in":"Σύνδεση","logged_out_of_canvas":"\\u003cmrk mid=\\"5125\\" mtype=\\"seg\\"\\u003e*Έχετε αποσυνδεθεί από το Canvas.*\\u003c/mrk\\u003e \\u003cmrk mid=\\"5126\\" mtype=\\"seg\\"\\u003eΠαρακαλώ συνδεθείτε για να συνεχίσετε.\\u003c/mrk\\u003e","password":"Κωδικός πρόσβασης","titles":{"log_in":"Παρακαλώ συνδεθείτε"}}}},"en-AU":{"quizzes":{"ldb_login_popup":{"email":"Email","log_in":"Log In","logged_out_of_canvas":"*You have been logged out of canvas.* To continue please log in.","password":"Password","titles":{"log_in":"Please Log In"}}}},"en-AU-x-unimelb":{"quizzes":{"ldb_login_popup":{"email":"Email","log_in":"Log In","logged_out_of_canvas":"*You have been logged out of canvas.* To continue please log in.","password":"Password","titles":{"log_in":"Please Log In"}}}},"en-CA":{"quizzes":{"ldb_login_popup":{"email":"Email","log_in":"Log In","logged_out_of_canvas":"*You have been logged out of canvas.* To continue please log in.","password":"Password","titles":{"log_in":"Please Log In"}}}},"en-GB":{"quizzes":{"ldb_login_popup":{"email":"Email","log_in":"Log in","logged_out_of_canvas":"*You have been logged out of canvas.* To continue, please log in.","password":"Password","titles":{"log_in":"Please log in"}}}},"en-GB-x-lbs":{"quizzes":{"ldb_login_popup":{"email":"Email","log_in":"Log in","logged_out_of_canvas":"*You have been logged out of canvas.* To continue, please log in.","password":"Password","titles":{"log_in":"Please log in"}}}},"en-GB-x-ukhe":{"quizzes":{"ldb_login_popup":{"email":"Email","log_in":"Log in","logged_out_of_canvas":"*You have been logged out of canvas.* To continue, please log in.","password":"Password","titles":{"log_in":"Please log in"}}}},"es":{"quizzes":{"ldb_login_popup":{"email":"Correo electrónico","log_in":"Iniciar sesión","logged_out_of_canvas":"*Ha cerrado su sesión en Canvas.* Para continuar, inicie sesión.","password":"Contraseña","titles":{"log_in":"Inicie sesión"}}}},"es-ES":{"quizzes":{"ldb_login_popup":{"email":"Correo electrónico","log_in":"Iniciar sesión","logged_out_of_canvas":"*Ha cerrado su sesión en Canvas.* Para continuar, inicie sesión.","password":"Contraseña","titles":{"log_in":"Inicie sesión"}}}},"fa":{"quizzes":{"ldb_login_popup":{"email":"پست الکترونیکی","log_in":"ورود","logged_out_of_canvas":"*از کانواس خارج شده اید.* برای ادامه، لطفا وارد شوید.","password":"رمز عبور","titles":{"log_in":"لطفا وارد شوید"}}}},"fi":{"quizzes":{"ldb_login_popup":{"email":"Sähköposti","log_in":"Kirjaudu sisään","logged_out_of_canvas":"*Sinut on kirjattu ulos Canvasista.* Jos haluat jatkaa, kirjaudu sisään","password":"Salasana","titles":{"log_in":"Kirjaudu sisään"}}}},"fr":{"quizzes":{"ldb_login_popup":{"email":"E-mail","log_in":"Connexion","logged_out_of_canvas":"*Vous avez été déconnecté de Canvas.* Pour continuer, veuillez vous reconnecter.","password":"Mot de passe","titles":{"log_in":"Veuillez vous connecter"}}}},"fr-CA":{"quizzes":{"ldb_login_popup":{"email":"Courriel","log_in":"Se connecter","logged_out_of_canvas":"*Vous avez été déconnecté de Canvas.* Pour continuer, veuillez vous reconnecter.","password":"Mot de passe","titles":{"log_in":"Veuillez vous connecter"}}}},"he":{"quizzes":{"ldb_login_popup":{"email":"דוא\\"ל","log_in":"התחברות","logged_out_of_canvas":"*התנתקת מקנבס.* כדי להמשיך יש להתחבר.","password":"סיסמה","titles":{"log_in":"בבקשה להתחבר"}}}},"ht":{"quizzes":{"ldb_login_popup":{"email":"Imèl","log_in":"Konekte","logged_out_of_canvas":"*Ou dekonekte sou Canvas.* Tanpri konekte pou ou ka kontinye.","password":"Modpas","titles":{"log_in":"Tanpri Konekte"}}}},"hu":{"quizzes":{"ldb_login_popup":{"email":"E-mail","log_in":"Bejelentkezés","password":"Jelszó","titles":{"log_in":"Kérjük, jelentkezzen be"}}}},"hy":{"quizzes":{"ldb_login_popup":{"email":"Էլ.փոստ","log_in":"Մուտք գործել","logged_out_of_canvas":"*Դուք դուրս եք եկել Canvas համակարգից:* Շարունակելու համար մուտք գործեք համակարգ:","password":"Գաղտնաբառ","titles":{"log_in":"Մուտք Գործեք Համակարգ"}}}},"is":{"quizzes":{"ldb_login_popup":{"email":"Netfang","log_in":"Innskráning","logged_out_of_canvas":"*Þú hefur verið skráð(ur) út úr Canvas.* Skráðu þig inn til að halda áfram.","password":"Lykilorð","titles":{"log_in":"Skráðu þig inn"}}}},"it":{"quizzes":{"ldb_login_popup":{"email":"Email","log_in":"Accedi","logged_out_of_canvas":"*Sei stato disconnesso da Canvas.* Per continuare, accedi.","password":"Password","titles":{"log_in":"Accedi"}}}},"ja":{"quizzes":{"ldb_login_popup":{"email":"電子メール アドレス","log_in":"ログイン","logged_out_of_canvas":"*Canvas からログアウトしています。*続行するにはログインしてください。","password":"パスワード","titles":{"log_in":"ログインしてください"}}}},"ko":{"quizzes":{"ldb_login_popup":{"email":"이메일","log_in":"로그인","password":"암호","titles":{"log_in":"로그인 필요"}}}},"mi":{"quizzes":{"ldb_login_popup":{"email":"Īmēra","log_in":"takiuru I roto i","logged_out_of_canvas":"*Kua takiuru koe i roto i te Canvas.* Haere tonu tēnā koa takiuru.","password":"Kupuhipa","titles":{"log_in":"Tēnākoa Takiuru"}}}},"nb":{"quizzes":{"ldb_login_popup":{"email":"E-post","log_in":"Logg på","logged_out_of_canvas":"*Du er logget ut av Canvas.* For å fortsette, vennligst logg inn.","password":"Passord","titles":{"log_in":"Vennligst logg inn"}}}},"nb-x-k12":{"quizzes":{"ldb_login_popup":{"email":"E-post","log_in":"Logg på","logged_out_of_canvas":"*Du er logget ut av Canvas.* For å fortsette, vennligst logg inn.","password":"Passord","titles":{"log_in":"Vennligst logg inn"}}}},"nl":{"quizzes":{"ldb_login_popup":{"email":"E-mail","log_in":"Aanmelden","logged_out_of_canvas":"*Je bent afgemeld bij Canvas.* Meld je aan om verder te gaan.","password":"Wachtwoord","titles":{"log_in":"Aanmelden"}}}},"nn":{"quizzes":{"ldb_login_popup":{"email":"E-post","log_in":"Logg på","logged_out_of_canvas":"*Du er logga ut av Canvas.* Logg på for å halde fram.","password":"Passord","titles":{"log_in":"Logg på"}}}},"pl":{"quizzes":{"ldb_login_popup":{"email":"Adres e-mail","log_in":"Zaloguj","logged_out_of_canvas":"*Zostałeś wylogowany z systemu Canvas.* Aby kontynuować, zaloguj się.","password":"Hasło","titles":{"log_in":"Zaloguj się"}}}},"pt":{"quizzes":{"ldb_login_popup":{"email":"E-mail","log_in":"Iniciar sessão","logged_out_of_canvas":"*A sua sessão no Canvas terminou.* Inicie sessão para continuar.","password":"Palavra-passe","titles":{"log_in":"Inicie sessão"}}}},"pt-BR":{"quizzes":{"ldb_login_popup":{"email":"E-mail","log_in":"Login","logged_out_of_canvas":"*Você se desconectou do Canvas.* Conecte-se para continuar.","password":"Senha","titles":{"log_in":"Faça o login"}}}},"ru":{"quizzes":{"ldb_login_popup":{"email":"Электронная почта","log_in":"Вход в систему","logged_out_of_canvas":"*Вы вышли из системы canvas.* Для продолжения войдите в систему.","password":"Пароль","titles":{"log_in":"Войдите в систему"}}}},"sl":{"quizzes":{"ldb_login_popup":{"email":"E-pošta","log_in":"Prijava","logged_out_of_canvas":"*Iz sistema Canvas ste odjavljeni.* Če želite nadaljevati, se prijavite.","password":"Geslo","titles":{"log_in":"Prijavite se."}}}},"sv":{"quizzes":{"ldb_login_popup":{"email":"E-post","log_in":"Logga in","logged_out_of_canvas":"*Du har blivit utloggad från canvas.*Logga in för att fortsätta","password":"Lösenord","titles":{"log_in":"Logga in"}}}},"sv-x-k12":{"quizzes":{"ldb_login_popup":{"email":"E-post","log_in":"Logga in","logged_out_of_canvas":"*Du har blivit utloggad från canvas.*Logga in för att fortsätta","password":"Lösenord","titles":{"log_in":"Logga in"}}}},"th":{"quizzes":{"ldb_login_popup":{"email":"อีเมล","log_in":"ล็อกอิน","logged_out_of_canvas":"*คุณออกจาก Canvas แล้ว* ดำเนินการต่อโดยล็อกอินเข้าสู่ระบบ","password":"รหัสผ่าน","titles":{"log_in":"กรุณาล็อกอิน"}}}},"tr":{"quizzes":{"ldb_login_popup":{"email":"Eposta","log_in":"Oturum Aç","logged_out_of_canvas":"*Canvas\'taki oturumunuz sonlandı.* Devam etmek için lütfen oturum açınız.","password":"Şifre","titles":{"log_in":"Lütfen Oturum Açın"}}}},"uk":{"quizzes":{"ldb_login_popup":{"email":"Email","log_in":"Увійти","logged_out_of_canvas":"*Ви вийшли з Canvas.* Для продовження, будь ласка, увійдіть у систему.","password":"Пароль","titles":{"log_in":"Будь ласка, увійдіть"}}}},"zh-Hans":{"quizzes":{"ldb_login_popup":{"email":"电子邮件","log_in":"登录","logged_out_of_canvas":"*您已注销 Canvas。*若要继续，请登录。","password":"密码","titles":{"log_in":"请登录"}}}},"zh-Hant":{"quizzes":{"ldb_login_popup":{"email":"電子郵件","log_in":"登入","logged_out_of_canvas":"*您已經登出 Canvas。*如需繼續，請登入。","password":"密碼","titles":{"log_in":"請登入"}}}}}'))
            _["default"].scoped("quizzes.ldb_login_popup")
            var A = n("dbrX")
            var R = l.a.default
            var C = R.template,
                L = R.templates = R.templates || {}
            var B = "/work/canvas-deploy/generated/ui/features/take-quiz/jst/LDBLoginPopup"
            L[B] = C((function(e, t, n, i, a) {
                this.compilerInfo = [4, ">= 1.0.0"]
                n = this.merge(n, e.helpers)
                a = a || {}
                var o, s, r = "",
                    u = n.helperMissing,
                    l = this.escapeExpression
                r += '<form id="ldb_deauthorized_dialog" class="hide">\n  <div id="unauthorized_message" class="ui-state-error">\n    <h2 class="">' + l((o = n.t || t && t.t, s = {
                    hash: {
                        scope: "quizzes.ldb_login_popup"
                    },
                    data: a
                }, o ? o.call(t, "titles.log_in", "Please Log In", s) : u.call(t, "t", "titles.log_in", "Please Log In", s))) + "</h2>\n    <p>" + l((o = n.t || t && t.t, s = {
                    hash: {
                        w0: "<strong>$1</strong>",
                        scope: "quizzes.ldb_login_popup"
                    },
                    data: a
                }, o ? o.call(t, "logged_out_of_canvas", "*You have been logged out of canvas.* To continue please log in.", s) : u.call(t, "t", "logged_out_of_canvas", "*You have been logged out of canvas.* To continue please log in.", s))) + '\n    </p>\n  </div>\n\n  <h1>Canvas</h1>\n\n  <div>\n    <span class="field">\n      <label for="pseudonym_session_unique_id">' + l((o = n.t || t && t.t, s = {
                    hash: {
                        scope: "quizzes.ldb_login_popup"
                    },
                    data: a
                }, o ? o.call(t, "email", "Email", s) : u.call(t, "t", "email", "Email", s))) + '</label>\n      <input id="pseudonym_session_unique_id" type="text" name="pseudonym_session[unique_id]" class="text" placeholder="' + l((o = n.t || t && t.t, s = {
                    hash: {
                        scope: "quizzes.ldb_login_popup"
                    },
                    data: a
                }, o ? o.call(t, "email", "Email", s) : u.call(t, "t", "email", "Email", s))) + '" autocomplete="off" />\n    </span>\n\n    <span class="field">\n      <label for="pseudonym_session_password">' + l((o = n.t || t && t.t, s = {
                    hash: {
                        scope: "quizzes.ldb_login_popup"
                    },
                    data: a
                }, o ? o.call(t, "password", "Password", s) : u.call(t, "t", "password", "Password", s))) + '</label>\n      <input id="pseudonym_session_password" type="password" name="pseudonym_session[password]" class="text" placeholder="' + l((o = n.t || t && t.t, s = {
                    hash: {
                        scope: "quizzes.ldb_login_popup"
                    },
                    data: a
                }, o ? o.call(t, "password", "Password", s) : u.call(t, "t", "password", "Password", s))) + '" autocomplete="off" />\n    </span>\n  </div>\n\n  <div class="dialog-actions">\n    <span class="btn btn-primary">' + l((o = n.t || t && t.t, s = {
                    hash: {
                        scope: "quizzes.ldb_login_popup"
                    },
                    data: a
                }, o ? o.call(t, "log_in", "Log In", s) : u.call(t, "t", "log_in", "Log In", s))) + "</span>\n  </div>\n</form>"
                return r
            }))
            A["a"].loadStylesheetForJST({
                id: "9c",
                bundle: "jst/quizzes/LDBLoginPopup"
            })
            var O = L[B]
            var I = n("gI0r")
            n("tHpF")

            function M(e) {
                if (!e) return
                e.preventDefault && e.preventDefault()
                e.stopPropagation && e.stopPropagation()
                return false
            }
            class V extends o.a.View {
                static initClass() {
                    this.prototype.url = "/login/canvas"
                    this.prototype.template = O
                    this.prototype.options = {
                        sticky: true,
                        window: {
                            location: false,
                            menubar: false,
                            status: false,
                            toolbar: false,
                            fullscreen: false,
                            width: 480,
                            height: 480
                        }
                    }
                }
                initialize(e) {
                    let t
                    let n
                    const i = r()(this)
                    let a
                    D.a.extend(this.options, e)
                    const o = D.a.map(this.options.window, (e, t) => [t, D.a.isBoolean(e) ? e ? "yes" : "no" : e].join("=")).join(",")
                    this.on = i.on.bind(i)
                    this.one = i.one.bind(i)
                    this.off = i.off.bind(i)

                    function s() {
                        if (t) try {
                            t.document
                        } catch (e) {
                            if (/Permission/.test(e.message)) return true
                        }
                        return false
                    }

                    function u() {
                        d()
                        t = null
                        i.triggerHandler("close")
                        return null
                    }

                    function l(e) {
                        if (s()) {
                            u()
                            return true
                        }
                        try {
                            t.document.focus()
                        } catch (e) {
                            r()(t.document).focus()
                        }
                        return M(e)
                    }
                    const _ = () => a.appendTo(document.body)
                    var d = () => a.detach()
                    const c = e => {
                        const n = M(e)
                        const a = r()(e.target).closest("form").toJSON()
                        const o = this.authenticate(a)
                        o.then(e => {
                            i.triggerHandler("login_success")
                            t.close()
                            u()
                            return e
                        })
                        o.fail(e => {
                            i.triggerHandler("login_failure", e)
                            return e
                        })
                        return n
                    }

                    function m() {
                        const e = r()(t.document)
                        const a = r()(t.document.head)
                        D()(n).each(e => {
                            a.append(`<link rel="stylesheet" href="${Object(I["a"])(e)}" />`)
                        })
                        e.find(".hide").removeClass("hide")
                        e.find(".btn-primary").on("click", c)
                        i.triggerHandler("open", t.document)
                    }
                    this.exec = () => {
                        s() && u()
                        if (t) {
                            l()
                            return t
                        }
                        _()
                        t = window.open("about:blank", "_blank", o, false)
                        t.document.write(this.template({}))
                        t.onbeforeunload = u
                        t.onload = m
                        t.document.close()
                        return t
                    }
                    n = D()(document.styleSheets).chain().map(e => e.href).compact().value()
                    a = r()("<div />").on("click", l).css({
                        "z-index": 1e3,
                        position: "fixed",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    })
                    if (this.options.sticky) {
                        let e
                        this.on("login_failure.sticky", () => e = true)
                        this.on("login_success.sticky", () => e = false)
                        return this.on("close.sticky", (function() {
                            e && setTimeout(this.exec, 1)
                        }))
                    }
                }
                authenticate(e) {
                    return r.a.ajax({
                        type: "POST",
                        url: this.url,
                        data: JSON.stringify(e),
                        global: false,
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    })
                }
            }
            V.initClass()
            var N = n("5hhv")
            var G = n.n(N)
            var P = n("ko/W")
            var F = n("EwH5")
            var H = n("Ce78J")
            n("dhbk")
            n("7AEQ")
            n("ESjL")
            n("r2Yr")
            n("w2hD")
            n("w4it")
            H["a"].preloadRemoteModule()
            let Y = null
            let U = null
            let W
            const Q = function() {
                let e = 0,
                    t = r()(".end_at"),
                    n = t.text() && new Date(t.text()),
                    i = r()(".due_at"),
                    a = i.text() && new Date(i.text()),
                    o = r()(".started_at"),
                    s = r()(".countdown_seconds"),
                    u = r()(".time_running,.time_remaining"),
                    l = r()("#last_saved_indicator")
                const _ = r()(".timer_autosubmit_disabled"),
                    d = "true" === _.text(),
                    c = r()(".end_at_without_time_limit"),
                    m = c.text() && new Date(c.text())
                const h = function() {
                    if (u.length > 0) return u
                    return u = r()(".time_running,.time_remaining")
                }
                return {
                    countDown: null,
                    fiveMinuteDeadline: false,
                    oneMinuteDeadline: false,
                    submitting: false,
                    dialogged: false,
                    inBackground: false,
                    contentBoxCounter: 0,
                    lastSubmissionUpdate: new Date,
                    currentlyBackingUp: false,
                    endAt: t,
                    endAtParsed: n,
                    timerAutosubmitDisabledParsed: d,
                    endAtWithoutTimeLimitParsed: m,
                    timeToEndWithoutTimeLimit: m && m - new Date,
                    startedAt: o,
                    hasTimeLimit: !!ENV.QUIZ.time_limit,
                    timeLeft: 1e3 * parseInt(r()(".time_left").text()),
                    timeToDueDate: a - new Date,
                    oneAtATime: r()("#submit_quiz_form").hasClass("one_question_at_a_time"),
                    cantGoBack: r()("#submit_quiz_form").hasClass("cant_go_back"),
                    finalSubmitButtonClicked: false,
                    clockInterval: 500,
                    backupsDisabled: document.location.search.search(/backup=false/) > -1,
                    clearAccessCode: true,
                    updateSubmission(e, n) {
                        if (Q.backupsDisabled) {
                            console.log("[updateSubmission] Aborting because backups are disabled")
                            return
                        }
                        if (Q.submitting && !e) {
                            console.log("[updateSubmission] Aborting because submission is in process and repeat is disabled")
                            return
                        }
                        const i = new Date
                        if (!n && i - Q.lastSubmissionUpdate < 1e3) return
                        if (Q.currentlyBackingUp) {
                            console.log("[updateSubmission] Aborting because submission is currently being backed up")
                            return
                        }
                        Q.currentlyBackingUp = true
                        Q.lastSubmissionUpdate = new Date
                        const a = r()("#submit_quiz_form").getFormData()
                        r()(".question_holder .question").each((function() {
                            const e = r()(this).hasClass("marked") ? "1" : ""
                            a[r()(this).attr("id") + "_marked"] = e
                        }))
                        l.text(q.t("saving", "Saving..."))
                        const o = r()(".backup_quiz_submission_url").attr("href");
                        (function(n) {
                            const i = D.a.clone(n)
                            if (!Q.inBackground && e && D.a.isEqual(n, U)) {
                                l.text(q.t("saving_not_needed", "No new data to save. Last checked at %{t}", {
                                    t: r.a.friendlyDatetime(new Date)
                                }))
                                Q.currentlyBackingUp = false
                                setTimeout(() => {
                                    Q.updateSubmission(true, true)
                                }, 3e4)
                                return
                            }
                            r.a.ajaxJSON(o, "PUT", n, n => {
                                U = i
                                l.text(q.t("saved_at", "Quiz saved at %{t}", {
                                    t: r.a.friendlyDatetime(new Date)
                                }))
                                Q.currentlyBackingUp = false
                                Q.inBackground = false
                                e && setTimeout(() => {
                                    Q.updateSubmission(true, true)
                                }, 3e4)
                                if (n && n.end_at) {
                                    const e = Date.parse(n.end_at),
                                        i = Date.parse(t.text()),
                                        a = e.getTime(),
                                        o = i.getTime()
                                    Q.timeLeft = 1e3 * n.time_left
                                    if (a !== o) {
                                        a > o ? r.a.flashMessage(q.t("You have been given extra time on this attempt")) : r.a.flashMessage(q.t("Your time for this quiz has been reduced."))
                                        Q.endAt.text(n.end_at)
                                        Q.endAtParsed = e
                                    }
                                }
                                n && n.hard_end_at && (Q.endAtWithoutTimeLimitParsed = Date.parse(n.hard_end_at))
                            }, (t, n) => {
                                Q.currentlyBackingUp = false
                                if (401 === n.status || "unauthorized" == t.status) {
                                    W(); - 1 === r.a.inArray(n, r.a.ajaxJSON.ignoredXHRs) && r.a.ajaxJSON.ignoredXHRs.push(n)
                                } else if (403 === n.status || "forbidden" == t.status) window.location.reload()
                                else {
                                    const e = window.ENV.current_user_id || "none"
                                    r.a.ajaxJSON(location.protocol + "//" + location.host + "/simple_response.json?user_id=" + e + "&rnd=" + Math.round(9999999 * Math.random()), "GET", {}, () => {}, () => {
                                        r.a.flashError(q.t("errors.connection_lost", "Connection to %{host} was lost.  Please make sure you're connected to the Internet before continuing.", {
                                            host: location.host
                                        }))
                                    })
                                }
                                e && setTimeout(() => {
                                    Q.updateSubmission(true)
                                }, 3e4)
                            }, {
                                timeout: 15e3
                            })
                        })(a)
                    },
                    updateTime() {
                        let t = Q.timeLeft -= Q.clockInterval
                        let n = null
                        Q.timeToDueDate > 0 && (n = Q.timeToDueDate -= Q.clockInterval)
                        const i = new Date
                        const a = Q.endAt.text()
                        e = (e + 1) % 120
                        if (0 == e && !a && !Q.twelveHourDeadline) {
                            Q.endAtParsed
                        }
                        t = Q.floorTimeLeft(t)
                        if (Q.countDown) {
                            const e = new Date(Q.countDown - i.getTime()).getUTCSeconds()
                            i.getTime() < Q.countDown && s.text(e)
                            if (e <= 0 && !Q.submitting && Q.shouldSubmitAtEndAt()) {
                                Q.submitting = true
                                Q.submitQuiz()
                            }
                        }
                        if (Q.isTimeUp(t) && !ENV.IS_PREVIEW) Q.showTimeUpDialog(i)
                        else if (null != n && t > n) {
                            Q.showDueDateWarnings(n)
                            Q.showWarnings(t)
                        } else null == t ? Q.showDueDateWarnings(n) : Q.showWarnings(t)
                        Q.updateTimeDisplay(t)
                        Q.endAtWithoutTimeLimitParsed && (Q.timeToEndWithoutTimeLimit -= Q.clockInterval)
                        if (Q.timerAutosubmitDisabledParsed && !!Q.endAtWithoutTimeLimitParsed && Q.endAtWithoutTimeLimitParsed.getTime() !== Q.endAtParsed.getTime() && Q.timeToEndWithoutTimeLimit < 1e3 && !Q.submitting) {
                            Q.submitting = true
                            Q.submitQuiz()
                        }
                    },
                    shouldSubmitAtEndAt: () => !Q.timerAutosubmitDisabledParsed || !!Q.endAtWithoutTimeLimitParsed && Q.endAtWithoutTimeLimitParsed.getTime() === Q.endAtParsed.getTime(),
                    floorTimeLeft(e) {
                        e < 1e3 && (e = 0)
                        return e
                    },
                    isTimeUp: e => e < 1e3 && !Q.dialogged,
                    showDueDateWarnings(e) {
                        if (e > 3e4 && e < 6e4 && !Q.oneMinuteDueDateDeadline) {
                            Q.oneMinuteDueDateDeadline = true
                            r.a.flashMessage(q.t("notices.due_date_one_minute_left", "One Minute Left Before Quiz Will Be Marked Late"))
                        } else if (e > 25e4 && e < 3e5 && !Q.fiveMinuteDueDateDeadline) {
                            Q.fiveMinuteDueDateDeadline = true
                            r.a.flashMessage(q.t("notices.due_date_five_minutes_left", "Five Minutes Left Before Quiz Will Be Marked Late"))
                        } else if (e > 177e4 && e < 18e5 && !Q.thirtyMinuteDueDateDeadline) {
                            Q.thirtyMinuteDueDateDeadline = true
                            r.a.flashMessage(q.t("notices.due_date_thirty_minutes_left", "Thirty Minutes Left Before Quiz Will Be Marked Late"))
                        }
                    },
                    showWarnings(e) {
                        if (e > 3e4 && e < 6e4 && !Q.oneMinuteDeadline) {
                            Q.oneMinuteDeadline = true
                            r.a.flashWarning(q.t("notices.submission_one_minute_left", "This Quiz Will Be Submitted In One Minute"), 5e3)
                        } else if (e > 25e4 && e < 3e5 && !Q.fiveMinuteDeadline) {
                            Q.fiveMinuteDeadline = true
                            r.a.flashWarning(q.t("notices.submission_five_minutes_left", "This Quiz Will Be Submitted In Five Minutes"), 5e3)
                        } else if (e > 177e4 && e < 18e5 && !Q.thirtyMinuteDeadline) {
                            Q.thirtyMinuteDeadline = true
                            r.a.flashWarning(q.t("notices.submission_thirty_minutes_left", "This Quiz Will Be Submitted In Thirty Minutes"), 5e3)
                        }
                    },
                    showTimeUpDialog(e) {
                        Q.dialogged = true
                        Q.countDown = new Date(e.getTime() + 1e4)
                        r()("#times_up_dialog").show().dialog({
                            title: q.t("titles.times_up", "Time's Up!"),
                            width: "auto",
                            height: "auto",
                            modal: true,
                            overlay: {
                                backgroundColor: "#000",
                                opacity: .7
                            },
                            close() {
                                if (!Q.submitting && Q.shouldSubmitAtEndAt()) {
                                    Q.submitting = true
                                    Q.submitQuiz()
                                }
                            }
                        })
                    },
                    getTimeElapsed() {
                        r()(".time_header").text(q.beforeLabel(q.t("labels.time_elapsed", "Time Elapsed")))
                        const e = (new Date).getTime()
                        const t = Date.parse(Q.startedAt.text()).getTime()
                        return e - t
                    },
                    updateTimeDisplay(e) {
                        Q.hasTimeLimit ? Q.updateTimeString(e) : Q.updateTimeString(Q.getTimeElapsed())
                    },
                    updateTimeString(e) {
                        const t = new Date(Math.abs(e))
                        const n = t.getUTCFullYear() - 1970
                        const i = t.getUTCMonth()
                        const a = t.getUTCDate() - 1
                        const o = t.getUTCHours()
                        const s = t.getUTCMinutes()
                        const u = t.getUTCSeconds()
                        if (Number.isNaN(Number(s)) || Number.isNaN(Number(u))) {
                            r()(".time_header").hide()
                            r()(".hide_time_link").hide()
                            r()(".time_running").css("color", "#EA0611")
                            h().text(q.t("Your browser connectivity may be slow or unstable. In spite of your browser's timer being disconnected, your answers will be recorded for an additional 5 minutes beyond the original time limit on this attempt."))
                            return
                        }
                        const l = []
                        n && l.push(q.t("years_count", "Year", {
                            count: n
                        }))
                        i && l.push(q.t("months_count", "Month", {
                            count: i
                        }))
                        a && l.push(q.t("days_count", "Day", {
                            count: a
                        }))
                        o && l.push(q.t("hours_count", "Hour", {
                            count: o
                        }))
                        l.push(q.t("minutes_count", "Minute", {
                            count: s
                        }))
                        l.push(q.t("seconds_count", "Second", {
                            count: u
                        }))
                        h().text(l.join(", "))
                    },
                    updateFinalSubmitButtonState() {
                        const e = 0 == r()("#question_list li:not(.answered, .text_only)").length
                        const t = r()("#submit_quiz_form").hasClass("last_page")
                        const n = r()("div.question.answered").length > 0
                        const i = Q.oneAtATime
                        const a = i && t && n || e
                        Q.toggleActiveButtonState("#submit_quiz_button", a)
                    },
                    updateQuestionIndicators(e, t) {
                        const n = "#list_" + t
                        const i = "#" + t
                        const a = n + ", " + i
                        const o = r()(n + " i.placeholder")
                        if (e) {
                            r()(a).addClass("answered")
                            o.addClass("icon-check").removeClass("icon-question")
                            o.find(".icon-text").text(q.t("question_answered", "Answered"))
                        } else {
                            r()(a).removeClass("answered")
                            o.addClass("icon-question").removeClass("icon-check")
                            o.find(".icon-text").text(q.t("question_unanswered", "Haven't Answered Yet"))
                        }
                    },
                    updateNextButtonState(e) {
                        const t = r()("#" + e)
                        Q.toggleActiveButtonState("button.next-question", t.hasClass("answered"))
                    },
                    toggleActiveButtonState(e, t) {
                        const n = t ? "btn-primary" : "btn-secondary"
                        const i = t ? "btn-secondary" : "btn-primary"
                        r()(e).addClass(n).removeClass(i)
                    },
                    submitQuiz() {
                        const e = r()("#submit_quiz_button")
                        e.prop("disabled", true)
                        const t = e.data("action")
                        r()("#submit_quiz_form").attr("action", t).submit()
                    }
                }
            }()
            r()(window).focus(e => {
                Q.updateSubmission()
            })
            r()(window).blur(e => {
                Q.inBackground = true
            })
            r()(document).mousedown(e => {
                Y = r()(e.target).parents(".answer")[0]
            }).keydown(() => {
                Y = null
            })
            r()("a[href^='#']").not("a[href='#']").click((function() {
                r()(r()(this).attr("href")).attr("tabindex", -1).focus()
            }))
            r()((function() {
                E()
                if (0 == r()("#preview_mode_link").length) {
                    let e = false
                    window.addEventListener("beforeunload", t => {
                        if (!Q.navigatingToRelogin && !Q.submitting && !Q.alreadyAcceptedNavigatingAway && !e) {
                            Q.clearAccessCode = true
                            setTimeout(() => {
                                e = false
                            }, 0)
                            e = true
                            t.returnValue = q.t("confirms.unfinished_quiz", "You're about to leave the quiz unfinished.  Continue anyway?")
                            return t.returnValue
                        }
                    })
                    window.addEventListener("unload", e => {
                        const t = r()("#submit_quiz_form").getFormData()
                        const n = r()(".backup_quiz_submission_url").attr("href")
                        t.leaving = !!Q.clearAccessCode
                        r.a.flashMessage(q.t("Saving..."))
                        r.a.ajax({
                            url: n,
                            data: t,
                            type: "POST",
                            dataType: "json",
                            async: false
                        })
                        Q.currentlyBackingUp = false
                    }, false)
                    r()(document).delegate("a", "click", (function(e) {
                        if (r()(this).closest(".ui-dialog,.mceToolbar,.ui-selectmenu").length > 0) return
                        if (r()(this).hasClass("no-warning")) {
                            Q.alreadyAcceptedNavigatingAway = true
                            return
                        }
                        if (r()(this).hasClass("file_preview_link")) return
                        if (!e.isDefaultPrevented()) {
                            const t = r()(this).attr("href") || ""
                            let n = location.href
                            n.indexOf("#") && (n = n.substring(0, n.indexOf("#")))
                            if (0 == t.indexOf("#") || 0 == t.indexOf(n + "#")) return
                            const i = confirm(q.t("confirms.navigate_away", "You're about to navigate away from this page.  Continue anyway?"))
                            i ? Q.alreadyAcceptedNavigatingAway = true : e.preventDefault()
                        }
                    }))
                }
                const e = r()("#questions")
                r()("#question_list").delegate(".jump_to_question_link", "click", (function(e) {
                    e.preventDefault()
                    const t = r()(r()(this).attr("href"))
                    const n = ENV.MOBILE_UI ? "#content" : "html,body"
                    r()(n).scrollTo(t.parent())
                    t.find(":input:first").focus().select()
                })).find(".list_question").bind({
                    mouseenter(e) {
                        const t = r()(this),
                            n = t.data()
                        if (!Q.oneAtATime) {
                            n.relatedQuestion || (n.relatedQuestion = r()("#" + t.attr("id").substring(5)))
                            n.relatedQuestion.addClass("related")
                        }
                    },
                    mouseleave(e) {
                        if (!Q.oneAtATime) {
                            const e = r()(this).data("relatedQuestion")
                            e && e.removeClass("related")
                        }
                    },
                    click(e) {
                        Q.clearAccessCode = false
                    }
                })
                e.find(".group_top,.answer_select").bind({
                    mouseenter(e) {
                        r()(this).addClass("hover")
                    },
                    mouseleave(e) {
                        r()(this).removeClass("hover")
                    }
                })
                r()(".file-upload-question-holder").each((e, t) => {
                    const n = r()(t)
                    const i = parseInt(n.find("input.attachment-id").val(), 10)
                    const a = new z["a"](ENV.ATTACHMENTS[i], {
                        preflightUrl: ENV.UPLOAD_URL
                    })
                    const o = new w({
                        el: t,
                        model: a
                    })
                    i && 0 !== i && n.find(".file-upload-box").addClass("file-upload-box-with-file")
                    o.on("attachmentManipulationComplete", () => {
                        Q.updateSubmission()
                    })
                    o.render()
                })
                e.delegate(":checkbox,:radio", "change", (function(e) {
                    const t = r()(this).parents(".answer")
                    Y == t[0] && Q.updateSubmission()
                })).delegate("label.upload-label", "mouseup", e => {
                    Q.updateSubmission()
                }).delegate(":text,textarea,select", "change", (function(e, t) {
                    const n = r()(this)
                    if (n.hasClass("numerical_question_input")) {
                        const e = T["a"].parse(n.val())
                        n.val(isNaN(e) ? "" : q.n(e.toFixed(4), {
                            strip_insignificant_zeros: true
                        }))
                    }
                    if (n.hasClass("precision_question_input")) {
                        const e = T["a"].parse(n.val())
                        const t = e.toString()
                        const i = t.length - (t.includes(".") ? 1 : 0)
                        n.val(Number.isNaN(e) ? "" : q.n(e.toPrecision(i), {
                            strip_insignificant_zeros: true,
                            precision: i
                        }))
                    }
                    false !== t && Q.updateSubmission()
                })).delegate(".numerical_question_input", {
                    keyup(e) {
                        const t = r()(this)
                        const n = t.val() + ""
                        const i = t.data("associated_error_box")
                        n.match(/^$|^-$/) || T["a"].validate(n) ? i && t.triggerHandler("click") : i || t.errorBox(q.t("errors.only_numerical_values", "only numerical values are accepted"))
                    }
                }).delegate(".flag_question", "click", (function(e) {
                    e.preventDefault()
                    const t = r()(this).parents(".question")
                    t.toggleClass("marked")
                    r()(this).attr("aria-checked", t.hasClass("marked"))
                    r()("#list_" + t.attr("id")).toggleClass("marked")
                    let n
                    n = r()("#list_" + t.attr("id")).hasClass("marked") ? q.t("titles.come_back_later", "You marked this question to come back to later") : ""
                    r()("#list_" + t.attr("id")).find(".marked-status").text(n)
                    Q.updateSubmission()
                })).delegate(".question_input", "change", (function(e, t, n) {
                    let i = r()(this),
                        a = this.tagName.toUpperCase(),
                        o = i.parents(".question").attr("id"),
                        s = ""
                    if ("A" == a) return
                    if (n) {
                        if (n[o]) return
                        n[o] = true
                    }
                    if ("TEXTAREA" == a) {
                        s = H["a"].callOnRCE(i, "get_code")
                        const e = i
                        i.siblings(".rce_links").find(".toggle_question_content_views_link").click((function(t) {
                            t.preventDefault()
                            H["a"].callOnRCE(e, "toggle")
                            r()(this).siblings(".toggle_question_content_views_link").andSelf().toggle()
                        }))
                    } else if ("text" == i.attr("type") || "hidden" == i.attr("type")) s = i.val()
                    else if ("SELECT" == a) {
                        const e = i.parents(".question").find("select.question_input")
                        s = !e.filter((function() {
                            return !r()(this).val()
                        })).length
                    } else i.parents(".question").find(".question_input").each((function() {
                        (r()(this).attr("checked") || r()(this).attr("selected")) && (s = true)
                    }))
                    Q.updateQuestionIndicators(s, o)
                    Q.updateFinalSubmitButtonState()
                    Q.updateNextButtonState(o)
                }))
                e.find(".question_input").trigger("change", [false, {}])
                const t = r()(".hide_time_link")
                t.click((function(e) {
                    e.preventDefault()
                    if ("hidden" !== r()(".time_running").css("visibility")) {
                        r()(".time_running").css("visibility", "hidden")
                        r()(this).text(q.t("show_time_link", "Show Time"))
                    } else {
                        r()(".time_running").css("visibility", "visible")
                        r()(this).text(q.t("hide_time_link", "Hide Time"))
                    }
                }))
                t.keydown((function(e) {
                    32 === e.keyCode && t.click()
                }))
                setTimeout((function() {
                    r()("#question_list .list_question").each((function() {
                        const e = r()(this)
                        "Spacer" == e.find(".jump_to_question_link").text() && e.remove()
                    }))
                }), 1e3)
                r()("#submit_quiz_form input[type=text]").keypress(e => {
                    if (13 == e.keyCode) return false
                })
                r()(".quiz_submit").click(e => {
                    Q.finalSubmitButtonClicked = true
                })
                r()("#submit_quiz_form").submit((function(t) {
                    r()(".question_holder textarea.question_input").each((function() {
                        r()(this).change()
                    }))
                    let n
                    let i
                    Q.cantGoBack && (r()(".question").hasClass("answered") || (i = q.t("confirms.cant_go_back_blank", "You can't come back to this question once you hit next. Are you sure you want to leave it blank?")))
                    if (Q.finalSubmitButtonClicked) {
                        Q.finalSubmitButtonClicked = false
                        if (Q.cantGoBack) {
                            const e = r()("#question_list .list_question:not(.seen)").length
                            e > 0 && (i = q.t("confirms.unseen_questions", {
                                one: "There is still 1 question you haven't seen yet.  Submit anyway?",
                                other: "There are still %{count} questions you haven't seen yet.  Submit anyway?"
                            }, {
                                count: e
                            }))
                        } else {
                            n = r()("#question_list .list_question:not(.answered):not(.text_only)").length
                            n > 0 && (i = q.t("confirms.unanswered_questions", {
                                one: "You have 1 unanswered question (see the right sidebar for details).  Submit anyway?",
                                other: "You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"
                            }, {
                                count: n
                            }))
                        }
                    }
                    0 !== r()('#fileupload_in_progress[value="true"]', e).length && (i = q.t("confirms.file_upload_in_progress", "File upload is in progress. You may lose your answer before it is complete."))
                    if (void 0 != i && !Q.submitting) {
                        const e = confirm(i)
                        if (!e) {
                            t.preventDefault()
                            t.stopPropagation()
                            return false
                        }
                    }
                    Q.submitting = true
                }))
                r()(".submit_quiz_button").click(e => {
                    e.preventDefault()
                    r()("#times_up_dialog").dialog("close")
                })
                setTimeout((function() {
                    r()(".question_holder textarea.question_input").each((function() {
                        r()(this).attr("id", "question_input_" + Q.contentBoxCounter++)
                        H["a"].loadNewEditor(r()(this), {
                            manageParent: true,
                            autosave: {
                                enabled: false
                            },
                            maxInitRenderedRCEs: 5
                        })
                    }))
                }), 2e3)
                if (G.a) {
                    G.a.addEventListener("message", e => {
                        "stopwatchTick" === e.data && Q.updateTime()
                    })
                    G.a.postMessage({
                        code: "startStopwatch",
                        frequency: Q.clockInterval
                    })
                } else setInterval(Q.updateTime, Q.clockInterval)
                setTimeout(() => {
                    Q.updateSubmission(true)
                }, 15e3)
                const n = r()("#submit_quiz_form button[type=submit]")
                n.click((function(e) {
                    Q.clearAccessCode = false
                    const t = r()(this).data("action")
                    void 0 != t && r()("#submit_quiz_form").attr("action", t)
                }))
                n.removeAttr("disabled")
            }))
            W = function() {
                r()("#deauthorized_dialog").dialog({
                    modal: true,
                    buttons: [{
                        text: q.t("#buttons.cancel", "Cancel"),
                        class: "dialog_closer",
                        click() {
                            r()(this).dialog("close")
                        }
                    }, {
                        text: q.t("#buttons.login", "Login"),
                        class: "btn-primary relogin_button button_type_submit",
                        click() {
                            Q.navigatingToRelogin = true
                            r()("#deauthorized_dialog").submit()
                        }
                    }]
                })
            }
            if (ENV.LOCKDOWN_BROWSER) {
                let e
                e = new V
                e.on("login_success.take_quiz", () => {
                    r.a.flashMessage(q.t("login_successful", "Login successful."))
                }).on("login_failure.take_quiz", () => {
                    r.a.flashError(q.t("login_failed", "Login failed."))
                })
                W = e.exec.bind(e)
            }
            r()(() => {
                const e = 84
                const t = r()(".time_running,.time_remaining")
                const n = r()("<div />", {
                    class: "screenreader-only",
                    "aria-role": "note",
                    "aria-live": "assertive",
                    "aria-atomic": "true",
                    "aria-relevant": "additions"
                }).appendTo(document.body)
                r()(document).on("keydown.timer_quickjump", (function(i) {
                    if (i.altKey && (i.shiftKey || i.ctrlKey) && i.which === e) {
                        i.preventDefault()
                        n.text(t.text())
                    }
                }))
                if (ENV.QUIZ_SUBMISSION_EVENTS_URL) {
                    P["a"].start()
                    Object(F["a"])(false)
                }
            })
            r()(document).ready(() => {
                r()(".loaded").show()
                r()(".loading").hide()
            })
        },
        "5hhv": function(e, t, n) {
            var i, a
            i = [], a = function() {
                if (!window.Worker) return

                function e() {
                    let e
                    self.addEventListener("message", (function(t) {
                        const n = t.data || {}
                        switch (n.code) {
                            case "startStopwatch":
                                e = setInterval((function() {
                                    self.postMessage("stopwatchTick")
                                }), n.frequency || 1e3)
                                break
                            case "stop":
                                clearInterval(e)
                        }
                    }), false)
                }
                let t = e.toString()
                t = t.substring(t.indexOf("{") + 1, t.lastIndexOf("}"))
                const n = new Blob([t], {
                    type: "application/javascript"
                })
                const i = new Worker(URL.createObjectURL(n))
                return i
            }.apply(t, i), void 0 !== a && (e.exports = a)
        },
        "65NJ": function(e, t, n) {
            "use strict"
            var i = n("ouhR")
            var a = n.n(i)
            n("w2hD")
            a.a.fn.scrollToVisible = function(e) {
                const t = {}
                const n = a()(e)
                if (0 === n.length) return
                let i = n.offset(),
                    o = n.outerWidth(),
                    s = n.outerHeight(),
                    r = i.top,
                    u = r + s,
                    l = i.left,
                    _ = l + o,
                    d = "html,body" == this.selector ? a.a.windowScrollTop() : this.scrollTop(),
                    c = this.scrollLeft(),
                    m = this.outerHeight(),
                    h = this.outerWidth()
                if ("html,body" != this.selector) {
                    let e = a()("body").offset()
                    this.each((function() {
                        try {
                            e = a()(this).offset()
                            return false
                        } catch (e) {}
                    }))
                    r -= e.top
                    u -= e.top
                    l -= e.left
                    _ -= e.left
                }
                if ("HTML" == this[0].tagName || "BODY" == this[0].tagName) {
                    m = a()(window).height()
                    a()("#wizard_box:visible").length > 0 && (m -= a()("#wizard_box:visible").height())
                    h = a()(window).width()
                    r -= d
                    l -= c
                    u -= d
                    _ -= c
                }
                r < 0 || m < s && u > m ? t.scrollTop = r + d : u > m && (t.scrollTop = u + d - m + 20)
                l < 0 ? t.scrollLeft = l + c : _ > h && (t.scrollLeft = _ + c - h + 20)
                1 == t.scrollTop && (t.scrollTop = 0)
                1 == t.scrollLeft && (t.scrollLeft = 0)
                this.scrollTop(t.scrollTop)
                this.scrollLeft(t.scrollLeft)
                return this
            }
        },
        BrAc: function(e, t, n) {
            "use strict"
            var i = n("vDqi")
            var a = n.n(i)
            a.a.defaults.xsrfCookieName = "_csrf_token"
            a.a.defaults.xsrfHeaderName = "X-CSRF-Token"
            const o = a.a.defaults.headers.common.Accept
            a.a.defaults.headers.common.Accept = "application/json+canvas-string-ids, " + o
            a.a.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
            t["a"] = a.a
        },
        Ce78J: function(e, t, n) {
            "use strict"
            var i = n("VTBJ")
            var a = n("ouhR")
            var o = n.n(a)
            var s = n("Y/W1")
            var r = n.n(s)
            var u = n("JiFB")
            var l = n("ik22")

            function _(e, t, n) {
                const a = Object(i["a"])({}, n)
                e.forEach(e => {
                    const i = t[e]
                    const o = n[e]
                    Array.isArray(i) && Array.isArray(o) && (a[e] = [...new Set(i.concat(o))])
                })
                return a
            }

            function d(e, t, n, a, o) {
                const s = new u["a"](o, l["a"], e, t)
                const r = Object(i["a"])({}, s.defaultConfig())
                return Object(i["a"])(Object(i["a"])({}, r), _(n.optionsToMerge || [], r, n.tinyOptions))
            }
            var c = d
            var m = n("FNQM")
            const h = {
                call(e, ...t) {
                    if ("exists?" === e) return true
                    return this[e](...t)
                },
                focus() {
                    if (void 0 !== tinymce) {
                        const e = tinymce.get(this.getTextarea().id)
                        e && e.focus(true)
                    }
                }
            }
            const f = {
                show() {
                    $("#editor_tabs").show()
                },
                hide() {
                    $("#editor_tabs").hide()
                }
            }
            const g = {
                wrapEditor(e) {
                    const t = Object(i["a"])(Object(i["a"])({}, h), e)
                    return Object.assign(e, t)
                },
                wrapSidebar(e) {
                    const t = Object(i["a"])(Object(i["a"])({}, f), e)
                    return Object.assign(e, t)
                }
            }
            var p = g
            var v = n("eVns")
            var b = n("stQK")
            const y = {
                loadingPromise: null,
                preload(e) {
                    (window.requestIdleCallback || window.setTimeout)(() => this.loadRCE(e))
                },
                loadOnTarget(e, t, n) {
                    const i = this.getTargetTextarea(e)
                    const a = this.getRenderingTarget(i, t.getRenderingTarget)
                    const o = this.createRCEProps(i, t)
                    this.loadRCE(e => {
                        e.renderIntoDiv(a, o, e => {
                            e.tinymceOn("init", () => n(i, p.wrapEditor(e)))
                        })
                    })
                },
                loadingCallbacks: [],
                RCE: null,
                loadRCE(e = (() => {})) {
                    return Promise.all([n.e(2), n.e(3), n.e(5), n.e(6), n.e(8), n.e(11), n.e(12), n.e(13), n.e(14), n.e(20), n.e(25), n.e(35), n.e(3687)]).then(n.bind(null, "j/Fk")).then(e => {
                        this.RCE = e
                        Object(m["a"])()
                        return e
                    }).then(() => {
                        this.loadingCallbacks.forEach(e => e(this.RCE))
                        this.loadingCallbacks = []
                        e(this.RCE)
                    })
                },
                getTargetTextarea: e => "textarea" === o()(e).get(0).type ? o()(e).get(0) : o()(e).find("textarea").get(0),
                getRenderingTarget(e, t) {
                    let n
                    n = "undefined" === typeof t ? o()(e).parent().get(0) : t(e)
                    o()(n).addClass("ic-RichContentEditor")
                    return n
                },
                _attrsToMirror(e) {
                    const t = ["name"]
                    const n = r.a.reduce(e.attributes, (e, t) => {
                        e[t.name] = t.value
                        return e
                    }, {})
                    return r.a.pick(n, t)
                },
                createRCEProps(e, t) {
                    var n, a, o, s, r
                    const u = e.offsetWidth
                    const l = e.offsetHeight || 400
                    l && (t.tinyOptions = Object(i["a"])({
                        height: l
                    }, t.tinyOptions || {}))
                    const _ = ENV.LOCALE
                    const d = Object.keys(b["a"]).map(e => ({
                        id: e,
                        label: b["a"][e]
                    })).sort((e, t) => e.id === _ ? -1 : t.id === _ ? 1 : e.label.localeCompare(t.label, _))
                    const m = {
                        enabled: true,
                        maxAge: Number.isNaN(ENV.rce_auto_save_max_age_ms) ? 36e5 : ENV.rce_auto_save_max_age_ms
                    }
                    return {
                        defaultContent: e.value || t.defaultContent,
                        editorOptions: c.bind(null, u, e.id, t, null),
                        language: ENV.LOCALE,
                        mirroredAttrs: this._attrsToMirror(e),
                        onFocus: t.onFocus,
                        onBlur: t.onBlur,
                        textareaClassName: e.className,
                        textareaId: e.id,
                        trayProps: Object(v["a"])(),
                        languages: d,
                        liveRegion: () => document.getElementById("flash_screenreader_holder"),
                        ltiTools: null === (n = window.INST) || void 0 === n ? void 0 : n.editorButtons,
                        autosave: t.autosave || m,
                        instRecordDisabled: ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,
                        maxInitRenderedRCEs: t.maxInitRenderedRCEs,
                        highContrastCSS: null === (a = window.ENV) || void 0 === a ? void 0 : a.url_for_high_contrast_tinymce_editor_css,
                        use_rce_buttons_and_icons: !!(null !== (o = window.ENV) && void 0 !== o && null !== (s = o.FEATURES) && void 0 !== s && s.rce_buttons_and_icons),
                        use_rce_a11y_checker_notifications: !!(null !== (r = window.ENV) && void 0 !== r && r.use_rce_a11y_checker_notifications)
                    }
                }
            }
            var k = y
            var w = n("eodz")

            function z(e, t, n) {
                e.css("display", "none")
                const i = t.onFocus
                t.onFocus = (...e) => {
                    i instanceof Function && i(...e)
                }
                k.loadOnTarget(e, t, (t, i) => {
                    const a = A(e)
                    const s = j(o()(t))
                    s.data("remoteEditor", i)
                    a.trigger(w["a"], i)
                    n && n(i)
                })
            }

            function q(e) {
                const t = A(e)
                const n = t.attr("id")
                const i = "tinymce-parent-of-" + n
                if (t.parent().attr("id") !== i) return t.wrap(`<div id='${i}' style='visibility: hidden'></div>`)
            }

            function T() {
                o()(".mce-resizehandle").attr("aria-hidden", true)
            }
            let x = 0

            function S() {
                return "random_editor_id_" + x++
            }

            function E(e) {
                const t = o()(e)
                const n = "attr" in t ? t.attr("id") : t.id
                n && "" != n || t.attr("id", S())
            }

            function j(e) {
                const t = A(e)
                const n = t.attr("id")
                if (!n || "" == n) return t
                const i = o()("#" + n)
                if (i.length <= 0) return t
                return i
            }
            const D = {
                preloadRemoteModule: (e = (() => {})) => k.preload(e),
                loadNewEditor(e, t = {}, n) {
                    let i = A(e)
                    if (i.length <= 0) return
                    E(i)
                    t = o.a.extend({}, t)
                    const a = e => {
                        t.focus && this.activateRCE(i)
                        n && n(e)
                    }
                    i = this.freshNode(i)
                    if (t.manageParent) {
                        delete t.manageParent
                        q(i)
                    }
                    z(i, t, a)
                    T()
                },
                callOnRCE(e, t, ...n) {
                    let i = A(e)
                    i = this.freshNode(i)
                    return Object(w["d"])(i, t, ...n)
                },
                destroyRCE(e) {
                    let t = A(e)
                    t = this.freshNode(t)
                    Object(w["b"])(t)
                },
                closeRCE(e) {
                    this.callOnRCE(e, "RCEClosed")
                },
                activateRCE(e) {
                    let t = A(e)
                    t = this.freshNode(t)
                    Object(w["c"])(t)
                },
                freshNode: j,
                ensureID: E,
                node2jquery: A
            }

            function A(e) {
                return e && e.length ? e : o()(e)
            }
            t["a"] = D
        },
        ErZx: function(e, t, n) {
            "use strict"
            const i = {
                auto_focus: false,
                block_formats: void 0,
                body_class: "default-theme",
                content_css: [],
                directionality: "ltr",
                height: void 0,
                language: "en",
                menubar: void 0,
                menu: void 0,
                toolbar: void 0,
                plugins: void 0,
                branding: false,
                browser_spellcheck: true,
                content_style: void 0,
                convert_urls: false,
                font_formats: "Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                language_load: false,
                language_url: "none",
                toolbar_mode: "floating",
                toolbar_ticky: true,
                mobile: {
                    theme: "silver"
                },
                preview_styles: "font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",
                remove_script_host: true,
                resize: true,
                skin: false,
                statusbar: false,
                valid_elements: "@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,label[for],legend,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",
                extended_valid_elements: "@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,svg[*],g[*],circle[*]",
                non_empty_elements: "td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",
                target_list: false,
                link_title: false,
                default_link_target: "_blank"
            }
            t["a"] = i
        },
        EwH5: function(e, t, n) {
            "use strict"
            var i = n("ko/W")
            t["a"] = function(e) {
                e && i["a"].unregisterAllTrackers()
                i["a"].isRunning() || i["a"].start()
                if (i["a"].isDirty()) return i["a"].deliver()
            }
        },
        FdVj: function(e, t, n) {
            "use strict"
            var i = n("qJBq")
            var a = n.n(i)
            var o = n("HGxv")
            const s = {
                _parseNumber: a.a,
                parse(e) {
                    if (null == e) return NaN
                    if ("number" === typeof e) return e
                    let t = s._parseNumber(e.toString(), {
                        thousands: o["default"].lookup("number.format.delimiter"),
                        decimal: o["default"].lookup("number.format.separator")
                    })
                    isNaN(t) && (t = s._parseNumber(e))
                    e.toString().match(/e/) && isNaN(t) && (t = parseFloat(e))
                    return t
                },
                validate: e => !isNaN(s.parse(e))
            }
            t["a"] = s
        },
        L0Ie: function(e, t) {
            if (("" + location.search).match(/[?&]debug_js=1/)) e.exports = console
            else {
                function n() {}
                e.exports = ["debug", "info", "log", "warn", "error"].reduce((e, t) => {
                    e[t] = n
                    return e
                }, {})
            }
        },
        QLaP: function(e, t, n) {
            "use strict"
            var i = function(e, t, n, i, a, o, s, r) {
                false
                if (!e) {
                    var u
                    if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
                    else {
                        var l = [n, i, a, o, s, r]
                        var _ = 0
                        u = new Error(t.replace(/%s/g, (function() {
                            return l[_++]
                        })))
                        u.name = "Invariant Violation"
                    }
                    u.framesToPop = 1
                    throw u
                }
            }
            e.exports = i
        },
        VrN0: function(e, t, n) {
            "use strict"
            var i = n("ouhR")
            var a = n.n(i)
            var o = n("eodz")
            const s = /^(?:select|textarea)/i
            const r = /\r?\n/g
            const u = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i

            function l() {
                if (this.elements) return a.a.makeArray(this.elements) {
                    const e = a()(this).find(":input")
                    return e.length ? e : this
                }
            }

            function _() {
                return this.name && !this.disabled && (this.checked || s.test(this.nodeName) || u.test(this.type))
            }

            function d(e, t) {
                "string" === typeof t && (t = t.replace(r, "\r\n"))
                return {
                    name: e,
                    value: t
                }
            }

            function c() {
                const e = a()(this)
                const t = (() => {
                    if ("file" !== this.type) return e.hasClass("datetime_field_enabled") ? "" === e.val() ? null : e.data("date") || null : e.data("rich_text") ? Object(o["d"])(e, "get_code", false) : e.val()
                    if (e.val()) return this
                })()
                return a.a.isArray(t) ? t.map(e => d(this.name, e)) : d(this.name, t)
            }
            a.a.fn.serializeForm = function() {
                return this.map(l).filter(_).map(c).get()
            }
        },
        ZbPE: function(e, t, n) {
            "use strict"
            n.d(t, "a", (function() {
                return T
            }))
            var i = n("rePB")
            var a = n("1OyB")
            var o = n("vuIU")
            var s = n("Ji7U")
            var r = n("LK+K")
            var u = n("q1tI")
            var l = n.n(u)
            var _ = n("17x9")
            var d = n.n(_)
            var c = n("TSYQ")
            var m = n.n(c)
            var h = n("J2CL")
            var f = n("KgFQ")
            var g = n("jtGx")
            var p = n("nAyT")
            var v = n("VTBJ")

            function b(e) {
                var t = e.typography,
                    n = e.colors,
                    i = e.spacing
                return Object(v["a"])({}, t, {
                    primaryInverseColor: n.textLightest,
                    primaryColor: n.textDarkest,
                    secondaryColor: n.textDark,
                    secondaryInverseColor: n.textLight,
                    warningColor: n.textWarning,
                    brandColor: n.textBrand,
                    errorColor: n.textDanger,
                    dangerColor: n.textDanger,
                    successColor: n.textSuccess,
                    alertColor: n.textAlert,
                    paragraphMargin: "".concat(i.medium, " 0")
                })
            }
            b.canvas = function(e) {
                return {
                    primaryColor: e["ic-brand-font-color-dark"],
                    brandColor: e["ic-brand-primary"]
                }
            }
            var y, k, w, z
            var q = {
                componentId: "enRcg",
                template: function(e) {
                    return "\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily || "inherit", "}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace || "inherit", ";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold || "inherit", "}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin || "inherit", ";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor || "inherit", "}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal || "inherit", "}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight || "inherit", "}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold || "inherit", "}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall || "inherit", "}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall || "inherit", "}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium || "inherit", "}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge || "inherit", "}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge || "inherit", "}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge || "inherit", "}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight || "inherit", "}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit || "inherit", "}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed || "inherit", "}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble || "inherit", "}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal || "inherit", "}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed || "inherit", "}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded || "inherit", "}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")
                },
                root: "enRcg_bGBk",
                "color-primary": "enRcg_qFsi",
                "color-secondary": "enRcg_bLsb",
                "color-primary-inverse": "enRcg_ezBQ",
                "color-secondary-inverse": "enRcg_dlnd",
                "color-success": "enRcg_cJLh",
                "color-brand": "enRcg_fpfC",
                "color-warning": "enRcg_eHcp",
                "color-error": "enRcg_dwua",
                "color-danger": "enRcg_NQMb",
                "color-alert": "enRcg_eZgl",
                "wrap-break-word": "enRcg_fbNi",
                "weight-normal": "enRcg_drST",
                "weight-light": "enRcg_pEgL",
                "weight-bold": "enRcg_bdMA",
                "style-normal": "enRcg_ijuF",
                "style-italic": "enRcg_fetN",
                "x-small": "enRcg_dfBC",
                small: "enRcg_doqw",
                medium: "enRcg_ycrn",
                large: "enRcg_cMDj",
                "x-large": "enRcg_eoMd",
                "xx-large": "enRcg_fdca",
                "lineHeight-default": "enRcg_fEWX",
                "lineHeight-fit": "enRcg_fNIu",
                "lineHeight-condensed": "enRcg_dfDs",
                "lineHeight-double": "enRcg_bDjL",
                "letterSpacing-normal": "enRcg_eQnG",
                "letterSpacing-condensed": "enRcg_bbUA",
                "letterSpacing-expanded": "enRcg_bRWU",
                "transform-none": "enRcg_wZsr",
                "transform-capitalize": "enRcg_fCZK",
                "transform-uppercase": "enRcg_dsRi",
                "transform-lowercase": "enRcg_bLtD"
            }
            var T = (y = Object(h["l"])(b, q), y(k = (z = w = function(e) {
                Object(s["a"])(n, e)
                var t = Object(r["a"])(n)

                function n() {
                    Object(a["a"])(this, n)
                    return t.apply(this, arguments)
                }
                Object(o["a"])(n, [{
                    key: "render",
                    value: function() {
                        var e
                        var t = this.props,
                            a = t.wrap,
                            o = t.weight,
                            s = t.fontStyle,
                            r = t.size,
                            u = t.lineHeight,
                            _ = t.letterSpacing,
                            d = t.transform,
                            c = t.color,
                            h = t.children
                        var p = Object(f["a"])(n, this.props)
                        return l.a.createElement(p, Object.assign({}, Object(g["b"])(this.props), {
                            className: m()((e = {}, Object(i["a"])(e, q.root, true), Object(i["a"])(e, q[r], r), Object(i["a"])(e, q["wrap-".concat(a)], a), Object(i["a"])(e, q["weight-".concat(o)], o), Object(i["a"])(e, q["style-".concat(s)], s), Object(i["a"])(e, q["transform-".concat(d)], d), Object(i["a"])(e, q["lineHeight-".concat(u)], u), Object(i["a"])(e, q["letterSpacing-".concat(_)], _), Object(i["a"])(e, q["color-".concat(c)], c), e)),
                            ref: this.props.elementRef
                        }), h)
                    }
                }])
                n.displayName = "Text"
                return n
            }(u["Component"]), w.propTypes = {
                as: d.a.elementType,
                children: d.a.node,
                color: p["a"].deprecatePropValues(d.a.oneOf(["primary", "secondary", "brand", "success", "warning", "error", "danger", "alert", "primary-inverse", "secondary-inverse"]), ["error"], "It will be removed in version 8.0.0. Use `danger` instead."),
                elementRef: d.a.func,
                fontStyle: d.a.oneOf(["italic", "normal"]),
                letterSpacing: d.a.oneOf(["normal", "condensed", "expanded"]),
                lineHeight: d.a.oneOf(["default", "fit", "condensed", "double"]),
                size: d.a.oneOf(["x-small", "small", "medium", "large", "x-large", "xx-large"]),
                transform: d.a.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
                weight: d.a.oneOf(["normal", "light", "bold"]),
                wrap: d.a.oneOf(["normal", "break-word"])
            }, w.defaultProps = {
                as: "span",
                wrap: "normal",
                size: "medium",
                letterSpacing: "normal",
                children: null,
                elementRef: void 0,
                color: void 0,
                transform: void 0,
                lineHeight: void 0,
                fontStyle: void 0,
                weight: void 0
            }, z)) || k)
        },
        aq8L: function(e, t, n) {
            "use strict"
            var i = n("HGxv")
            var a = n("8WeW")
            Object(a["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"es-ES":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Está seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ali ste prepričani, da želite to izbrisati?"}}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"th":{"buttons":{"cancel":"ยกเลิก","delete":"ลบ"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"แน่ใจว่าต้องการลบหรือไม่"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ви впевнені, що хочете це видалити?"}}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
            n("jQeR")
            n("0sPK")
            var o = i["default"].scoped("instructure_misc_plugins")
            var s = n("ouhR")
            var r = n.n(s)
            var u = n("gI0r")
            var l = n("3PZ/")
            n("dhbk")
            n("ESjL")
            n("65NJ")
            n("w2hD")
            r.a.fn.setOptions = function(e, t) {
                let n = e ? "<option value=''>" + Object(u["a"])(e) + "</option>" : ""
                null == t && (t = [])
                t.forEach(e => {
                    const t = Object(u["a"])(e)
                    n += '<option value="' + t + '">' + t + "</option>"
                })
                return this.html(r.a.raw(n))
            }
            r.a.fn.ifExists = function(e) {
                this.length && e.call(this, this)
                return this
            }
            r.a.fn.scrollbarWidth = function() {
                const e = r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),
                    t = e.find("div")
                const n = t.innerWidth()
                e.css("overflow-y", "scroll")
                const i = t.innerWidth()
                e.remove()
                return n - i
            }
            r.a.fn.dim = function(e) {
                return this.animate({
                    opacity: .4
                }, e)
            }
            r.a.fn.undim = function(e) {
                return this.animate({
                    opacity: 1
                }, e)
            }
            r.a.fn.confirmDelete = function(e) {
                e = r.a.extend({}, r.a.fn.confirmDelete.defaults, e)
                const t = this
                let n = null
                let i = true
                e.noMessage = e.noMessage || e.no_message
                const a = function() {
                    if (!i) {
                        e.cancelled && r.a.isFunction(e.cancelled) && e.cancelled.call(t)
                        return
                    }
                    e.confirmed || (e.confirmed = function() {
                        t.dim()
                    })
                    e.confirmed.call(t)
                    if (e.url) {
                        e.success || (e.success = function(e) {
                            t.fadeOut("slow", () => {
                                t.remove()
                            })
                        })
                        const i = e.prepareData ? e.prepareData.call(t, n) : {}
                        i.authenticity_token = Object(l["a"])()
                        r.a.ajaxJSON(e.url, "DELETE", i, n => {
                            e.success.call(t, n)
                        }, (n, i, a, o) => {
                            e.error && r.a.isFunction(e.error) ? e.error.call(t, n, i, a, o) : r.a.ajaxJSON.unhandledXHRs.push(i)
                        })
                    } else {
                        e.success || (e.success = function() {
                            t.fadeOut("slow", () => {
                                t.remove()
                            })
                        })
                        e.success.call(t)
                    }
                }
                if (e.message && !e.noMessage && !r.a.skipConfirmations) {
                    if (e.dialog) {
                        i = false
                        const t = "object" === typeof e.dialog ? e.dialog : {}
                        const s = e.url.includes("assignments") ? "btn-danger" : "btn-primary"
                        n = r()(e.message).dialog(r.a.extend({}, {
                            modal: true,
                            close: a,
                            buttons: [{
                                text: o.t("#buttons.cancel", "Cancel"),
                                click() {
                                    r()(this).dialog("close")
                                }
                            }, {
                                text: o.t("#buttons.delete", "Delete"),
                                class: s,
                                click() {
                                    i = true
                                    r()(this).dialog("close")
                                }
                            }]
                        }, t))
                        return
                    }
                    i = confirm(e.message)
                }
                a()
            }
            r.a.fn.confirmDelete.defaults = {
                get message() {
                    return o.t("confirms.default_delete_thing", "Are you sure you want to delete this?")
                }
            }
            r.a.fn.fragmentChange = function(e) {
                if (e && true !== e) {
                    const n = (window.location.search || "").replace(/^\?/, "").split("&")
                    let i = null
                    for (var t = 0; t < n.length; t++) {
                        const e = n[t]
                        e && 0 === e.indexOf("hash=") && (i = "#" + e.substring(5))
                    }
                    this.bind("document_fragment_change", e)
                    const a = this
                    let o = false
                    for (t = 0; t < r.a._checkFragments.fragmentList.length; t++) {
                        const e = r.a._checkFragments.fragmentList[t]
                        e.doc[0] == a[0] && (o = true)
                    }
                    o || r.a._checkFragments.fragmentList.push({
                        doc: a,
                        fragment: ""
                    })
                    r()(window).bind("hashchange", r.a._checkFragments)
                    setTimeout(() => {
                        i && i.length > 0 ? a.triggerHandler("document_fragment_change", i) : a && a[0] && a[0].location && a[0].location.hash.length > 0 && a.triggerHandler("document_fragment_change", a[0].location.hash)
                    }, 500)
                } else this.triggerHandler("document_fragment_change", this[0].location.hash)
                return this
            }
            r.a._checkFragments = function() {
                const e = r.a._checkFragments.fragmentList
                for (let t = 0; t < e.length; t++) {
                    const n = e[t]
                    const i = n.doc
                    if (i[0].location.hash != n.fragment) {
                        i.triggerHandler("document_fragment_change", i[0].location.hash)
                        n.fragment = i[0].location.hash
                        r.a._checkFragments.fragmentList[t] = n
                    }
                }
            }
            r.a._checkFragments.fragmentList = []
            r.a.fn.clickLink = function() {
                const e = this.eq(0)
                e.hasClass("disabled_link") || e.click()
            }
            r.a.fn.showIf = function(e) {
                if (r.a.isFunction(e)) return this.each((function(t) {
                    r()(this).showIf(e.call(this))
                }))
                e ? this.show() : this.hide()
                return this
            }
            r.a.fn.disableIf = function(e) {
                r.a.isFunction(e) && (e = e.call(this))
                this.prop("disabled", !!e)
                return this
            }
            r.a.fn.indicate = function(e) {
                e = e || {}
                let t
                if ("remove" == e) {
                    t = this.data("indicator")
                    t && t.remove()
                    return
                }
                r()(".indicator_box").remove()
                let n = this.offset()
                e && e.offset && (n = e.offset)
                const i = this.width()
                const a = this.height()
                const o = (e.container || this).zIndex()
                t = r()(document.createElement("div"))
                t.css({
                    width: i + 6,
                    height: a + 6,
                    top: n.top - 3,
                    left: n.left - 3,
                    zIndex: o + 1,
                    position: "absolute",
                    display: "block",
                    "-moz-border-radius": 5,
                    opacity: .8,
                    border: "2px solid #870",
                    backgroundColor: "#fd0"
                })
                t.addClass("indicator_box")
                t.mouseover((function() {
                    r()(this).stop().fadeOut("fast", (function() {
                        r()(this).remove()
                    }))
                }))
                this.data("indicator") && this.indicate("remove")
                this.data("indicator", t)
                r()("body").append(t)
                e && e.singleFlash ? t.hide().fadeIn().animate({
                    opacity: .8
                }, 500).fadeOut("slow", (function() {
                    r()(this).remove()
                })) : t.hide().fadeIn().animate({
                    opacity: .8
                }, 500).fadeOut("slow").fadeIn("slow").animate({
                    opacity: .8
                }, 2500).fadeOut("slow", (function() {
                    r()(this).remove()
                }))
                e && e.scroll && r()("html,body").scrollToVisible(t)
            }
            r.a.fn.hasScrollbar = function() {
                return this.length && this[0].clientHeight < this[0].scrollHeight
            }
            r.a.fn.log = function(e) {
                console.log("%s: %o", e, this)
                return this
            }
            r.a.fn.fillWindowWithMe = function(e) {
                const t = r.a.extend({
                        minHeight: 400
                    }, e),
                    n = r()(this),
                    i = r()("#wrapper"),
                    a = r()("#main"),
                    o = r()("#not_right_side"),
                    s = r()(window),
                    u = r()(this).add(t.alsoResize)

                function l() {
                    u.height(0)
                    const e = s.height() - (i.offset().top + i.outerHeight()) + (a.height() - o.height()),
                        l = Math.max(400, e)
                    u.height(l)
                    r.a.isFunction(t.onResize) && t.onResize.call(n, l)
                }
                l()
                s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe", l)
                return this
            }
            r.a.fn.autoGrowInput = function(e) {
                e = r.a.extend({
                    maxWidth: 1e3,
                    minWidth: 0,
                    comfortZone: 70
                }, e)
                this.filter("input:text").each((function() {
                    let t = e.minWidth || r()(this).width(),
                        n = "",
                        i = r()(this),
                        a = r()("<tester/>").css({
                            position: "absolute",
                            top: -9999,
                            left: -9999,
                            width: "auto",
                            fontSize: i.css("fontSize"),
                            fontFamily: i.css("fontFamily"),
                            fontWeight: i.css("fontWeight"),
                            letterSpacing: i.css("letterSpacing"),
                            whiteSpace: "nowrap"
                        }),
                        o = function() {
                            setTimeout(() => {
                                if (n === (n = i.val())) return
                                a.text(n)
                                const o = a.width(),
                                    s = o + e.comfortZone >= t ? o + e.comfortZone : t,
                                    r = i.width(),
                                    u = s < r && s >= t || s > t && s < e.maxWidth
                                u && i.width(s)
                            })
                        }
                    a.insertAfter(i)
                    r()(this).bind("keyup keydown blur update change", o)
                }))
                return this
            }
            r.a
        },
        dDTa: function(e, t, n) {
            "use strict"
            const i = () => {
                const e = ENV.LTI_LAUNCH_FRAME_ALLOWANCES || []
                return e.join("; ")
            }
            t["a"] = i
        },
        dbrX: function(e, t, n) {
            "use strict"
            var i = n("ODXe")
            var a = n("uYtQ")
            var o = n("QLaP")
            var s = n.n(o)
            const r = {}
            const u = {
                getCssVariant() {
                    const e = window.ENV.use_responsive_layout ? "responsive_layout" : "new_styles"
                    const t = window.ENV.use_high_contrast ? "high_contrast" : "normal_contrast"
                    const n = Object(a["c"])() ? "_rtl" : ""
                    return `${e}_${t}${n}`
                },
                getHandlebarsIndex: () => window.BRANDABLE_CSS_HANDLEBARS_INDEX || [
                    [], {}
                ],
                urlFor(e, {
                    combinedChecksum: t,
                    includesNoVariables: n
                }) {
                    const i = n ? "no_variables" : u.getCssVariant()
                    return [window.ENV.ASSET_HOST || "", "dist", "brandable_css", i, `${e}-${t}.css`].join("/")
                },
                loadStylesheet(e, t) {
                    if (e in r) return
                    const n = document.createElement("link")
                    n.rel = "stylesheet"
                    n.href = u.urlFor(e, t)
                    n.setAttribute("data-loaded-by-brandableCss", true)
                    document.head.appendChild(n)
                },
                loadStylesheetForJST({
                    bundle: e,
                    id: t
                }) {
                    const n = u.getHandlebarsIndex(),
                        a = Object(i["a"])(n, 2),
                        o = a[0],
                        r = a[1]
                    s()(r.hasOwnProperty(t), `requested to load stylesheet for template "${e}" (${t}) but no mapping is available for it!`)
                    if (1 === r[t].length) return u.loadStylesheet(e, {
                        combinedChecksum: r[t][0],
                        includesNoVariables: true
                    }) {
                        let n = r[t][o.indexOf(u.getCssVariant())]
                        "number" === typeof n && (n = r[t][n])
                        return u.loadStylesheet(e, {
                            combinedChecksum: n,
                            includesNoVariables: false
                        })
                    }
                }
            }
            t["a"] = u
        },
        hLjT: function(e, t) {
            e.exports = e => e.id.replace(/^question_/, "")
        },
        hpsT: function(e, t, n) {
            "use strict"
            n.d(t, "a", (function() {
                return i
            }))

            function i(e, t) {
                for (let n = 0; n < e.length; n++) {
                    const i = e[n]
                    if (i === t) {
                        e.splice(n, 1)
                        break
                    }
                }
                return e
            }
        },
        "ko/W": function(e, t, n) {
            "use strict"
            var i = {
                EVT_PAGE_FOCUSED: "page_focused",
                EVT_PAGE_BLURRED: "page_blurred",
                EVT_QUESTION_VIEWED: "question_viewed",
                EVT_QUESTION_FLAGGED: "question_flagged",
                EVT_SESSION_STARTED: "session_started",
                EVT_PRIORITY_LOW: 0,
                EVT_PRIORITY_HIGH: 100,
                EVT_STATE_PENDING_DELIVERY: "pending_delivery",
                EVT_STATE_IN_DELIVERY: "in_delivery",
                EVT_STATE_DELIVERED: "delivered",
                EVT_STORAGE_KEY: "qla_events",
                EVT_STORAGE_MEMORY: "memory",
                EVT_STORAGE_LOCAL_STORAGE: "localStorage"
            }
            var a = n("Y/W1")

            function o() {
                let e = Date.now()
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t => {
                    const n = (e + 16 * Math.random()) % 16 | 0
                    e = Math.floor(e / 16)
                    const i = "x" === t ? n : 7 & n | 8
                    return i.toString(16)
                })
            }
            class s {
                static fromJSON(e) {
                    const t = new s(e.event_type, e.event_data)
                    t.recordedAt = new Date(e.client_timestamp)
                    return t
                }
                constructor(e, t) {
                    if (!e) throw new Error("An event type must be specified.")
                    this._id = o()
                    this._state = i.EVT_STATE_PENDING_DELIVERY
                    this.type = e
                    this.data = Object(a["clone"])(t)
                    this.recordedAt = new Date
                }
                isPendingDelivery() {
                    return this._state === i.EVT_STATE_PENDING_DELIVERY
                }
                isBeingDelivered() {
                    return this._state === i.EVT_STATE_IN_DELIVERY
                }
                wasDelivered() {
                    return this._state === i.EVT_STATE_DELIVERED
                }
                toJSON() {
                    return {
                        event_type: this.type,
                        event_data: this.data,
                        client_timestamp: this.recordedAt
                    }
                }
                toString() {
                    return JSON.stringify(this.toJSON())
                }
            }
            class r {
                constructor(e) {
                    this._events = e
                }
                isEmpty() {
                    return 0 === this._events.length
                }
                markPendingDelivery() {
                    return this._events.forEach(e => e._state = i.EVT_STATE_PENDING_DELIVERY)
                }
                markBeingDelivered() {
                    return this._events.forEach(e => e._state = i.EVT_STATE_IN_DELIVERY)
                }
                toJSON() {
                    return this._events.map(e => e.toJSON())
                }
            }
            var u = n("L0Ie")
            var l = n.n(u)
            const _ = [i.EVT_STORAGE_MEMORY, i.EVT_STORAGE_LOCAL_STORAGE]
            class d {
                static setStorageAdapter(e) {
                    if (-1 === _.indexOf(e)) throw new Error(`Unsupported storage adapter "${e}". Available adapters are:\n${_.join(", ")}`)
                    return d.STORAGE_ADAPTER = e
                }
                constructor() {
                    this.useLocalStorage = d.STORAGE_ADAPTER === i.EVT_STORAGE_LOCAL_STORAGE
                    this._events = this._load() || []
                    l.a.debug("EventBuffer: using", this.constructor.STORAGE_ADAPTER, "for storage")
                }
                push(e) {
                    this._events.push(e)
                    return this._save()
                }
                isEmpty() {
                    return 0 === this._events.length
                }
                getLength() {
                    return this._events.length
                }
                filter(e) {
                    return new r(this._events.filter(e))
                }
                discard(e) {
                    const t = e._events.map(e => e._id)
                    this._events = this._events.filter(e => -1 === t.indexOf(e._id))
                    this._save()
                    return
                }
                toJSON() {
                    return this._events.map(e => e.toJSON())
                }
                _save() {
                    if (this.useLocalStorage) try {
                        localStorage.setItem(i.EVT_STORAGE_KEY, JSON.stringify(this.toJSON()))
                    } catch (e) {
                        l.a.warn("Unable to save to localStorage, likely because we're out of space.")
                    }
                    return
                }
                _load() {
                    if (this.useLocalStorage) {
                        const e = JSON.parse(localStorage.getItem(i.EVT_STORAGE_KEY) || "[]")
                        return e.map(e => s.fromJSON(e))
                    }
                    return
                }
            }
            d.STORAGE_ADAPTER = i.EVT_STORAGE_MEMORY
            var c = n("ouhR")
            var m = n.n(c)
            var h = n("hpsT")
            const f = {
                Accept: "application/json; charset=UTF-8",
                "Content-Type": "application/json; charset=UTF-8"
            }
            class g {
                constructor(e = {}) {
                    this.options = Object(a["extend"])({}, g.options, e)
                    this._trackerFactories = []
                    this._state = {
                        trackers: [],
                        buffer: null,
                        deliveryAgent: null,
                        deliveries: [],
                        lastEventType: null
                    }
                }
                registerTracker(e) {
                    return this._trackerFactories.push(e)
                }
                unregisterAllTrackers() {
                    return this._trackerFactories = []
                }
                start() {
                    const e = this._state
                    e.buffer = new d
                    const t = this.options
                    const n = this._enqueue.bind(this)

                    function i(e, t) {
                        const i = new s(e.getEventType(), t)
                        return n(i, e.getDeliveryPriority())
                    }
                    e.trackers = this._trackerFactories.map(e => {
                        const t = new e
                        t.install(i.bind(null, t))
                        return t
                    })
                    if (t.autoDeliver) return this._startDeliveryAgent()
                }
                isRunning() {
                    return !!this._state.buffer
                }
                isDirty() {
                    return this.isRunning() && !this._state.buffer.isEmpty()
                }
                isDelivering() {
                    return this._state.deliveries.length > 0
                }
                deliver() {
                    const e = this._state.buffer
                    const t = this._state.deliveries
                    const n = this.options
                    const i = e.filter(e => e.isPendingDelivery())
                    if (i.isEmpty()) return Object(c["when"])()
                    i.markBeingDelivered()
                    const a = Object(c["ajax"])({
                        url: n.deliveryUrl,
                        type: "POST",
                        global: false,
                        headers: f,
                        data: JSON.stringify({
                            quiz_submission_events: i.toJSON()
                        }),
                        error: n.errorHandler
                    })
                    a.then(() => e.discard(i), () => e.discard(i))
                    const o = () => Object(h["a"])(t, a)
                    a.then(o, o)
                    t.push(a)
                    return a
                }
                stop(e = false) {
                    const t = this._state
                    if (this.isDelivering() && !e) {
                        console.warn("You are attempting to stop the QuizLogAuditing module while a delivery is in progress.")
                        return Object(c["when"])(t.deliveries).done(this.stop.bind(this, true))
                    }
                    t.buffer = null
                    t.deliveryAgent && this._stopDeliveryAgent()
                    t.trackers.forEach(e => e.uninstall())
                    t.trackers = []
                    return Object(c["when"])()
                }
                _startDeliveryAgent() {
                    return this._state.deliveryAgent = setInterval(this.deliver.bind(this), this.options.autoDeliveryFrequency)
                }
                _enqueue(e, t) {
                    if (e.type === i.EVT_PAGE_FOCUSED && this._state.lastEventType !== i.EVT_PAGE_BLURRED) return false
                    this._state.buffer.push(e)
                    this._state.lastEventType = e.type
                    l.a.log(`Enqueuing ${e} for delivery.`)
                    if (t === i.EVT_PRIORITY_HIGH) return this.isDelivering() ? Object(c["when"])(this._state.deliveries).done(this.deliver.bind(this)) : this.deliver()
                }
                _stopDeliveryAgent() {
                    return this._state.deliveryAgent = clearInterval(this._state.deliveryAgent)
                }
            }
            g.options = {
                autoDeliver: true,
                autoDeliveryFrequency: 15e3,
                deliveryUrl: "/quiz_submission_events"
            }
            class p {
                constructor(e = {}) {
                    this.eventType || (this.eventType = null)
                    this.priority || (this.priority = i.EVT_PRIORITY_LOW)
                    this._options = Object(a["extend"])({}, this.options, e)
                    this.uid = `${this.eventType}_${Object(a["uniqueId"])()}`
                }
                install(e) {
                    throw new Error("Not implemented!")
                }
                getEventType() {
                    return this.eventType
                }
                getDeliveryPriority() {
                    return this.priority
                }
                getOption(e) {
                    return this._options[e]
                }
                uninstall() {
                    if (this._bindings) {
                        this._bindings.forEach(e => m()(e.selector).off(e.eventName))
                        return this._bindings = null
                    }
                }
                bind(e, t, n, i = {}) {
                    this._bindings || (this._bindings = [])
                    this._bindings.push({
                        selector: e,
                        eventName: t
                    })
                    const o = parseInt(i.throttle || 0, 10)
                    o > 0 && (n = Object(a["throttle"])(n, o, {
                        leading: true,
                        trailing: false
                    }))
                    m()(e).on(`${t}.${this.eventType}`, n)
                }
            }
            class v extends p {
                install(e) {
                    return this.bind(window, "focus", () => e(), {
                        throttle: this.getOption("frequency")
                    })
                }
            }
            v.prototype.eventType = i.EVT_PAGE_FOCUSED
            v.prototype.options = {
                frequency: 5e3
            }
            class b extends p {
                install(e) {
                    return this.bind(window, "blur", () => {
                        setTimeout(() => {
                            "IFRAME" !== document.activeElement.tagName && e()
                        })
                    }, {
                        throttle: this.getOption("frequency")
                    })
                }
            }
            b.prototype.eventType = i.EVT_PAGE_BLURRED
            b.prototype.options = {
                frequency: 5e3
            }
            const y = m()(window)

            function k(e) {
                const t = m()(e)
                const n = y.scrollTop()
                const i = n + y.height()
                const a = t.offset().top
                const o = a + t.height()
                return n < a && i > o
            }
            m.a.extend(m.a.expr[":"], {
                in_viewport: k
            })
            var w = n("hLjT")
            var z = n.n(w)
            class q extends p {
                install(e, t = window) {
                    let n = []
                    return this.bind(t, "scroll", () => {
                        const t = this.identifyVisibleQuestions().filter(e => -1 === n.indexOf(e))
                        if (t.length > 0) {
                            n = n.concat(t)
                            l.a.log(`Student has just viewed the following questions: ${t}. (Questions viewed up until now are: ${n})`)
                            return e(t)
                        }
                    }, {
                        throttle: this.getOption("frequency")
                    })
                }
                identifyVisibleQuestions() {
                    return m()(".question[id]:visible").filter(":in_viewport").toArray().map(z.a)
                }
            }
            q.prototype.eventType = i.EVT_QUESTION_VIEWED
            q.prototype.options = {
                frequency: 2500
            }
            class T extends p {
                install(e) {
                    m()(document.body).on("click." + this.uid, this.getOption("buttonSelector"), t => {
                        const n = m()(t.target).closest(this.getOption("questionSelector"))
                        const i = n.hasClass(this.getOption("questionMarkedClass"))
                        const a = z()(n[0])
                        l.a.log(`Question ${a} ${i?"is now flagged":"is no longer flagged"}.`)
                        return e({
                            flagged: i,
                            questionId: a
                        })
                    })
                }
            }
            T.prototype.eventType = i.EVT_QUESTION_FLAGGED
            T.prototype.options = {
                buttonSelector: ".flag_question",
                questionSelector: ".question",
                questionMarkedClass: "marked"
            }
            class x extends p {
                install(e) {
                    const t = navigator,
                        n = t.userAgent
                    l.a.log(`I've been loaded by ${n}.`)
                    if (-1 === location.href.indexOf("question") && location.href.indexOf("take") > 0) return e({
                        user_agent: n
                    })
                }
            }
            x.prototype.eventType = i.EVT_SESSION_STARTED
            x.prototype.options = {}
            const S = [v, b, q, T, x]
            const E = new g
            S.forEach(e => E.registerTracker(e))
            l.a.debug("QuizLogAuditing: will be using localStorage.")
            d.setStorageAdapter(i.EVT_STORAGE_LOCAL_STORAGE)
            E.options.deliveryUrl = ENV.QUIZ_SUBMISSION_EVENTS_URL
            E.options.errorHandler = function(e) {
                console.log(e)
                401 !== e.status && "Unauthorized" !== e.statusText || window.location.reload()
            }
            t["a"] = E
        },
        msTH: function(e, t, n) {
            "use strict"
            var i = n("ouhR")
            var a = n.n(i)
            var o = n("Y/W1")
            var s = n.n(o)
            var r = n("gI0r")
            var u = n("HGxv")
            var l = n("8WeW")
            Object(l["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"es-ES":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"th":{"user_content_aaf0fb5a":"เนื้อหาของผู้ใช้"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
            n("jQeR")
            n("0sPK")
            var _ = u["default"].scoped("user_content")
            const d = {
                translateMathmlForScreenreaders(e) {
                    var t, n
                    if (!(null !== (t = ENV) && void 0 !== t && null !== (n = t.FEATURES) && void 0 !== n && n.new_math_equation_handling)) {
                        const t = a()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
                        const n = a()('<span class="hidden-readable"></span>')
                        n.html(t)
                        return n
                    }
                },
                toMediaCommentLink(e) {
                    const t = a()(`<a\n        id='media_comment_${Object(r["a"])(a()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(r["a"])(a()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(r["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(r["a"])(a()(e).attr("data-alt"))}'\n      />`)
                    t.html(a()(e).html())
                    return t
                },
                convert(e, t = {}) {
                    const n = a()("<div />").html(e)
                    n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function() {
                        return d.toMediaCommentLink(this)
                    }))
                    n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
                    if (!t.forEditing) {
                        n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function() {
                            const e = a()(this)
                            if (!e.data("uc_snippet") || !e.data("uc_sig")) return this
                            const t = s.a.uniqueId("uc_")
                            let n = "/object_snippet"
                            ENV.files_domain && (n = `//${ENV.files_domain}${n}`)
                            const i = a()(`<form\n            action='${Object(r["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(r["a"])(t)}'\n            id='form-${Object(r["a"])(t)}'\n          />`)
                            i.append(a()("<input type='hidden'/>").attr({
                                name: "object_data",
                                value: e.data("uc_snippet")
                            }))
                            i.append(a()("<input type='hidden'/>").attr({
                                name: "s",
                                value: e.data("uc_sig")
                            }))
                            a()("body").append(i)
                            setTimeout(() => i.submit(), 0)
                            return a()(`<iframe\n            class='user_content_iframe'\n            name='${Object(r["a"])(t)}'\n            style='width: ${Object(r["a"])(e.data("uc_width"))}; height: ${Object(r["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(r["a"])(_.t("User Content"))}'\n          />`)
                        }))
                        n.find("img.equation_image").each((e, t) => {
                            const n = a()(t)
                            const i = d.translateMathmlForScreenreaders(n)
                            n.removeAttr("x-canvaslms-safe-mathml")
                            n.after(i)
                        })
                    }
                    return n.html()
                }
            }
            t["a"] = d
        },
        qJBq: function(e, t) {
            (function() {
                var t, n, i
                i = []
                t = {}
                e.exports = n = function(e, n, a) {
                    var o, s, r, u, l, _, d, c, m
                    null == a && (a = true)
                    if ("string" === typeof n) {
                        if (2 !== n.length) throw {
                            name: "ArgumentException",
                            message: "The format for string options is '<thousands><decimal>' (exactly two characters)"
                        }
                        m = n[0], o = n[1]
                    } else if (Array.isArray(n)) {
                        if (2 !== n.length) throw {
                            name: "ArgumentException",
                            message: "The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"
                        }
                        m = n[0], o = n[1]
                    } else {
                        m = (null != n ? n.thousands : void 0) || (null != n ? n.group : void 0) || t.thousands
                        o = (null != n ? n.decimal : void 0) || t.decimal
                    }
                    d = "" + m + o + a
                    _ = i[d]
                    if (null == _) {
                        r = a ? 3 : 1
                        _ = i[d] = new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\" + m + "\\d{" + r + ",3})+)|\\d*))(?:\\" + o + "(\\d*))?\\s*$")
                    }
                    c = e.match(_)
                    if (!(null != c && 3 === c.length)) return NaN
                    u = c[1].replace(new RegExp("\\" + m, "g"), "")
                    s = c[2]
                    l = parseFloat(u + "." + s)
                    return l
                }
                e.exports.setOptions = function(e) {
                    var n, i
                    for (n in e) {
                        i = e[n]
                        t[n] = i
                    }
                }
                e.exports.factoryReset = function() {
                    t = {
                        thousands: ",",
                        decimal: "."
                    }
                }
                e.exports.withOptions = function(e, t) {
                    null == t && (t = true)
                    return function(i) {
                        return n(i, e, t)
                    }
                }
                e.exports.factoryReset()
            }).call(this)
        },
        tHpF: function(e, t, n) {
            "use strict"
            var i = n("ouhR")
            var a = n.n(i)
            n("VrN0")
            const o = {
                validate: /^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,
                key: /[a-zA-Z0-9_-]+|(?=\[\])/g,
                push: /^$/,
                fixed: /^\d+$/,
                named: /^[a-zA-Z0-9_-]+$/
            }
            const s = function(e, t, n) {
                e[t] = n
                return e
            }
            a.a.fn.toJSON = function() {
                let e = {},
                    t = {}
                const n = function(e, n) {
                    void 0 === t[e] && (t[e] = 0)
                    if (void 0 === n) return t[e]++
                    if (void 0 !== n && n > t[e]) return t[e] = ++n
                }
                a.a.each(a()(this).serializeForm(), (function() {
                    if (!o.validate.test(this.name)) return
                    let t, i = this.name.match(o.key),
                        r = this.value,
                        u = this.name
                    while (void 0 !== (t = i.pop())) {
                        u = u.replace(new RegExp("\\[" + t + "\\]$"), "")
                        if (t.match(o.push)) r = s([], n(u), r)
                        else if (t.match(o.fixed)) {
                            n(u, t)
                            r = s([], t, r)
                        } else t.match(o.named) && (r = s({}, t, r))
                    }
                    e = a.a.extend(true, e, r)
                }))
                return e
            }
        },
        w4it: function(e, t, n) {
            "use strict"
            var i = n("ouhR")
            var a = n.n(i)
            a()(".question select").bind("mousewheel", e => e.preventDefault())
        }
    }
])

//# sourceMappingURL=take_quiz-c-16b400f99b.js.map
